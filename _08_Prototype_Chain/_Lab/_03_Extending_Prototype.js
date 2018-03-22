class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    toString() {
        let className = this.constructor.name;
        return `${className} (name: ${this.name}, email: ${this.email})`
    }
}

class Teacher extends Person {
    constructor(name, email, subject) {
        super(name, email);
        this.subject = subject;
    }

    toString() {
        let base = super.toString().slice(0, -1);
        return `${base}, subject: ${this.subject})`
    }
}

class Student extends Person {
    constructor(name, email, course) {
        super(name, email);
        this.course = course;
    }

    toString() {
        let base = super.toString().slice(0, -1);
        return `${base}, course: ${this.course})`
    }
}
let person = new Person("Maria", "maria@gmail.com");
let student = new Student("Ana", "ana@mail.ru", 3);

function extendPrototype(Class) {
    Class.prototype.species = "Human";
    Class.prototype.toSpeciesString = function () {
        return `I am a ${this.species}. ${this.toString()}`;
    }
}


extendPrototype(Person);
//person.species='Koala';
console.log(person.toSpeciesString());
