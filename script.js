// Save elements of HTML to variables by their ID
const saveBtn = document.getElementById("save-btn");
const clearBtn = document.getElementById("clear-btn");
const display = document.getElementById("display-name");
const message = document.getElementById("message");
const reflectionBtn = document.getElementById("reflectionBtn");
const reflection = document.getElementById("reflection");
const form = document.getElementById("form");

// Show form and hide reflection when rendered
reflection.hidden = true;
form.style.display = "";

// Get current hour by making a date object and calling its getHours() method
const date = new Date();
const hour = date.getHours();

// declare timePeriod variable and set it to an empty string
let timePeriod = "";

// Set timePeriod according to the current hour
if (hour > 0 && hour < 12) {
  timePeriod = "morning";
} else if (hour >= 12 && hour < 18) {
  timePeriod = "afternoon";
} else if (hour >= 18 && hour < 22) {
  timePeriod = "evening";
} else {
  timePeriod = "night";
}

// Display name and message if there is a name stored in local storage
if (localStorage.getItem("name")) {
  display.innerHTML = localStorage.getItem("name");
  message.innerHTML = `Good ${timePeriod} ${localStorage.getItem("name")}!`;
}

// Add event listeners to buttons when clicked
saveBtn.addEventListener("click", save);
clearBtn.addEventListener("click", clear);
reflectionBtn.addEventListener("click", toggle);

// Get text from input and save to a variable
// Save the user name to local storage and display name and message
// If nothing in text box then return alert with error
function save() {
  const input = document.getElementById("userName").value;
  if (input != "") {
    localStorage.setItem("name", input);
    display.innerHTML = localStorage.getItem("name");
    message.innerHTML = `Good ${timePeriod} ${localStorage.getItem("name")}!`;
  } else {
    alert("Please enter user name");
  }
}

// Clear local storage, message, and name
function clear() {
  localStorage.removeItem("name");
  display.innerHTML = "";
  message.innerHTML = "";
}

// Toggle visibility
function toggle() {
  if (reflection.hidden === true) {
    reflection.hidden = false;
  } else {
    reflection.hidden = true;
  }

  if (form.style.display === "none") {
    form.style.display = "";
  } else {
    form.style.display = "none";
  }
}
