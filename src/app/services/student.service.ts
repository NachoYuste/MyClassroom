import { Injectable } from '@angular/core';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  students: Student[] = [];
  constructor() { }



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
