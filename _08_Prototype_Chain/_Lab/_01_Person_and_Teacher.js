function personAndTeacher() {
    class Person{
        constructor(name, email){
            this.name = name;
            this.email = email;
        }
    }
    class Teacher extends Person{
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }
    }
    return {Person, Teacher};
}
let person = new Person('Maria', 'maria@gmail.com');
console.log(person);
let teacher = new Teacher("Ivan", 'ivan@gmail.com', 'Java');
console.log(teacher);