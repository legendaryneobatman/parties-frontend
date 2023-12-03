import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { AuthService, ISignInResponse } from './auth.service';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiProperty,
  ApiResponse,
} from '@nestjs/swagger';

class TokenResponse {
  @ApiProperty({ type: String })
  token: string;
}

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @ApiOperation({ summary: 'Get token' })
  @ApiResponse({
    status: 200,
    description: 'Token generated successfully',
    type: TokenResponse,
  })
  @ApiBearerAuth()
  @Post('/sign-in')
  login(@Body() userDto: CreateUserDto) {
    return this.authService.signIn(userDto);
  }

  @Post('/sign-up')
  registration(@Body() userDto: CreateUserDto) {
    return this.authService.signUp(userDto);
  }
}
