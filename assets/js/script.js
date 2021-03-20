// giphy key : aWmCF38aWZNhbJoi236yO2yuW4smGy9q
// url "https://api.giphy.com/v1/" 

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

    //Click to get new random name
    $("#btnName").on("click", function() {
    fetchName();
    })

    //Click to get new dog img
    $("#btnImage").on("click", function() {
        fetchDog();
    })

    //Click to get new combo
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
                names.text(data[0])
                textNameEl.append(names);

                capturedDogName = data[0];//Captures current dogName
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
                dogImg.addClass("rounded-lg shadow-2xl");
                dogImg.height(450);
                dogImageEl.append(dogImg);

                capturedDogURL = dogImg.attr("src");//Captures current dogURL
            })
    }
    
    //Click to add current dog name/URL combo to favorites
    $("#btnSave").click(function() {
        if ((repeatCheckName === capturedDogName) && (repeatCheckURL === capturedDogURL)) {
            return;
        }

        favorite.dogName = capturedDogName;
        favorite.dogURL = capturedDogURL;

        storedFavorites = JSON.parse(localStorage.getItem("favorites"));
    
        if (storedFavorites !== null) {
            favorites = storedFavorites;
        }

        favorites.push(favorite);

        localStorage.setItem("favorites", JSON.stringify(favorites));

        repeatCheckName = favorites[favorites.length - 1].dogName;
        repeatCheckURL = favorites[favorites.length - 1].dogURL;
    });

    //Click to clear out favorites list
    $("#btnClear").click(function() {
        favorites = [];
        localStorage.setItem("favorites", JSON.stringify(favorites));

        carouselIndex = -1;
        $("#currentFavName").text("");
        $("#currentFavImage").attr("src", "./assets/images/spinning_doge.png");

        repeatCheckName = "";
        repeatCheckURL = "";
    });

    // Click to cycle backwards through favorites array
    $("#btnPrev").click(function() {
        storedFavorites = JSON.parse(localStorage.getItem("favorites"));
        if (storedFavorites !== null) {
            favorites = storedFavorites;
        }

        if (favorites.length !== 0) {
            if (carouselIndex > 0) {
                carouselIndex--;
            }
            else if (carouselIndex <= 0) {
                carouselIndex = (favorites.length - 1);
            }

            $("#currentFavName").text(favorites[carouselIndex].dogName);
            $("#currentFavImage").attr("src", favorites[carouselIndex].dogURL);
        }
    });

    // Click to cycle forwards through favorites array
    $("#btnNext").click(function() {
        storedFavorites = JSON.parse(localStorage.getItem("favorites"));
        if (storedFavorites !== null) {
            favorites = storedFavorites;
        }

        if (favorites.length !== 0) {
            if (carouselIndex < (favorites.length - 1)) {
                carouselIndex++;
            }
            else if (carouselIndex === (favorites.length - 1)) {
                carouselIndex = 0;
            }

            $("#currentFavName").text(favorites[carouselIndex].dogName);
            $("#currentFavImage").attr("src", favorites[carouselIndex].dogURL);
        }
    });
})
