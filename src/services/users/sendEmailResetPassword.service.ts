import { Repository } from "typeorm";
import { AppError } from "../../errors/AppError"
import AppDataSource from "../../data-source";
import { User } from "../../entities";
import { randomUUID } from "node:crypto";
import { createTransport } from "nodemailer";
import Mailgen from "mailgen";

const sendEmailResetPasswordService = async (email: string) => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User);

    const user = await userRepository.findOneBy({ email: email })

    if (!user) {
        throw new AppError("user not found", 404)
    }

    const resetToken = randomUUID()

    const data = { reset_token: resetToken, reset_token_date: new Date() }

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
            link: 'http://localhost:5173'

        }
    })

    const emailContent = {
        body: {
            signature: false,
            greeting: false,
            title: `Ola, ${user.name}`,
            intro: 'Este email é para redefinição de senha , siga os passos abaixo',
            action: {
                instructions: 'Clique no botão para redefinir sua senha',
                button: {
                    color: '#4529E6',
                    text: 'Redefinir senha',
                    link: `http://localhost:5173/resetPassword/${resetToken}`
                }
            },
            outro: 'Se você não solicitou uma redefinição de senha, nenhuma outra ação será necessária de sua parte.'
        }
    };
    const emailBody = mailGenerator.generate(emailContent)

    const sendEmail = async () => {

        const trasnporter = createTransport({
            host: "smtp.gmail.com",
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS
            }
        })

        await trasnporter.sendMail({
            from: "motors@mail.com",
            to: user.email,
            subject: 'Recuperação de senha',
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