
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Product extends Document {

    @Prop({ required: true, unique: true,lowercase:true })
    name: string;

    @Prop()
    quantity: number;

    @Prop()
    costPrice: number;

    @Prop()
    sellingPrice: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
ProductSchema.set('toJSON', { virtuals: true });
ProductSchema.virtual('id')
    .get(function () {
        return this._id.toHexString();
    }); 