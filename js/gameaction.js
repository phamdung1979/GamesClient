const actiongames = document.querySelector('#action-game')

const getActionGame = async () => {
    const response = await fetch("./data/gameaction.json");
    let data = await response.json();
    if(data){
        actiongames.innerHTML = data.map(item => {
            return `
            <div class="col">
                <div class="card card-inside h-100">
                    <img src="${item.image}" class="card-img-top" alt="${item.title}">
                    <div class="card-body">
                        <a class="card-title" href="./game_detail.html?id=${item.id}"><h3>${item.title}</h3></a>
                        <p class="card-text">${item.description}</p>
                    </div>
                </div>
            </div>
            `
        }).join('')
    }
};

getActionGame();