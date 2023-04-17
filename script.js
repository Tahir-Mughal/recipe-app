
const apiKey = 'c63e31148b8c4b579af0e598201ef47d';
const mainDiv = document.getElementById('showres');
// recipeApi = `https://api.spoonacular.com/recipes/${element.id}/ingredientWidget.json?apiKey=${apiKey}`

showAllData();

function showAllData() {
    let allapi = `https://api.spoonacular.com/recipes/complexSearch?number=15&apiKey=${apiKey}`
    // let recApi = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=10`


    // allData is variable/key that store all recipes data
    if (localStorage.getItem('allData') === null) {
        // console.log("if condition works");
        fetch(allapi)
            .then(response => response.json())
            .then(data => localStorage.setItem('allData', JSON.stringify(data)))
            .catch(error => console.error(error));
    }
    let data = JSON.parse(localStorage.getItem('allData'));

    // // to check the results in console
    // console.log(data);

    data.results.forEach(element => {
        let foodCard = document.createElement('div');
        // creating class named as foodCard for styling
        foodCard.classList.add('foodCard');
        // foodCard.className = 'foodCard';
        // giving id for event listeners
        foodCard.id = element.id;

        foodCard.innerHTML = `<h2 class="title">Title : ${element.title}</h2>
        <img class="img" src="${element.image}" alt="${element.title}" >
    <h4>ID : ${element.id}</h4>`
        mainDiv.appendChild(foodCard);
        // let gainid
    });


    // // kuch fazool kaam
    // console.log(data)
    // for (const key of data.re) {
    //     console.log(key);
    // }
    // newdiv.innerHTML = localStorage.getItem('searchData');

}



let searchBtn = document.getElementById('searchBtn');
searchBtn.addEventListener('click', searchfnc);
async function searchfnc() {
    mainDiv.innerHTML = "";
    var searchtxt = document.getElementById('searchInput').value;
    var search = searchtxt.toLowerCase();
    let searchApi = `https://api.spoonacular.com/recipes/complexSearch?number=15&query=${search}&apiKey=${apiKey}`

    if (localStorage.getItem(search) === null) {
        // console.log("if condition works");
        await fetch(searchApi)
            .then(response => response.json())
            .then(data => localStorage.setItem(search, JSON.stringify(data)))
            .catch(error => console.error(error));
        // newdiv.innerHTML = localStorage.getItem('searchData');
    }

    // console.log(search);
    let data = JSON.parse(localStorage.getItem(search));

    data.results.forEach(element => {
        let foodCard = document.createElement('div');
        foodCard.classList.add('foodCard');
        // foodCard.className = 'foodCard';
        foodCard.id = element.id;
        foodCard.innerHTML = `<h2>Title : ${element.title}</h2>
        <img src="${element.image}" alt="${element.title}" >
    <h4>ID : ${element.id}</h4>`
        mainDiv.appendChild(foodCard);
    });
}


// // To check recipe

// let checkrecipe = document.getElementsByClassName('foodCard');
// // console.log(checkrecipe);
// function showrecipe(id) {
//     console.log(id);
//     var recipe = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`

//     // if (localStorage.getItem('recipes') === null) {
//     //     fetch(recipe)
//     //         .then(response => response.json())
//     //         .then(data => localStorage.setItem("recipes", JSON.stringify(data)))
//     //         .catch(error => console.error(error));

//     // }
// }
// // checkrecipe is object that is being converted into array
// const array = Array.from(checkrecipe);
// array.forEach(function (elem) {
//     // console.log(elem.id);
//     elem.addEventListener("click", () => { showrecipe(elem.id) });

// }
// )


// var recipedata = JSON.parse(localStorage.getItem('recipes'));

// var allSteps = recipedata.analyzedInstructions[0].steps;
// // console.log(steps);
// allSteps.forEach(function (elem) {
//     // console.log(elem);
//     console.log(elem.step);
// })













//     {
//         var recipe = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`
//     fetch(recipe)
//             .then(response => response.json())
//             .then(data => console.log(data))
//             .catch(error => console.error(error));
//     });
// });
// // checkrecipe.addEventListener('click', showrecipe);
// checkrecipe.from(elements).forEach(function(element) {
//     element.addEventListener('click', recipe);
//     recipe.myParam =
//   });



// // For Ingredients

// let getid = JSON.parse(localStorage.getItem(636756))
// if (getid) {
//     console.log(getid)
// }
// else {
//     fetch(`https://api.spoonacular.com/recipes/636756/ingredientWidget.json?apiKey=${apiKey}`)
//         .then(response => response.json())
//         .then(data => localStorage.setItem(636756, JSON.stringify(data)))
//         .catch(error => console.error(error));


//     let data = JSON.parse(localStorage.getItem(636756))
//     console.log(data)
// }