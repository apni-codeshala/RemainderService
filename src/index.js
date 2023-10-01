const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');

const { sendBasicEmail } = require('./services/email-service');

const setUpAndStartServer = () => {

    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.listen(PORT, () => {
        console.log(`Server started running on port ${PORT}`);
    })

    // sendBasicEmail(
    //     "AirlineService <support@admin.com> ",
    //     'useremail@gmail.com',
    //     'This is a testing email',
    //     'Hey how are you, I thinl you like the support'
    // );

}

setUpAndStartServer();