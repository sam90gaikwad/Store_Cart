

const products = [
    {id: 1, name: "product-1", price: 100, value: 0},
    {id: 2, name: "product-2", price: 200, value: 0},
    {id: 3, name: "product-2", price: 300, value: 0},
]
//This is a addToCart fun

// let remove = document.getElementById("btnRmeove");

// remove.addEventListener("click", removeCart())


function addToCart(name,price,value){
    let div = document.getElementById('carts')
    let newDiv = document.createElement("div")  
    newDiv.innerHTML = `
    <div class="products">
    <div class="product">
    <p class="main">${name}</p>
    <p>${price}</p>
    <div class="btnSection">
        <button onclick="removeCart()" class="btnRmeove">-</button>
        <p class="count">${value}</p>
        <button onclick="removeCart()" class="btn1">+</button>
    </div>
</div>
</div>

    `
    div.append(newDiv);
}


// function removeCart(value){
//     let value1 = value;
//     value1++;
//     console.log(value1)
//     // let count = document.querySelector(".count");
//     // count.innerText = value1;
 
// }


// function newCard (productId){
//     const quantityElement = document.querySelector(`.count`);
    
//     const product = products.find(p => p.id === productId);
//     if(quantityElement && product){
//         quantityElement.innerText = product.value;
//     }
// }



// function removeCart(productId){
//     let ans = products.find(p => p.id === productId);
//     console.log(ans)
//   if(ans){
//     ans.value += 1;
//     newCard(productId)
//   }

// }




let div = document.getElementById('products')
console.log(products) 

// function call(){
    products.forEach((product) => {
        let newDiv = document.createElement("div")
        console.log(product)
        newDiv.innerHTML = `
        <div class="products">
        <div class="product">
        <p class="main">${product.name}</p>
        <p>${product.price}</p>
        <div class="btnSection">
            <button onclick="removeCart(${product.id})" class="btn1" id="removeButton">-</button>
            <p class="count" >${product.value}</p>
            <button onclick='addToCart("${product.name}",${product.price},${product.value})' class="btn2">+</button>
        </div>
    </div>
    </div>
        `;
        div.append(newDiv);
    });
// }
// call();






