import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity } from 'typeorm';
import { User } from './user.entity';

@Entity()
@ObjectType()
export class Student extends User {
  @Column()
  @Field()
  address: string;

  @Column()
  @Field()
  phone: string;
}
