// write js code here if required
// Get the current date and time
let currentDate = new Date();

// Get the HTML paragraph element
let paragraph = document.querySelector('p');

// Function to update the timer
function updateTimer() {
  // Get the current date and time
  currentDate = new Date();

  // Format the date and time as desired
  let formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;
  let formattedTime = `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;

  // Display the timer on the HTML paragraph element
  paragraph.textContent = `${formattedDate}, ${formattedTime}`;
}

// Update the timer every second
setInterval(updateTimer, 1000);

// Initial update of the timer
updateTimer();

