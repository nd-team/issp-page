const Router = require('koa-router');
const path = require('path');
const sendfile = require('koa-sendfile');

module.exports = function () {
    const router = new Router();
    router.get('/index.html', function *() {
        yield sendfile(this, path.resolve('pages/activity/activity_index.html'));
    })
    return router;
};