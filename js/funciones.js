$(document).ready(function () {
    limitCaracters();
    initRut();
    clean();
    limpiarVal();
    usarExcedentes();
});

// --------------- Validaciones ------------------//

$( ".button-large" ).click(function() {
    $('.button-large').removeClass('btn-active');
    $(this).addClass('btn-active');
});

$("#checkTerms").click(function() {
    if($(this).is(':checked')) {  
        $(".btnTerms").removeAttr("disabled") 
    } 
    if (!$(this).is(':checked')){
        $(".btnTerms").attr("disabled", true);
    }
})

function valida() {
    validaReemb();
    $('#btnFormBox').remove();
}

// --------------- Inicializadores de plugins ------------- //

//Calendario
$("#date").datepicker();
//Formato rut
function initRut() {
    $('.input_rut').rut();
};
//Datalist
$('.input-specialty').selectize({
    create: false,
    sortField: {
        field: 'text',
        direction: 'asc'
    },
    dropdownParent: 'body'
});
// Carrusel usuario
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})

// --------------- Calendario ------------- //

//Configuración en español
$.datepicker.regional['es'] = {
    closeText: 'Cerrar',
    prevText: '< Ant',
    nextText: 'Sig >',
    currentText: 'Hoy',
    monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
    dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
    dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Juv', 'Vie', 'Sáb'],
    dayNamesMin: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sáb'],
    weekHeader: 'Sm',
    dateFormat: 'dd/mm/yy',
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: ''
};
$.datepicker.setDefaults($.datepicker.regional['es']);

//Función formato fecha
$(".input-date").keyup(function (event) {
    if (event.which != 8) {
        if ($(this).val().length == 2) {
            $(this).val($(this).val() + "/");
        }
        if ($(this).val().length == 5) {
            $(this).val($(this).val() + "/");
        }
    }
})

// --------------- Funciones particulares ------------- //

//Borrar documento adjunto
$(".deleteDoc").click(function() {
    $(this).closest(".documentItem").remove();
})

// Funcion "adjunta" archivos
$("#btnAdjuntarArchivos").click(function () {
    $(".document-charged").show();
    $(".box-dashed").hide();
});

//Función efecto excedentes
function usarExcedentes(checkbox) {
    if ($('.exc').hasClass('excSmClass')) {
        if(checkbox.checked == true){
            $(".exc").addClass("show-exc");
        } else {
            $(".exc").removeClass("show-exc");
        };
    }
    if ($('.exc').hasClass('excMdClass')) {
        if(checkbox.checked == true){
            $(".exc").addClass("show-exc");
        } else {
            $(".exc").removeClass("show-exc");
        };
    }
    if ($('.exc').hasClass('excLgClass')) {
        if(checkbox.checked == true){
            $(".exc").addClass("show-exc");
        } else {
            $(".exc").removeClass("show-exc");
        };
    }
};

//Función formatea los input
function clean() {
    $(".input-form").val("");
}

//Función permite sólo números
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
};

//Función limita caracteres entrantes
function limitCaracters() {
    $('input#invoice').attr('maxLength', '10');
    $('input#date').attr('maxLength', '10');
    $('input#date-mo').attr('maxLength', '10');
    $('input#input-short-name').attr('maxLength', '30');
};

//Agrega la clase de error al input y un mensaje de error bajo el boton que se encuentra deshabilitado hasta que complete todos los campos (Se dispara al apretar "Siguiente")
function validaReemb() {
    var a = $('#input-specialty');
    var ax = $("input-specialty-mo");
    var b = $("#input-short-name");
    var c = $("#date");
    var d = $("#invoice");
    var e = $("#rut");
    var f = $("#amount");
    var z = $("#amount2");
    var c1 = "<li class='error-mensaje c1'>Porfavor, elige fecha de atención.</li>";
    var d1 = "<li class='error-mensaje d1'>Porfavor, elige nº de boleta.</li>";
    var e1 = "<li class='error-mensaje e1'>Porfavor, elige RUT del prestador.</li>";
    var f1 = "<li class='error-mensaje f1'>Porfavor, elige monto solicitado a reembolsar.</li>";
    var src = ".validacion ul";

    if ($(a).val() == "Medicina general" || $(a).val() == "medicina general" || $(ax).val() == "Medicina general") {
        if (c.val() == "" && d.val() == "" && e.val() == "" && f.val() == "") {
            $(".input-validate").addClass("error-box");
            if (!($(".validacion ul").children().length == 4)) {
                $(src).append(c1);
                $(src).append(d1);
                $(src).append(e1);
                $(src).append(f1);
            }
            $('.btnForm').attr("disabled");
            return false;

        } else if (c.val() == "") {
            $(c).addClass("error-box");
            $("#date-mo").addClass("error-box");
            // if (!($(".validacion ul").children().hasClass(".c1"))) {
            //     $(src).append(c1);
            // }
            return false;

        } else if (d.val() == "") {
            $(d).addClass("error-box");
            // if (!($(".validacion ul").children().hasClass(".d1"))) {
            //     $(src).append(d1);
            // }
            return false;

        } else if (e.val() == "") {
            $(e).addClass("error-box");
            // if (!($(".validacion ul").children().hasClass(".e1"))) {
            //     $(src).append(e1);
            // }
            return false;
        } else if (f.val() == "") {
            $(f).addClass("error-box");
            // if (!($(".validacion ul").children().hasClass(".f1"))) {
            //     $(src).append(f1);
            // }
            return false;
        } else {
            $(c).removeClass("error-box");
            $(d).removeClass("error-box");
            $(e).removeClass("error-box");
            $(f).removeClass("error-box");
            $(".c1").hide();
            $(".d1").hide();
            $(".e1").hide();
            $(".f1").hide();
            $('.btnForm').removeAttr("disabled");
            $('#btnFormBox').hide();
        };
    } else if ($(a).val() == "Ginecología" || $(a).val() == "ginecología" || $(a).val() == "ginecologia" || $(ax).val() == "Ginecología") {
        if (z.val() == "") {
            $(".input-validate").addClass("error-box");
            $('.btnForm').attr("disabled");
            if ($(".validacion ul").children().length == 0) {
                $(src).append(f1);
            }
            return false;
        } else {
            $(z).removeClass("error-box");
            $(".f1").hide();
            $('.btnForm').removeAttr("disabled");
            $('#btnFormBox').hide();
        };
    } 
}

//Va removiendo las clases de error y los mensajes a medida que se va completando los campos obligatorios
function limpiarVal() {
    var a = $('#input-specialty');
    var b = $("#input-short-name");
    var c = $("#date");
    var d = $("#invoice");
    var e = $("#rut");
    var f = $("#amount");
    var z = $("#amount2");
    var a1 = "<li class='error-mensaje a1'>Porfavor, elige especialidad.</li>";
    var b1 = "<li class='error-mensaje b1'>Porfavor, agrega un nombre corto al reembolso.</li>";
    var c1 = "<li class='error-mensaje c1'>Porfavor, elige fecha de atención.</li>";
    var d1 = "<li class='error-mensaje d1'>Porfavor, elige nº de boleta.</li>";
    var e1 = "<li class='error-mensaje e1'>Porfavor, elige RUT del prestador.</li>";
    var f1 = "<li class='error-mensaje f1'>Porfavor, elige monto solicitado a reembolsar.</li>";
    var src = ".validacion ul";

    $(a).on('keyup keydown keypress change paste', function () {
        if (a.val() == "") {
            $(a).addClass("error-box");
        } else {
            $(a).removeClass("error-box");
            $('.flujo-sm_attach').addClass('hide');
            $('.flujo-sm_files').addClass('hide');
            $('.flujo-lg_attach').addClass('hide');
            $('.flujo-lg_files').addClass('hide');
        }
    });
    $(b).on('keyup keydown keypress change paste', function () {
        if (b.val() == "") {
            $(b).addClass("error-box");
        } else {
            $(b).removeClass("error-box");
        }
    });
    $(c).on('keyup keydown keypress change paste', function () {
        if (c.val() == "") {
            $(c).addClass("error-box");
            $("#date-mo").addClass("error-box");
            // if ($(".validacion ul").children().length < 17) {
            //     $(src).append(c1);
            // }
        } else {
            $(c).removeClass("error-box");
            $(".c1").remove();
            valida();
        }
    });
    $(d).on('keyup keydown keypress change paste', function () {
        if (d.val() == "") {
            $(d).addClass("error-box");
            // if ($(".validacion ul").children().length < 17) {
            //     $(src).append(d1);
            // }
        } else {
            $(d).removeClass("error-box");
            $(".d1").remove();
            valida();
        }
    });
    $(e).on('keyup keydown keypress change paste', function () {
        if (e.val() == "") {
            $(e).addClass("error-box");
            // if ($(".validacion ul").children().length < 17) {
            //     $(src).append(e1);
            // }
        } else {
            $(e).removeClass("error-box");
            $(".e1").remove();
            valida();
        }
    });
    $(f).on('keyup keydown keypress change paste', function () {
        if (f.val() == "") {
            $(f).addClass("error-box");
            // if ($(".validacion ul").children().length < 17) {
            //     $(src).append(f1);
            // }
        } else {
            $(f).removeClass("error-box");
            $(".f1").remove();
            valida();
        }
    });
    $(z).on('keyup keydown keypress change paste', function () {
        if (z.val() == "") {
            $(z).addClass("error-box");
            // if ($(".validacion ul").children().length = 13) {
            //     $(src).append(f1);
            // }
        } else {
            $(z).removeClass("error-box");
            $(".f1").remove();
            valida();
        }
    });z
}

//Esconde boton "MostrarCampos"
$('#btnMostrarCampos').hide();

//Muestra el botón "MostrarCampos" sólo sí el campo nombre corto y el campo especialidad estan llenos
function test() {
    if ($('.specialty-box').siblings().not('.hide')) {
        $('.specialty-box').addClass('hide');
    }
    if ($('#input-short-name').val() != "" && ($('#input-specialty').val() != "" || $('#input-specialty-mo').val() != "")) {
        $('#btnMostrarCampos').show();
    } else {
        $('#btnMostrarCampos').hide();
    }
    $(".error-mensaje").remove();
    $(".input-form").removeClass("error-box");
    $("#date-mo").removeClass("error-box");
    $('.flujo-lg_attach').addClass('hide');
    $('.flujo-lg_files').addClass('hide');
    $('.flujo-sm_attach').addClass('hide');
    $('.flujo-sm_files').addClass('hide');
    $(".btnForm").attr("disabled", true);
}

//Formatea los campos en cada cambio de especialidad y muestra los campos correspondientes.
$('#btnMostrarCampos').click(function () {
    $('#btnMostrarCampos').hide();
    $(".document-charged").hide();
    $(".box-dashed").show();
    var a = $('#input-specialty').val();
    var ax = $('#input-specialty-mo').val();
    if (a == "Medicina pediátrica" || a == "medicina pediátrica" || a == "medicina pediatrica" || ax == "Medicina pediátrica") {
        if ($('.specialty-box').siblings().not('.hide')) {
            $('.specialty-box').addClass('hide');
        }
        $('.flujo-lg_attach').removeClass('hide');
        $('.specialty-box_op4').removeClass('hide');

    } else if (a == "Psiquiatría" || a == "psiquiatría" || a == "psiquiatria" || a == "siquiatría" || a == "siquiatria" || ax == "Psiquiatría" || ax == "Psiquiatría") {
        if ($('.specialty-box').siblings().not('.hide')) {
            $('.specialty-box').addClass('hide');
        }
        $('.specialty-box_op5').removeClass('hide');

    } else if (a == "Psicología" || a == "psicología" || a == "psicologia" || a == "sicología" || a == "sicologia" || ax == "Psicología") {
        $('.btnForm').removeAttr("disabled");
        $('#btnFormBox').hide();
        if ($('.specialty-box').siblings().not('.hide')) {
            $('.specialty-box').addClass('hide');
        }

        $('.flujo-sm_attach').removeClass('hide');
        $('.specialty-box_op2').removeClass('hide');
        $('.flujo-sm_files').removeClass('hide');

    } else if (a == "Ginecología" || a == "ginecología" || a == "ginecologia" || ax == "Ginecología") {
        if ($('.specialty-box').siblings().not('.hide')) {
            $('.specialty-box').addClass('hide');
        }
        
        $(".btnForm").attr("disabled");
        $('.specialty-box_op3').removeClass('hide');
        $('.flujo-lg_attach').removeClass('hide');
        $('.flujo-lg_files').removeClass('hide');

    } else if (a == "Medicina general" || ax == "Medicina general") {
        if ($('.specialty-box').siblings().not('.hide')) {
            $('.specialty-box').addClass('hide');
        }

        $('.specialty-box_op1').removeClass('hide');
        $('.flujo-lg_attach').removeClass('hide');
        $('.flujo-lg_files').removeClass('hide');

    } else {
        if ($('.specialty-box').siblings().not('.hide')) {
            $('.specialty-box').addClass('hide');
        }
    }
})

//Validador falso fecha movil
$("#date-mo").on('keyup keydown keypress change paste', function () {
    let dateMo = $("#date-mo").val();
    $("#date").val(dateMo);
    if($("#date-mo").val() !== "") {
        $("#date-mo").removeClass("error-box");
        $(".c1").remove();
    }
})