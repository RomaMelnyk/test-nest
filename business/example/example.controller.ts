import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ExampleService } from './example.service';
import { ExampleDto } from './example.dto';

@Controller()
export class ExampleController {
  constructor(private readonly exampleService: ExampleService) {}

  @Get()
  hello(@Query('name') name: string): string {
    return this.exampleService.sayHello(name);
  }

  @Post()
  data(@Body() body: ExampleDto) {
    return body;
  }
}
