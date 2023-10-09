import { Field, InputType, PartialType } from '@nestjs/graphql';
import { CreateStudentInput } from './create-student';

@InputType()
export class UpdateStudentInput extends PartialType(CreateStudentInput) {
  @Field()
  id: string;
}
