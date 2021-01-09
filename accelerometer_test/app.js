// initMaGsensor();
// function handlePermission() {
//   navigator.permissions.query({name:'accelerometer'}).then(function(result) {
//     if (result.state == 'granted') {
//       report(result.state);
//     } else if (result.state == 'prompt') {
//       console.log('prompted')
//       report(result.state);
//     } else if (result.state == 'denied') {
//       report(result.state);
//     }
//     result.onchange = function() {
//       report(result.state);
//     }
//     document.querySelector('.status').innerText = result.state;
//   });
// }

// function revokePermission() {
//   navigator.permissions.revoke({name:'accelerometer'}).then(function(result) {
//     report(result.state);
//   });
// }

// function report(state) {
//   document.querySelector('.status').value = state;
//   console.log('Permission: ' + state);
// }

// handlePermission();


// function initMaGsensor() {


//   let magSensor = new Accelerometer({frequency: 60});
  
//   magSensor.addEventListener('reading', e => {
//     console.log(e)
//     console.log("Magnetic field along the X-axis " + magSensor.x);
//     console.log("Magnetic field along the Y-axis " + magSensor.y);
//     console.log("Magnetic field along the Z-axis " + magSensor.z);

//     document.querySelector('.magx').value = magSensor.x;
//     document.querySelector('.magy').value = magSensor.y;
//     document.querySelector('.magz').value = magSensor.z;

//   })
//   magSensor.addEventListener('error', event => {
//     console.log(event.error.name, event.error.message);
//     document.querySelector('#error').innerText =  event.error.message;
//   })
//   magSensor.start();
    
// }
 


  
window.addEventListener('deviceorientation', (eve) => {
  document.querySelector('.status').value = 'hi'
  console.log(eve.alpha, eve.beta, eve.gamma);
  document.querySelector('.magx').value = eve.alpha;
    document.querySelector('.magy').value = eve.beta
    document.querySelector('.magz').value = eve.gamma;
})
  