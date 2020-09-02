const http = new EasyHTTP();

//Value of 1-10 using this API
const id = 5;

//Get Users

http
  .get("https://jsonplaceholder.typicode.com/users")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

//User Data

const data = {
  name: "Bob Murphy",
  username: "RisingSinger",
  email: "risingsinger101@gmail.com",
};

//Create a Post
http
  .post(`https://jsonplaceholder.typicode.com/users`, data)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

//Update a Post
http
  .put(`https://jsonplaceholder.typicode.com/users/${id}`, data)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// Delete User
http
  .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
