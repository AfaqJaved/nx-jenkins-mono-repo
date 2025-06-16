import { Injectable } from '@nestjs/common';
import { core } from '@project/core';
@Injectable()
export class AppService {
  getHello(): string {
    return core as string;
  }
}
