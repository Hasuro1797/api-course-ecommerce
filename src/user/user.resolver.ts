import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { CreateStudentInput } from './dto/create-student';
import { Student } from './entities/student.entity';
import { Instructor } from './entities/instructor.entity';
import { CreateInstructorInput } from './dto/create-instructor';
// import { CreateStudentInput } from './dto/create-instructor';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) { }

  @Mutation(() => Student)
  createStudent(
    @Args('createStudentInput') createStudentInput: CreateStudentInput,
  ) {
    return this.userService.createStudent(createStudentInput);
  }

  @Mutation(() => Instructor)
  createInstructor(
    @Args('createInstructorInput') createInstructorInput: CreateInstructorInput,
  ) {
    return this.userService.createInstructor(createInstructorInput);
  }

  @Query(() => [User], { name: 'user' })
  findAll() {
    return this.userService.findAll();
  }

  @Query(() => User, { name: 'user' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.userService.findOne(id);
  }

  @Mutation(() => User)
  updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.userService.update(updateUserInput.id, updateUserInput);
  }

  @Mutation(() => User)
  removeUser(@Args('id', { type: () => Int }) id: number) {
    return this.userService.remove(id);
  }
}
