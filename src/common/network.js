/**
 * 网络层
 *
 * create by zp
 */

import _axios from 'axios';
import qs from 'qs';
import Config from 'config';
import Crypto from 'crypto';
import Vue from 'vue';
import VueCookie from 'vue-cookie';

Vue.use(VueCookie);

const axios = _axios.create();

/**
 * 请求拦截器
 */
axios.interceptors.request.use(function(config) {
    Object.assign(config.headers, {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    });

    // 公共参数
    let data = qs.parse(config.data);

    Object.assign(data, {
        platform: 'pcweb',
        skey: Vue.cookie.get('skey'),
        broker_id: window.GLOBAL_PRIV ? Crypto.SHA256(GLOBAL_PRIV.broker_id.toString()).toString() : '',
        brokerId: window.GLOBAL_PRIV ? GLOBAL_PRIV.broker_id : '',
    });

    // 超时时间控制
    let time = 4000;

    if (Config.no_timeout.some(item => (config.url.indexOf(item) !== -1))) {
        time = 100000;
    }

    Object.assign(config, {
        withCredentials: false,
        transformRequest: params => qs.stringify(params),
        paramsSerializer: params => qs.stringify(params),
        timeout: time,
        data,
    });

    return config;
});

/**
 * 响应拦截器
 */
axios.interceptors.response.use(response => {
    if (response.data && response.data.status) {
        let code = response.data.status.code;
        if (code === '2620081') {
            location.href = '/login.html';
        }
        if (Config.exit_code.indexOf(code) !== -1) {
            // 弹出登出弹窗
            Vue.prototype.$toast(response.data.status.description, false);
        // console.log('需要登出');
        }
    }
    return response.data;
}, error => {
    return Promise.resolve({
        status: {
            code: 2,
            description: '老铁～当前网络有点不太稳定',
            error,
        },
    });
});

/**
 * 请求配置
 * @param  {Object} option [description]
 * @return {[type]}        [description]
 */
function getConfig(option = {}) {
    function getParams(args) {
        let params = args;

        delete (params.data);
        delete (params.host);
        delete (params.method);

        return params;
    }

    return Object.assign({
        method: option.method ? option.method.toUpperCase() : 'POST',
        baseURL: Config[option.host] || '',
        data: option.data,
    }, getParams(option));
}

function send(url, option) {
    return axios(url, getConfig(option));
}

function sendAll(options) {
    return axios.all(options.map(item => {
        return axios(item.url, getConfig(item));
    }));
}

export default function request(url, option) {
    if (typeof url === 'string') {
        return send(url, option);
    } else if (url instanceof Array) {
        return sendAll(url);
    } else if (typeof url === 'object') {
        let params = url;
        return send(params.url, params);
    }
}