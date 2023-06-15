// import { Injectable } from '@nestjs/common';
// import { authenticator } from 'otplib';
// import User from '../../users/user.entity';
// import { UsersService } from '../../users/users.service';

// @Injectable()
// export class TwoFactorAuthenticationService {
//   constructor (
//     private readonly usersService: UsersService,
//     private readonly configService: ConfigService
//   ) {}

//   public async generateTwoFactorAuthenticationSecret(user: User) {
//     const secret = authenticator.generateSecret();

//     const otpauthUrl = authenticator.keyuri(user.email, this.configService.get('TWO_FACTOR_AUTHENTICATION_APP_NAME'), secret);

//     await this.usersService.setTwoFactorAuthenticationSecret(secret, user.id);

//     return {
//       secret,
//       otpauthUrl
//     }
//   }
// }