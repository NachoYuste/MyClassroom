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

  addClassroom(classroom: Classroom): Classroom[]{
    this.classrooms = this.getClassrooms();
    
    //Set classroom ID
    classroom.id = this.classrooms.length + 1;

    //Add classroom to DB
    this.classrooms.push (classroom);
    localStorage.setItem("classrooms", JSON.stringify(this.classrooms));

    return this.classrooms;
  }

  editClassroom(classroom: Classroom):Classroom{
    //Get classrooms
    this.classrooms = this.getClassrooms();
    
    //Edit classroom
    let updateClassroom = this.classrooms.find(update => update.id == classroom.id)!;
    let index = this.classrooms.indexOf(updateClassroom);
    this.classrooms[index] = classroom;

    //Update classrooms in DB
    localStorage.setItem("classrooms", JSON.stringify(this.classrooms));

    return classroom;
  }


  deleteClassroom(classroom: Classroom){
    //Get classrooms
    this.classrooms = this.getClassrooms();

    //Delet classroom in array
    let deletedClassroomList = this.classrooms.filter(update => update.id != classroom.id);
    localStorage.setItem("classrooms", JSON.stringify(deletedClassroomList));
  }

  //Student Service calls

  addStudent(student: Student, studenService: StudentService){
    studenService.addStudent(student);
  }

  editStudent(student: Student, name: string, email: string, dni: string, img: string,studentService: StudentService){
    studentService.editStudent(student);
  }

  deleteStudent(student: Student, studentService: StudentService){
    studentService.deleteStudent(student);
  }
}
