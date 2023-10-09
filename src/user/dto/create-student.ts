import { Field, InputType } from '@nestjs/graphql';
import { IsDateString, IsOptional } from 'class-validator';
import { CreateUserInput } from './create-user.input';

@InputType()
export class CreateStudentInput extends CreateUserInput {
  @IsOptional()
  @Field({ nullable: true })
  address?: string;

  @IsOptional()
  @Field({ nullable: true })
  phone?: string;

  @IsOptional()
  @IsDateString()
  @Field({ nullable: true })
  birthday?: string;
}
