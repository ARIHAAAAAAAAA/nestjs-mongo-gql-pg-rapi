import { Injectable } from '@nestjs/common';
import { CatInput } from './dto/create-cat.input';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UpdateCatInput } from './dto/update-cat.input';
import { CatSchema } from './mongo/catSchema';

@Injectable()
export class CatsService {
  constructor(
    @InjectModel(CatSchema.name) private catModel: Model<CatSchema>,
  ) {}

  async create(createCatInput: CatInput): Promise<CatSchema> {
    const newCat = new this.catModel(createCatInput);
    console.log('newCat', newCat);
    return newCat.save();
  }

  async findAll(): Promise<CatSchema[]> {
    return this.catModel.find().exec();
  }

  async findOne(id: number): Promise<CatSchema> {
    return this.catModel.findById(id).exec();
  }

  update(id: string, updateCatInput: UpdateCatInput) {
    return this.catModel
      .findByIdAndUpdate(id, updateCatInput, { new: true })
      .exec();
  }

  remove(id: number) {
    return this.catModel.findByIdAndDelete(id).exec();
  }
}
