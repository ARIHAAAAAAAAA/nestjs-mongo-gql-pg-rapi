import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CatsService } from './cats.service';
import { CatType } from './models/cats.model';
import { CatInput } from './dto/create-cat.input';
import { UpdateCatInput } from './dto/update-cat.input';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
// import { Public } from 'src/auth/constants';

@Resolver(() => CatType)
export class CatsResolver {
  constructor(private readonly catsService: CatsService) {}
  // @Public()
  @Mutation(() => CatType)
  createCat(@Args('createCatInput') createCatInput: CatInput) {
    return this.catsService.create(createCatInput);
  }
  // @UseGuards(AuthGuard)
  @Query(() => [CatType], { name: 'cats' })
  async findAll(): Promise<CatType[]> {
    return this.catsService.findAll();
  }

  @Query(() => CatType, { name: 'cat' })
  async findOne(@Args('id', { type: () => Int }) id: number): Promise<CatType> {
    return this.catsService.findOne(id);
  }

  @Mutation(() => CatType)
  updateCat(@Args('updateCatInput') updateCatInput: UpdateCatInput) {
    return this.catsService.update(updateCatInput._id, updateCatInput);
  }

  @Mutation(() => CatType)
  removeCat(@Args('id', { type: () => Int }) id: number) {
    return this.catsService.remove(id);
  }
}
