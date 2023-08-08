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
    ]

}

//constructor
function Pet(name,age,gender,breed,service, type){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
    this.type=type;


}

function displayPetName(){
        const petsDiv = document.querySelector("#pets");
        for (let i = 0; i < petSalon.pets.length; i++) {
            petsDiv.innerHTML += `
            <li>${petSalon.pets[i].name}
            </li>`;
        }
}
//get the inputs
let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputGender = document.getElementById("txtGender");
let inputBreed = document.getElementById("txtBreed");
let inputService = document.getElementById("txtService");
let inputType = document.getElementById("txtType");

function register(){
        //get the values
    //create the new pet
    let newPet = new Pet(inputName.value, inputAge.value, inputGender.value, inputBreed.value, inputService.value, inputType.value)
    console.log(newPet);

    //push the new pet
    petSalon.pets.push(newPet);
    console.log(petSalon.pets);
}
function init(){
    //create the pet objects
    let scooby = new Pet("Scooby", 84, "Male", "Dane", "Nail Trimming", "Cat");
    let scrappy = new Pet("Scrappy", 21, "Male", "Collie", "Nail Trimming", "Cat");
    let speedy = new Pet("Speedy", 49, "Female", "Hound", "Nail Trimming", "Cat");
    console.log(scooby,scrappy,speedy);
    petSalon.pets.push(scooby,scrappy,speedy);
    console.log(petSalon.pets);

}

//waiting to render the html
window.onload = init; 

//clear form
function reset(){
document.getElementById("myForm");
}