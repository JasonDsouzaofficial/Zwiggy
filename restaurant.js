// creating a JS Object array for food items
var food_items=[
    {
        fId: "F01",
        fName: "Green Egg Salad",
        fIngred: "Egg/Paneer/Springle/Pepper",
        fCateg: "Vegetarian",
        fPrice: 85,
        fImageUrl: "./images/food1.jpg",
        fQnty: 0,
    },
    {
        fId: "F02",
        fName: "Veg Fried Rice",
        fIngred: "Rice/Broccoli/Bread",
        fCateg: "Vegetarian",
        fPrice: 100,
        fImageUrl: "./images/food2.jpg",
        fQnty: 0,
    },
    {
        fId: "F03",
        fName: "Jeera Rice & Bread",
        fIngred: "Jeera/Rice/Bread",
        fCateg: "Vegetarian",
        fPrice: 200,
        fImageUrl: "./images/food3.jpg",
        fQnty: 0,
    },
    {
        fId: "F04",
        fName: "Veg Machurian",
        fIngred: "Machurian/Garlic Dip",
        fCateg: "Vegetarian",
        fPrice: 250,
        fImageUrl: "./images/food4.jpg",
        fQnty: 0,
    },
    {
        fId: "F05",
        fName: "Fried Steak",
        fIngred: "Steak/Pepper/Sauce",
        fCateg: "Non Vegetarian",
        fPrice: 450,
        fImageUrl: "./images/food5.jpg",
        fQnty: 0,
    },
    {
        fId: "F06",
        fName: "Fish Fingers",
        fIngred: "Fish/Carrots/Meat",
        fCateg: "Non Vegetarian",
        fPrice: 550,
        fImageUrl: "./images/food6.jpg",
        fQnty: 0,
    },
    {
        fId: "F07",
        fName: "Oyster",
        fIngred: "Oyster/Corriander/Lemon",
        fCateg: "Non Vegetarian",
        fPrice: 650,
        fImageUrl: "./images/food7.jpg",
        fQnty: 0,
    },
    {
        fId: "F08",
        fName: "Fried Prawns",
        fIngred: "Prawns/Pepper/Garlic",
        fCateg: "Non Vegetarian",
        fPrice: 750,
        fImageUrl: "./images/food8.jpg",
        fQnty: 0,
    },
    {
        fId: "F09",
        fName: "Dal Khichdi",
        fIngred: "Dal/Rice/Bread Crumbs",
        fCateg: "Vegetarian",
        fPrice: 200,
        fImageUrl: "./images/food9.jpg",
        fQnty: 0,
    },
    {
        fId: "F10",
        fName: "Gravy Rice",
        fIngred: "Gravy/Noodle Sticks/Soup",
        fCateg: "Vegetarian",
        fPrice: 330,
        fImageUrl: "./images/food10.jpg",
        fQnty: 0,
    },
    {
        fId: "F11",
        fName: "Chicken Pizza",
        fIngred: "Chicken/Jalapeno/Capsicum",
        fCateg: "Non Vegetarian",
        fPrice: 450,
        fImageUrl: "./images/food11.jpg",
        fQnty: 0,
    },
    {
        fId: "F12",
        fName: "Pulao",
        fIngred: "Rice/Potato/Masala",
        fCateg: "Vegetarian",
        fPrice: 390,
        fImageUrl: "./images/food12.jpg",
        fQnty: 0
    }
];

//creating user cart empty map
var user_cart = new Map();

var best_seller = localStorage.getItem('best_seller');
if(best_seller==null){
    var best_seller = [
        {fId: 'F01', fCount: 0},
        {fId: 'F02', fCount: 0},
        {fId: 'F03', fCount: 0},
        {fId: 'F04', fCount: 0},
        {fId: 'F05', fCount: 0},
        {fId: 'F06', fCount: 0},
        {fId: 'F07', fCount: 0},
        {fId: 'F08', fCount: 0},
        {fId: 'F09', fCount: 0},
        {fId: 'F010', fCount: 0},
        {fId: 'F011', fCount: 0},
        {fId: 'F012', fCount: 0}
    ];

    localStorage.setItem('best_seller', JSON.stringify(best_seller));
}
//else{
//     loadBestSellerTags();
// }







//loading food items on home page
var food_items_main_container = document.getElementsByClassName('food-items-main-container')[0];

//Accessing food-item-main-container

for( var food of food_items){
    //creating food-item-container div
    var food_item_container = document.createElement('div');
    food_item_container.setAttribute('class','food-item-container');
    food_item_container.setAttribute('id',food.fId);

    //creating food image
    var food_image = document.createElement('img');
    food_image.setAttribute('src',food.fImageUrl);

    //creating food name heading using h3
    var food_name = document.createElement('h3');
    food_name.innerText = food.fName;
    food_name.setAttribute('class','food-name');

    //creating food item discount tag
    var food_item_discount_tag = document.createElement('div');
    food_item_discount_tag.setAttribute('class','food-item-discount-tag');
    if(food.fCateg == "Vegetarian"){
       food_item_discount_tag.innerText = '20% Off';
    }else{
      food_item_discount_tag.innerText = '25% Off';
    }
    
    //creating best-seller side-banner for food-item-container
    var best_seller_tag = document.createElement('div');
    best_seller_tag.innerText = "Best Seller";
    best_seller_tag.setAttribute('class', 'nobest-seller-tag');

    //creating food ingredients
    var food_ingred = document.createElement('p');
    food_ingred.setAttribute('class', 'ingred');
    food_ingred.innerText = food.fIngred;

    //creating food category
    var food_category = document.createElement('p');
    if(food.fCateg == "Vegetarian"){
        food_category.setAttribute('class','category-green');
    }
    else{
        food_category.setAttribute('class', 'category-red');
    }
    food_category.innerText = food.fCateg;

    // creating food price p tag
    var food_price =  document.createElement('p')
    food_price.setAttribute('class','price')
    var disc = 0
    if(food.fCateg=='Vegetarian') {
        disc = food.fPrice*0.8 // 20%discount
    }else {
        disc = food.fPrice*0.75 // 25%discount
    }
    food_price.innerHTML = "<span class='original-price'>$"+food.fPrice+"</span><span class='discounted-price'>$"+Math.round(disc)+"</span>"
    
    // creating add-to-cart-btn
    
    var add_to_cart_btn = document.createElement('button');
    add_to_cart_btn.innerText = 'ADD TO CART';
    add_to_cart_btn.setAttribute('class','add-to-cart-btn');

    // binding click event on add-to-cart-btn
    add_to_cart_btn.addEventListener('click',function(){
        addToCart(this);
    });
    
    /* ADDING ABOVE ITEMS TO food-item-container*/
    food_item_container.appendChild(food_item_discount_tag);
    food_item_container.appendChild(best_seller_tag);
    food_item_container.appendChild(food_image);
    food_item_container.appendChild(food_name);
    food_item_container.appendChild(food_ingred);
    food_item_container.appendChild(food_category);
    food_item_container.appendChild(food_price);
    food_item_container.appendChild(add_to_cart_btn);
    
    
    food_items_main_container.appendChild(food_item_container);
}

loadBestSellerTags();




//creating a function to open cart

function openCart(){
    var cart_main_container = document.getElementsByClassName('user-cart-container')[0];
    cart_main_container.style.display = 'block';
}

function closeCart(){
    var cart_main_container = document.getElementsByClassName('user-cart-container')[0];
    cart_main_container.style.display = 'none';
}

function addToCart(btn){
    var audio = new Audio('./audios/add.mp3');
    audio.play();
    var foodId = btn.parentNode.getAttribute('id');
    var foodObj={};
    if(user_cart.size==0){
      for(var fObj of food_items){
        if(fObj.fId == foodId){
            foodObj = fObj;
            foodObj.fQnty = 1;
            user_cart.set(foodId, foodObj);
        }
      }
        
    }else{
        if(user_cart.has(foodId)){
            foodObj = user_cart.get(foodId);
            foodObj.fQnty = foodObj.fQnty+1;
            user_cart.set(foodId, foodObj);
         
        }else{
            for(var fObj of food_items){
                if(fObj.fId == foodId){
                    foodObj = fObj;
                    foodObj.fQnty += 1;
                    user_cart.set(foodId, foodObj);
                }
            }
        }
     
    }
displayToaster(foodObj);
loadItemsInCart();
updateBestSeller(foodId);

}



// function loadItemsInCart(){
//     var cart_main_container = document.getElementsByClassName('user-cart-container')[0];
//     var user_cart_main = document.getElementsByClassName('user-cart-main')[0];
//     //cart_main_container.innerHTML = "";
//     user_cart_main.innerHTML = "";
//     var cartCount=0;

//     if(user_cart.size == 0){
//         var cart_count = document.getElementsByClassName('cart-count')[0];
//         cart_count.innerText = cartCount;
//         user_cart_main.innerHTML = "No Items in cart";
//     }

//     for(var [k, food] of user_cart){
//         var cartTable = document.createElement('table');
//         var cartRow = document.createElement('tr');
//         cartRow.setAttribute('class','cart-row')
//         var cartCol1 = document.createElement('td'); 
//         //creating food image
//         var cartItemImg = document.createElement('img');
//         cartItemImg.setAttribute('src',food.fImageUrl);
//         cartItemImg.innerHTML = cartItemImg;
//         cartCol1.appendChild(cartItemImg);

//         //creating cart item name
//         var cartCol2 = document.createElement('td');
//         var cartItemName = document.createElement('span');
//         cartItemName.innerHTML = food.fName;
//         cartCol2.appendChild(cartItemName);

//         //creating cart item price
//         var cartCol3 = document.createElement('td');
//         var cartItemPrice = document.createElement('span');
//         cartItemPrice.innerText = food.fPrice;
//         cartCol3.appendChild(cartItemPrice);

//         //creating cart item quantity
//         var cartCol4 = document.createElement('td');
//         var cartItemQnty = document.createElement('span');
//         cartItemQnty.innerText = food.fQnty;
//         cartCol4.appendChild(cartItemQnty);

//         //creating cart item delete button
//         var cartCol5 = document.createElement('td');
//         var cartDeleteBtn = document.createElement('button');
//         cartDeleteBtn.innerText = "Delete";
//         cartDeleteBtn.setAttribute('id',food.fId);
//         cartDeleteBtn.addEventListener('click', function(){
//             deleteItem(this);
//         });
//         cartCol5.appendChild(cartDeleteBtn);

//         //appending all columns in cart row
//         cartRow.appendChild(cartCol1);
//         cartRow.appendChild(cartCol2);
//         cartRow.appendChild(cartCol3);
//         cartRow.appendChild(cartCol4);
//         cartRow.appendChild(cartCol5);
        
//         cartTable.appendChild(cartRow);
//         user_cart_main.appendChild(cartTable);
//         cartCount+= food.fQnty;
//         var cart_count = document.getElementsByClassName('cart-count')[0];
//         cart_count.innerText = cartCount;
//         findCartTotal();

//     }
    
// } 

// // find cart total
// function findCartTotal(){
//     var cartTotal = 0;
//     for(var [k, food] of user_cart){
//         cartTotal += food.fPrice* food.fQnty;
//     }
//     var cart_total_price = document.getElementsByClassName('cart-total-price')[0];
//     cart_total_price.innerText = cartTotal;
    
// }

// function deleteItem(deleteBtn){
//     var audio = new Audio('./audios/delete.mp3');
//     audio.play();
//     var foodId = deleteBtn.getAttribute('id');
//     if(user_cart.has(foodId)){
//         user_cart.delete(foodId);
//     }
//     loadItemsInCart();
//     findCartTotal();

// }


//CODE WITH INCREMENT AND DECREMENT BUTTONS ADDED




function loadItemsInCart(){
    var cart_main_container = document.getElementsByClassName('user-cart-container')[0];
    var user_cart_main = document.getElementsByClassName('user-cart-main')[0];
    user_cart_main.innerHTML = "";
    var cartCount=0;

    if(user_cart.size == 0){
        var cart_count = document.getElementsByClassName('cart-count')[0];
        cart_count.innerText = cartCount;
        user_cart_main.innerHTML = "No Items in cart";
        return; // Return early if the cart is empty
    }

    user_cart.forEach((food, foodId) => {
        var cartTable = document.createElement('table');
        var cartRow = document.createElement('tr');
        cartRow.setAttribute('class','cart-row')
        var cartCol1 = document.createElement('td'); 
        //creating food image
        var cartItemImg = document.createElement('img');
        cartItemImg.setAttribute('src',food.fImageUrl);
        cartCol1.appendChild(cartItemImg);

        //creating cart item name
        var cartCol2 = document.createElement('td');
        var cartItemName = document.createElement('span');
        cartItemName.innerHTML = food.fName;
        cartCol2.appendChild(cartItemName);

        //creating cart item price
        var cartCol3 = document.createElement('td');
        var cartItemPrice = document.createElement('span');
        cartItemPrice.innerText = food.fPrice;
        cartCol3.appendChild(cartItemPrice);

        //creating cart item quantity with increment and decrement buttons
        var cartCol4 = document.createElement('td');
        var decrementBtn = document.createElement('button');
        decrementBtn.innerText = "-";
        decrementBtn.setAttribute('class', 'quantity-btn');
        decrementBtn.addEventListener('click', function(){
            updateQuantity(foodId, -1);
        });

        var cartItemQnty = document.createElement('span');
        cartItemQnty.innerText = food.fQnty;
        cartItemQnty.setAttribute('class', 'item-quantity');

        var incrementBtn = document.createElement('button');
        incrementBtn.innerText = "+";
        incrementBtn.setAttribute('class', 'quantity-btn');
        incrementBtn.addEventListener('click', function(){
            updateQuantity(foodId, 1);
        });

        cartCol4.appendChild(decrementBtn);
        cartCol4.appendChild(cartItemQnty);
        cartCol4.appendChild(incrementBtn);

        //creating cart item delete button
        var cartCol5 = document.createElement('td');
        var cartDeleteBtn = document.createElement('button');
        cartDeleteBtn.innerText = "Delete";
        cartDeleteBtn.setAttribute('id',foodId);
        cartDeleteBtn.addEventListener('click', function(){
            deleteItem(this);
        });
        cartCol5.appendChild(cartDeleteBtn);

        //appending all columns in cart row
        cartRow.appendChild(cartCol1);
        cartRow.appendChild(cartCol2);
        cartRow.appendChild(cartCol3);
        cartRow.appendChild(cartCol4);
        cartRow.appendChild(cartCol5);
        
        cartTable.appendChild(cartRow);
        user_cart_main.appendChild(cartTable);
        cartCount += food.fQnty;
    });

    var cart_count = document.getElementsByClassName('cart-count')[0];
    cart_count.innerText = cartCount;
    findCartTotal();
}

function updateQuantity(foodId, change){
    if(user_cart.has(foodId)){
        var food = user_cart.get(foodId);
        food.fQnty += change;
        if (food.fQnty < 1) {
            food.fQnty = 1; // Ensure the quantity doesn't drop below 1
        }
        user_cart.set(foodId, food);
    }
    loadItemsInCart();
    findCartTotal();
}

function findCartTotal(){
    var cartTotal = 0;
    user_cart.forEach(food => {
        cartTotal += food.fPrice * food.fQnty;
    });
    var cart_total_price = document.getElementsByClassName('cart-total-price')[0];
    cart_total_price.innerText = cartTotal;
}

function deleteItem(deleteBtn){
    var audio = new Audio('./audios/delete.mp3');
    audio.play();
    var foodId = deleteBtn.getAttribute('id');
    if(user_cart.has(foodId)){
        user_cart.delete(foodId);
    }
    loadItemsInCart();
    findCartTotal();
}
























function displayToaster(foodObj){
    var toaster = document.getElementsByClassName('toaster')[0];
   toaster.innerText = foodObj.fName+" added to cart!";
   toaster.style.display = 'block'; 

   setTimeout(() =>{
    toaster.style.display = 'none';
   }, 1500);
}




//function to store local storage of best sellers
function updateBestSeller(fId){
    var best_seller = JSON.parse(localStorage.getItem('best_seller'));

    var bestSeller = {};
    for(var index in best_seller){
        if(best_seller[index].fId == fId){
            bestSeller = best_seller[index];
            bestSeller.fCount += 1;
            best_seller[index] = bestSeller;
        }
    }
    localStorage.setItem('best_seller', JSON.stringify(best_seller));
}



function loadBestSellerTags(){
    var best_sellers = JSON.parse(localStorage.getItem('best_seller'));

    for(var best of best_sellers){
        if(best.fCount > 5){
            console.log(best.fId);
            var cart_item_con = document.getElementById(best.fId);
            cart_item_con.children[1].setAttribute('class','best-seller-tag');

        }
    }
    loadItemsInCart();
}


//play backgrounf sound
window.addEventListener('load', function() {
    var music = document.getElementById('background-music');
    var playButton = document.getElementById('play-button');
    
    var playMusic = confirm("Do you want to play music?");
    if (playMusic) {
        playButton.style.display = 'block'; // Show the button if the user clicks "OK"
    }

    playButton.addEventListener('click', function() {
        music.play().then(() => {
            playButton.style.display = 'none'; // Hide the button after playing
        }).catch(function(error) {
            console.log('Playback error:', error);
        });
    });
});