const translations = {
    en:{
       selct: "Select a Language" ,
       title: "Welcome To Simple Web Code" ,
       pargr: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.  Non, delectus!"
      
    },
    az:{
        selct: "Dil seçin" ,
        title: "Sadə Veb Koduna xoş gəlmisiniz" ,
        pargr: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.  Non, delectus!"
       
    }
}
const languageSelectop = document.querySelector("select")
let h1 = document.getElementById("h1");
let titile = document.getElementById("titile");
let par = document.getElementById("par");
languageSelectop.addEventListener("change", (event) =>{
    setLanguage(event.target.value)
} )
const setLanguage = (language) => {
    if(language == "az"){
     h1.innerText = translations.az.selct;
     titile.innerText = translations.az.title;
     par.innerText = translations.az.pargr
       
       
    }else if(language == "en"){
        h1.innerText = translations.en.selct;
        titile.innerText = translations.en.title;
        par.innerText = translations.en.pargr
    }
}