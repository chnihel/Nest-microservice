import { Inject, Injectable } from "@nestjs/common";
import { MailerService } from '@nestjs-modules/mailer';
import { ClientProxy } from "@nestjs/microservices";


@Injectable()
export class EmailService{
   /*  constructor(private readonly mailterService:MailerService,
    @Inject('COMMUNICATION') private readonly communicationClient:ClientProxy
    ){}
    async sendEmail(user:{email:string,name:string}){
        const {email,name}=user;
        const subject = 'Bienvenue sur notre plateforme';
        const body = `Bonjour ${email},\n\nBienvenue sur notre plateforme !\n\nCordialement,`;

        await this.mailterService.sendMail({
            to:email,
            subject,
            text:body
        })
        console.log('email envoyer')
} */
}