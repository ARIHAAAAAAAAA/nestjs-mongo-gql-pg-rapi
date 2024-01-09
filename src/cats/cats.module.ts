import { Module } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatsResolver } from './cats.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { CatSchema, CatMongo } from './mongo/catSchema';

@Module({
  providers: [CatsResolver, CatsService],
  imports: [
    MongooseModule.forFeature([
      {
        name: CatSchema.name,
        schema: CatMongo,
      },
    ]),
  ],
})
export class CatsModule {}
