import { Injectable, BadRequestException } from '@nestjs/common';
// import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Student } from './entities/student.entity';
import { Not, Repository } from 'typeorm';
import { Instructor } from './entities/instructor.entity';
import { CreateStudentInput } from './dto/create-student';
import * as generator from 'generate-password';
import * as bcrypt from 'bcryptjs';
import { CreateInstructorInput } from './dto/create-instructor';
import { UserRole } from '../common/enums/role.enum';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
    @InjectRepository(Instructor)
    private readonly instructorRepository: Repository<Instructor>,
  ) { }

  async createStudent(createStudentInput: CreateStudentInput) {
    // console.log(createStudentInput);
    const password = await this.createPasswod(createStudentInput.email);
    const newUser = this.userRepository.create({
      ...createStudentInput,
      password,
    });
    // console.log('el new user', newUser);
    const newStudent = this.studentRepository.create({
      ...createStudentInput,
      password,
    });
    await this.userRepository.save(newUser);
    return await this.studentRepository.save(newStudent);
  }

  async createInstructor(createInstructorInput: CreateInstructorInput) {
    // console.log(createInstructorInput);
    const password = await this.createPasswod(createInstructorInput.email);
    const newUser = this.userRepository.create({
      ...createInstructorInput,
      password,
    });
    // console.log('el new user', newUser);
    const newInstructor = this.instructorRepository.create({
      ...createInstructorInput,
      password,
    });
    await this.userRepository.save(newUser);
    return await this.instructorRepository.save(newInstructor);
  }

  async findAllStudents() {
    return await this.userRepository.findBy({
      role: UserRole.STUDENT,
    });
  }
  async findAllInstructors() {
    return await this.userRepository.findBy({
      role: UserRole.INSTRUCTOR,
    });
  }

  async findOneUser(id: string) {
    const userFound = await this.userRepository.findOneBy({
      id,
    });
    if (!userFound) {
      throw new BadRequestException("This user doesn't exist");
    }
    if (userFound.role === UserRole.INSTRUCTOR) {
      return await this.instructorRepository.findOneBy({
        id,
      });
    }
    return await this.studentRepository.findOneBy({
      id,
    });
  }

  async updateStudent(id: string, updateUserInput: UpdateUserInput) {
    const userFound = await this.userRepository.findOneBy({
      id,
    });
    if (!userFound) {
      throw new BadRequestException("This user doesn't exist");
    }
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  private async createPasswod(email: string): Promise<string> {
    const emailFound = await this.userRepository.findOneBy({
      email,
    });
    if (emailFound) {
      throw new BadRequestException('This email already exist.');
    }
    const passwordGenerated = generator.generate({
      length: 10,
      numbers: true,
    });
    console.log('password:', passwordGenerated);
    const password = await bcrypt.hash(passwordGenerated, 10);
    return password;
  }
}
