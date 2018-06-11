// ----------------Flujo reembolso historico----------------//

// Navegación tabla
$('.show-table').click(function () {
    $(this).next().toggleClass("no-view", 1000);
    if ($(this).hasClass('table-active_bg')) {
        $(this).removeClass('table-active_bg');
    } else {
        $(this).addClass('table-active_bg');
    }

    if ($(this).find('.table-hide').hasClass('hide')) {
        $(this).find('.table-hide').removeClass('hide');
    } else {
        $(this).find('.table-hide').addClass('hide');
    }

    if ($(this).find('.table-show').hasClass('hide')) {
        $(this).find('.table-show').removeClass('hide');
    } else {
        $(this).find('.table-show').addClass('hide');
    }
});

//Apertura filtro
$('.btn-filter-desk').click(function () {
    $(".box-filtro_campos").toggleClass("hide", 1000);
    $(this).toggleClass("active", 1000);
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