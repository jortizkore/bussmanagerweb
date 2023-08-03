import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { LoginService } from './login.service';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { AuthService } from '../../../auth-service/src/lib/auth-service.service';

@Controller('login')
export class LoginController {
  constructor(private loginService: LoginService, private authService: AuthService) { }

  @Post('login')
  public async logUser(@Body() body: any, @Res() res: any) {
    //console.log('hit');
    const { userName, password, isAdmin } = body;
    let loggedUser: any = {};
    loggedUser = !isAdmin ? await this.loginService.getLoginUser(userName, password) : await this.loginService.getAdminUser(userName, password);
    loggedUser.isAdmin = isAdmin;
    const token = await this.authService.createJwtToken(JSON.stringify(loggedUser));
    loggedUser.jwt = token;
    return loggedUser != null ? res.status(HttpStatus.OK).send(loggedUser) : res.status(HttpStatus.NOT_FOUND).send();
  }

}

