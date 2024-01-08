import { Module } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatsResolver } from './cats.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Cat, CatSchema } from './models/cats.model';

@Module({
  providers: [CatsResolver, CatsService],
  imports: [MongooseModule.forFeature([
    {
        name: Cat.name,
        schema: CatSchema,
    },
]),
],
})
export class CatsModule {}
