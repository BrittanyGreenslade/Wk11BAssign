//For an API like this, that has different amounts of info each time, how could you
//make it more dynamic so you can account for some cocktails having 2 ingredients
//and some having more ingredients?

//declared a function that is called when the button is clicked that grabs a new
//cocktail and all of its recipe info from the API URL
function nextCocktail() {
  //set our AJAX variable
  let ajax = new XMLHttpRequest();
  //this is the 'callback function'
  ajax.onreadystatechange = function () {
    //4 is when the network request is done; 200 means there were no errors
    //if all of these numbers come back a-ok, then........
    if (this.readyState == 4 && this.status == 200) {
      //JSON.parse turns the giant messy string returned from the API into a pretty lil
      //object. we store this object in a variable for easy access down the road
      let responseTextObject = JSON.parse(this.responseText);
      //   console.log(responseTextObject);
      //go into the object and find the item with the name "drinks"; set it to a variable
      let cocktails = responseTextObject.drinks;
      //the 'drinks' item has a value that is an array, so in order to get any of the info out of
      //that, we need to loop through it
      for (i = 0; i < cocktails.length; i++) {
        //store whatever item that's returned from the array in a variable
        let cocktail = cocktails[i];
        //check it out so we can get the info for the following grabs
        console.log(cocktail);
        //inject the name, pic, glass type, ingredients, measurements, etc onto the page
        document.getElementById(
          "cocktailName"
        ).innerHTML = `<h1>${cocktail.strDrink}</h1>`;

        let cocktailPic = cocktail.strDrinkThumb;
        document.getElementById(
          "cocktailPic"
        ).innerHTML = `<img src = "${cocktailPic}">`;
        document.getElementById(
          "cocktailGlass"
        ).innerHTML = `<h2>${cocktail.strGlass}</h2>`;
        //ok I know there HAS to be a better way to do the following involving classes
        //that I'm going to try and figure out but my brain is tired of loops after
        //the mess that is the object within the array within the object for this API
        //so plz forgive me
        document.getElementById(
          "ingred1"
        ).innerHTML = `<p>${cocktail.strIngredient1}</p>`;

        document.getElementById(
          "msrmt1"
        ).innerHTML = `<p>${cocktail.strMeasure1}</p>`;

        document.getElementById(
          "ingred2"
        ).innerHTML = `<p>${cocktail.strIngredient2}</p>`;

        document.getElementById(
          "msrmt2"
        ).innerHTML = `<p>${cocktail.strMeasure2}</p>`;

        document.getElementById(
          "ingred3"
        ).innerHTML = `<p>${cocktail.strIngredient3}</p>`;

        document.getElementById(
          "msrmt3"
        ).innerHTML = `<p>${cocktail.strMeasure3}</p>`;

        document.getElementById(
          "ingred4"
        ).innerHTML = `<p>${cocktail.strIngredient4}</p>`;

        document.getElementById(
          "msrmt4"
        ).innerHTML = `<p>${cocktail.strMeasure4}</p>`;

        document.getElementById(
          "ingred5"
        ).innerHTML = `<p>${cocktail.strIngredient5}</p>`;

        document.getElementById(
          "msrmt5"
        ).innerHTML = `<p>${cocktail.strMeasure5}</p>`;

        document.getElementById(
          "ingred6"
        ).innerHTML = `<p>${cocktail.strIngredient6}</p>`;

        document.getElementById(
          "msrmt6"
        ).innerHTML = `<p>${cocktail.strMeasure1}</p>`;
        //some cocktails had less ingredients and data from the request comes back 'null' so I
        //hid this if that was the case
        if (cocktail.strIngredient3 === null) {
          document.getElementById("ingred3").style.display = `none`;
          document.getElementById("msrmt3").style.display = `none`;
        }

        if (cocktail.strIngredient4 === null) {
          document.getElementById("ingred4").style.display = `none`;
          document.getElementById("msrmt4").style.display = `none`;
        }

        if (cocktail.strIngredient5 === null) {
          document.getElementById("ingred5").style.display = `none`;
          document.getElementById("msrmt5").style.display = `none`;
        }

        if (cocktail.strIngredient6 === null) {
          document.getElementById("ingred6").style.display = `none`;
          document.getElementById("msrmt6").style.display = `none`;
        }
      }
    }
  };
  //configures the request (says where it's going, that it's going to 'get' data, and says
  //'true' to the request being asynchronous because sycnhronous = bad/scary)
  ajax.open(
    "GET",
    "https://www.thecocktaildb.com/api/json/v1/1/random.php",
    true
  );

  //This function injects a 'loading' message on the page when the next cocktail revipe
  //is loading. 'display: block' because it wasn't showing up without a display setting
  //but I'm not sure why because it doesn't have a display setting otherwise and I
  //thought it would just be injected 'onloadstart'
  ajax.onloadstart = function loading() {
    document.getElementById("loading").innerHTML = `<h2>Loading...</h2>`;
    document.getElementById("loading").style.display = `block`;
  };
  //this makes the 'loading' message go away once the new API is loaded
  ajax.onloadend = function loaded() {
    document.getElementById("loading").style.display = `none`;
  };
  //This is how I found to set an error message but it's not possible to see it unless there's
  //an actual error at the network level not just at the app level right or?
  ajax.onerror = function () {
    document.getElementById(
      "loading"
    ).innerHTML = `<h2>ERROR 404: Drink water instead</h2>`;
  };
  //the place I found for error and on-load message said to put those two functions before
  //the send request - presumably because they'll be 'left out' of the request and ignored
  //aka won't work

  //this sends the AJAX request to the API to 'get' the info
  ajax.send();
}
let cocktailBtn = document.getElementById("cocktailBtn");
cocktailBtn.addEventListener("click", nextCocktail);
//called the giant 'newCocktail' function declared above to show a different cocktail on click
