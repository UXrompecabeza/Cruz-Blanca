// ----------------Flujo reembolso historico----------------//

//Apertura filtro
$('.btn-filter-desk').click(function () {
    $(".box-filtro_campos").toggleClass("hide");
    $(this).toggleClass("activeFilter");
});

//Funcionalidad calendario filtro
$(".month").click(function() {
    $(".month").removeClass("active-item-accordion");
    let month = $(this).text();
    $(this).addClass("active-item-accordion");
    $("#choosenMonth").text(month);
})
$(".btn_month").click(function() {
    $(".btn_month").removeClass("active-item-accordion");
    $(this).addClass("active-item-accordion");
})

//Funcionalidad filtro
$(".pacient").click(function() {
    $(".pacient").removeClass("active-item-accordion");
    let pacient = $(this).text();
    $(this).addClass("active-item-accordion");
    $("#choosenPacient").text(pacient);
})
$(".state").click(function() {
    $(".state").removeClass("active-item-accordion");
    let state = $(this).text();
    $(this).addClass("active-item-accordion");
    $("#choosenState").text(state);
})
$(".btn_filter-acc").click(function() {
    $(".btn_filter-all").removeClass("active-item-accordion");
    $(this).addClass("active-item-accordion");
})
$(".btn_filter-all").click(function() {
    $(".btn_filter-acc").removeClass("active-item-accordion");
    $(this).addClass("active-item-accordion");
})