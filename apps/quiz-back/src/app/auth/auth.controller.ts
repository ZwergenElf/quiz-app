import {
    Body,
    Controller,
    Delete,
    Get,
    HttpStatus,
    Param,
    Post,
    Put,
    Res,
  } from '@nestjs/common';
import { AuthService } from './auth.service';
  @Controller('auth')
  export class AuthController {
    constructor(private authService: AuthService) {}
  
    @Post('/login')
    public async login(@Body() username: string, @Body() password: string) {
      const user = this.authService.login(username, password);

      if (!user) {
        return HttpStatus.BAD_REQUEST
      }
      return HttpStatus.OK;
    }
  }
  