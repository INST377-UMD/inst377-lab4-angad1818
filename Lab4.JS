// Initialize the background color based on stored value or default to "lightblue"
let currentColor = localStorage.getItem('bgColor') || 'lightblue';
document.body.style.backgroundColor = currentColor;

// Function for the "Alert Me" section
function showAlert(event) {
  event.preventDefault(); // Prevents the form from refreshing the page
  const nameValue = document.getElementById('nameInput').value;
  alert(`Hi ${nameValue}!`);
}

// Function to change the background color and save the setting
function changeColor() {
  const body = document.body;
  if (body.style.backgroundColor === 'lightblue') {
    body.style.backgroundColor = 'green';
    localStorage.setItem('bgColor', 'green');
  } else {
    body.style.backgroundColor = 'lightblue';
    localStorage.setItem('bgColor', 'lightblue');
  }
}

// Function to validate that the text contains no special characters
function validateText(event) {
  event.preventDefault(); // Prevents the form from submitting
  const validationRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  const textValue = document.getElementById('textInput').value;
  if (validationRegex.test(textValue)) {
    alert('Special characters are not allowed!');
  } else {
    alert('Text is valid!');
  }
}

// Function to add "Add Text" to the main heading
function addText() {
  const heading = document.getElementById('main-heading');
  heading.textContent += ' Add Text';
}
