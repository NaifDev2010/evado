'use strict';

// set NODE_ENV=development
// node console/install

const Application = require('../Application');
const Console = require('evado/console/Console');
const instance = new Console({Application});
const params = Console.parseProcessArguments();

(async () => {
    try {
        await instance.execute(async () => {
            await instance.clearAll();
            await instance.deployAssets(params);
            await instance.createUsers();
            await instance.createSecurity();
            await instance.createTasks();
            await instance.createNotices();
            await instance.createEventHandlers();
            await instance.createListeners();
        });
    } catch (err) {
        console.error(err);
    }
    process.exit();
})();