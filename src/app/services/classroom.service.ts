import { Injectable } from '@angular/core';
import { Classroom } from '../models/classroom';
import { Student } from '../models/student';
import { StudentService } from './student.service';

@Injectable({
  providedIn: 'root'
})
export class ClassroomService {

  classrooms: Classroom[] = [];
  constructor() { }

  editClassroom(classroom: Classroom, name: string, img: string):Classroom{
    classroom.name = name;
    classroom.img = img;

    //Get classrooms
    this.classrooms = this.getClassrooms();

    //Edit classroom
    let updateClassroom = this.classrooms.find(updateClassrrom => updateClassrrom.id == classroom.id)!;
    let index = this.classrooms.indexOf(updateClassroom);
    this.classrooms[index] = classroom;

    //Update classrooms in local storage
    localStorage.setItem("classrooms", JSON.stringify(this.classrooms));

    return classroom;
  }

  getClassrooms(): Classroom[] {
    if (localStorage.getItem("classrooms")!= undefined){
      this.classrooms = JSON.parse(localStorage.getItem("classrooms")!);
    } else {
      localStorage.setItem("classrooms", JSON.stringify(this.classrooms));
    }
    return this.classrooms;
  }

  getClassroom(id: number): Classroom {
    this.classrooms = this.getClassrooms();
    return this.classrooms.find(classroom => classroom.id == id)!;
  }

  addClassroom(classroom: Classroom){
    this.classrooms = this.getClassrooms();
    this.classrooms.push (classroom);
    localStorage.setItem("classrooms", JSON.stringify(this.classrooms));
  }

  //Student Service calls

  addStudent(student: Student, studenService: StudentService){
    studenService.addStudent(student);
  }

  editStudent(student: Student, studentService: StudentService){
    studentService.editStudent(student);
  }

  deleteStudent(student: Student, studentService: StudentService){
    studentService.delete(student);
  }
}