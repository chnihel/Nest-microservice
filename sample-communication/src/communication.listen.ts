import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { EmailService } from './email.service';

@Controller()
export class CommunicationListener {
  constructor(private readonly emailService: EmailService) {}

  // Écouter l'événement 'send_welcome_email' pour envoyer un email
  /* @MessagePattern('send_welcome_email')
  async handleSendWelcomeEmail(user: { email: string; name: string }) {
    await this.emailService.sendEmail(user);
  } */
}
