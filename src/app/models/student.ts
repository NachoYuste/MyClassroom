export class Student {
    id: number;
    classroom: number;
    name: string;
    email: string;
    dni: string;
    img: string;

    constructor(id: number, classroom: number, name: string, email: string, dni: string, img: string){
        this.id = id;
        this.classroom = classroom;
        this.name = name;
        this.email = email;
        this.dni = dni;
        this.img = img;
    }

}