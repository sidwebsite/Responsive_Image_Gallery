const searchBtn = document.querySelectorAll('.search');
const imgSrc = document.querySelectorAll('.img');
const bigImg = document.querySelector('.big-img');
const model = document.querySelector('#model');
const lightboxImg = document.querySelector('.lightbox');

let imgLen =  imgSrc.length;

for (let i = 0; i < imgLen; i++) {
    function lightboxFun(e){
        e.preventDefault();    
        const src = imgSrc[i].src;
        bigImg.src = src;
        model.style.display = 'block';
        let winHeight = window.innerHeight;
        let imgHeight = bigImg.clientHeight;
        if(imgHeight >= winHeight){
            lightboxImg.style.width = 'auto';
            lightboxImg.style.height = 80 + '%';
            bigImg.style.width = 'auto';
            bigImg.style.height = 100 + '%';
        } else {
            lightboxImg.style = '';
            bigImg.style = '';
        }
    }
    searchBtn[i].addEventListener('click', lightboxFun);
}

//取消lightbox
const closeBtn = document.querySelector('.close');
function closeFun(){
    model.style.display = 'none';
}
closeBtn.addEventListener('click', closeFun);