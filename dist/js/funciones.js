$( document ).ready(function() {
    validTerms();
});

$('.show-table').click(function(){
    $(this).next().toggleClass("no-view", 1000);

    if ($(this).hasClass('table-active_bg')) {
        $(this).removeClass('table-active_bg');
    } else {
        $(this).addClass('table-active_bg');
    }

    if ($(this).children().children().children('.table-hide').hasClass('hide')) {
        $(this).children().children().children('.table-hide').removeClass('hide');
    } else {
        $(this).children().children().children('.table-hide').addClass('hide');
    }
    
    if ($(this).children().children().children('.table-show').hasClass('hide')) {
        $(this).children().children().children('.table-show').removeClass('hide');
    } else {
        $(this).children().children().children('.table-show').addClass('hide');
    }
});

$('.btn-filter-desk').click(function(){
    $(".box-filtro_campos").toggleClass("hide", 1000);
    $(this).toggleClass("active", 1000);
});

// Carrusel usuarios

// $(document).ready(function(){
//     $('.owl-carousel').owlCarousel();
// });

// $('.owl-carousel').owlCarousel({
//     item:1,
//     loop:true,
//     nav:true
// })

// Validaciones

function validTerms()  {
    console.log('listo')
    if( $('#checkTerms').attr('checked', false) )  {
        $('#btnTerms').prop('disabled', true);
    } else {
        $('#btnTerms').prop('disabled', false);
    }
}

$( ".main-container" ).mousemove(function() {
    if(($("#input-short-name").val() > 0) 
    // && ($("#input-specialty").val() > 0)
) {
        console.log('okokkoko')
    }
});



function validaNUM(e) {
    tecla = (document.all) ? e.keyCode : e.which;
    //Tecla de retroceso para borrar, siempre la permite
    if (tecla == 8) {
        return true;
    }
    // Patron de entrada, en este caso solo acepta numeros
    patron = /[0-9]/;
    tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
}

function validateForm() {
    var a=document.forms["form-pension"]["answer_a"].value;
    var b=document.forms["form-pension"]["answer_b"].value;
    var c=document.forms["form-pension"]["DOB1"].value;
    var d=document.forms["form-pension"]["DOB2"].value;
    var e=document.forms["form-pension"]["DOB3"].value;
                
    if (a=="" && b=="" && c=="" && d=="" && e=="" && $('input[type="radio"]').is(':checked')==false) {
        $('.input_rut').addClass("rut-error");
        $('#nom_form').addClass("rut-error");
        $('.date1').addClass("rut-error");
        $('.date2').addClass("rut-error");
        $('.date3').addClass("rut-error");
        $(".sex1").addClass("rut-error");
        $(".sex2").addClass("rut-error");
        $('.env1').attr("disabled");
        return false;

    } else if (a=="") {
        $('#nom_form').addClass("rut-error");
        return false;

    } else if (b=="" || $('.input_rut').val().length < 11) {
        $('.input_rut').addClass("rut-error");
        return false;

    }else if (c=="") {
        $('.date1').addClass("rut-error");
        return false;

    }else if (d=="") {
        $('.date2').addClass("rut-error");
        return false;

    }else if (e=="") {
        $('.date3').addClass("rut-error");
        return false;
    }else if ($('.choice').is(':checked')==false) {
        $('.sex1').addClass("rut-error");
        $('.sex2').addClass("rut-error");
        return false;
    }else {
        $("#nom_form").removeClass("rut-error");
        $(".input_rut").removeClass("rut-error");
            $('.inrut-val').removeClass("rut-error");
        $('#nom_form').removeClass("rut-error");
        $('.date1').removeClass("rut-error");
        $('.date2').removeClass("rut-error");
            $('.sex1').removeClass("rut-error");
        $('.sex2').removeClass("rut-error");
        $('.date3').removeClass("rut-error");
        $('.env1').removeAttr("disabled");
    }
}