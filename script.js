// Get the display element
const display = document.getElementById('display');

// Function to update the display
function updateDisplay(value) {
  if (display.value === '0' && value !== '.') {
    display.value = value;
  } else {
    display.value += value;
  }
}

// Function to clear the display
function clearDisplay() {
  display.value = '0';
}

// Function to backspace
function backSpace() {
  if (display.value !== '0') {
    display.value = display.value.slice(0, -1);
    if (display.value === '') {
      display.value = '0';
    }
  }
}

// Function to calculate the result
function calculate() {
  try {
    const result = eval(display.value);
    display.value = result;
  } catch (error) {
    display.value = 'Error';
  }
}

// Initialize the display value
display.value = '0';

// Add event listeners for keyboard input
document.addEventListener('keydown', function(event) {
  const key = event.key;
  if (key >= '0' && key <= '9') {
    updateDisplay(key);
  } else if (key === '.') {
    updateDisplay(key);
  } else if (key === '+' || key === '-' || key === '*' || key === '/') {
    updateDisplay(key);
  } else if (key === 'Enter') {
    calculate();
  } else if (key === 'Backspace') {
    backSpace();
  } else if (key === 'Escape') {
    clearDisplay();
  }
});