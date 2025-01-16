import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './entities/user.entity';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports:[
    MongooseModule.forFeature([{name:"user",schema:UserSchema}]),
    ClientsModule.register([
      {
        name: 'COMMUNICATION',
        transport: Transport.TCP,
        options: { host: '127.0.0.1', port: 3001 }
      },
      {
        name: 'ANALYTICS',
        transport: Transport.TCP,
        options: { port: 3002 },
      },
    ]),
    UserModule,
  ],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
