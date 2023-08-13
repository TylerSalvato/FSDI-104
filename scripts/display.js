function displayPetCards(){
    //get the div from the HTML to display the pets
    const DIV = document.getElementById("pets");
    let card="";
    //travel the array petSalon.pets
    for(let i=0;i<petSalon.pets.length;i++){
        let pet = petSalon.pets[i];//getting every pet
    //create the card html
    card += `
    <div class="pet">
        <h5>Name: ${pet.name}</h5>
        <p>Age: ${pet.age}</p>
        <p>Gender: ${pet.gender}</p>
        <p>Breed: ${pet.breed}</p>
        <p>Service: ${pet.service}</p>
        <p>Type: ${pet.type}</p>
        <button class="btn btn-danger" onclick="deletePet${pet.id});">Delete</button>
    </div>
    `;
    
    }
    DIV.innerHTML=card;
    //disply the cards in the HTML
    displayNumberOfPets();
}

function displayNumberOfPets(){
    //select the HTML element
    let SUP = document.getElementById("numberPets");
    

    //display the updated value (*** .length)
    SUP.innerHTML = petSalon.pets.length;
}



function displayTable() {
    const tableBody = document.getElementById("petsList");

    let rows = "";

    for (let i = 0; i < petSalon.pets.length; i++) {
        let pet = petSalon.pets[i];
        rows += `
            <tr id="${pet.id}">
                <td scope="row">${pet.name}</td>
                <td>${pet.age}</td>
                <td>${pet.gender}</td>
                <td>${pet.breed}</td>
                <td>${pet.service}</td>
                <td>${pet.type}</td>
                <td><button class="btn btn-danger" onclick="deletePet(${pet.id});">Delete</button></td>
            </tr>
        `;
    }

    tableBody.innerHTML = rows;
}
