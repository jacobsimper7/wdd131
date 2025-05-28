// Footer infor for last modified date and time
let oLastModif = new Date(document.lastModified);
let currentyear = new Date().getFullYear();

lastModified.innerHTML = `Last Modified: <span class="highlight">${new Intl.DateTimeFormat(
    "en-US",
    {
     dateStyle: "full"
    }
).format(oLastModif)}</span>`;

// Wind Chill Calculation
// This function calculates the wind chill based on the temperature in Fahrenheit:
const temperature = 49; // degrees Fahrenheit
const windSpeed = 11;   // mph
const windChill = calculateWindChill(temperature, windSpeed);
console.log(`Wind Chill: ${windChill}°F`);
document.getElementById("windChill").textContent = windChill;

function calculateWindChill(tempF, windSpeedMph) {
    if (tempF <= 50 && windSpeedMph > 3) {
        return (
            35.74 +
            0.6215 * tempF -
            35.75 * Math.pow(windSpeedMph, 0.16) +
            0.4275 * tempF * Math.pow(windSpeedMph, 0.16)
        ).toFixed(1);
    } else {
        return "N/A"; // Wind chill not applicable
    }
}

