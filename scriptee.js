class input {
constructor(name, age) {
this.name = name;
this.age = age;
}
display() {
console.log(`User name: ${this.name}Age: ${this.age}`);

    }
}

function get() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;

    const user1 = new input(name, age);
    user1.display();

    document.getElementById('name').value = "";
    document.getElementById('age').value = "";

    
}
