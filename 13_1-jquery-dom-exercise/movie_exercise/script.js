$(document).ready(function () {
    // Function to append movie to the table
    function addMovieToTable(title, rating) {
      const movieRow = `
        <tr>
          <td>${title}</td>
          <td>${rating}</td>
          <td><button class="remove-btn">Remove</button></td>
        </tr>
      `;
      $("#movieList").append(movieRow);
    }
  
    // Submit form to add a movie
    $("#movieForm").submit(function (event) {
      event.preventDefault();
      const title = $("#title").val();
      const rating = $("#rating").val();
      addMovieToTable(title, rating);
  
      // Clear the input fields after submission
      $("#title").val("");
      $("#rating").val("");
    });
  
    // Remove movie when remove button is clicked
    $("#movieList").on("click", ".remove-btn", function () {
      $(this).closest("tr").remove();
    });
  });
  