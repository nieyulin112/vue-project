import HomeRoute from './home.route.js';
import MessageRoute from './message.route.js';
import MyRoute from './my.route.js';
export default {
    ...HomeRoute,
    ...MessageRoute,
    ...MyRoute
};
