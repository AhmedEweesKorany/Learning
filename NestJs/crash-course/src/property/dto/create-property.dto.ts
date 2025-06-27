
import { IsString, IsEmail, MinLength } from 'class-validator';

export class CreatePropertyDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @MinLength(6)
  password: string;
}