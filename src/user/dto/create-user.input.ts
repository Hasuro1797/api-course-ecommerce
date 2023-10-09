import { InputType, Field } from '@nestjs/graphql';
import { Transform } from 'class-transformer';
import { Equals, IsEmail, IsNotEmpty, IsOptional } from 'class-validator';
import { UserRole } from '../../common/enums/role.enum';

@InputType()
export class CreateUserInput {
  @IsNotEmpty({ message: 'El email no debe estar vacío' })
  @IsEmail()
  @Field()
  email: string;

  @IsNotEmpty({ message: 'El nombre no debe estar vacío' })
  @Transform(({ value }) => value.trim())
  @Field()
  name: string;

  @IsNotEmpty({ message: 'El apellido no debe estar vacío' })
  @Transform(({ value }) => value.trim())
  @Field()
  lastName: string;

  @IsOptional()
  @Equals(UserRole.ADMIN || UserRole.INSTRUCTOR || UserRole.STUDENT, {
    message: 'Debe ser un role válido.',
  })
  @Field({ nullable: true })
  role?: UserRole;
}
