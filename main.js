const showGalleryElem = document.getElementById('showGallery');
fetch('http://localhost:3000/galary/')
    .then((response) => response.json())
    .then((data) => {
        showGalleryElem.innerHTML = '';
        data.forEach((item) => {
            let showData  = `
            <div class="col s12 m6 l4 xl3">
            <div class="card">
                <div class="card-image">
                    <img src="${item.image}" />
                </div>
                <div class="card-content">
                    <h5> ${item.title} </h5>
                <p>
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