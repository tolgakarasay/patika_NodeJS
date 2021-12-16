const argument = process.argv[2];

function calculateArea(r) {
  let area = Math.PI * r * r;
  console.log("The area of a circle with a radius of", r, ":", area);
}

calculateArea(argument);
