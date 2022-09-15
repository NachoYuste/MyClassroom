import { Injectable } from '@angular/core';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  students: Student[] = [];
  constructor() { }


  editStudent(student: Student, name: string, email: string, dni: string, img: string): Student{
    student.name = name;
    student.email = email;
    student.dni = dni;
    student.img = img;

    this.students = this.getStudents();

    let updateStudent = this.students.find(update => update.id == student.id)!;
    let index = this.students.indexOf(updateStudent);
    this.students[index] = student;

    localStorage.setItem("students", JSON.stringify(this.students));

    return student;
  }

  deleteStudent(student: Student){
    this.students = this.getStudents();

    let deletedStudentList = this.students.filter(update => update.id != student.id);
    localStorage.setItem("students", JSON.stringify(deletedStudentList));
  }


  getStudents(): Student[]{
    if (localStorage.getItem("students")!=undefined){
      this.students = JSON.parse(localStorage.getItem("students")!);
    } else{
      localStorage.setItem("students", JSON.stringify(this.students))
    }
    return this.students;
  }

  getStudent(id: number): Student{
    this.students = this.getStudents();
    return this.students.find(student => student.id == id)!;

  }

  addStudent(student: Student){
    this.students = this.getStudents();
    this.students.push(student);
    localStorage.setItem("students", JSON.stringify(this.students));

  }
}
