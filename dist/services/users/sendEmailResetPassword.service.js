"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AppError_1 = require("../../errors/AppError");
const data_source_1 = __importDefault(require("../../data-source"));
const entities_1 = require("../../entities");
const node_crypto_1 = require("node:crypto");
const nodemailer_1 = require("nodemailer");
const mailgen_1 = __importDefault(require("mailgen"));
const sendEmailResetPasswordService = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepository = data_source_1.default.getRepository(entities_1.User);
    const user = yield userRepository.findOneBy({ email: email });
    if (!user) {
        throw new AppError_1.AppError("user not found", 404);
    }
    const resetToken = (0, node_crypto_1.randomUUID)();
    const data = { reset_token: resetToken, reset_token_date: new Date() };
    const updatedUser = userRepository.create(Object.assign(Object.assign({}, user), data));
    console.log(updatedUser);
    yield userRepository.save(updatedUser);
    const mailGenerator = new mailgen_1.default({
        theme: 'default',
        product: {
            name: 'Motors Company',
            link: 'http://localhost:5173'
        }
    });
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
    const emailBody = mailGenerator.generate(emailContent);
    const sendEmail = () => __awaiter(void 0, void 0, void 0, function* () {
        const trasnporter = (0, nodemailer_1.createTransport)({
            host: "smtp.gmail.com",
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS
            }
        });
        yield trasnporter.sendMail({
            from: "motors@mail.com",
            to: user.email,
            subject: 'Recuperação de senha',
            html: emailBody
        }).then(() => {
            console.log("Email send with sucess");
        }).catch((err) => {
            console.log(err);
            throw new AppError_1.AppError("Error sending email, try again later", 500);
        });
    });
    sendEmail();
});
exports.default = sendEmailResetPasswordService;
