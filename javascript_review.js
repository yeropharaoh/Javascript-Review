// Javascript_Review_Assignment_Yero_Schutte_July10_2017

// write a function that takes in three parameters and returns the sum of those three parameters
function sum (a,b,c) {
return a + b + c;
}

sum(1,2,3)

//
// given a string, create a function that returns the last character in that string.
function lastString(string){
		return string.charAt(string.length - 1);
}

lastString("pneumonoultramicroscopicsilicovolcanoconiosis");

//
// write a function that takes in one parameter and returns the cube of that parameter
function cube(a){
	return a * a * a
};

cube(3);
cube(4);

//
// define a function that takes in a string and reverses it. you are not allowed to
// call the "reverse" function (or any other string functions)
function reverse (string){
	  var newString = "";
	  	for (var i = string.length - 1; i >= 0; i--) { 
        newString = newString + string[i];
    }
	return newString;
}

reverse('hello');
reverse('oreY');

//
// write a function that takes in two arrays of the same length as parameters. From those two arrays,
// create, then return an object which contains the elements of the first array as keys, and the
// elements of the second array as values.
function thing (array1, array2){
	var x = {};

	for (i=0; i < array1.length; i++){
		x[array1[i]] = array2[i];
	}
	console.log(x);
		return x;
}

thing(['one', 'two', 'three'], ['thing', 'fingers', 'little bears']);

//
// Given an object with keys and values, create two arrays: one which contains the object's keys,
// and one which contains the object's values. Wrap this into a function which takes in one object
// that contains keys and values, and returns a different object that contains two keys. The first key
// should be named "keys" and will have the first array as a value. The second key should be named
// "values" and will have the second array as a value.
function objectToArray (object) {
    
    var array1 = [];
    var array2 = [];
    for (var keys in object) {
        array1.push(keys);
        array2.push(object[keys]);    
    }

    var objectArray = {
        keys: array1,
        values: array2,
    }
    console.log(objectArray);
}

objectToArray({ exciting: "markets", exotic: "britain" });
objectToArray({ fname: "Yero", lname: "Pharaoh", age: 27});
