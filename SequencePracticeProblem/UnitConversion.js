// a. Convert 42 inches to feet
let inches = 42;
let feet = inches / 12;
console.log(`42 inches is equal to ${feet} feet`);

// b. Convert a 60ft × 40ft plot to meters (1 ft = 0.3048 m)
let lengthInFeet = 60;
let widthInFeet = 40;
let lengthInMeters = lengthInFeet * 0.3048;
let widthInMeters = widthInFeet * 0.3048;
console.log(`Rectangular plot of 60ft x 40ft is ${lengthInMeters.toFixed(2)}m x ${widthInMeters.toFixed(2)}m`);

// c. Calculate the area of 25 such plots in acres (1 acre = 4046.86 m²)
let areaOfOnePlot = lengthInMeters * widthInMeters; // Area of one plot in square meters
let totalAreaInMeters = areaOfOnePlot * 25; // Total area for 25 plots
let totalAreaInAcres = totalAreaInMeters / 4046.86; // Convert square meters to acres
console.log(`Total area of 25 plots in acres: ${totalAreaInAcres.toFixed(2)} acres`);
