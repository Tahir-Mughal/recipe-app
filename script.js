
const apiKey = 'd2d71685649644f4a35b27d7e43b22ad';
const mainDiv = document.getElementById('showres');
// ingApi = `https://api.spoonacular.com/recipes/${element.id}/ingredientWidget.json?apiKey=${apiKey}`

showAllData();

// function showAllData() {
//     let allapi = `https://api.spoonacular.com/recipes/complexSearch?number=15&apiKey=${apiKey}`



//     // allData is variable/key that store all recipes data
//     if (localStorage.getItem('allData') === null) {
//         // console.log("if condition works");
//         fetch(allapi)
//             .then(response => response.json())
//             .then(data => localStorage.setItem('allData', JSON.stringify(data)))
//             .catch(error => console.error(error));
//     }
//     let data = JSON.parse(localStorage.getItem('allData'));

//     // // to check the results in console
//     // console.log(data);

//     // data.results.forEach(element => {
//     for (const element of data.results) {
//         let foodCard = document.createElement('div');
//         // creating class named as foodCard for styling
//         foodCard.classList.add('foodCard');
//         // foodCard.className = 'foodCard';
//         // giving id for event listeners
//         foodCard.id = element.id;

//         foodCard.innerHTML = `<h2>Title : ${element.title}</h2>
//                            <img src="${element.image}" alt="${element.title}" >
//                            <h4>ID : ${element.id}</h4>`;
//         mainDiv.appendChild(foodCard);
//         // let gainid
//         let recApi = `https://api.spoonacular.com/recipes/${element.id}/ingredientWidget.json?apiKey=${apiKey}`;

//         if (localStorage.getItem(search + element.id) === null) {
//             await fetch(recApi)
//                 .then(response => response.json())
//                 .then(data => localStorage.setItem(search + element.id, JSON.stringify(data)))
//                 .catch(error => console.error(error));
//         }

//         let ingData = JSON.parse(localStorage.getItem(search + element.id));

//         let ingredientsText = '';
//         ingData.ingredients.forEach(element => {
//             ingredientsText += element.name + ' ,';
//         });

//         let title = document.createElement('h2');
//         title.innerHTML = "Ingredients";
//         foodCard.appendChild(title);

//         let ingredientsPara = document.createElement('p');
//         ingredientsPara.className = 'ing';
//         ingredientsPara.innerHTML = ingredientsText;
//         foodCard.appendChild(ingredientsPara);

//     };


//     // // kuch fazool kaam
//     // console.log(data)
//     // for (const key of data.re) {
//     //     console.log(key);
//     // }
//     // newdiv.innerHTML = localStorage.getItem('searchData');

// }


async function showAllData() {
    let allapi = `https://api.spoonacular.com/recipes/complexSearch?number=15&apiKey=${apiKey}`

    if (localStorage.getItem('allData') === null) {
        await fetch(allapi)
            .then(response => response.json())
            .then(data => localStorage.setItem('allData', JSON.stringify(data)))
            .catch(error => console.error(error));
    }
    let data = JSON.parse(localStorage.getItem('allData'));

    for (const element of data.results) {
        let foodCard = document.createElement('div');
        foodCard.classList.add('foodCard');
        foodCard.id = element.id;

        foodCard.innerHTML = `<h2>Title : ${element.title}</h2>
                           <img src="${element.image}" alt="${element.title}" >
                           <h4>ID : ${element.id}</h4>`;
        mainDiv.appendChild(foodCard);

        let recApi = `https://api.spoonacular.com/recipes/${element.id}/ingredientWidget.json?apiKey=${apiKey}`;

        if (localStorage.getItem(element.id) === null) {
            await fetch(recApi)
                .then(response => response.json())
                .then(data => localStorage.setItem(element.id, JSON.stringify(data)))
                .catch(error => console.error(error));
        }

        let ingData = JSON.parse(localStorage.getItem(element.id));

        let ingredientsText = '';
        ingData.ingredients.forEach(element => {
            ingredientsText += element.name + ' ,';
        });

        let title = document.createElement('h2');
        title.innerHTML = "Ingredients";
        foodCard.appendChild(title);

        let ingredientsPara = document.createElement('p');
        ingredientsPara.className = 'ing';
        ingredientsPara.innerHTML = ingredientsText;
        foodCard.appendChild(ingredientsPara);

    };
}




// let searchBtn = document.getElementById('searchBtn');
// searchBtn.addEventListener('click', searchfnc);
// async function searchfnc() {
//     mainDiv.innerHTML = "";
//     var searchtxt = document.getElementById('searchInput').value;
//     var search = searchtxt.toLowerCase();
//     let searchApi = `https://api.spoonacular.com/recipes/complexSearch?number=15&query=${search}&apiKey=${apiKey}`

//     if (localStorage.getItem(search) === null) {
//         // console.log("if condition works");
//         await fetch(searchApi)
//             .then(response => response.json())
//             .then(data => localStorage.setItem(search, JSON.stringify(data)))
//             .catch(error => console.error(error));
//         // newdiv.innerHTML = localStorage.getItem('searchData');
//     }

//     // console.log(search);
//     let searchData = JSON.parse(localStorage.getItem(search));

//     searchData.results.forEach(element => {
//         let foodCard = document.createElement('div');
//         foodCard.classList.add('foodCard');
//         // foodCard.className = 'foodCard';
//         foodCard.id = element.id;
//         foodCard.innerHTML = `<h2>Title : ${element.title}</h2>
//         <img src="${element.image}" alt="${element.title}" >
//     <h4>ID : ${element.id}</h4>`
//         mainDiv.appendChild(foodCard);



//         let recApi = `https://api.spoonacular.com/recipes/${element.id}/ingredientWidget.json?apiKey=${apiKey}`

//         if (localStorage.getItem(search + `${element.id}`) === null) {
//             // console.log("if condition works");
//             fetch(recApi)
//                 .then(response => response.json())
//                 .then(data => localStorage.setItem(search + `${element.id}`, JSON.stringify(data)))
//                 .catch(error => console.error(error));
//         }

//         let ingData = JSON.parse(localStorage.getItem(search + `${element.id}`));

//         // ingData.ingredients.forEach(element => {
//         //     let Ingredients = document.createElement('p');
//         //     Ingredients.className = 'ing';


//         //     Ingredients.innerHTML = element.name;
//         //     foodCard.appendChild(Ingredients);
//         // })


//         let ingredientsText = '';
//         ingData.ingredients.forEach(element => {
//             ingredientsText += element.name + ' ,';
//         });

//         let title = document.createElement('h2');
//         title.innerHTML = "Ingredients";
//         foodCard.appendChild(title);

//         let ingredientsPara = document.createElement('p');
//         ingredientsPara.className = 'ing';
//         ingredientsPara.innerHTML = ingredientsText;
//         foodCard.appendChild(ingredientsPara);

//     });
// }

let searchBtn = document.getElementById('searchBtn');
searchBtn.addEventListener('click', searchfnc);

async function searchfnc() {
    mainDiv.innerHTML = "";
    let searchTxt = document.getElementById('searchInput').value;
    let search = searchTxt.toLowerCase();
    let searchApi = `https://api.spoonacular.com/recipes/complexSearch?number=15&query=${search}&apiKey=${apiKey}`;

    if (localStorage.getItem(search) === null) {
        await fetch(searchApi)
            .then(response => response.json())
            .then(data => localStorage.setItem(search, JSON.stringify(data)))
            .catch(error => console.error(error));
    }

    let searchData = JSON.parse(localStorage.getItem(search));

    for (const element of searchData.results) {
        let foodCard = document.createElement('div');
        foodCard.classList.add('foodCard');
        foodCard.id = element.id;
        foodCard.innerHTML = `<h2>Title : ${element.title}</h2>
                           <img src="${element.image}" alt="${element.title}" >
                           <h4>ID : ${element.id}</h4>`;
        mainDiv.appendChild(foodCard);

        let recApi = `https://api.spoonacular.com/recipes/${element.id}/ingredientWidget.json?apiKey=${apiKey}`;

        if (localStorage.getItem(search + element.id) === null) {
            await fetch(recApi)
                .then(response => response.json())
                .then(data => localStorage.setItem(search + element.id, JSON.stringify(data)))
                .catch(error => console.error(error));
        }

        let ingData = JSON.parse(localStorage.getItem(search + element.id));

        let ingredientsText = '';
        ingData.ingredients.forEach(element => {
            ingredientsText += element.name + ' ,';
        });

        let title = document.createElement('h2');
        title.innerHTML = "Ingredients";
        foodCard.appendChild(title);

        let ingredientsPara = document.createElement('p');
        ingredientsPara.className = 'ing';
        ingredientsPara.innerHTML = ingredientsText;
        foodCard.appendChild(ingredientsPara);
    }
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



// let data = JSON.parse(localStorage.getItem(636756))
// console.log(data)
// }
