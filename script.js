// const body = document.body;
// body.append("Helló");
// const div = document.createElement("div");
// //div.innerHTML = "<strong>Hello World</strong>"; // html obijektumként rakja bele a div-be, így kiemelten jelenik meg a szöveg.

// const strong = document.createElement("strong");
// strong.innerText="Így is meglehet addni";
// div.append(strong);

// body.append(div);



// const div = document.querySelector("div");
// console.log(div.textContent); // a benne lévő összes látható és elrejtett elemet megjeleníti
// console.log(div.innerHTML); //a benne lévő látható elemeket jeleníti meg.

const spanHi = document.querySelector("#hi"); // id alapján is lehet hivatkozni elemekre.
//spanHi.remove(); //törli az adott elemet
//get
console.log(spanHi.getAttribute("id")); // így lehet megkapni egy adott obijektum tulajdonságait. pl. itt az id-t adja vissza (id="valami")
// set1
spanHi.setAttribute("title","megadott_érték");
// set2
spanHi.id="újId";
//attributum törlése
spanHi.removeAttribute("title");
//data set kiolvasása // data- atributum
console.log(spanHi.dataset.test);
// új dataset hozzáadása
spanHi.dataset.newName ="Hi";

// class műveletek
spanHi.classList.add("new-class");
spanHi.classList.remove("new-class");
spanHi.classList.toggle("active",false);
//stylus módosítása
spanHi.style.backgroundColor="red";



/*
function oramegjelenito(){
   /* var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();

    var ora =h+":"+m+":"+s;
    if(h<10) h='0'+h;
    if(m<10) m='0'+m;
    if(s<10) s='0'+s;*/
/*
    kiir("ora");
    //document.getElementById('clock').innerHTML=ora;
    //document.getElementById('clock').innerHTML = ora;
    
    //var a = document.getElementById('clock').innerHTML;
    //console.log(a);
    
    setTimeout(function(){oramegjelenito();},1000);
}*/

//oramegjelenito();

//setTimeout(function(){console.log('ora');},1000);
/*

function kiir(ora) {
    document.getElementById("clock").innerHTML = "ora";
    
}

*/