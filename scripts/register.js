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
function Pet(name,age,gender,breed,service,type){
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

function isValid(thePet){
    let validation = true;
    inputName.classList.remove("error");
    inputAge.classList.remove("error");
    inputGender.classList.remove("error");
    inputBreed.classList.remove("error");
    inputService.classList.remove("error");
    inputType.classList.remove("error");

    if(thePet.name==""){
    if(thePet.age=="");
    if(thePet.gender=="");
    if(thePet.breed=="");
    if(thePet.service=="");
    if(thePet.type=="");
        
        //the pet is not valid
        validation=false;
        inputName.classList.add("error");
        inputAge.classList.add("error");
        inputGender.classList.add("error");
        inputBreed.classList.add("error");
        inputService.classList.add("error");
        inputType.classList.add("error");
    }
    return validation;
}

function register(){
        //get the values
    //create the new pet
    let newPet = new Pet(inputName.value, inputAge.value, inputGender.value, inputBreed.value, inputService.value, inputType.value)
    if(isValid(newPet)==true){
    

    //push the new pet
    petSalon.pets.push(newPet);
    
    displayTable();
    displayPetCards();
    reset();
    
    }
}

//clear form
function reset(){
    inputName.value="";
    inputAge.value="";
    inputGender.value="";
    inputBreed.value="";
    inputService.value="";
    inputType.value="";
    }

function init(){
    //create the pet objects
    let scooby = new Pet("Scooby", 84, "Male", "Dane", "Nail Trimming", "Cat");
    let scrappy = new Pet("Scrappy", 21, "Male", "Collie", "Nail Trimming", "Cat");
    let speedy = new Pet("Speedy", 49, "Female", "Hound", "Nail Trimming", "Cat");
    
    petSalon.pets.push(scooby,scrappy,speedy); //push the pets into the array
    displayPetCards();
    
    displayTable();

}

//waiting to render the html
window.onload = init; 

