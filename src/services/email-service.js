const sender = require('../config/emailConfig');

const sendBasicEmail = async (mailFrom, mailTo, mailSubject, mailBody) => {
    try {
        const response = await sender.sendMail({
            from: mailFrom,
            to: mailTo,
            subject: mailSubject,
            text: mailBody
        });
        console.log(response);
    } catch (error) {
        console.log('Something went wrong in email-service in sending mail');
        console.log(error);
    }
}

module.exports = {
    sendBasicEmail
}