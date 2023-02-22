import nodemailer from 'nodemailer'

const gMail = 'fbelen.andreozzi@gmail.com' //admin
const gPass = 'plekeriilfmbtpom'

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: gMail,
        pass: gPass
    }
});

export {transporter, gMail}