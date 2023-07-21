console.log("Let's get this party started!");

const $gifArea = $("#gif-area");
const $searchForm = $("#search-form");
const $searchInput = $("#search");

function appendGif(url) {
  let $newCol = $("<div>", { class: "col-md-4 col-12 mb-4" });
  let $newGif = $("<img>", {
    src: url,
    class: "w-100"
  });
  $newCol.append($newGif);
  $gifArea.append($newCol);
}

$searchForm.on("submit", async function (evt) {
  evt.preventDefault();

  let searchTerm = $searchInput.val();
  $searchInput.val("");

  const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: {
      q: searchTerm,
      api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym",
      limit: 1 // Get only one GIF
    }
  });

  const gifUrl = response.data.data[0].images.original.url;
  appendGif(gifUrl);
});

// Remove all GIFs
$("#remove").on("click", function () {
  $gifArea.empty();
});
