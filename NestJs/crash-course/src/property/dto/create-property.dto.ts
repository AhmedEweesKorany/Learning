
import { IsString, IsEmail, MinLength, MaxLength, IsNumber } from 'class-validator';

export class CreatePropertyDto {
  @IsString({ message: 'Name must be a string' })
  @MinLength(3)
  name: string;

  @IsString()
 @MinLength(20)

  description: string;

  @IsNumber()
  price: number;
} 