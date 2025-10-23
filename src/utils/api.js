const url = "https://api.themoviedb.org/3/account/22405870";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YjI2M2ZkNGU4OTk5MjE1OTI5ZmVjYjRhMDdkNWRmNCIsIm5iZiI6MTc2MTE5NzM3Ny4zNTYsInN1YiI6IjY4ZjliZDQxZWQ0MWQ3ZjE2MTUzNjU1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qGmIQPLHmbA3qA7OAqBr3G3NbeM1lhbtsnxuR1Q-A0I",
  },
};

fetch(url, options)
  .then((res) => res.json())
  .then((json) => console.log(json))
  .catch((err) => console.error(err));
