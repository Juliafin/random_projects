console.log('hello world');

function getInventory() {
  const options = {
    method: 'GET',
    url: '/api/'
  }
  $.ajax(options)
    .then((returnedInventory) => {
      console.log('Current inventory', returnedInventory);
    });
}

getInventory()