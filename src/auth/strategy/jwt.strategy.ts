import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PrismaService } from '../../prisma/prisma.service';

type Payload = {
  sub: number; // id
  email: string;
  iat: number; // 1694211723 発行時間
  exp: number; // 1694816523 有効期限
};

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    readonly config: ConfigService,
    private readonly prisma: PrismaService,
  ) {
    super({
      // jwtFromRequest: ExtractJwt.fromExtractors([
      //   (req) => {
      //     console.log("きたー")
      //     let jwt = null;
      //     if (req && req.cookies) {
      //       console.log('req.cookies', req.cookies);
      //       jwt = req.cookies['access_token'];
      //     }
      //     return jwt;
      //   },
      // ]),
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false, // 有効期限が切れているものの無視を消す。
      secretOrKey: config.get('JWT_SECRET'),
    });
  }

  async validate(payload: Payload) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: payload.sub,
      },
    });
    delete user.hashedPassword;
    console.log(user);
    return user;
  }
}
