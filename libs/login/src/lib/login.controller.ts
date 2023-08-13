import { Body, Controller, Get, HttpStatus, Param, Post, Query, Res } from '@nestjs/common';
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

  @Post('create-login')
  public async addUserLogin(@Body() body: any, @Res() res: any) {
    const userLogin = await this.loginService.createLoginUser(body);
    return userLogin;

  }

  @Get('get-login-user-by-id?:id')
  public async getLoginUserById(@Query('id') id: string) {
    console.log('loginUserId:', id);
    const loginUser = await this.loginService.getLoginUserById(id);
    console.log(loginUser);
    return loginUser == null ? { createNew: true } : loginUser;
  }

}

