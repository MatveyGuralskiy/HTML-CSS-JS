let fahrenheitTemperature = 80;
let celciusTemperature = 5/9 * (fahrenheitTemperature - 32);
// show to console
console.log("Fahrenheit temperature: "+fahrenheitTemperature+" to celcius: "+celciusTemperature);
// show to html
document.getElementById("fahrenheitResult").textContent += fahrenheitTemperature + " to celcius: " + celciusTemperature;

celciusTemperature = 40;
// show to console
console.log("Celcius temperature: "+celciusTemperature+" to fahrenheit: "+fahrenheitTemperature);
// show to html
let newFahrenheitTemperature = (celciusTemperature * 9/5) + 32;
document.getElementById("celciusResult").textContent += celciusTemperature + " to fahrenheit: " + newFahrenheitTemperature;
