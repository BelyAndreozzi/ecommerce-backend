import * as dotenv from 'dotenv'
dotenv.config()

export const admin_email = process.env.NODEMAILER_ADMIN_EMAIL
export const admin_pass = process.env.NODEMAILER_ADMIN_PASS

