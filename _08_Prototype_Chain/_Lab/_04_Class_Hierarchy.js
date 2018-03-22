function classHierarchy() {
    class Figure {
        constructor() {
            if (new.target === Figure) {
                throw new TypeError('Cannot do this!');
            }
        }
        toString() {
            let type = this.constructor.name;
            return type;
        }

    }

    class Circle extends Figure {
        constructor(radius) {
            super();
            this.radius = radius;
        }

        get area() {
            return Math.PI * this.radius * this.radius;
        }

        toString() {
            return super.toString() + ` - radius: ${this.radius}`;
        }
    }

    class Rectangle extends Figure {
        constructor(width, height) {
            super();
            this.width = width;
            this.height = height;
        }

        get area() {
            return this.width * this.height;
        }

        toString() {
            return super.toString() + ` - width: ${this.width}, height: ${this.height}`
        }
    }
    return {
        Figure,
        Circle,
        Rectangle
    }
}

let rect = new Rectangle(5, 6);
console.log(rect.toString());
console.log(rect.area);