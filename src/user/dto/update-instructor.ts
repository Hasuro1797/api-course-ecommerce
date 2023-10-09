import { Field, InputType, PartialType } from '@nestjs/graphql';
import { CreateInstructorInput } from './create-instructor';

@InputType()
export class UpdateInstructorInput extends PartialType(CreateInstructorInput) {
  @Field()
  id: string;
}
