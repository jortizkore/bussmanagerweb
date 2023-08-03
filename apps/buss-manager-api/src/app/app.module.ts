import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PartnerController, PartnerService } from '@buss-manager-web/partner';
import { BussinessController, BussinessService } from '@buss-manager-web/bussiness';
import { JwtModule } from '@nestjs/jwt'
import { environment } from '../../../../environments/environment';
import { LoginController, LoginService } from '@buss-manager-web/login';
import { AuthService } from '@buss-manager-web/auth-service';



@Module({
  imports: [
    JwtModule.register({
      secret: environment.jwtSecret, // Replace with your own secret key
      signOptions: {
        expiresIn: environment.jwtExpiryTime, // Token expiration time (optional)
      },
    }),
  ],
  controllers: [AppController, PartnerController, BussinessController, LoginController],
  providers: [AppService, PartnerService, BussinessService, LoginService, AuthService],
})
export class AppModule { }
