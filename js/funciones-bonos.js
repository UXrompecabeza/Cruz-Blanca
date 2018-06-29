$(document).ready(function () {
    flujoMedico();
    flujoCentro();
    flujoEspecialidad();
    flujoComprarBono();
    flujoHistoricoBono();
    flujoReservaHora();
    flujoComprarBonoFail();
});

// Funcion select personalizado

$('.selectStyle').each(function(){
    var $this = $(this), numberOfOptions = $(this).children('option').length;
  
    $this.addClass('select-hidden'); 
    $this.wrap('<div class="selectDiv"></div>');
    $this.after('<div class="select-styled"></div>');

    var $styledSelect = $this.next('div.select-styled');
    $styledSelect.text($this.children('option').eq(0).text());
  
    var $list = $('<ul />', {
        'class': 'select-options'
    }).insertAfter($styledSelect);
  
    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($list);
    }
  
    var $listItems = $list.children('li');
  
    $styledSelect.click(function(e) {
        e.stopPropagation();
        $('div.select-styled.active').not(this).each(function(){
            $(this).removeClass('active').next('ul.select-options').hide();
        });
        $(this).toggleClass('active').next('ul.select-options').toggle();
    });
  
    $listItems.click(function(e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));
        $list.hide();
    });
  
    $(document).click(function() {
        $styledSelect.removeClass('active');
        $list.hide();
    });
});

function flujoMedico() {
    var a = $('#medicoName');
    var b = $('#medicoEsp');
    var c = $('#medioReg');
    var d = $("#cotizaMedico");
    var e = $(".cotiza-nueva-consulta-medico").find(".cnc_area1");
    var f = $(".cotiza-nueva-consulta-medico").find(".cnc_area3");
    var g = $(".cotiza-nueva-consulta-medico").find(".cnc_area2");
    var h = $(".doctores-area").find("input");
    var i = $(".linkFlujo");
    var j = $(".cotiza-nueva-consulta-medico").find(".cnc_area4");

    // Step 0
    $(".porMedico").click(function() {
        $(".cotizanuevaconsulta").addClass("hide");
        $(".cotiza-nueva-consulta-medico").removeClass("hide");
        e.removeClass("hide");
    });
    
    // Step 1
    
    $(a).on('keyup keydown keypress change paste', function () {
        if (a.val() != "" && b.val() != "" && c.val() != "") {
            $("#cotizaMedico").removeAttr("disabled");
            d.click(function() {
                e.addClass("hide");
                f.removeClass("hide");
            });
        } 
    });

    $(b).on('keyup keydown keypress change paste', function () {
        if (a.val() != "" && b.val() != "" && c.val() != "") {
            $("#cotizaMedico").removeAttr("disabled");
            d.click(function() {
                e.addClass("hide");
                f.removeClass("hide");
            });
        } 
    });
    $(c).on('keyup keydown keypress change paste', function () {
        if (a.val() != "" && b.val() != "" && c.val() != "") {
            $("#cotizaMedico").removeAttr("disabled");
            d.click(function() {
                e.addClass("hide");
                f.removeClass("hide");
            });
        } 
    });
    
    // Step 2
    $(h).on('keyup keydown keypress change paste', function () {
        if(h.is(':checked')) {
            $("#btnDocRbx").removeAttr("disabled");
            $("#btnDocRbx").click(function() {
                f.addClass("hide");
                g.removeClass("hide");
            });
        }
    });

    $('#MostrarDoctores').click(function () {
        $(".mas").toggleClass("hide");
        $(".menos").toggleClass("hide");
        $(".link-text-area img").toggleClass("link-arrow-rotate");
        $(".box-doctores").toggleClass("hide");
    });
    
    // Step 3 ....

    i.click(function() {
        g.addClass("hide");
        j.removeClass("hide");
    });
    
    $(".link-bono-rel").click(function() {
        g.addClass("hide");
        j.removeClass("hide");
    });

    //Apertura filtro
    $('.btn-filter-desk').click(function () {
        $(".box-filtro_select").toggleClass("hide");
        $(this).toggleClass("active");
    });
    
};

function flujoCentro() {
    var a = $(".cotiza-nueva-consulta-centro").find(".cnc_area1");
    var b = $(".cotiza-nueva-consulta-centro").find(".cnc_area2");
    var c = $(".cotiza-nueva-consulta-centro").find(".cnc_area3");
    var d = $(".cotiza-nueva-consulta-centro").find(".cnc_area4");
    var e = $(".select-centro-item1").find(".contentDrop").text() != "";
    var f = $(".selectize-input").hasClass("has-items");
    var g = $(".select-centro-item2").find(".contentDrop").text() != "";
    var h = $("#centroId");
    var i = $("#centroNombre");
    var j = $("#centroRegion");
    var k = $("#centroCiudad");
    var l = $(".doctores-area").find("input");

    // Step 0
    $(".porCentro").click(function() {
        $(".cotizanuevaconsulta").addClass("hide");
        $(".cotiza-nueva-consulta-centro").removeClass("hide");
        a.removeClass("hide");
    });
    
    // Step 1
    
    $(h).on('keyup keydown keypress change paste', function () {
        if (h.val() != "" && j.val() != "" && i.text().length > 0 && k.val() != "") {
            $("#btn-bono-selCentro").removeAttr("disabled"); 
            $("#btn-bono-selCentro").click(function() {
                a.addClass("hide");
                b.removeClass("hide");
                
            });
        } 
    });
    
    $(i).on('keyup keydown keypress change paste', function () {
        if (h.val() != "" && j.val() != "" && i.text().length > 0 && k.val() != "") {
            $("#btn-bono-selCentro").removeAttr("disabled");
            $("#btn-bono-selCentro").click(function() {
                a.addClass("hide");
                b.removeClass("hide");
            });
        } 
    });
    $(j).on('keyup keydown keypress change paste', function () {
        if (h.val() != "" && j.val() != "" && i.text().length > 0 && k.val() != "") {
            $("#btn-bono-selCentro").removeAttr("disabled");
            $("#btn-bono-selCentro").click(function() {
                a.addClass("hide");
                b.removeClass("hide");
            });
        } 
    });
    $(k).on('keyup keydown keypress change paste', function () {
        if (h.val() != "" && j.val() != "" && i.text().length > 0 && k.val() != "") {
            $("#btn-bono-selCentro").removeAttr("disabled");
            $("#btn-bono-selCentro").click(function() {
                a.addClass("hide");
                b.removeClass("hide");
            });
        } 
    });

    //Step 2

    $(".tabla-linkCentro").click(function() {
        b.addClass("hide");
        c.removeClass("hide");
    });
    
    $(".tabla-linkCentro_mo").click(function() {
        b.addClass("hide");
        c.removeClass("hide");
    });


    //Step 3
    $(l).on('keyup keydown keypress change paste', function () {
        if(l.is(':checked')) {
            $("#btn-centro-doctor").removeAttr("disabled");
            $("#btn-centro-doctor").click(function() {
                c.addClass("hide");
                d.removeClass("hide");
            });
        }
    });

    $('#MostrarDoctores2').click(function () {
        $(".mas").toggleClass("hide");
        $(".menos").toggleClass("hide");
        $(".link-text-area img").toggleClass("link-arrow-rotate");
        $(".box-doctores").toggleClass("hide");
    });
};

function flujoEspecialidad() {
    var a = $(".cotiza-nueva-consulta-especialidad").find(".cnc_area1");
    var b = $(".cotiza-nueva-consulta-especialidad").find(".cnc_area2");
    var c = $(".cotiza-nueva-consulta-especialidad").find(".cnc_area3");
    var d = $(".cotiza-nueva-consulta-especialidad").find(".cnc_area4"); 
    var e = $("#espeId");
    var f = $("#espeRegion");
    var g = $("#espeCiudad");
    var h = $("#btn-bono-selEspe"); 
    var i = $(".doctores-area").find("input");

// Step 0
$(".porEspecialidad").click(function() {
    $(".cotizanuevaconsulta").addClass("hide");
    $(".cotiza-nueva-consulta-especialidad").removeClass("hide");
    a.removeClass("hide");
});

// Step 1

$(e).on('keyup keydown keypress change paste', function () {
    if (e.val() != "" && f.val() != "" && g.val() != "") {
        h.removeAttr("disabled"); 
        h.click(function() {
            a.addClass("hide");
            b.removeClass("hide");
            
        });
    } 
});

$(f).on('keyup keydown keypress change paste', function () {
    if (e.val() != "" && f.val() != "" && g.val() != "") {
        h.removeAttr("disabled");
        h.click(function() {
            a.addClass("hide");
            b.removeClass("hide");
        });
    } 
});
$(g).on('keyup keydown keypress change paste', function () {
    if (e.val() != "" && f.val() != "" && g.val() != "") {
        h.removeAttr("disabled");
        h.click(function() {
            a.addClass("hide");
            b.removeClass("hide");
        });
    } 
});

// Step 2
$(".tabla-linkEspe").click(function() {
    b.addClass("hide");
    c.removeClass("hide");
});

$(".tabla-linkEspe_mo").click(function() {
    b.addClass("hide");
    c.removeClass("hide");
});

//Step 3
$(i).on('keyup keydown keypress change paste', function () {
    if(i.is(':checked')) {
        $("#btn-espe-doctor").removeAttr("disabled");
        $("#btn-espe-doctor").click(function() {
            c.addClass("hide");
            d.removeClass("hide");
        });
    }
});

$('#MostrarDoctores4').click(function () {
    $(".mas").toggleClass("hide");
    $(".menos").toggleClass("hide");
    $(".link-text-area img").toggleClass("link-arrow-rotate");
    $(".box-doctores").toggleClass("hide");
});



}

function flujoComprarBono() {
    $('#compra-bono-step1').click(function () {
        $(".compraBono-step1").addClass("hide");
        $(".compraBono-step2").removeClass("hide");
    });
}

function flujoComprarBonoFail() {
    $('#compraBonoFail').click(function () {
        $(".compraBono-step2").addClass("hide");
        $(".compraBono-step2fail").removeClass("hide");
    });
}

function flujoHistoricoBono() {
    var a = $(".link-historico-bono");
    $(a).click(function () {
        $(".bh-step1").addClass("hide");
        $(".bh-step2").removeClass("hide");
    });
}

function flujoReservaHora() {
    var a = $(".linkreserva");
    var b = $(".reservahora-ampm .body-box input");

    $(a).click(function () {
        $(".brh-step2").removeClass("hide");
        $("#reservahoraweek-table").find(".reservahr-activa").removeClass("reservahr-activa");
        $(this).addClass("reservahr-activa");
    });

    $('#MostrarReservaHoras').click(function () {
        $(".mas").toggleClass("hide");
        $(".menos").toggleClass("hide");
        $(".link-show img").toggleClass("link-arrow-rotate");
        $(".reserva-ampm-box__hide").toggleClass("hide");
    });
    
    
    $(b).on('keyup keydown keypress change paste', function () {
        if(b.is(':checked')) {
            $("#btn-reservahora").removeAttr("disabled");
            $("#btn-reservahora").click(function() {
                $(".brh-step1").addClass("hide");
                $(".brh-step3").removeClass("hide");
            });
        }
    });

    $("#date-mo").on('keyup keydown keypress change paste', function () {
        if($("#date-mo").val().length == 10) {
            $(".brh-step2").removeClass("hide");
        }
        
    }); 
}

$('#centroRegion').selectize({
    maxItems: 3
});
$('#espeRegion').selectize({});
$('#centroNombre').selectize({});
$('#medioReg').selectize({});
$('#espeCiudad').selectize({
    maxItems: 3
});

