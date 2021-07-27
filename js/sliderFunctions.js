$(function (){
    let charactersSize;
    let delay = 4500;
    let curIndex = 0;

    initSlider();
    autoPlay();

    //função que define o tamanho do slider iniciado
    function initSlider() {
        charactersSize = $('.characters').length;
        let sizeContainer = 100 * charactersSize;
        let sizeBoxSingle = 100 / charactersSize;

        $('.characters').css('width', sizeBoxSingle+'%')
        $('.scrollWraper').css('width', sizeContainer+'%')
    }
    //função para iniciar o slider
    function autoPlay() { 
        setInterval(function () {
            curIndex++;

            if(curIndex == charactersSize)
                curIndex = 0;

            goToSlider(curIndex);
        }, delay)
    }
    //função para que o slider rode automaticamente
    function goToSlider(curIndex) {
        let offSetX = $('.characters').eq(curIndex).offset().left - $('.scrollWraper').offset().left;
        $('.scrollCharacters').stop().animate({'scrollLeft': offSetX});
    }
    //função para resetar o slider após  a alteração do tamanho do navegador
    $(window).resize(function(){
        $('.scrollCharacters').stop().animate({'scrollLeft': 0});
    })
})