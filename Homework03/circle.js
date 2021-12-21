function circleArea(radius) {
  console.log("Area:", Math.PI * radius * radius);
}

function circleCircumference(radius) {
  console.log("Circumference:", 2 * Math.PI * radius);
}

module.exports = {
  circleArea,
  circleCircumference,
};
