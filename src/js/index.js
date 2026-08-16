console.log('Привет, я на главной странице');
console.log("Скрипт успешно подключен к этой странице!");


let currentProduct=0;

const products = [
    {
        name:"Сёрфборд OceanRider — Aqua Vortex Pro-V1",
        description:"Динамичный шортборд с гипнотическим этническим орнаментом морских волн. Создан для сёрферов, ценящих глубокую связь с океаном, быстрый разгон на гребне и идеальный контроль над траекторией скольжения.",
        features:"Усиленный центральный стрингер, геометрия хвоста Swallow Tail для резких разворотов, водоотталкивающее матовое покрытие и трёхплавниковая система Thruster с кастомным океанским принтом.",
        rating:"4",
        votes:"25",
        price: 28750,
        images:[
            "./src/img/d1-1.png",
            "./src/img/d1-2.png",
            "./src/img/d1-3.png",
            "./src/img/d1-4.png",
            "./src/img/d1-5.png"
        ]
    }, 

    {
        name:"Сёрфборд OceanRider — Rebel Wave Street-Edition",
        description:"Дерзкая модель в стиле уличной граффити-культуры. Матовый чёрный корпус с сочными неоновыми тэгами ярко выделяется на воде и на берегу, подчёркивая ваш бескомпромиссный стиль и свободу.",
        features:"Износостойкий верхний слой от царапин и сколов, встроенная фактурная зона сцепления, сверхлёгкий сердечник EPS и гибкие съёмные плавники, оформленные авторскими стрит-арт тэгами.",
        rating:"5",
        votes:"71",
        price: 48990,
        images:[
            "./src/img/d2-1.png",
            "./src/img/d2-2.png",
            "./src/img/d2-3.png",
            "./src/img/d2-4.png",
            "./src/img/d2-5.png"
        ]
    }, 
    {
        name:"Сёрфборд OceanRider — Pop Bloom Retro-X",
        description:"Сочная ретро-доска в стиле поп-арт с сиреневым фоном и яркими жёлтыми цветами. Объединяет винтажную эстетику пляжной свободы с отличными гидродинамическими свойствами для катания в удовольствие.",
        features:"Расширенный нос (Nose) для лёгкого выгребания на волну, сглаженные канты для мягкого карвинга, защитный лак с UV-фильтром от выгорания на солнце и стильные тематические плавники.",
        rating:"5",
        votes:"37",
        price: 27900,
        images:[
            "./src/img/d3-1.png",
            "./src/img/d3-2.png",
            "./src/img/d3-3.png",
            "./src/img/d3-4.png",
            "./src/img/d3-5.png"
        ]

    }, 
    {
        name:"Сёрфборд OceanRider — Super Strike Blam-Edition",
        description:"Взрывная комикс-доска в ярко-жёлтых тонах с молниями и супергеройской графикой. Создана для любителей высокой скорости и экстрима, готовых совершать супергеройские трюки на самых крутых волнах.",
        features:"Двойной конкейв на днище для взрывного ускорения, ударопрочный многослойный ламинат из стекловолокна, усиленные канты и универсальная конфигурация под 3 или 4 плавника.",
        rating:"4",
        votes:"12",
        price: 22500,
        images:[
            "./src/img/d4-1.png",
            "./src/img/d4-2.png",
            "./src/img/d4-3.png",
            "./src/img/d4-4.png",
            "./src/img/d4-5.png"
        ]

    }, 
    {
        name:"Сёрфборд OceanRider — Royal Breeze Luxe-V",
        description:"Элегантная премиум-доска с текстурой белого мрамора, золотистыми прожилками цвета шампань и нежными розами. Выбор для тех, кто ценит эстетическое совершенство и плавный, грациозный ход по воде.",
        features:"Декоративный стрингер из натурального тёмного дерева, бесшовное глянцевое покрытие «Chrono-Glaze», мягкий рокер для комфортного скольжения и изящные плавники с мраморным рисунком.",
        rating:"5",
        votes:"7",
        price: 36990,
        images:[
            "./src/img/d5-1.png",
            "./src/img/d5-2.png",
            "./src/img/d5-3.png",
            "./src/img/d5-4.png",
            "./src/img/d5-5.png"
        ]

    }
];

const descriptionTab = document.querySelector(".tabs .descriptionTab a"); 
const featuresTab = document.querySelector(".tabs .featuresTab a"); 

const productName = document.querySelector(".hero .productCard .productName"); 
const description = document.querySelector("#descriptionTab"); 
const features = document.querySelector("#featuresTab"); 
const votes = document.querySelector(".hero .productCard .rating small"); 
const price = document.querySelector(".hero .productCard .commercial .price"); 
const previewPictures = document.querySelector(".hero .productCard .previewPictures");
const picture = document.querySelector(".hero .productCard .picture img");

console.log(descriptionTab); 
descriptionTab.addEventListener("click", function(e){
//    console.log(e);
features.classList.remove('selected');
description.classList.add('selected');
});
featuresTab.addEventListener("click", function(e){
//    console.log(e);
features.classList.add('selected');
description.classList.remove('selected');
});

window.getVoicesText = function (
  count,
  forms = ["голос", "голоса", "голосов"],
) {
  // Особый случай для чисел 11–19: всегда «голосов»
  if (count % 100 >= 11 && count % 100 <= 19) {
    return forms[2];
  }

  const lastDigit = count % 10;

  let index;
  if (lastDigit === 1) {
    index = 0; // голос
  } else if (lastDigit >= 2 && lastDigit <= 4) {
    index = 1; // голоса
  } else {
    index = 2; // голосов
  }

  return forms[index];
};

window.setValues = function (){
    productName.innerText=products[currentProduct].name; 
    description.innerText=products[currentProduct].description; 
    features.innerText=products[currentProduct].features;
    votes.innerText=products[currentProduct].votes+" "+getVoicesText(products[currentProduct].votes); 
    price.innerHTML=products[currentProduct].price.toLocaleString("ru-RU")+" <span> руб.</span>";
    console.log(products[currentProduct].rating);
    
    const arrImages = products[currentProduct].images;  
    previewPictures.innerHTML = '';
    
    arrImages.forEach(function(image, i) {
        let thumbNail = document.createElement("div");
        thumbNail.classList.add("thumbNail");
        if (i === 0) {
           thumbNail.classList.add("selected");
           picture.src = image;
           picture.alt = productName + " картинка ";       
        }

        thumbNail.addEventListener("click", (e)=> {
            previewPictures.childNodes.forEach(function(thumb) {
                thumb.classList.remove("selected");
            });
            thumbNail.classList.add("selected");
            picture.src = image;
            picture.alt = productName + " картинка ";           
        }); 

        let thumbNailImg = document.createElement("img");       
        thumbNailImg.src = image;
        thumbNailImg.alt = productName + " картинка " + i; 
        thumbNail.appendChild(thumbNailImg);
        previewPictures.appendChild(thumbNail);        
    });
};

window.prevProduct = function () {
    currentProduct--;
    if (currentProduct < 0) {
        currentProduct = products.length - 1;
    }
    setValues();
};

window.nextProduct = function () {
    currentProduct++;
    if (currentProduct >= products.length) {
        currentProduct = 0;
    }
    setValues();
};

