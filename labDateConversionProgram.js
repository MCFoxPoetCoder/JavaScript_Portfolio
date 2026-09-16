const currentDate = new Date();
const currentDateFormat = `Current Date and Time: ${currentDate}`;

console.log(currentDateFormat);

function formatDateMMDDYYYY (dateObj) {
  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric"
  }
  return `Formatted Date (MM/DD/YYYY): ${dateObj.toLocaleDateString("en-US", options)}`
}

console.log(formatDateMMDDYYYY(currentDate))

function formatDateLong (dateObj) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric"
  }
  return `Formatted Date (Month Day, Year): ${dateObj.toLocaleDateString("en-US", options)}`
}

console.log(formatDateLong(currentDate))