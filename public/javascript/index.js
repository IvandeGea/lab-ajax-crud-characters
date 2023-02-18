const charactersAPI = new APIHandler('http://localhost:8000');
window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function () {
    charactersAPI.getFullList()
      .then(allCharacters => {
        const parentDiv = document.querySelector(".characters-container")
        const hiddenDivOnFetch = document.getElementsByClassName("character-info")
        allCharacters.forEach((character) => {
          let oneCharacter = document.createElement("div")
          oneCharacter.className = "character-info"
          //Mostrar nombre
          let newDivName = document.createElement("div")
          newDivName.classList.add("name")
          newDivName.innerHTML =
            `Name: ${character.name} 
          Occupation: ${character.occupation} 
          Cartoon: ${character.cartoon}
          Weapon: ${character.weapon}`
          oneCharacter.appendChild(newDivName)
          parentDiv.appendChild(oneCharacter)


        })
        hiddenDivOnFetch[0].style.display = "none"
      })
  });
  document.getElementById('fetch-one').addEventListener('click', function (event) {
    charactersAPI.getOneRegister()
      .then(one => {
        const parentDiv = document.querySelector(".characters-container")
        const hiddenDivOnFetch = document.getElementsByClassName("character-id")
        let oneCharacter = document.createElement("div")
        oneCharacter.className = "character-id"
        //Mostrar nombre
        let newDivName = document.createElement("div")
        newDivName.classList.add("name")
        newDivName.innerHTML =
          `Name: ${character.name} 
          Occupation: ${character.occupation} 
          Cartoon: ${character.cartoon}
          Weapon: ${character.weapon}`
        oneCharacter.appendChild(newDivName)
        parentDiv.appendChild(oneCharacter)

        hiddenDivOnFetch[0].style.display = "none"
      })

  });
  document
    .getElementById("delete-one")
    .addEventListener("click", function (event) {
      const characterId = document.querySelector(
        ".operation_delete input"
      ).value;
      charactersAPI
        .deleteCharacter(characterId)
        .then(() => {
          const btn = document.querySelector("#delete-one");
          btn.setAttribute("style", "background-color: green");
        })
        .catch((error) => {
          const btnErr = document.querySelector("#delete-one");
          btnErr.setAttribute("style", "background-color: red");
        });
    });
  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
  });
  document.getElementById('new-character-form').addEventListener('submit', function (event) {
  });
});
