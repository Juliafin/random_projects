console.log('Hi from the client!')

let num1 = '';
let num2 = ''
let operator = ''


const postCalculate = (num1, num2, operator) => {
  $.ajax({
    data: {
      num1, num2, operator
    },
    url: '/calculate',
    method: 'POST'
  }).then((response) => {
    console.log('Response: ' , response);
    // refresh the page
    window.location.reload();
  })
}



$('.calculate').on('change', function(event) {
  const id = $(this).attr('id');
  const value = $(this).val();

  if (id === 'num1') {
    num1 = value;
  } else if (id === 'num2') {
    num2 = value;
  } else if (id === 'operator') {
    operator = value;
  }
})


$('button').on('click', function(event) {

  if (!num1 || !num2 || !operator) {
    return;
  }

  postCalculate(num1, num2, operator);
})




