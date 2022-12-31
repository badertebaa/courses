

var courses = [
    {
        image: '/images/javascriptDef.png',
        title: 'what is javascript?',
        category: 'JS',
        price: 70,
    },
    {
        image: '/images/htmlBasics.PNG',
        title: 'basics of HTML',
        category: 'HTML',
        price: 99
    },
    {
        image: '/images/htmlElements.png',
        title: 'HTML elements and tags',
        category: 'HTML',
        price: 100
    },
    {
        image: '/images/cssSelectors.jpg',
        title: 'CSS selectors',
        category: 'CSS',
        price: 68
    },
    {
        image: '/images/javascriptVariables.png',
        title: 'variables and data type of javascript',
        category: 'JS',
        price: 50
    },
    {
        image: '/images/javascriptOperators.png',
        title: 'Javascript operators and conditions',
        category: 'JS',
        price: 28
    },
    {
        image: '/images/htmlAttrVal.jpg',
        title: 'HTML attributes and values',
        category: 'HTML',
        price: 19
    },
    {
        image: '/images/cssProperties.png',
        title: 'CSS properties',
        category: 'CSS',
        price: 29
    },
    {
        image: '/images/javascriptObjects.png',
        title: 'Javascript objects and arrays',
        category: 'JS',
        price: 29
    },
    {
        image: '/images/cssMesures.png',
        title: 'mesures and unites of CSS',
        category: 'CSS',
        price: 19
    }
    ,
    {
        image: '/images/phpBasics.png',
        title: 'getting started with php',
        category: 'PHP',
        price: 15
    },
    {
        image: '/images/phpDataBase.png',
        title: 'connecting to database using PHP',
        category: 'PHP',
        price: 28
    },
];
///getting corses by category
var htmlCategory=document.getElementById("HTML");
var cssCategory=document.getElementById("CSS");
var jsCategory=document.getElementById("JS");
var phpCategory=document.getElementById("PHP");
let search=document.getElementById("Search");
//htmlcorses
htmlCategory.addEventListener('click',()=>{
    for(i=0;i<courses.length;i++){
        if(courses[i].category=='HTML'){
            document.getElementsByClassName("cour1")[i].style.display=""
        }
        else{
            document.getElementsByClassName("cour1")[i].style.display="none"
        }
        
    }
})
//csscorses
cssCategory.addEventListener('click',()=>{
    for(i=0;i<courses.length;i++){
        if(courses[i].category=='CSS'){
            document.getElementsByClassName("cour1")[i].style.display=""
        }
        else{
            document.getElementsByClassName("cour1")[i].style.display="none"
        }
        
    }
})

jsCategory.addEventListener('click',()=>{
    for(i=0;i<courses.length;i++){
        if(courses[i].category=='JS'){
            document.getElementsByClassName("cour1")[i].style.display=""
        }
        else{
            document.getElementsByClassName("cour1")[i].style.display="none"
        }
        
    }
})
//phpcorses
phpCategory.addEventListener('click',()=>{
    for(i=0;i<courses.length;i++){
        if(courses[i].category=='PHP'){
            document.getElementsByClassName("cour1")[i].style.display=""
        }
        else{
            document.getElementsByClassName("cour1")[i].style.display="none"
        }
        
    }
})

document.getElementById("ALL").addEventListener("click",()=>{
    for(i=0;i<courses.length;i++){
       
            document.getElementsByClassName("cour1")[i].style.display="block"
        
        
        
    }


})
///getting corses by prices
let priceSelect=document.getElementById("priceSelect");
let priceaffiche=document.getElementById("priceaffiche");
priceSelect.addEventListener("click",()=>{
 priceaffiche.innerHTML=priceSelect.value;
 for(var i=0;i<courses.length;i++){
   if(courses[i].price<=Number(priceSelect.value)){
      document.getElementsByClassName("cour1")[i].style.display="block"
   }
   else{
    document.getElementsByClassName("cour1")[i].style.display="none"
   }



 }
})
///getting corses by search
search.addEventListener("keyup",()=>{
    for(var i=0;i<courses.length;i++){
        if(   courses[i].title.toUpperCase().indexOf(search.value.toUpperCase())>-1){
            document.getElementsByClassName("cour1")[i].style.display="block"
        }
        else{
            document.getElementsByClassName("cour1")[i].style.display="none"
        }
     
     
     
      }
     }


)




