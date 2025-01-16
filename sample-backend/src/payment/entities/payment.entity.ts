import { Prop, Schema } from "@nestjs/mongoose";
import { Document } from "mongoose";
@Schema()
export class Payment extends Document {
    @Prop()
    amount:number

}
