import VueResource from 'vue-resource';
import Vue from 'vue';
Vue.use(VueResource);
const env = process.env.NODE_ENV;
Vue.http.options.crossOrigin = true;
Vue.http.options.xhr = {withCredentials: true};

function addMockToken (request) {
    request.params._token = ''
}

Vue.http.interceptors.push({
    request: (request) {
        request.headers = {
            token: '',
            ...request.headers,
            'Content-Type': 'application/json;charset=utf-8'
        };
        return request;
    },
    response: (response) {
        return response;
    }
});

// 获取url
function getUrl(url) {
    return url;
};
function install (Vue) {
    Vue.prototype.$getUrl = getUrl;
    Vue.getUrl = getUrl;
};
Vue.use(install);
export default getUrl;
