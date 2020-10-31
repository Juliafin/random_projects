console.log('hi from client js!')

const form = document.getElementById('nameForm');
const nameInput = document.getElementById('nameInput');




form.addEventListener('submit', function(event) {
  event.preventDefault();
  console.log(event, 'event');
  const name = nameInput.value;
  console.log(name);

  const formData = {
    name
  }

  fetch('/name', {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then((response) => {
    console.log('Response from server', response);
    return response.json();
  })
  .then((json) => {
    console.log(json);
    location.reload();
  })
});