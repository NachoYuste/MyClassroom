import { Student } from "./student";

export class Classroom {
    id: number;
    students: Student[];
    img: string;
    name: string;

    constructor(id: number, students: Student[], img: string, name: string){
        this.id = id
        this.students = students
        this.img = img
        this.name = name
    }
}
