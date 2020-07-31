let person = {
    firstName : 'Ivan',
    secondName : 'Ivanov',
    showData () {
        console.log(` Name: ${this.firstName},  Surname: ${this.secondName}`);
    }
};

// через assign

let newPerson = Object.assign({}, person);
newPerson.firstName = 'Petro';
newPerson.secondName = 'Petriv';
person.showData();
newPerson.showData();


// через for in

// let newPerson = {};
// for (const key in person) {
//     newPerson[key] = person[key]
// };
// newPerson.firstName = 'Petro';
// newPerson.secondName = 'Petriv';
// person.showData();
// newPerson.showData();