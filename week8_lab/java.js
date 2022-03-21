
function Cat(name, age) {
    this.name = name;
    this.age = age;
    this.image_alt = "this is a cat";
    this.image = "cat.jpg";
  }

function Dog(name, age) {
    this.name = name;
    this.age = age;
    this.image_alt = "this is a dog";
    this.image = "dog.jpg";
}

function Giraffe(name, age) {
    this.name = name;
    this.age = age;
    this.image_alt = "this is a giraffe";
    this.image = "giraffe.jpg";
}

let cat1 = new Cat('', 0)
let dog1 = new Dog('', 0)
let giraffe1 = new Giraffe('', 0)

const animals = [cat1, dog1, giraffe1]
const names = ["Jerry", "Mittens", "Ben"]

function generateRandomIndex(maxIndex){
    return Math.floor(Math.random() * maxIndex)
}

function generateRandomName(){
    let index = generateRandomIndex(3);
    return names[index];
}

function generateRandomAge() {
    return generateRandomIndex(10);
}

function generateRandomAnimal() {
    let index = generateRandomIndex(3);
    let animal = animals[index];
    if (animal instanceof Cat){
        return new Cat(generateRandomName(),generateRandomAge())
    }
    else if (animal instanceof Dog){
        return new Dog(generateRandomName(),generateRandomAge())
    }
    else if (animal instanceof Giraffe){
        return new Giraffe(generateRandomName(),generateRandomAge())
    }
}

function onLoad() {
    var animal = generateRandomAnimal();
    let image = document.querySelector('img')
    image.src = animal.image
    let name = document.querySelector('h1')
    let age = document.querySelector('h2')
    name.textContent = animal.name
    age.textContent = animal.age + ' years old'
  }