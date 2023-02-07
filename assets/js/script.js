 
 
 function creaHeader(){

       let  h = document.createElement("header");
       h.classList.add("img1")
       let img= document.createElement("img");
       img.src="/assets/img/img1.png"

       let  t = document.createTextNode('');
       
       h.appendChild(t);
       document.body.appendChild(h);
       h.appendChild(img);
       console.log("funzione tr")
       /* creaTH(variabilepasseggera) */
   }

function creasection (){

    let  h = document.createElement("section");
    let  div = document.createElement("div");
    let img2 = document.createElement("img")
    img2.src="/assets/img/portos.jpg"
    div.appendChild(img2)
    h.appendChild(div)
    let  t = document.createTextNode('');
    h.appendChild(t);
    document.body.appendChild(h);
    console.log("funzione tr")
    let section= document.createElement("section")
    let secdiv= document.createElement("div")
    let img3= document.createElement("img")
    img3.src="/assets/img/Athos.jpg"
    secdiv.appendChild(img3)
    let secdivdiv = document.createElement("div")
    div.appendChild(section)
    section.appendChild(secdiv)
    let secsec = document.createElement("section")
    let secsecdiv = document.createElement("div")
    let img4=document.createElement("img")
    img4.src="/assets/img/Aramis.jpg"
    section.appendChild(secsec)
    secsec.appendChild(secsecdiv)
    secsecdiv.appendChild(img4)

}

   function creafooter(){
    let  h = document.createElement("footer");
    let p= document.createElement("p")
    let p2 = document.createElement("p")
    let text = document.createTextNode("Copyright dei 3 Moschettieri")
    let text2= document.createTextNode("By Riki, Orazio & Riki")
    h.appendChild(p)
    h.appendChild(p2)
    p.appendChild(text)
    p2.appendChild(text2)
    let  t = document.createTextNode('');
    h.appendChild(t);
    document.body.appendChild(h);
    console.log("funzione tr")
    }
  
function creaButton (){
    let button= document.createElement("button")
    let textbutton= document.createTextNode("bottone")
    /* div.appendChild(button) */
}

    creaHeader();
   creasection();
    creafooter() 

