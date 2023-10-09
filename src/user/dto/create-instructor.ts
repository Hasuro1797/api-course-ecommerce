import { InputType, Field } from '@nestjs/graphql';
import { CreateUserInput } from './create-user.input';
import { IsOptional } from 'class-validator';

@InputType()
export class CreateInstructorInput extends CreateUserInput {
  @IsOptional()
  @Field({ nullable: true })
  specialty?: string;

  @IsOptional()
  @Field({ nullable: true })
  experience?: string;
}
