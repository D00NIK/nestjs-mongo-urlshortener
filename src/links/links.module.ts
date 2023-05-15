import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Link, LinkSchema } from 'src/schemas/link.schema';
import { LinksService } from './services/links/links.service';
import { LinksController } from './controllers/links/links.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Link.name, schema: LinkSchema }]),
  ],
  providers: [LinksService],
  controllers: [LinksController],
})
export class LinksModule {}
