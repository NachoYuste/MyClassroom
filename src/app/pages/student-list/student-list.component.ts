import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/models/student';
import { ClassroomService } from 'src/app/services/classroom.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students: Student[];
  @Input() student: Student = new Student;
  classroomID: number;

  constructor(public studentService: StudentService, public classroomService: ClassroomService, route: ActivatedRoute) {
    this.students = studentService.getStudents();
    this.classroomID = parseInt(route.snapshot.paramMap.get('id')!);

   }

  addStudent(){
    this.student.classroomID = this.classroomID;
    this.students = this.studentService.addStudent(this.student);
  }

  editStudent(){
    this.student = this.studentService.editStudent(this.student);
  }

  deleteStudent(){
    this.studentService.deleteStudent(this.student);
  }

  ngOnInit(): void {
  }

}
