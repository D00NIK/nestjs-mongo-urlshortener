import { Module } from '@nestjs/common';
import { LinksModule } from './links/links.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URL, {
      autoIndex: true,
    }),
    LinksModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
