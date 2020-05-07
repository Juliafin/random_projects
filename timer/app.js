var sec1 = document.getElementById('sec1')
var sec2 = document.getElementById('sec2')
var min1 = document.getElementById('min1')
var min2 = document.getElementById('min2')
var hrs1 = document.getElementById('hrs1')
var hrs2 = document.getElementById('hrs2')


function clock() {
  var seconds1 = parseInt(sec1.innerText, 10);
  var minutes1 = parseInt(min1.innerText, 10);
  var hours1 = parseInt(hrs1.innerText, 10);

  var interval = setInterval( () => {

    if (seconds1 === 0) {
      seconds1 = 59;
      sec1.innerText = seconds1;
      seconds1--; 

      min1.innerText = minutes1;
      minutes1--;


      if (minutes1 === 0) {
        min1.innerText = '0' + minutes1;
        minutes1 = 59;

        hrs1.innerText = hours1;
        hours1--;

        if (hours1 === 0) {
          clearInterval(interval);
        }


        
      } else if (minutes1 < 10) {
        min1.innerText = '0' + minutes1;
      }

    } 

    else if (seconds1 < 10) {
      sec1.innerText = '0' + seconds1
      seconds1--;
    
    } else {

      sec1.innerText = seconds1;
      seconds1--;
    }
    




  }
  
  , 1000)


}

clock();









// function decrement(value) {
//   set
// }

// function decrementSeconds() {
//   console.log(sec2)
  // var seconds2 = parseInt(sec2.innerText, 10);
  // var seconds1 = parseInt(sec1.innerText, 10);
  // var minutes2 = parseInt(min2.innerText, 10);
  // var minutes1 = parseInt(min1.innerText, 10);

//   console.log(seconds2);
  

//     setInterval( () => {
//       console.log(seconds2);
//       if (seconds2 === 0) {
//         sec2.innerText = seconds2;
//         seconds2 = 9;
//         seconds1--;
//         sec1.innerText = seconds1;

//         if (seconds1 === 0) {
//           seconds2 = 9;
//           seconds1 = 5;
//           minutes2--;
//           min2.innerText = minutes2;
//           sec1.innerText = seconds1;
//           sec2.innerText = seconds2;

//           if (minutes2 === 0) {
//             minutes2 = 9;
//             minutes1--;
//             min1.innerText = minutes1;
//             min2.innerText = minutes2;
//           }
  
//         }

//       }

      

//       sec2.innerText = seconds2;
//       seconds2--
//     }, 1000)
//   }

  


// decrementSeconds()