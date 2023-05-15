import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  Res,
  UseFilters,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Response } from 'express';
import { CreateLinkDto } from 'src/links/dtos/CreateLink.dto';
import { LinksService } from 'src/links/services/links/links.service';
import { MongoExceptionFilter } from 'src/utils/mongo-exception.filter';
import { TypeExceptionFilter } from 'src/utils/type-exception.filter';

@Controller()
export class LinksController {
  constructor(private readonly linkService: LinksService) {}

  @Post()
  @UseFilters(TypeExceptionFilter, MongoExceptionFilter)
  @UsePipes(new ValidationPipe({ whitelist: true }))
  async createLink(@Body() createLinkDto: CreateLinkDto) {
    return await this.linkService.create(createLinkDto);
  }

  @Get(':urlName')
  async getLink(@Param('urlName') urlName: string, @Res() res: Response) {
    const link = await this.linkService.getTarget(urlName);

    if (link) return res.redirect(link);
    throw new NotFoundException('Link not found.');
  }
}
