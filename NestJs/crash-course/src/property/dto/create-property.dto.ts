
import { IsString, IsEmail, MinLength } from 'class-validator';

export class CreatePropertyDto {
  @IsString({ message: 'Name must be a string' })
  @MinLength(6)
  name: string;

  @IsString()
 @MinLength(20)

  description: string;

  @MinLength(6)
  price: number;
}