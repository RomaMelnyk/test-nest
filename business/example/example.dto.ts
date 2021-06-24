import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId, IsDate, IsString } from 'class-validator';

export class ExampleDto {
  @ApiProperty({ example: '603f833b83e6b73a9ecae633' })
  @IsMongoId()
  readonly _id: string;

  @IsDate()
  readonly date: Date;

  @IsString()
  readonly note: string;
}
