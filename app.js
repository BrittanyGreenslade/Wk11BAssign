//For an API like this, that has different amounts of info each time, how could you
//make it more dynamic so you can account for some cocktails having 2 ingredients
//and some having like 10 or something?
// let ajax;
function nextCocktail() {
  let ajax = new XMLHttpRequest();
  ajax.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
      let responseTextObject = JSON.parse(this.responseText);
      //   console.log(responseTextObject);
      document.getElementById("loading").style.display = `block`;
      let cocktails = responseTextObject.drinks;
      document.getElementById("loading").style.display = `none`;

      for (i = 0; i < cocktails.length; i++) {
        let cocktail = cocktails[i];
        console.log(cocktail);
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

        //uhm there HAS to be a better way to do this involving classes that I'm going to
        //try and figure out but my brain is tired of loops after trying to figure out
        //how to get into the object within the array within the object for this
        //so plz forgive me
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
  ajax.open(
    "GET",
    "https://www.thecocktaildb.com/api/json/v1/1/random.php",
    true
  );

  ajax.onloadstart = function loading() {
    document.getElementById("loading").innerHTML = `<h2>Loading...</h2>`;
    document.getElementById("loading").style.display = `block`;
  };

  ajax.send();
  //I think this is how to set on error but I can't figure out how to make it work
  ajax.onerror = function () {
    document.getElementById(
      "loading"
    ).innerHTML = `<h2>ERROR 404: Drink water instead</h2>`;
  };
}
let cocktailBtn = document.getElementById("cocktailBtn");
cocktailBtn.addEventListener("click", nextCocktail);
//also something is showing up undefined in the console and I don't know what? because
// everything appears to be working
