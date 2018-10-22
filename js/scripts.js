function Triangle(side1, side2, side3) {
  this.firstSide = side1;
  this.secondSide = side2;
  this.thirdSide = side3;
  this.sidesToSort = [];
  this.sortedSides = [];
}

Triangle.prototype.checkSides = function(a, b, c) {
  this.sidesToSort.push(a,b,c);
  this.sortedSides = this.sidesToSort.sort();
  if (this.sortedSides[0] + this.sortedSides[1] < this.sortedSides[2] || this.sortedSides[2]+this.sortedSides[1] < this.sortedSides[0] || this.sortedSides[0]+this.sortedSides[2] < this.sortedSides[1]) {
    alert("Not a triangle");
  } else if (this.sortedSides[0] === this.sortedSides[1] && this.sortedSides[1] === this.sortedSides[2]) {
    alert("Equilateral");
  } else if (this.sortedSides[0] !== this.sortedSides[1] && this.sortedSides[1] !== this.sortedSides[2] && this.sortedSides[0] !== this.sortedSides[2]) {
     alert("Scalene");
  } else {
    alert("Isosceles");
  }
}


$(document).ready(function() {
  $("form#triangle-sides").submit( function (event) {
    event.preventDefault();


    var firstSide = parseInt($("#first-side").val());
    var secondSide = parseInt($("#second-side").val());
    var thirdSide = parseInt($("#third-side").val());
    var newTriangle = new Triangle(firstSide, secondSide, thirdSide);

    newTriangle.checkSides(firstSide, secondSide, thirdSide);
    console.log(newTriangle);


  });
});
