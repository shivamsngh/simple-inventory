import { Body, Controller, Get, Param, Post, Put, Query, UseFilters } from '@nestjs/common';
import { MongoExceptionFilter } from '../core/filters/mongo-exception.filter';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductService } from './product.service';

@Controller('product')
@UseFilters(MongoExceptionFilter)
export class ProductController {

    constructor(private productSvc: ProductService) { }

    /**
     * Get All product from DB
     * based on filter. At present supports
     * limit filter only.
     * @param {string} filter
     * @returns
     * @memberof ProductController
     */
    @Get('')
    getAllProducts(@Query('filter') filter: string) {
        console.log('get all hit')
        return this.productSvc.findAll(filter);
    }

    /**
     * Search Mongo DB based on name
     *
     * @param {string} term
     * @returns
     * @memberof ProductController
     */
    @Get('search')
    searchProduct(@Query('term') term: string) {
        console.log('search hit')
        return this.productSvc.findMatch(term);
    }

    /**
     * Get Product details based on ID
     *
     * @param {string} id
     * @returns
     * @memberof ProductController
     */
    @Get(':id')
    getProduct(@Param() id: string) {
        return this.productSvc.findById(id);
    }

    /**
     * Add new Product in DB
     *
     * @param {CreateProductDto} createProductDto
     * @returns
     * @memberof ProductController
     */
    @Post('')
    addProduct(@Body() createProductDto: CreateProductDto) {
        return this.productSvc.create(createProductDto);
    }

    /**
     * Update a product in DB
     *
     * @param {UpdateProductDto} updateProductDto
     * @returns
     * @memberof ProductController
     */
    @Put('')
    updateProduct(@Body() updateProductDto: UpdateProductDto) {
        return this.productSvc.update(updateProductDto);
    }
}
