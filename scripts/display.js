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
    let table = document.getElementById("table");
    let tblBody = document.getElementById("tbody");

    for (let i = 0; i < 2; i++) {
        let row = document.createElement("tr");

        for (let j = 0; j < 2; j++) {
            let cell = document.createElement("td");
            let cellText = document.createTextNode(`Cell in row ${i}, column ${j}`);
            //cell.appendChild(cellText);//
            //row.appendChild(cell);//
        }
        //tblBody.appendChild(row);//
    }

    //table.appendChild(tblBody);//

    //table.setAttribute("border", "2");//
}

function displayPetCards() {
    const tableBody = document.querySelector(".table tbody");

    let rows = "";

    for (let i = 0; i < petSalon.pets.length; i++) {
        let pet = petSalon.pets[i];
        rows += `
            <tr>
                <th scope="row">${pet.name}</th>
                <td>${pet.age}</td>
                <td>${pet.gender}</td>
                <td>${pet.breed}</td>
                <td>${pet.service}</td>
                <td>${pet.type}</td>
            </tr>
        `;
    }

    tableBody.innerHTML = rows;
}
