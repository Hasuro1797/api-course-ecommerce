
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface CreateStudentInput {
    email: string;
    name: string;
    lastName: string;
    role?: Nullable<string>;
    address?: Nullable<string>;
    phone?: Nullable<string>;
    birthday?: Nullable<string>;
}

export interface CreateInstructorInput {
    email: string;
    name: string;
    lastName: string;
    role?: Nullable<string>;
    address?: Nullable<string>;
    phone?: Nullable<string>;
}

export interface UpdateUserInput {
    email?: Nullable<string>;
    name?: Nullable<string>;
    lastName?: Nullable<string>;
    role?: Nullable<string>;
    id: number;
}

export interface CreateAuthInput {
    exampleField: number;
}

export interface UpdateAuthInput {
    exampleField?: Nullable<number>;
    id: number;
}

export interface User {
    email: string;
    name: string;
    lastName: string;
    role: string;
}

export interface Student {
    email: string;
    name: string;
    lastName: string;
    role: string;
    address: string;
    phone: string;
}

export interface Instructor {
    email: string;
    name: string;
    lastName: string;
    role: string;
    specialty: string;
    birthday: string;
}

export interface Auth {
    exampleField: number;
}

export interface IQuery {
    user(id: number): User | Promise<User>;
    auth(id: number): Auth | Promise<Auth>;
}

export interface IMutation {
    createStudent(createStudentInput: CreateStudentInput): Student | Promise<Student>;
    createInstructor(createInstructorInput: CreateInstructorInput): Instructor | Promise<Instructor>;
    updateUser(updateUserInput: UpdateUserInput): User | Promise<User>;
    removeUser(id: number): User | Promise<User>;
    createAuth(createAuthInput: CreateAuthInput): Auth | Promise<Auth>;
    updateAuth(updateAuthInput: UpdateAuthInput): Auth | Promise<Auth>;
    removeAuth(id: number): Auth | Promise<Auth>;
}

type Nullable<T> = T | null;
