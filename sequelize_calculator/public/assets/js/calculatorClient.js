
console.log('Hello from the calculator client!')


$('#calculationForm').submit((event) => {
  event.preventDefault();
  const num1 = parseInt($('#num1').val());
  const num2 = parseInt($('#num2').val());
  const operator = $('#operator').val();
  console.log(num1, num2, operator);
  console.log(typeof num1)

  saveCalculation(num1, num2, operator)
    .then((calculationResult) => {
      console.log(calculationResult)
      $('#result').text(calculationResult.calculation);
      getAndRenderCalculations()


    })
    .catch((error) => {
      console.log(error);
    })
});


function saveCalculation(num1, num2, operator) {
  return $.ajax({
    method: 'POST',
    url: '/api/calculate',
    data: {
      num1, num2, operator
    }
  })
}

function getCalculations() {
  return $.ajax({
    method: 'GET',
    url: '/api/allCalculations'
  })
}

function formatOperator(operator) {
  if (operator === '*') {
    return '&#215;'
  } else if (operator === '/') {
    return '&#247;'
  } else {
    return operator;
  }
}


function renderCalculations(calculations) {

  const calculationHtml = calculations
    .map((calculation) => {
      const {num1, num2, operator, result} = calculation;
      const html = `
        <div>
          <span>${num1}</span>
          <span>${formatOperator(operator)}</span>
          <span>${num2}</span>
          <span>=</span>
          <span>${result}</span>
        </div>
      `;
      return html;
    })
    .join("");
    console.log(calculationHtml)
    $('#calculationHistory').html(calculationHtml);

}


function getAndRenderCalculations () {
  getCalculations()
    .then((calculationResult) => {
      console.log(calculationResult);
      renderCalculations(calculationResult.calculations);
    })
    .catch((error) => {
      console.log('error getting calculations', error)
    })
}

$(document).ready(() => {
  getAndRenderCalculations();
  


})

