 var courses = [
    {
        image: './images/javascriptDef.png',
        title: 'what is javascript?',
        category: 'JS',
        price: 70,
    },
    {
        image: './images/htmlBasics.PNG',
        title: 'basics of HTML',
        category: 'HTML',
        price: 99
    },
    {
        image: './images/htmlElements.png',
        title: 'HTML elements and tags',
        category: 'HTML',
        price: 100
    },
    {
        image: './images/cssSelectors.jpg',
        title: 'CSS selectors',
        category: 'CSS',
        price: 68
    },
    {
        image: './images/javascriptVariables.png',
        title: 'variables and data type of javascript',
        category: 'JS',
        price: 50
    },
    {
        image: './images/javascriptOperators.png',
        title: 'Javascript operators and conditions',
        category: 'JS',
        price: 28
    },
    {
        image: './images/htmlAttrVal.jpg',
        title: 'HTML attributes and values',
        category: 'HTML',
        price: 19
    },
    {
        image: './images/cssProperties.png',
        title: 'CSS properties',
        category: 'CSS',
        price: 29
    },
    {
        image: './images/javascriptObjects.png',
        title: 'Javascript objects and arrays',
        category: 'JS',
        price: 29
    },
    {
        image: './images/cssMesures.png',
        title: 'mesures and unites of CSS',
        category: 'CSS',
        price: 19
    }
    ,
    {
        image: './images/phpBasics.png',
        title: 'getting started with php',
        category: 'PHP',
        price: 15
    },
    {
        image: './images/phpDataBase.png',
        title: 'connecting to database using PHP',
        category: 'PHP',
        price: 28
    },
];
 


setTimeout(() => {
    let c=Math.floor(Math.random() * 10);
    let b=Math.floor(Math.random() * 10);
    let d=Math.floor(Math.random() * 10);
     document.getElementsByClassName("img")[0].setAttribute("src",courses[c].image);
     document.getElementsByClassName("corses-name")[0].innerHTML=courses[c].title;
     document.getElementsByClassName("price")[0].innerHTML=courses[c].price;
    
     document.getElementsByClassName("img")[1].setAttribute("src",courses[b].image);
     document.getElementsByClassName("corses-name")[1].innerHTML=courses[b].title;
     document.getElementsByClassName("price")[1].innerHTML=courses[b].price;
     document.getElementsByClassName("img")[2].setAttribute("src",courses[d].image);
     document.getElementsByClassName("corses-name")[2].innerHTML=courses[d].title;
     document.getElementsByClassName("price")[2].innerHTML=courses[d].price;
  }, 3000);


