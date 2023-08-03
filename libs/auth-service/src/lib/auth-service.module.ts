import { Module } from '@nestjs/common';
import { AuthService } from './auth-service.service';

@Module({
  controllers: [],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthServiceModule { }
