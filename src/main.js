import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import routes from './routes';
// 样式的导入
import 'vux/src/styles/index';
const FastClick = require('fastclick');
FastClick.attach(document.body);

Vue.use(VueRouter);

const router = new VueRouter({
    history: false,
    saveScrollPosition: true
});

router.map(routes);
router.start(App, '#app');
window.router = router;
