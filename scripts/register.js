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