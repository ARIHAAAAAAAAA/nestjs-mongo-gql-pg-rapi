import { Injectable } from '@nestjs/common';
import { CreateCatInput } from './dto/create-cat.input';
import { UpdateCatInput } from './dto/update-cat.input';
import { Cat, CatDocument } from './models/cats.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

// const catsArray: Cat[] = [
//   { id: 1, name: 'Fluffy', color: 'White', breed: 'Persian' },
//   { id: 2, name: 'Whiskers', color: 'Tabby', breed: 'Domestic Shorthair' },
//   { id: 3, name: 'Mittens', color: 'Black', breed: 'Siamese' },
//   { id: 4, name: 'Tiger', color: 'Orange', breed: 'Bengal' },
//   { id: 5, name: 'Shadow', color: 'Gray', breed: 'Maine Coon' },
// ];


@Injectable()
export class CatsService {
  constructor(@InjectModel(Cat.name) private catModel: Model<CatDocument>) { }
  create(createCatInput: CreateCatInput) {
    const newBook = new this.catModel(createCatInput);
        return newBook.save();
    
  }

  async findAll(): Promise<Cat[]>  {
    return this.catModel.find().exec();
  }

  async findOne(id: number):Promise<Cat>  {
    return this.catModel.findById(id).exec();
  }

  update(id: number, updateCatInput: UpdateCatInput) {
    return this.catModel.findByIdAndUpdate(id, updateCatInput, { new: true }).exec();
  }

  remove(id: number) {
    return this.catModel.findByIdAndDelete(id).exec();
  }
}
