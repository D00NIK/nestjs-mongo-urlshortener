import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Link } from 'src/schemas/link.schema';
import { CreateLinkDto } from 'src/links/dtos/CreateLink.dto';

@Injectable()
export class LinksService {
  constructor(@InjectModel(Link.name) private linkModel: Model<Link>) {}

  async create(createLinkDto: CreateLinkDto): Promise<void> {
    createLinkDto.urlTarget = new URL(createLinkDto.urlTarget);

    await new this.linkModel(createLinkDto).save();
  }

  async getTarget(urlName: string): Promise<string | undefined> {
    return (await this.linkModel.findOne({ urlName }))?.urlTarget;
  }
}
