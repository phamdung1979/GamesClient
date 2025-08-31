const freegames = document.querySelector('#free-game')

const getFreeGame = async () => {
    const response = await fetch("./data/gamefree.json");
    let data = await response.json();
    if(data){
        freegames.innerHTML = data.map(item => {
            return `
            <div class="card">
                <img src="${item.image}" class="card-img-top" alt="">
                <div class="card-body">
                    <h5 class="card-title">${item.title}</h5>
                    <p class="card-text">${item.description}</p>
                    <a href="" class="btn btn-dark">Xem chi tiết</a>
                </div>
                <div class="card-footer">
                    <small class="text-body-secondary">${item.update}</small>
                </div>
            </div>
            `
        }).join('')
    }
};

getFreeGame();