import { Injectable } from '@angular/core';
import { Classroom } from './classroom';

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

  addClassroom(classroom: Classroom){
    this.classrooms = this.getClassrooms();
    this.classrooms.push (classroom);
    localStorage.setItem("classrooms", JSON.stringify(this.classrooms));
  }
}
