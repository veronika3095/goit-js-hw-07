const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

function updateGreeting() {
  
  const trimmedName = nameInput.value.trim();
  
  if (trimmedName === '') {
   
    nameOutput.textContent = 'Anonymous';
  } else {

    nameOutput.textContent = trimmedName;
  }
}

nameInput.addEventListener('input', updateGreeting);