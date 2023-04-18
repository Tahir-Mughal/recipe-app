
const apiKey = 'b844906c0e934279915fe4da7590ad0d';
const mainDiv = document.getElementById('mainDiv');
showAllData();
async function showAllData() {
    let allapi = `https://api.spoonacular.com/recipes/complexSearch?number=12&apiKey=${apiKey}`


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

        foodCard.innerHTML = `<h2>${element.title}</h2>
                           <img src="${element.image}" alt="${element.title}" >
                           <h4 class="id">${element.id}</h4>`;
        mainDiv.appendChild(foodCard);

        let ingApi = `https://api.spoonacular.com/recipes/${element.id}/ingredientWidget.json?apiKey=${apiKey}`;

        if (localStorage.getItem(element.id) === null) {
            await fetch(ingApi)
                .then(response => response.json())
                .then(data => localStorage.setItem(element.id, JSON.stringify(data)))
                .catch(error => console.error(error));
        }

        let ingData = JSON.parse(localStorage.getItem(element.id));

        let ingredientsText = '';
        ingData.ingredients.forEach(element => {
            ingredientsText += element.name + ', ';
        });

        let title = document.createElement('h2');
        title.innerHTML = "Ingredients";
        foodCard.appendChild(title);

        let ingredientsPara = document.createElement('p');
        ingredientsPara.className = 'ing';
        ingredientsPara.innerHTML = ingredientsText;
        foodCard.appendChild(ingredientsPara);

        let button = document.createElement('button');
        button.innerHTML = "Click here for complete recipe";
        button.className = 'recBtn';
        foodCard.appendChild(button);

        // event listeners
        // btn=document.getElementById
        button.addEventListener('click', recFunc)

    };
}



let searchBtn = document.getElementById('searchBtn');
searchBtn.addEventListener('click', searchfnc);

async function searchfnc() {
    mainDiv.innerHTML = "";
    let searchTxt = document.getElementById('searchInput').value;
    let search = searchTxt.toLowerCase();
    let searchApi = `https://api.spoonacular.com/recipes/complexSearch?query=${search}&apiKey=${apiKey}`;

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
        foodCard.innerHTML = `<h2>${element.title}</h2>
                           <img src="${element.image}" alt="${element.title}" >
                           <h4 class="id">${element.id}</h4>`;
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
            ingredientsText += element.name + ', ';
        });

        let title = document.createElement('h2');
        title.innerHTML = "Ingredients";
        foodCard.appendChild(title);

        let ingredientsPara = document.createElement('p');
        ingredientsPara.className = 'ing';
        ingredientsPara.innerHTML = ingredientsText;
        foodCard.appendChild(ingredientsPara);

        let button = document.createElement('button');
        button.innerHTML = "Click here for complete recipe";
        button.className = 'recBtn';
        foodCard.appendChild(button);

        button.addEventListener('click', recFunc)

    }
    // document.getElementById('searchInput').innerHTML = '';
}





const recDiv = document.getElementById('recDiv');

async function recFunc() {
    mainDiv.style.display = 'none';
    // document.getElementById('nav').innerHTML = "";

    let abc = this.previousElementSibling
    let x = abc.previousElementSibling
    let z = x.previousElementSibling
    let elemId = z.innerText;
    // console.log(elemId)
    // console.log(z)
    let recipe = `https://api.spoonacular.com/recipes/${elemId}/information?apiKey=${apiKey}`;

    if (localStorage.getItem(elemId + ' rec') === null) {
        await fetch(recipe)
            .then(response => response.json())
            .then(data => localStorage.setItem(elemId + ' rec', JSON.stringify(data)))
            .catch(error => console.error(error));
    }

    let recData = JSON.parse(localStorage.getItem(elemId + ' rec'));
    // console.log(recData)

    let recCard = document.createElement('div');
    recCard.classList.add('recCard');
    // recCard.id = element.id;
    recCard.innerHTML = `<h2>Instructions:</h2> <P>${recData.instructions}</p>
                           <h2>Summary:</h2> <p>${recData.summary}</p>`;
    recDiv.appendChild(recCard);

    let closeBtn = document.getElementById('clsBtn')
    closeBtn.addEventListener('click', closeFun)

    recDiv.style.display = 'flex'
}
function closeFun() {
    mainDiv.style.display = 'flex';
    // document.getElementById('nav').style.display = "flex";
    // recDiv.style.display = 'none';
    recDiv.innerHTML = ""
    // document.getElementById('2ndDiv').innerHTML = ''


}


