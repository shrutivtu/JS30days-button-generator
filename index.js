const resbutton = document.getElementById('resbut');
const btnlabel = document.getElementById('btn-label');
const fontsize = document.getElementById('font-size');
const paddingtop = document.getElementById('paddingtop');
const paddingright = document.getElementById('paddingright');
const paddingbottom = document.getElementById('paddingbottom');
const paddingleft = document.getElementById('paddingleft');
const borderwidth = document.getElementById('borderwidth');
const borderradius = document.getElementById('borderradius');
const fontcolor = document.getElementById('fontcolor');
const bgcolor = document.getElementById('bgcolor');
const bordercolor = document.getElementById('bordercolor');
const genbutton = document.getElementById('gen-btn');

/*btnlabel.addEventListener('keypress', (e) => {
    console.log(btnlabel.value);
    if(e.keyCode === 13){
        console.log('enter pressed');
    }
});*/
$(btnlabel).keypress(function(event){
    if(resbutton.innerHTML === 'Default Label'){
        resbutton.innerHTML='';
    }
    resbutton.innerHTML= btnlabel.value; 
});
$(fontsize).change(function(event){
    //console.log(fontsize.value);
    resbutton.style.fontSize = fontsize.value + "px";
});
$(paddingtop).change(function(event){
    resbutton.style.paddingTop = paddingtop.value + "px";
});
$(paddingright).change(function(event){
    resbutton.style.paddingRight = paddingright.value + "px";
});
$(paddingbottom).change(function(event){
    resbutton.style.paddingBottom = paddingbottom.value + "px";
});
$(paddingleft).change(function(event){
    resbutton.style.paddingLeft = paddingleft.value + "px";
});
$(borderwidth).change(function(event){
    resbutton.style.borderWidth = borderwidth.value + "px";
});
$(borderradius).change(function(event){
    resbutton.style.borderRadius = borderradius.value + "px";
});
$(fontcolor).change(function(event){
    //console.log(fontcolor.value);
    resbutton.style.color = fontcolor.value;
});
$(bgcolor).change(function(event){
    resbutton.style.backgroundColor = bgcolor.value;
});
$(bordercolor).change(function(event){
    resbutton.style.borderColor = bordercolor.value;
});

const modal = document.querySelector(".modal");
const closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}
function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}
$(genbutton).click(function(event){
    event.preventDefault();
    console.log(resbutton);
    console.log(resbutton.style.cssText);
    let htmltag = document.getElementById('html-tag');
    let csstag = document.getElementById('css-tag');
    htmltag.innerText = '<button class="but" id="resbut">'+resbutton.innerHTML+'</button>'; 
    csstag.innerHTML = resbutton.style.cssText;
    toggleModal();
    closeButton.addEventListener("click", toggleModal);
    window.addEventListener("click", windowOnClick);
});



