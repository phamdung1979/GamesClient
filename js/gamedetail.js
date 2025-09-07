const detailContainer = document.querySelector(".detail-container");
const btnAddCart = document.getElementById("addcart")

const getDetailProduct = async () => {
    const path = new URLSearchParams(window.location.search);

    const productId = path.get("id");

    const response = await fetch("./data/games.json");

    const data = await response.json();

    const item = data.find(item => item.id.toString() === productId.toString());

    detailContainer.innerHTML = `
        <div class="container-xxl text-centre game-title">
            <div class="row">
                <div class="col game-img">
                    <img src="${item.image}" alt="${item.title}" width="800px">
                </div>
                <div class="col game-info">
                    <h3>${item.gamename}</h3>
                    <p>${item.description}</p>
                    <h6>Ngày phát hành: ${item.date}</h6>
                    <h6>Nhà phát triển: ${item.developer}</h6>
                    <h6>Nhà phát hành: ${item.publisher}</h6>
                    <h5>Dành cho lứa tuổi: ${item.agerequire}+</h5>
                    <h4>Giá bán: ${item.price}</h4>
                    <button type="button" class="btn btn-lg btn-success">Mua ngay</button>
                </div>
            </div>
        </div>
        <div class="container-xxl text-centre buy-button">
            <div class="row">
                <div class="col buy-game">
                    <button type="button" class="btn btn-lg btn-primary" id="addcart">Thêm vào giỏ hàng</button>
                    <button type="button" class="btn btn-lg btn-primary">Thêm vào danh sách ước</button>
                    <button type="button" class="btn btn-lg btn-primary">Theo dõi</button>
                    <button type="button" class="btn btn-lg btn-primary">Phớt lờ</button>
                </div>
            </div>
        </div>
        <div class="container-xxl text-centre game-detail">
            <div class="row">
                <div class="col">
                    <h3>Yêu cầu hệ thống</h3>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <p>HĐH: ${item.req.os}</p>
                    <p>CPU: ${item.req.cpu}</p>
                    <p>RAM: ${item.req.ram}</p>
                    <p>Đồ hoạ: ${item.req.graphic}</p>
                    <p>Âm thanh: ${item.req.sound}</p>
                    <p>Lưu trữ: ${item.req.storage} chỗ trống khả dụng</p>
                </div>
            </div>
        </div>
    `;

    // btnAddCart.addEventListener("click", ()=>{
    //     const cart = JSON.parse(localStorage.getItem("cart"));
    //     if(cart){
    //         const add = cart.findIndex(item => add.id === item.id);
    //         if(add!==-1){
    //             cart[add].count += 1;
    //         }else{
    //             cart.push({id: item.id, count: 1})
    //         };
    //         localStorage.setItem("cart", JSON.stringify(cart))
    //     }else{
    //         const cart = [
    //             {
    //                 id: item.id,
    //                 count: 1
    //             }
    //         ];
    //         localStorage.setItem("cart", JSON.stringify(cart))
    //     }
    // })
};

getDetailProduct();