import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './product.schema';

@Injectable()
export class ProductService {
    constructor(@InjectModel(Product.name) private productModel: Model<Product>) { }

    async create(createProductDto: CreateProductDto): Promise<Product> {
            const createdProduct = new this.productModel(createProductDto);
            return createdProduct.save();
    }

    async update(updateProductDto: UpdateProductDto): Promise<any> {
        try {
            await this.productModel.updateOne({_id: updateProductDto.id}, {
                name: updateProductDto.name,
                costPrice: updateProductDto.costPrice,
                sellingPrice: updateProductDto.sellingPrice,
                quantity: updateProductDto.quantity
            }).exec();
            return {message:'Update Successful'};
        } catch (error) {
            throw new HttpException({ status: HttpStatus.NOT_ACCEPTABLE, error: error.message || error }, HttpStatus.NOT_ACCEPTABLE);
        }
    }

    async findAll(filter?:string): Promise<Product[]> {
        const lim = filter==='recent' || !filter ?  10 : +filter;
        return this.productModel.find().sort({createdAt: -1}).limit(lim).exec();
    }

    async findById(id: string): Promise<Product> {
        return this.productModel.findOne({ _id: id }).exec();
    }

    async findMatch(term): Promise<Product[]> {
        console.log('reg ex term', new RegExp(term));
        return this.productModel.find({name: new RegExp(term)}).collation( { locale: 'en', strength: 2 } ).exec();
    }
}
