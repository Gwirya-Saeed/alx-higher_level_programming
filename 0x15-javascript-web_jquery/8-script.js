$.get("https://swapi-api.alx-tools.com/api/films/?format=json", function(data) {
  var movies = data.results;
  
  // Loop through each movie and extract its title
  var movieTitles = [];
  for (var i = 0; i < movies.length; i++) {
    var movie = movies[i];
    movieTitles.push(movie.title);
  }
  
  var $movieList = $("<ul>");
  
  // Loop through the list of movie titles and create a new <li> element for each one
  for (var i = 0; i < movieTitles.length; i++) {
    var $movieTitle = $("<li>").text(movieTitles[i]);
    $movieList.append($movieTitle);
  }
  
  // Add the <ul> element to the DOM, under the element with ID "list_movies"
  $("#list_movies").replaceWith($movieList);
});

