import { Repository } from "typeorm";
import { AppError } from "../../errors/AppError"
import AppDataSource from "../../data-source";
import { User } from "../../entities";
import { randomUUID } from "node:crypto";
import { createTransport } from "nodemailer";
import Mailgen from "mailgen";
import { log } from "node:console";

const sendEmailResetPasswordService = async (email: string) => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User);

    const user = await userRepository.findOneBy({ email: email })

    if (!user) {
        throw new AppError("user not found", 404)
    }

    const resetToken = randomUUID()

    const data = { reset_token: resetToken }

    const updatedUser = userRepository.create({
        ...user,
        ...data,
    });
    console.log(updatedUser);

    await userRepository.save(updatedUser);

    const mailGenerator = new Mailgen({
        theme: 'default',
        product: {
            name: 'Motors Company',
            link: 'http://localhost:3000'

        }
    })

    const emailContent = {
        body: {
            name: user.name,
            intro: 'You have received this email because a password reset request for your account was received.',
            action: {
                instructions: 'Click the button below to reset your password:',
                button: {
                    color: '#4529E6',
                    text: 'Reset your password',
                    link: `http://localhost:3000/resetPassword/${resetToken}`
                }
            },
            outro: 'If you did not request a password reset, no further action is required on your part.'
        }
    };
    const emailBody = mailGenerator.generate(emailContent)

    const sendEmail = async () => {
        console.log("asuidhasiudhasuidhsaiudhasiudsa");

        const trasnporter = createTransport({
            host: "smtp.gmail.com",
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS
            }
        })
        console.log("===============================================================");

        await trasnporter.sendMail({
            from: "lcs.rs23@gmail.com",
            to: user.email,
            subject: 'Recovery Password',
            html: emailBody
        }).then(() => {
            console.log("Email send with sucess")
        }).catch((err) => {
            console.log(err)
            throw new AppError("Error sending email, try again later", 500)
        })
    }
    sendEmail()
}

export default sendEmailResetPasswordService