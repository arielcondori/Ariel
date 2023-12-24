var swiper = new Swiper(" .mySwiper",  {
    effect: "coverflow",
    grabCursor: true,
    centeredlides: true,
    slidesPerView: "auto",
    coverFlowEffect: {
        rotate: 15,
        strech:0,
        depth:300,
        modifier:1,
        slideShadown: true,
    },
    loop: true,
})