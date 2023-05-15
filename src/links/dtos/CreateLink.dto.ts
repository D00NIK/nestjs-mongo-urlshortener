import { IsNotEmpty } from 'class-validator';

export class CreateLinkDto {
  @IsNotEmpty()
  urlName: string;

  @IsNotEmpty()
  urlTarget: URL | string;
}
