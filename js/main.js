//start header

$("#searchIcon").click(function(){
    $("#searchBox").toggle(50);
});

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        center:true,
        items:4,
        margin:30,
        padding:5,
    });
  });

// to show imges at best food 
var imgs = Array.from(document.querySelectorAll(".img-card"));
var lightboxContainer = document.querySelector(".lightbox-container");
var closeIcon = document.getElementById("close");
var prevIcon = document.getElementById("prev");
var nextIcon = document.getElementById("next");
var ligthboxItem = document.querySelector(".lightbox-item");
var currentIndex = 0;


for(let i = 0 ; i<imgs.length ;i++)
{
    imgs[i].addEventListener("click",function(e){
        lightboxContainer.style.display="flex";
        currentIndex=imgs.indexOf(e.target);
        let srcImg = e.target.src;
        ligthboxItem.style.backgroundImage=`url(${srcImg})`;
        // console.log(currentIndex);
    })
}
closeIcon.addEventListener("click",closeImg);
function closeImg(){
    lightboxContainer.style.display="none";
}

prevIcon.addEventListener("click",prevImg);
function prevImg()
{
    currentIndex--;
    if(currentIndex < 0){
        currentIndex=imgs.length-1;
    }
    var imgSc= imgs[currentIndex].src;
    ligthboxItem.style.backgroundImage=`url(${imgSc})`;
}

nextIcon.addEventListener("click",nextImg);
function nextImg()
{
    currentIndex++;
    if(currentIndex == imgs.length){
        currentIndex=0;
    }
    var imgSc= imgs[currentIndex].src;
    ligthboxItem.style.backgroundImage=`url(${imgSc})`;
}
//-----------------eend--------------------------------------------------------------

// love 
 let loves = Array.from(document.querySelectorAll(".menu .cardTitle i"));

 for(let i = 0 ; i<loves.length ; i++)
 {
    loves[i].addEventListener("click",function(){
        if(loves[i].style.color=="red"){
            loves[i].style.color="black";
            loves[i].classList.remove("fa-solid");
            loves[i].classList.remove("fa-heart");
            loves[i].classList.add("fa-regular");
            loves[i].classList.add("fa-heart");
            
        }
        else{
            loves[i].style.color="red";
            loves[i].classList.remove("fa-regular");
            loves[i].classList.remove("fa-heart");
            loves[i].classList.add("fa-solid");
            loves[i].classList.add("fa-heart");
        }
    });
 }

//  ---------------------------start form reservation---------------------------------------

// let inputsReser = Array.from(document.querySelectorAll(".form-group input"));
let personName = document.querySelector(".name");
let day = document.querySelector(".day");
let time = document.querySelector(".time");
let numberOfPersons = document.querySelector(".numberOfPerson");
let btnReservation = document.querySelector(".btnReservation");
let alertReser = document.getElementById("msgRreser");
let alertCloseIcon = document.querySelector(".alert-close");


btnReservation.addEventListener("click",clearBookForm);
function clearBookForm(e){ 
    e.preventDefault();
if(personName.value != "" && day.value !="" && time.value != "" && numberOfPersons.value != ""){
    day.value = "";
    personName.value = "";
    time.value = "";
    numberOfPersons.value = "";
    showAlertSuccess();
}
else{
    console.log('no');
}
    
}
function showAlertSuccess(e){
    
      $(alertReser).fadeIn(50);
}
alertCloseIcon.addEventListener("click",clearAlert);
function clearAlert(){
    $(alertReser).fadeOut(50);
}

// ---------------------------- login and register form  ----------------------------------------------------------------

let userIcon = document.getElementById("userIcon");
let boxUser = document.querySelector(".lightBoxUser");
let closeLoginIcon = document.querySelector("#closeLoginIcon");

userIcon.addEventListener("click",function(){
    boxUser.style.display="block";
    // boxUserRegister.style.display = "block"
})

closeLoginIcon.addEventListener("click",function(){
    boxUser.style.display="none";
    
});


let singupLink = document.querySelector(".singupLink");
let boxUserRegister = document.querySelector(".lightBoxUserRegister");
let closeRegisterIcon = document.querySelector("#closeRegisterIcon");
let signLink = document.querySelector(".signLink");

singupLink.addEventListener("click",function(){
    boxUser.style.display="none";
    boxUserRegister.style.display="block";
})

closeRegisterIcon.addEventListener("click",function(){
    boxUserRegister.style.display="none"; 
});

signLink.addEventListener("click",function(){
    boxUserRegister.style.display="none"; 
    boxUser.style.display="block";
});

//----------------------golden chef hover ------------------------------------------------------------------

goldenChefs = Array.from(document.querySelectorAll(".chefHO"));
goldenChefHovers = Array.from(document.querySelectorAll(".hoverChef"));
for(let i = 0 ; i< goldenChefs.length ; i++)
{
    goldenChefs[i].addEventListener("click",function(){
             $(goldenChefHovers[i]).slideToggle(200);
         })
}


// ------------------------ add To chart -------------------------------------------------------------------

let innerAddToChart = document.querySelector(".innerAddToChart");
let buyIcon = document.querySelector("#buyIcon");

buyIcon.addEventListener("click",function(){
    // $(".addToChart").animate({"width":"350px"},500);
    $(innerAddToChart).slideToggle(500);
    // console.log("46");
});
let addaddToChartDiv = document.querySelector(".innerAddToChart");
let mealBtn = Array.from(document.querySelectorAll(".mealBtn"));
let meals = Array.from(document.querySelectorAll(".mealCard"));
let meal =  document.querySelectorAll(".meal");
let names =  Array.from(document.querySelectorAll(".mealName"));
let prices =  Array.from(document.querySelectorAll(".price"));
console.log(prices);
let divTotalCost = document.querySelectorAll(".totalCost");
let totalCost = 0 ;
let currentMeal = '' ;
let cartona = '' ;
let realMealPrice;
for(let i = 0 ; i < mealBtn.length ; i++){
    mealBtn[i].addEventListener("click",function(){
        currentMeal = `<div class="innerMeal"><p class="ms-4 pt-2 nameMealAdd">Name Of Meal : <span class="text-dark"> ${names[i].innerHTML}</span></p>
        <p class="ms-4 pb-2"> Price : <span class="text-dark">${prices[i].innerHTML}</span></p></div>` ; 
        cartona+=currentMeal;
        let indexof = prices[i].innerHTML.indexOf(" ");
        let result=parseInt(prices[i].innerHTML.slice(0,indexof));
        totalCost+=result;  
        $(meal).html(cartona);
        $(divTotalCost).html(`<p class="fw-bold">Total Cost is : ${totalCost}</p>`);
    });
    
}

let closeOrdersIcon = document.getElementById("closeOrdersIcon");
closeOrdersIcon.addEventListener("click",function(){
    $(addaddToChartDiv).slideUp(500);
});

//------------------------top btn----------------------------

let whyOffset = $("#WHY").offset().top;
$(window).scroll(function(){
    let topOffset = $(window).scrollTop();
    if(topOffset > whyOffset){
        $(".arrow").fadeIn(500)
    }
    else{
        $(".arrow").fadeOut(1000)
    }
})

//----------------------loading Screen ---------------------
$(document).ready(function(){
   
    $(".loadingScreen").fadeOut(1500 , function (){
        $("body").css("overflow","visible");
    });

})

