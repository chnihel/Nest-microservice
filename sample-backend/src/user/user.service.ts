import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserRequest } from 'src/create-user-request.dto';
import { CreateUserEvent } from 'src/create-user.event';
import { ClientProxy } from '@nestjs/microservices';
import { UserModule } from './user.module';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  private readonly users: any[] = [];
  
    constructor(
      @Inject('COMMUNICATION') private readonly communicationClient: ClientProxy,
      @Inject('ANALYTICS') private readonly analyticsClient: ClientProxy,
      @InjectModel('user') private readonly userModule:Model<User>
    ) {}
  
    getHello(): string {
      return 'Hello World!';
    }
  
    createUser(createUserRequest: CreateUserDto) {
      const savedUser=new this.userModule(createUserRequest)
      savedUser.save()

      this.users.push(createUserRequest);
      this.communicationClient.emit('send_welcome_email', {
        email: createUserRequest.email,
      });
      this.communicationClient.emit(
        'user_created',
        new CreateUserEvent(createUserRequest.email),
      );
      this.analyticsClient.emit(
        'user_created',
        new CreateUserEvent(createUserRequest.email),
      );
    }
  
    getAnalytics() {
      return this.analyticsClient.send({ cmd: 'get_analytics' }, {});
    }
  }

