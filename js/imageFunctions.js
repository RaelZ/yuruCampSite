$(function () {
    let imgs = $('.characters').length;
    loadImage();

    //função para carregar as imagens das personagens
    function loadImage() {
        for(let i=0; i<=imgs; i++){
            $('.characters #'+i).css('background-image', 'url("imgs/'+i+'.jpg")');
        }
    }
})