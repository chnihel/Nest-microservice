import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import Stripe from 'stripe';

@Injectable()
export class PaymentService {
  private stripe:Stripe;
  constructor(){
    this.stripe=new Stripe('',{
      apiVersion:'2020-08-27' as any,
    })
  }
 async createPayment():Promise<any>{
  try {
    const session=await this.stripe.checkout.sessions.create({
      payment_method_types:['card'],
      line_items:[
        {
          price_data:{
            currency:'usd',
            product_data:{
              name:'Product simple'
            },
            unit_amount:2000,
          },
          quantity:1
        }
      ],
      mode: 'payment',
      success_url: 'http://localhost:3000/payment/success',
      cancel_url: 'http://localhost:3000/payment/cancel',
    })
    return session;
    
  } catch (error) {
    console.error('Error creating checkout session:', error);
      throw new HttpException(
        'Unable to create checkout session',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    
  }
 }
  
}
