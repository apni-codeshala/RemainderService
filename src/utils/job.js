const cron = require('node-cron');

/**
 * 10:00am
 * Every 5 minutes
 * We will check there are pending emails which we expected to be sent by now and is pending
 */

const scheduleJobs = () => {
    cron.schedule(' */2 * * * *', async () => {
        const response = emailService.fetchPendingEmails();
        response.forEach((email) => {
            sender
        })
    })
}