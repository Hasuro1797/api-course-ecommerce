import { ObjectType, Field } from '@nestjs/graphql';
import { UserRole } from '../../common/enums/role.enum';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
@ObjectType()
export class User {
  @PrimaryColumn({ type: 'uuid' })
  @Field()
  id: string;

  @Column({ unique: true })
  @Field()
  email: string;

  @Column()
  password: string;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  lastName: string;

  @Column({ default: UserRole.STUDENT, type: 'enum', enum: UserRole })
  @Field({})
  role?: UserRole;
  // @Column({
  //   type: 'enum',
  //   enum: UserRole,
  //   array: true,
  //   default: [UserRole.STUDENT],
  //   nullable: false,
  // })
  // @Field(() => [UserRole])
  // roles: UserRole[];
}
