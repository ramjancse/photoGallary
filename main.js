const showGalleryElem = document.getElementById('showGallery');
const nextBtnElem = document.getElementById('next');
const prevBtnElem = document.getElementById('prev');
const searchElem = document.getElementById('search');
let page = 1; 
const limit = 20;

searchElem.addEventListener('change', (event)=> {
    const searchParam = event.target.value;
    fetch(`http://localhost:3000/galary?_sort=${searchParam}`, {
    header: {
        'Access-Control-Allow-Origin':'http://localhost:3000',
    }
})
    .then((response) => response.json())
    .then((data) => {
        showGalleryElem.innerHTML = '';
        data.forEach((item) => {
            let showData  = `
            <div class="col s12 m6 l6 xl6">
            <div class="card">
                <div class="card-image" id="${item.id}" onClick=myFunction(${item.id})>
                    <img src="${item.image}" />
                </div>
                <div class="card-content truncate">
                    <h5> ${item.title} </h5>
                <p class="truncate">
                   ${item.description}
                </p>
                </div>
                <div class="card-action">
                    Rating :${item.rating}
                </div>
            </div>
            </div>
            `
            showGalleryElem.insertAdjacentHTML('afterbegin',
                showData);
        });        
    })
    .catch((error) => console.log(error));

})


function fetchData() {
    fetch(`http://localhost:3000/galary?_page=${page}&limit=${limit}`, {
    header: {
        'Access-Control-Allow-Origin':'http://localhost:3000',
    }
})
    .then((response) => response.json())
    .then((data) => {
        showGalleryElem.innerHTML = '';
        data.forEach((item) => {
            let showData  = `
            <div class="col s12 m6 l6 xl6">
            <div class="card">
                <div class="card-image" id="${item.id}" onClick=myFunction(${item.id})>
                    <img src="${item.image}" />
                </div>
                <div class="card-content truncate">
                    <h5> ${item.title} </h5>
                <p class="truncate">
                   ${item.description}
                </p>
                </div>
                <div class="card-action">
                    Rating :${item.rating}
                </div>
            </div>
            </div>
            `
            showGalleryElem.insertAdjacentHTML('afterbegin',
                showData);
        });        
    })
    .catch((error) => console.log(error));
}

fetchData();

function myFunction(id) {
    const indvID = document.getElementById(id);
    const findClass = indvID.querySelector('.imageScale');
    indvID.classList.toggle('imageScale');
}

nextBtnElem.addEventListener('click', () => {
    if (page>1) {
        prevBtnElem.classList.remove('disabled');
    }
    page += 1;
    console.log(page)
    fetchData();
    
})
prevBtnElem.addEventListener('click', () => {
    if (page == 1) {
        prevBtnElem.classList.add('disabled');    
    } else {
        page -= 1;
        console.log(page)
        fetchData();
    }
    
})