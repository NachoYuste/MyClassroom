import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students: Student[];
  student: Student = new Student;
  classroomID: number;
  constructor(public studentService: StudentService, route: ActivatedRoute) {
    this.students = studentService.getStudents();
    this.classroomID = parseInt(route.snapshot.paramMap.get('id')!);

   }

  addStudent(){
    this.student.id = this.students.length + 1;
    this.student.classroomID = this.classroomID;

    this.studentService.addStudent(this.student);
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
