function circleProperties(radius) {
  let diameter = 2 * radius;
  let circumference = 2 * Math.PI * radius;
  let area = Math.PI * radius * radius;
  return { diameter, circumference, area };
}

let radius = 5;
let properties = circleProperties(radius);
console.log("Diameter: " + properties.diameter);
console.log("Circumference: " + properties.circumference);
console.log("Area: " + properties.area);
