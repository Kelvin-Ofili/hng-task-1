function displayCurrentDateTime() {
	const currentDate = new Date();
	const dayElement = document.getElementById("day");
	const timeElement = document.getElementById("time");

	const dayOptions = {
		weekday: "long",
	};

	const timeOptions = {
		hour: "numeric",
		minute: "numeric",
		second: "numeric",
		millisecond: "numeric",
	};

	const formattedDay = currentDate.toLocaleDateString(undefined, dayOptions);
	const formattedTime = currentDate.toLocaleTimeString(undefined, timeOptions);

	dayElement.textContent = `Current Day: ${formattedDay}`;
	timeElement.textContent = `Current Time: ${formattedTime}`;
}

// Call the function to display the current date and time
displayCurrentDateTime();
