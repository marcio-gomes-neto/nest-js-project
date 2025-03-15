import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './app/user/user.module';

@Module({
  imports: [DatabaseModule.forRoot(), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
