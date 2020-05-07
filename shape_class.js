function Shape(numberOfSides, arrOfLengths) {

  this.numberOfSides = numberOfSides;
  this.arrOfLengths = arrOfLengths;
  

  // Validates the inputs into the Shape constructor. Makes sure that the number of sides is a whole number, and that the arr of lengths is equal to the number of sides, and that each value is a number
  this.validateArguments = function() {
    var isValid = true;
    try {
      if (parseInt(numberOfSides) && numberOfSides % 1 === 0  && arrOfLengths.length === numberOfSides) {
        arrOfLengths.forEach(len => {
          if (!parseInt(len) && typeof(len) === 'string') {
            isValid = false;
          }
        });
      } else {
        isValid = false;
      }
    } catch(error) {
      console.log(error)
      isValid = false;
    }
    if (!isValid) {
      this.error = 'You have entered an invalid value'
      this.isValid = false;
    } else {
      this.isValid = true;
    }
  }
  
  // Computes the circumference
  this.circumference = function () {
    if (!this.isValid) {
        console.log('Cannot compute a circumference with invalid values');
        return
    }

    var circumference = this.arrOfLengths.reduce(function(accumulator, len, index) {
        console.log(len, 'LEN')
        console.log(accumulator, 'ACCUM')
        console.log(index)
        accumulator += len
        console.log(accumulator)
        return accumulator

    }, 0)
    console.log(`The circumference is ${circumference}`)
    return circumference
  }


  this.identifyShape = function () {
    var shapes = {
      '2': 'line',
      '3': 'triangle',
      '4': 'rectangle',
      '5': 'pentagon',
      '6': 'hexagon',
      '7': 'septagon',
      '8': 'octogon'
    }

    var shape = shapes[numberOfSides.toString()]
    console.log(`This shape is a ${shape}`);
    this.shape = shape;

  }


  this.validateArguments()


}



console.log(Shape.prototype)

// Adding a function to the protoype after it's been declared
Shape.prototype.triangleArea = function (baseIndex, heightIndex) {
  var base = this.arrOfLengths[baseIndex];
  var height = this.arrOfLengths[heightIndex];
  var area = base * height * .5
  console.log(`The area of the ${this.shape} is ${area}`);
  this.area = area
}







var shp1 = new Shape('cat', 'tiger');
var shp2 = new Shape(3, [1.52, 5.5, 12]);

console.log(shp1);
console.log(shp2)

shp2.circumference()
shp2.identifyShape()
shp2.triangleArea(1, 2)


function Cube (depth, length, width) {
  this.depth = depth;
  this.len = length
  this.wth = width 
  this.setSides = function(sides) {
    if (sides.length === 6 ) {
      this.arrOfLengths = sides;
      delete this.error;
      this.isValid = true;

    }
  }
}


// Extend the shape constructor with a Cube! 
Cube.prototype = new Shape(6,[])





var cb1 = new Cube(20, 30, 40)
console.log( cb1);
console.log(cb1.error);

cb1.setSides([5,10,5,10,20,20])

console.log(cb1);
console.log(cb1.depth);
console.log(cb1.circumference());