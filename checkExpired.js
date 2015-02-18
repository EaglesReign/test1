//Phil Hofer
//CMP237
//Attmpting to solve problem 8 under Javascript 101

/* 
	checkExpired.js
	Filter larder dataset looking for expired items
	Brian Capouch CMP237
	10 February 2015
						*/

load('larder.js');
var larder = JSON.parse(LARDER_FILE);

// Print entire contents 
//larder.forEach(larder, function(entry) {
//	print(JSON.stringify(entry));
//});

// Test 0th item for date conversion
// var testDate = new Date(larder[0]["dateIn"]);
// print(testDate.toDateString());

// Right out of the book!
function filter(array, test) {
  var passed = [];
  for (var i = 0; i < array.length; i++) {
    if (test(array[i]))
      passed.push(array[i]);
  }
  return passed;
}

// Next two lines removed from anonymous function below
// This line calculates expiration date in ms
// print(((new Date(item.dateIn)).getTime()) + (item.life * 86400000));

// This line expresses today's date in ms
//print(3*((new Date()).getTime()));

// Right out of the book EXCEPT for test part
print(JSON.stringify(filter(larder, function(item) {
  // In ms UTC, If storage date + life limit is less than today, it's EXPIRED
  //
  // I modified this return statement so that it compares from today until the
  // next 3 days. I did this by changing the less than symbol to a greater
  // than symbol where it was checking if the date had already passed.
  // I also added an and where we specify that we want to also return what will
  // expire within the next 3 days. This was accomplished by obtaining the
  // date and multiplying it by 3.
  return (((new Date(item.dateIn)).getTime()) + (item.life * 86400000) > ((new Date().getTime())) && ((new Date(item.dateIn)).getTime()) + (item.life * 86400000) < (3*((new Date().getTime())))) ;
})));

