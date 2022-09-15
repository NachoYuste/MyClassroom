import { Component, OnInit } from '@angular/core';
import { Classroom } from 'src/app/models/classroom';
import { ClassroomService } from 'src/app/services/classroom.service';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.css']
})
export class ClassListComponent implements OnInit {

  classrooms: Classroom[];
  classroom: Classroom = new Classroom;

  constructor(public classroomService: ClassroomService) {
    this.classrooms = classroomService.getClassrooms();
  }

  addClassroom(){
    //Set classroom ID
    this.classroom.id = this.classrooms.length + 1;

    //Add classroom
    this.classroomService.addClassroom(this.classroom);
  }

  editClassroom(){
    this.classroom = this.classroomService.editClassroom(this.classroom);
  }

  deleteClassroom(){
    this.classroomService.deleteClassroom(this.classroom);
  }
  
  ngOnInit(): void {
  }

}
