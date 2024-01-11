import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  BadRequestException,
  UseGuards,
  UseInterceptors
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { CacheInterceptor, CacheTTL } from '@nestjs/cache-manager';
// import { Public } from 'src/auth/constants';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  // @Public()
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
  try {
   const user = this.usersService.createUser(createUserDto);
    return user;
  } catch (error) {
    throw new BadRequestException(error)
  }
  }

  @Get()
  // token
  // @Public()
// @UseGuards(AuthGuard)
  findAll() {
    try {
    return this.usersService.findAllUser();
    } catch (error) {
      throw new BadRequestException(error)
    }
  }

  @UseInterceptors(CacheInterceptor)
  @CacheTTL(3000)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  // @Get(':email')
  // findOneByEmail(@Param('email') email: string) {
  //   return this.usersService.findEmail(email);
  // }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    this.usersService.updateUser(+id, updateUserDto);
    return 'successfully updated';
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    this.usersService.removeUser(+id);
    return 'successfully updated';
  }
}
