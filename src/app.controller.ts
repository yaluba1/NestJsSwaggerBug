import { Body, Controller, Post } from '@nestjs/common';
import { SampleDto } from './sample.dto.js';

@Controller()
export class AppController {
  constructor() {}

  @Post()
  repIssue(@Body() sampleDto: SampleDto): SampleDto {
    return sampleDto;
  }
}
