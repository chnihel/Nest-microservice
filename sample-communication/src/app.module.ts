import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { CommunicationListener } from './communication.listen';
import { EmailService } from './email.service';
import { ClientsModule, Transport } from '@nestjs/microservices';


@Module({
  imports: [MailerModule.forRoot({
    transport: {  
      host: 'sandbox.smtp.mailtrap.io',  
      port: Number('2525'),  
      secure: false,  
      auth: {  
        user: 'f2913a610090bf',  
        pass: '57d8dd3a3802d6',  
      },  
    },  
  }),
  ClientsModule.register([
    {
      name: 'COMMUNICATION',
      
    },
  ]),
],
  controllers: [AppController,CommunicationListener],
  providers: [AppService,EmailService],
})
export class AppModule {}
