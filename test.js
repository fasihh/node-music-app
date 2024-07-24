const data = {
  name: "skbd",
  id: 123,
};

fetch("http://localhost:3000/search", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
})
  .then((response) => response.json())
  .then((data) => console.log("Success: "+ data))
  .catch((error) => console.error("Error: "+ error));
