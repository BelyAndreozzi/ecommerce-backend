import nodemailer from 'nodemailer'
import { admin_email, admin_pass } from '../config/envConfig.js';

const gMail = admin_email
const gPass = admin_pass

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: gMail,
        pass: gPass
    }
});

export { transporter, gMail }