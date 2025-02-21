import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength, Matches } from 'class-validator';

export class SignUpDto {
  @ApiProperty({ example: 'user@example.com', description: 'User email' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'John Doe', description: 'User name' })
  @IsString()
  @MinLength(3)
  name: string;

  @ApiProperty({
    example: 'Password123!',
    description:
      'User password (min 8 chars, 1 letter, 1 number, 1 special char)',
  })
  @IsString()
  @MinLength(8)
  @Matches(/(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/, {
    message:
      'Password must contain at least one letter, one number, and one special character',
  })
  password: string;
}
