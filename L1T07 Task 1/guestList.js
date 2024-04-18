// declare global variables
let guestName;
let guestList = [];
let replacement;
let userResponse;

document
  .getElementById("add-guest")
  .addEventListener("click", function (event) {
    event.preventDefault; // prevent default to prevent automatic browser refresh
    isGuestListFull(); // check guest list length
    addGuest(); // add new guest to list
  });

// check if guest list length is more than 10
function isGuestListFull() {
  if (guestList.length > 9) {
    return true;
  }
}

// function to add a guest
function addGuest() {
  guestName = document.getElementById("guest-names").value;

  // if  statement to call isGuestListFull() if user is trying to enter an 11th value
  if (isGuestListFull()) {
    const userResponse = prompt(
      "You can only add a maximum of 10 people to your guest list. Would you like to replace someone on the list with the last person you entered? yes/no"
    );
    if (userResponse.trim().toLowerCase() === "yes") {
      replaceGuest();
    } else if (userResponse.trim().toLowerCase() === "no") {
      displayGuestList();
  } 
  } else {
    // if guest list is not yet full, add guest to list and display current list
    guestList.push(guestName.trim());
    displayGuestList();
  }
}

// define function to replace a guest
function replaceGuest() {
  const toReplace = prompt("Name of person to replace?");
  const newGuestName = document.getElementById("guest-names").value.trim();
  const index = guestList.findIndex((name) => name === toReplace); // find index of guest name user wishes to replace
  if (index !== -1) {
    guestList[index] = newGuestName; // replace corresponding index with the new name
    console.log(guestList);
    displayGuestList();
  } else {
    console.log("Guest not found in the list."); // in case of user input error, notify user guest was not found
  }
}

// function to display guest list array
function displayGuestList() {
  document.getElementById(
    "final-list"
  ).textContent = `Your guest list: ${guestList} `;
}
