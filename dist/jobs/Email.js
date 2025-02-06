"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Email = void 0;
const jobScheduler = require("node-schedule");
//import { NodeMailer } from '../utils/NodeMailer';
class Email {
    static runEmailJobs() {
        this.newsletterJob();
    }
    static newsletterJob() {
        const rule = new jobScheduler.RecurrenceRule();
        rule.second = 5;
        rule.second = new jobScheduler.Range(0, 59, 5);
        // jobScheduler.scheduleJob('News Letter', ',* * * * * *',()=>{
        //     console.log('News letter schduler')
        // })
        jobScheduler.scheduleJob('News Letter', rule, () => {
            console.log('News letter schduler');
            // NodeMailer.sendMail({
            //     to:['tshivhulas.p3@gmail.com'],
            //     subject: 'test mail sent',
            //     html:`<test mail sent,check>`
            // })
        });
    }
}
exports.Email = Email;
