import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, DeleteDateColumn } from 'typeorm';
import { User } from './user.entity';

@Entity()
@ObjectType()
export class Instructor extends User {
  @Column()
  @Field()
  specialty: string;

  @Field()
  @Column()
  birthday: string;

  @DeleteDateColumn()
  deleteAt: Date;
}
