console.log('moment', moment);
var realToday = moment();
var today = moment("1", "Do");
var originalTime = today;
var formattedTime = today.format('dddd, Do of MMMM, YYYY on h:mm:ss A');

function updateTime() {
  setInterval(function() {
    $('#date').text(formattedTime);
    today = moment(today, 'dddd, Do of MMMM, YYYY on h:mm:ss A').add("1", "second");
    
    formattedTime = today.format('dddd, Do of MMMM, YYYY on h:mm:ss A');

    console.log(originalTime.from(realToday));
    $('#from').text(originalTime.from(realToday));
    $('#difference').text(realToday.diff(today, 'minutes') + ' minutes ago');

  }, 1000);
}

$(document).ready(function() {
  updateTime();
})