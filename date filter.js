// Function to filter data by date
function filterByDate(data, date) {
    const filteredData = {};
    for (const key in data) {
        if (data.hasOwnProperty(key) && key === date) {
            filteredData[key] = data[key];
        }
    }
    return filteredData;
}

// Function to format the date for Firebase (yyyy-MM-dd)
function formatDateForFirebase(inputDate) {
    const dateParts = inputDate.split("-");
    if (dateParts.length === 3) {
        const year = dateParts[0];
        const month = dateParts[1].padStart(2, "0");
        const day = dateParts[2].padStart(2, "0");
        return `${year}-${month}-${day}`;
    }
    return "";
}