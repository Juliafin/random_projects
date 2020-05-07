var obj = {
  a: 3, 
  b: 5, 
  c: 10
};

obj.a = "hello";

var obj2 = {
  name: "Thomas",
  age: 43
}

var obj3 = {
  interests : ["Painting", "Music", "Hiking"]
}


obj.c = obj2;

obj.c.test = obj3;



// console.log(objectString);
// console.log(typeof(objectString));

// var givemebackmyobject = JSON.parse(objectString);
// console.log(typeof(givemebackmyobject));

// console.log(obj.c.test.interests[1])

obj.c.test.hand = "left"
var objectString = JSON.stringify(obj, null, 2);

// console.log(objectString);

// setting properties that begin with @ or # symbols (others too)

// obj.@f = "how are you"; // dot notation here doesnt work

// obj["a"] === obj.a

// console.log(obj["a"]) // hello
// console.log(obj.a); // also hello


obj['@Hereisapropertywithan@symbol'] = "This is interesting";
console.log(obj);

// console.log(obj.Hereisapropertywithan@symbol) // doesn't work with @ symbols

// obj.a or obj["a"],////            obj[a] doesn't work