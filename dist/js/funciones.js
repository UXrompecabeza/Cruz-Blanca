$( document ).ready(function() {
    // validaEspecialidad();
    limitCaracters();
    initRut();
    limpiarVal();
});

// Carrusel usuario

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

// Funcion "adjunta" archivos

$( "#btnAdjuntarArchivos" ).click(function() {
    $( ".document-charged" ).toggle();
    $( ".box-dashed" ).toggle();
});

// Navegación


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

function limitCaracters() {
    $('input#invoice').attr('maxLength', '10');
    $('input#date').attr('maxLength', '10');
};

function validaTermCond() {
    var a = document.forms["formTermCond"]["cbxTerms"];

    if ($(a).is(':checked')==false) {
        $('#btnTerms').attr("disabled");
        return false;
    }else {
        $('#btnTerms').removeAttr("disabled");
    }
}

function initRut() {
    $('.input_rut').rut();
}

function validaReemb() {
    var a = document.forms["formReembolso"]["especialidad"];
    var ax = document.forms["formReembolso"]["especialidad-mo"];
    var b = document.forms["formReembolso"]["inputShort"];
    var c = document.forms["formReembolso"]["date"];
    var d = document.forms["formReembolso"]["invoice"];
    var e = document.forms["formReembolso"]["rut"];
    var f = document.forms["formReembolso"]["amount"];
    var z = document.forms["formReembolso"]["amount2"];
    var c1 = "<li class='error-mensaje c1'>Porfavor, elige fecha de atención.</li>";
    var d1 = "<li class='error-mensaje d1'>Porfavor, elige nº de boleta.</li>";
    var e1 = "<li class='error-mensaje e1'>Porfavor, elige RUT del prestador.</li>";
    var f1 = "<li class='error-mensaje f1'>Porfavor, elige monto solicitado a reembolsar.</li>";
    var z1 = "<li class='error-mensaje f1'>Porfavor, elige monto solicitado a reembolsar.</li>";
    var src = ".validacion ul";
    
    if ($(a).val() == "Medicina general" || $(a).val() == "medicina general" || $(ax).val() == "Medicina general") {
        if ( c.value =="" && d.value =="" && e.value =="" && f.value ==""){
            $(c).addClass("error-box");
            $(d).addClass("error-box");
            $(e).addClass("error-box");
            $(f).addClass("error-box");
            if(!($(".validacion ul").children().length == 4)) {
                $(src).append(c1);
                $(src).append(d1);
                $(src).append(e1);
                $(src).append(f1);
            }
            $('.btn-next').attr("disabled");
            return false;

        } else if (c.value == "") {
            $(c).addClass("error-box");
            if(!($("li").hasClass(".c1"))) {
                $( src ).append(c1);
            }
            return false;

        } else if (d.value == "") {
            $(d).addClass("error-box");
            if(!($("li").hasClass(".d1"))) {
                $( src ).append(d1);
            }
            return false;

        } else if (e.value == "") {
            $(e).addClass("error-box");
            if(!($("li").hasClass(".e1"))) {
                $( src ).append(e1);
            }
            return false;
        } else if (f.value == "") {
            $(f).addClass("error-box");
            if(!($("li").hasClass(".f1"))) {
                $( src ).append(f1);
            }
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
            $('.btn-next').removeAttr("disabled");
        };
    }; 
}
    // if (a2 == "Radiología" || a2 == "radiología" || a2 == "Radiologia" || a2 == "radiologia") {
    //     if ($(".flujo-sm_attach").attr("hide")) {
    //         alert("Debe adjuntar los documentos")
    //         $('.btn-next').attr("disabled");
    //     } else {
    //         $('.btn-next').removeAttr("disabled");
    //     }
    // } 
    
    // if (a == "Psicología" ||a == "psicología" || a == "psicologia" || a == "sicología" || a == "sicologia") {
    //     if (z.value ==""){
    //         $(z).addClass("error-box");
    //         if(!($(".validacion ul").children().length == 1)) {
    //             $(src).append(z1);
    //         }
    //         $('.btn-next').attr("disabled");
    //         return false;
    //     }
    //     } else {
    //         $(z).removeClass("error-box");
    //         $(".z1").hide();
    //         $('.btn-next').removeAttr("disabled");
    //     }

    // } else {
    //     limpiarVal();
    //     if (a.value == "" && b.value == "") {
    //         $(a).addClass("error-box");
    //         $(b).addClass("error-box");
    //         if(!($(".validacion ul").children().length == 2)) {
    //             $(src).append(b1);
    //             $(src).append(a1);
    //         }
    //         $('.btn-next').attr("disabled");
    //         return false;
    //     } else {
    //         $(a).removeClass("error-box");
    //         $(b).removeClass("error-box");
    //         $(".a1").hide();
    //         $(".b1").hide();
    //         $('.btn-next').removeAttr("disabled");
    //     }
    // }


function limpiarVal() {
    var a = document.forms["formReembolso"]["especialidad"];
    var b = document.forms["formReembolso"]["inputShort"];
    var c = document.forms["formReembolso"]["date"];
    var d = document.forms["formReembolso"]["invoice"];
    var e = document.forms["formReembolso"]["rut"];
    var f = document.forms["formReembolso"]["amount"];
    var g = document.forms["formReembolso"]["invoice"];
    var a1 = "<li class='error-mensaje a1'>Porfavor, elige especialidad.</li>";
    var b1 = "<li class='error-mensaje b1'>Porfavor, agrega un nombre corto al reembolso.</li>";
    var c1 = "<li class='error-mensaje c1'>Porfavor, elige fecha de atención.</li>";
    var d1 = "<li class='error-mensaje d1'>Porfavor, elige nº de boleta.</li>";
    var e1 = "<li class='error-mensaje e1'>Porfavor, elige RUT del prestador.</li>";
    var f1 = "<li class='error-mensaje f1'>Porfavor, elige monto solicitado a reembolsar.</li>";
    var src = ".validacion ul";

    $(a).on('keyup keydown keypress change paste', function() {
        if (a.value ==""){
            $(a).addClass("error-box");
            if(!($("li").hasClass(".a1"))) {
                $( src ).append(a1);
            }
        }else {
            $(a).removeClass("error-box");
            $(".a1").hide();
            
        }
    });
    $(b).on('keyup keydown keypress change paste', function() {
        if (b.value ==""){
            $(b).addClass("error-box");
            if(!($("li").hasClass(".b1"))) {
                $( src ).append(b1);
            }
        }else {
            $(b).removeClass("error-box");
            $(".b1").hide();
        }
    });
    $(c).on('keyup keydown keypress change paste', function() {
        if (c.value ==""){
            $(c).addClass("error-box");
            if(!($("li").hasClass(".c1"))) {
                $( src ).append(c1);
            }
        }else {
            $(c).removeClass("error-box");
            $(".c1").hide();
        }
    });
    $(d).on('keyup keydown keypress change paste', function() {
        if (d.value ==""){
            $(d).addClass("error-box");
            if(!($("li").hasClass(".d1"))) {
                $( src ).append(d1);
            }
        }else {
            $(d).removeClass("error-box");
            $(".d1").hide();
        }
    });
    $(e).on('keyup keydown keypress change paste', function() {
        if (e.value ==""){
            $(e).addClass("error-box");
            if(!($("li").hasClass(".e1"))) {
                $( src ).append(e1);
            }
        }else {
            $(e).removeClass("error-box");
            $(".e1").hide();
        }
    });
    $(f).on('keyup keydown keypress change paste', function() {
        if (f.value ==""){
            $(f).addClass("error-box");
            if(!($("li").hasClass(".f1"))) {
                $( src ).append(f1);
            }
        }else {
            $(f).removeClass("error-box");
            $(".f1").hide();
        }
    });
}

$('#btnForm').hide();

$(".key").on("click change paste keyup", function() {
    var a = document.forms["formReembolso"]["especialidad"];
    var ax = document.forms["formReembolso"]["especialidad-mo"];
    var b = document.forms["formReembolso"]["inputShort"];
    if (($(a).val() != "" || $(ax).val() != "") && $(b).val() != "") {
        console.log("mostrarBtn")
        $('#btnForm').show();
    } else {
        $('#btnForm').hide();
    }
})

$('#btnForm').click(function() {
    // function validaEspecialidad() {
    //     $(".input-specialty").on("change paste keyup", function() {
            console.log("entraste nivel 1");
            var a = $('#input-specialty').val();
            var ax = $('#input-specialty-mo').val();
            if(a == "Medicina pediátrica" || a == "medicina pediátrica" || a == "medicina pediatrica") {
                if($('.specialty-box').siblings().not('.hide')) {
                    $('.specialty-box').addClass('hide');
                }
                $('.flujo-lg_attach').removeClass('hide');
                $('.specialty-box_op4').removeClass('hide');
                
            } else if (a == "Psiquiatría" ||a == "psiquiatría" || a == "psiquiatria" || a == "siquiatría" || a == "siquiatria" || ax == "Psiquiatría") {
                if($('.specialty-box').siblings().not('.hide')) {
                    $('.specialty-box').addClass('hide');
                }
                $('.specialty-box_op5').removeClass('hide');
                
            } else if (a == "Medicina general" || ax == "Medicina general") {
                console.log("entraste nivel 2");
                if($('.specialty-box').siblings().not('.hide')) {
                    $('.specialty-box').addClass('hide');
                }
                $('.specialty-box_op1').removeClass('hide');
                $('.flujo-lg_attach').removeClass('hide');
                
            } else if (a == "Psicología" ||a == "psicología" || a == "psicologia" || a == "sicología" || a == "sicologia") {
                if($('.specialty-box').siblings().not('.hide')) {
                    $('.specialty-box').addClass('hide');
                }
                $('.flujo-sm_attach').removeClass('hide');
                $('.specialty-box_op2').removeClass('hide');
                $('.flujo-sm_files').removeClass('hide');           
            } else if (a == "Ginecología" || a == "ginecología" || a == "ginecologia") {
                if($('.specialty-box').siblings().not('.hide')) {
                    $('.specialty-box').addClass('hide');
                }
                $('.specialty-box_op3').removeClass('hide');
                $('.flujo-lg_attach').removeClass('hide');
                
            } else {
                if($('.specialty-box').siblings().not('.hide')) {
                    $('.specialty-box').addClass('hide');
                }
            }
    //     });
    // }
})
