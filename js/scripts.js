function Triangle(side1, side2, side3) {
  this.firstSide = side1;
  this.secondSide = side2;
  this.thirdSide = side3;
}

// Triangle.prototype.checkSides = function(firstSide, secondSide, thirdSide) {
//   if (firstSide === secondSide === thirdSide) {
//     alert("Equilateral!");
//   } else if (firstSide === secondSide !=== thirdSide || firstSide !== secondSide === thirdSide || firstSide === thirdSide !== secondSide) {
//     alert("Isosceles");
//   } else if (firstSide !== secondSide !== thirdSide) {
//     alert("Scalene!");
//   } else {
//     alert("Try again");
//   }
// }



Triangle.prototype.checkSides = function(a, b, c) {
  if (a === b && b === c) {
    alert("Equilateral!");
  // } else if () {
  //   alert("Isosceles");
  // } else if () {
  //   alert("Scalene!");
  // } else {
  //   alert("Try again");
  }
}


$(document).ready(function() {
  $("form#triangle-sides").submit( function (event) {
    event.preventDefault();

    var firstSide = parseInt($("#first-side").val());
    var secondSide = parseInt($("#second-side").val());
    var thirdSide = parseInt($("#third-side").val());
    var newTriangle = new Triangle(firstSide, secondSide, thirdSide);
    newTriangle.checkSides();
    console.log(newTriangle);


  });
});
