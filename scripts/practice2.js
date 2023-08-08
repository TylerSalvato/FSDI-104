//object constructor 

function Student(name,age,email){
    this.name = name;
    this.age = age;
    this.email = email;
}

let student1 = new Student("Eduardo", 20, "eduardo@gmail.com");

console.log(student1);

let student2 = new Student("Tyler", 28, "tyler@gmail.com");

console.log(student2);


//object literal : 
//name, address, {}, tel, hours{open and closing}, pet[]

let petSalon = {
    name: "The fashion pet",
    tel: "555-777-9999",
    hours: {
        open:"9:00 am",
        close:"6:00 pm",
    },
    address: {
        city: "Leon",
        Street: "Leon Street",
        zip: 31000
    },
    pets: [
        {
            name:"scooby",
            age: 70,
            gender: "male",
            service: "Grooming", 

        },
        {
            name:"scrappy",
            age:50,
            gender:"male",
            service:"Nails cut",
        },
        {
            name:"speedy",
            age:50,
            gender:"male",
            service:"Nails cut",
        }
    ]

}

function displayPetName(){
        const petsDiv = document.querySelector("#pets");
        for (let i = 0; i < petSalon.pets.length; i++) {
            petsDiv.innerHTML += `
            <li>${petSalon.pets[i].name}
            </li>`;
        }
}

function init()
{
    displayPetName();

}

//waiting to render the html
window.onload = init; 