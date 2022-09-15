import { Injectable } from '@angular/core';
import { Student } from '../models/student';
import { ClassroomService } from './classroom.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  students: Student[] = [];
  constructor(public classroomService: ClassroomService) { }


  editStudent(student: Student): Student{
  
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

  addStudent(student: Student): Student[]{

    //Add student id
    let studentsList = this.getStudents();
    student.id = studentsList.length + 1;

    //Add student to classroom
    let classroom = this.classroomService.getClassroom(student.classroomID);
    classroom.students.push(student);
    this.classroomService.editClassroom(classroom);

    //Add studen to BD
    studentsList.push(student);
    localStorage.setItem("students", JSON.stringify(this.students));

    return studentsList;
  }
}
