// function to include html popup code
https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js
function includePopupHTML(){

    let html = '<div id="pop_up"><span id="close" onclick="closePopUp()"><img id="npop" src="lightbox/image/close.png" alt=""></span><img id="leftarrow" src="lightbox/image/L2green.png" alt=""><img id="rightarrow" src="lightbox/image/Rgreen.png" alt=""><img id= "mainPopImage" src="images/mac.jpg" alt=""></div>';

    let popdiv = document.createElement("div");
    popdiv.innerHTML = html;
    document.body.insertBefore(popdiv,document.body.firstChild);
}

// function to init plugin

let img;
let current;

function pop_upInit(target){
    
    // select all images with class target
  img = document.getElementsByClassName(target);

    // add event listner on all selected images
    for(var i = 0; i < img.length; i++){

    // add pointer
        img[i].style.cursor = 'pointer';

    // add event listner
        img[i].addEventListener("click",function(){
            document.getElementById("mainPopImage").src = this.src;
            document.getElementById("pop_up").style.display = 'block';
            checkArrow();
        })
    }
    includePopupHTML();

    // next button
    document.getElementById('rightarrow').addEventListener('click',function(){
        nextimg();
    });

    // previous button
    document.getElementById('leftarrow').addEventListener('click',function(){
        previmg();
    });
}

// close button
function closePopUp(){
    document.getElementById("mainPopImage").src = "";
    document.getElementById("pop_up").style.display = 'none';
}

// next image
function nextimg(){
    getCurrentImage();
    current++;
    document.getElementById("mainPopImage").src = img[current].src;
    checkArrow()
}

// previous image
function previmg(){
    getCurrentImage();
    current--;
    document.getElementById("mainPopImage").src = img[current].src; 
    checkArrow()
}

function getCurrentImage(){
    for(var i = 0; i < img.length; i++){
        if(img[i].src == document.getElementById("mainPopImage").src){
            current = i;
        }
    }
}

function checkArrow(){
    getCurrentImage();
    if(current == "0"){
        document.getElementById('leftarrow').style.display = 'none';
        document.getElementById('rightarrow').style.display = 'block';
    }else if(current == img.length - 1){
        document.getElementById('rightarrow').style.display = 'none';
        document.getElementById('leftarrow').style.display = 'block';
    }else{
        document.getElementById('leftarrow').style.display = 'block';
        document.getElementById('rightarrow').style.display = 'block';
    }
}