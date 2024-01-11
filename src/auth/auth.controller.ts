import { Body, Controller, Post, HttpCode, HttpStatus, UseGuards, Get, Request, UseInterceptors } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CacheInterceptor } from '@nestjs/cache-manager';
// import { Public } from './constants';


@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @UseInterceptors(CacheInterceptor)
  // @Public()
  @Post('login')
  signIn(@Body() signInDto: Record<string, any>) {
    return this.authService.signIn(signInDto.email, signInDto.password);
  }
}