$(document).ready(function() {
    var textNameEl = $("#displayName");
    var dogImageEl = $("#displayImg");

    var ApiKey = "774092c9-0b11-4331-9432-a0aac1f1ca4a";
    var dogLink = "https://api.thedogapi.com/v1/images/search" + "?api_key=" + ApiKey;
    var nameLink = "https://namey.muffinlabs.com/name.json?frequency=all";

    var capturedDogName;
    var capturedDogURL;
    var repeatCheckName;
    var repeatCheckURL;
    var favorite = {
        dogName: "",
        dogURL: "",
    };
    var storedFavorites;
    var favorites = [];
    var carouselIndex = -1;

    fetchName();
    fetchDog();

    // Click to get new random name
    $("#btnName").on("click", function() {
    fetchName();
    })

    // Click to get new dog img
    $("#btnImage").on("click", function() {
        fetchDog();
    })

    // Click to get new combo
    $("#newCombo").on("click", function() {
        fetchName();
        fetchDog();
    })

    function fetchName () {
        textNameEl.empty();

        fetch(nameLink)
            .then(function(response) {
                return response.json();
            })
            .then(function(data){
                var names = $("<h4>");
                names.text(data[0]);
                textNameEl.append(names);

                capturedDogName = data[0];// Captures current dogName
            })
    }

    function fetchDog() {
        dogImageEl.empty();

        fetch (dogLink)
            .then(function(response) {
                return response.json();
            })
            .then(function(data){
                var dogImg = $("<img>");
                dogImg.attr("src", data[0].url);
                dogImg.addClass("rounded-lg");
                dogImg.height(450);
                dogImageEl.append(dogImg);

                capturedDogURL = dogImg.attr("src");// Captures current dogURL
            })
    }
    
    // Click to add current dog name/URL combo to favorites
    $("#btnSave").click(function() {
        // Prevents saving current combo to favorites multiple times
        if ((repeatCheckName === capturedDogName) && (repeatCheckURL === capturedDogURL)) {
            return;
        }

        // Retrieves captured values
        favorite.dogName = capturedDogName;
        favorite.dogURL = capturedDogURL;

        // Retrieves stored favorites
        storedFavorites = JSON.parse(localStorage.getItem("favorites"));
        if (storedFavorites !== null) {
            favorites = storedFavorites;
        }

        // Pushes new favorite to favorites array
        favorites.push(favorite);
        localStorage.setItem("favorites", JSON.stringify(favorites));

        // Sets current combo to be checked for duplicity if save button hit again
        repeatCheckName = favorites[favorites.length - 1].dogName;
        repeatCheckURL = favorites[favorites.length - 1].dogURL;
    });

    // Click to clear out favorites list
    $("#btnClear").click(function() {
        favorites = [];
        localStorage.setItem("favorites", JSON.stringify(favorites));

        // Resets carousel
        carouselIndex = -1;
        $("#currentFavName").text("");
        $("#currentFavImage").attr("src", "./assets/images/spinning_doge.png");

        // Resets duplicate variables
        repeatCheckName = "";
        repeatCheckURL = "";
    });

    // Click to cycle backwards through favorites array
    $("#btnPrev").click(function() {
        // Retrieves stored favorites
        storedFavorites = JSON.parse(localStorage.getItem("favorites"));
        if (storedFavorites !== null) {
            favorites = storedFavorites;
        }

        if (favorites.length !== 0) {
            if (carouselIndex > 0) {
                carouselIndex--;// Carousel decrements backwards through array
            }
            else if (carouselIndex <= 0) {
                carouselIndex = (favorites.length - 1);// Beyond start of array, [0], returns to last item in array
            }

            $("#currentFavName").text(favorites[carouselIndex].dogName);
            $("#currentFavImage").attr("src", favorites[carouselIndex].dogURL);
        }
    });

    // Click to cycle forwards through favorites array
    $("#btnNext").click(function() {
        // Retrieves stored favorites
        storedFavorites = JSON.parse(localStorage.getItem("favorites"));
        if (storedFavorites !== null) {
            favorites = storedFavorites;
        }

        if (favorites.length !== 0) {
            if (carouselIndex < (favorites.length - 1)) {
                carouselIndex++;// Carousel increments forwards through array
            }
            else if (carouselIndex === (favorites.length - 1)) {
                carouselIndex = 0;// At end of array, returns to first item in array
            }

            $("#currentFavName").text(favorites[carouselIndex].dogName);
            $("#currentFavImage").attr("src", favorites[carouselIndex].dogURL);
        }
    });
})