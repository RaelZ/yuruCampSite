$(function () {
    let menu = true;

    //Função para abrir o menu
    function menuOpen() {
        $('.background-mobile').fadeIn(500);
        $('.menu-mobile').fadeIn(1000);

        $('.menu-mobile-button').css('box-shadow', '0 0 0 rgba(0,0,0,0)');

        $('.hamburguer').css('background-image', 'url(imgs/cancel.png)').css('transform','rotate(360deg)');

        menu = false;
    }
    //Função para fechar o menu
    function menuClose() {
        $('.background-mobile').fadeOut(500);
        $('.menu-mobile').fadeOut(50);

        $('.menu-mobile-button').css('box-shadow', '0 0 5px rgba(0, 0, 0, 0.4), 0 0 5px rgba(65, 64, 131, 1)');

        $('.hamburguer').css('background-image', 'url(imgs/menuMobile.png)').css('transform','rotate(0deg)');

        menu = true
    }
    menuClose();
    //Abrir e fechar menu mobile
    $('.menu-mobile-button').click(function(){
        if(menu == true)
            menuOpen();
        else
            menuClose();
    });
    //SmoothScroll ao selecionar o item do menu
    $('nav a').click(function(){
        let href = $(this).attr('href');
        let offSetTop = $(href).offset().top;

        menuClose();

        $('html, body').animate({'scrollTop': offSetTop}, 200);

        return false
    });
    //fechar menu ao redimensionar
    $(window).resize(function(){
        menuClose();
    })
});