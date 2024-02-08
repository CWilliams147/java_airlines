"use strict";

document.addEventListener("DOMContentLoaded", async () => {
  const getJSON = async () => {
    const data = await fetch(
      "https://my.api.mockaroo.com/flight_logs.json?key=5776e910"
    ).then((response) => response.json());
    return data;
  };
  const userInput = document.querySelector("#userInput");
  const userSubmit = document.querySelector("#userSubmit");
  const myArray = await getJSON();
  console.log(myArray);

  function searchFlight(userInput) {
    const filteredArray = myArray.filter(
      (flight) => flight.flight_number === parseInt(userInput)
    );
    console.log(filteredArray);
    return filteredArray;
  }

  userSubmit.addEventListener("click", function (event) {
    event.preventDefault();
    searchFlight(userInput.value);
  });
});
