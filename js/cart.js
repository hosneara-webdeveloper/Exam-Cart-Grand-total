
// for home page to login page

let loginButton = document.getElementsByClassName('login');
for (let i = 0; i < loginButton.length; i++) {
    loginButton[i].addEventListener('click', function () {
        window.location.href = 'login.html';
    })
}


let match = document.getElementById('match');
match.style.display = 'none';

// for login page to cart

let cartButton = document.getElementById('login');
cartButton.setAttribute('disabled', true);


cartButton.addEventListener('click', function () {
    window.location.href = 'cart.html';

})

// 

let email = document.getElementById('inputEmail');
let password = document.getElementById('inputPassword');
let conPassword = document.getElementById('inputConfirmPassword');

conPassword.addEventListener('click', function () {
    if (password.value != 123456 || password.value != '123456') {
        alert('Apply correct password');
    }

})
password.addEventListener('click', function () {
    if (email.value != 'admin@admin.com') {
        alert('Apply correct Email');
    }

})

conPassword.addEventListener('keyup', function () {
    if (email.value == 'admin@admin.com' && (password.value == '123456' || password.value == 123456) && (conPassword.value == '123456' || conPassword.value == 123456)) {
        cartButton.removeAttribute('disabled');
    } else {
        cartButton.setAttribute('disabled', true);
    }

    if (conPassword.value == 123456 || conPassword.value == '123456') {
        match.style.display = 'none';
    } else {
        match.style.display = 'block';
    }
})


// cart page

let plus1 = document.getElementById('plus1');
let plus2 = document.getElementById('plus2');
let plus3 = document.getElementById('plus3');


let minus1 = document.getElementById('minus1');
let minus2 = document.getElementById('minus2');
let minus3 = document.getElementById('minus3');


let count1 = document.getElementById('count1');
let count2 = document.getElementById('count2');
let count3 = document.getElementById('count3');


let price1 = document.getElementById('price1');
let price2 = document.getElementById('price2');
let price3 = document.getElementById('price3');


let cart1 = document.getElementById('cart1');
let cart2 = document.getElementById('cart2');
let cart3 = document.getElementById('cart3');

let sum = document.getElementById('sum');

let grand = document.getElementById('grand');

let tax = 15;

let order = document.getElementById('order');



let totalSum = Number(price1.innerText) + Number(price2.innerText) + Number(price3.innerText);
sum.innerText = totalSum;
console.log(sum);
function cart(plus, minus, count, cart) {
    plus.addEventListener('click', function () {
        let countValue = count.value;
        countValue = parseInt(countValue);
        let result = countValue + 1;
        count.value = result;




    });

    minus.addEventListener('click', function () {
        let countValue = count.value;
        countValue = parseInt(countValue);
        let result = countValue - 1;
        count.value = result;
        if (count.value == 0 || count.value == '0') {
            cart.style.display = 'none';

        }

    })


}

cart(plus1, minus1, count1, cart1);
cart(plus2, minus2, count2, cart2);
cart(plus3, minus3, count3, cart3);



if (grand.innerText == '0.00' || grand.innerText == '0' || grand == 0) {
    order.setAttribute('disabled', true);
} else {
    order.removeAttribute('disabled');
}



grand.innerText = Number(grand.innerText) + Number(sum.innerText) * (1 + tax / 100);
grand.innerText = Number(grand.innerText).toFixed(2);

plus1.addEventListener('click', function () {
    sum.innerText = Number(sum.innerText) + 190;

    grand.innerText = Number(sum.innerText) * (1 + tax / 100);
    grand.innerText = Number(grand.innerText).toFixed(2);

    

if (grand.innerText == '0.00' || grand.innerText == '0' || grand == 0) {
    order.setAttribute('disabled', true);
} else {
    order.removeAttribute('disabled');
}



})
plus2.addEventListener('click', function () {
    sum.innerText = Number(sum.innerText) + 200;
    grand.innerText = Number(sum.innerText) * (1 + tax / 100);
    grand.innerText = Number(grand.innerText).toFixed(2);

    

if (grand.innerText == '0.00' || grand.innerText == '0' || grand == 0) {
    order.setAttribute('disabled', true);
} else {
    order.removeAttribute('disabled');
}



})
plus3.addEventListener('click', function () {
    sum.innerText = Number(sum.innerText) + 250;
    grand.innerText = Number(sum.innerText) * (1 + tax / 100);
    grand.innerText = Number(grand.innerText).toFixed(2);

    

if (grand.innerText == '0.00' || grand.innerText == '0' || grand == 0) {
    order.setAttribute('disabled', true);
} else {
    order.removeAttribute('disabled');
}



})


minus1.addEventListener('click', function () {
    sum.innerText = Number(sum.innerText) - 190;
    grand.innerText = Number(sum.innerText) * (1 + tax / 100);
    grand.innerText = Number(grand.innerText).toFixed(2);

    

if (grand.innerText == '0.00' || grand.innerText == '0' || grand == 0) {
    order.setAttribute('disabled', true);
} else {
    order.removeAttribute('disabled');
}



})
minus2.addEventListener('click', function () {
    sum.innerText = Number(sum.innerText) - 200;
    grand.innerText = Number(sum.innerText) * (1 + tax / 100);
    grand.innerText = Number(grand.innerText).toFixed(2);

    

if (grand.innerText == '0.00' || grand.innerText == '0' || grand == 0) {
    order.setAttribute('disabled', true);
} else {
    order.removeAttribute('disabled');
}



})
minus3.addEventListener('click', function () {
    sum.innerText = Number(sum.innerText) - 250;
    grand.innerText = Number(sum.innerText) * (1 + tax / 100);
    grand.innerText = Number(grand.innerText).toFixed(2);


    

if (grand.innerText == '0.00' || grand.innerText == '0' || grand == 0) {
    order.setAttribute('disabled', true);
} else {
    order.removeAttribute('disabled');
}



})
























if (grand.innerText == '0.00' || grand.innerText == '0' || grand == 0) {
    order.setAttribute('disabled', true);
} else {
    order.removeAttribute('disabled');
}
