function abre_fecha(id){
    $(".topico-div-corpo").css("display", "none")
    $(".topico-maior-menor").html("+")
    $(".topico-div-titulo-abre-fecha-maior-menor").removeClass("topico-abre-fecha-laranja")
    $(".topico-div-titulo-abre-fecha").removeClass("topico-abre-fecha-laranja-corpo-select")
    $(".topico-fecha").css("display", "none")

    $("#topico-corpo-"+id).css("display", "block")
    $("#topico-maior-menor-"+id).html("-")
    $("#topico-abre-fecha-"+id).addClass("topico-abre-fecha-laranja");
    $("#topico-abre-fecha-corpo-"+id).addClass("topico-abre-fecha-laranja-corpo-select")
    $("#topico-fecha-"+id).css("display", "block")
}

function fecha(id){
    $("#topico-corpo-"+id).css("display", "none")    
    $("#topico-maior-menor-"+id).html("+")
    $("#topico-abre-fecha-"+id).removeClass("topico-abre-fecha-laranja");
    $("#topico-abre-fecha-corpo-"+id).removeClass("topico-abre-fecha-laranja-corpo-select") 
    $("#topico-fecha-"+id).css("display", "none")   
}


$("#ul-1").hover(function(){
    $(".sub-menu").css("opacity", "1");
    $("#ul-2").css("opacity", "0.2");
    $("#ul-3").css("opacity", "0.2");
    $("#ul-4").css("opacity", "0.2");
    $("#ul-5").css("opacity", "0.2");
}, function(){
    $(".sub-menu").css("opacity", "0");
    $(".menu-ul").css("opacity", "1");
});

function abreFechaMenu(id){
    $(".menu-submenu").css("height", "0px")
    $("#menu-submenu-"+id).css("height", "341px")
    $("#menu-fechar-"+ id).css("display", "block");
    $(".menu-ul-top-subtitulo img").css("transform", "rotate(0deg)")
    $("#menu-mobile-"+id).css("transform", "rotate(180deg)")
    $(".menu-ul-top").css("opacity", "0.2")
    $("#menu-ul-top-"+id).css("opacity", "1")
}

function fechaMenu(id){
    $("#menu-submenu-"+ id).css("height", "0px")
    $("#menu-fechar-"+ id).css("display", "none")
    $(".menu-ul-top-subtitulo img").css("transform", "rotate(0deg)")
    $(".menu-submenu").css("height", "0px")
    $(".menu-ul-top").css("opacity", "1")
}

function compartilharAbrir(){
    $(".compartilhar-popup").css("display", "block")
    $(".compartilhar-abrir").css("display", "none")
    $(".compartilhar-fechar").css("display", "block")
}

function compartilharFechar(){
    $(".compartilhar-popup").css("display", "none")
    $(".compartilhar-abrir").css("display", "block")
    $(".compartilhar-fechar").css("display", "none")
}

function compartilharMobileAbrir(){
    $("#compartilhar").css("display", "block")
}

function fecharCompartilhar(){
    $("#compartilhar").css("display", "none")
}

function fechar(){
    $("#menu").css("display", "none");
    $("html, body").css("overflow", "auto")
}

function abrir(){
    $("#menu").css("display", "block");
    $("html, body").css("overflow", "hidden")
}

function eixo_tematico(tipo){
    var input_eixo_texto = $("#InputEixoTexto").val();

    if(input_eixo_texto == "PESCA"){
        $(document).ready(function(){
            setTimeout(eixo1Pesca, 300);
            setTimeout(eixo1PescaVolta, 1300);
            setTimeout(eixo2Pesca, 200);
            setTimeout(eixo2PescaVolta, 1200);
            setTimeout(eixo3Pesca, 100);
            setTimeout(eixo3PescaVolta, 1100);
            setTimeout(eixo4Pesca, 0);
            setTimeout(eixo4PescaVolta, 1000);
    
            function eixo1Pesca(){
                $("#eixo-1-pesca").css("top", "-60px")
            }
            
            function eixo1PescaVolta(){
                $("#eixo-1-pesca").css("top", "0px")
            }
    
            function eixo2Pesca(){
                $("#eixo-2-pesca").css("top", "-60px")
            }
            
            function eixo2PescaVolta(){
                $("#eixo-2-pesca").css("top", "0px")
            }
    
            function eixo3Pesca(){
                $("#eixo-3-pesca").css("top", "-60px")
            }
    
            function eixo3PescaVolta(){
                $("#eixo-3-pesca").css("top", "0px")
            }
    
            function eixo4Pesca(){
                $("#eixo-4-pesca").css("top", "-60px");
            }
    
            function eixo4PescaVolta(){
                $("#eixo-4-pesca").css("top", "0px")
            }
        });

        $(".eixo-div-corpo").css("display", "none");
        $(".eixo-div-busca").css("display", "block");
        $(".eixo-div-busca").html("<div class=\"eixo-div eixo-div-pesca\" id=\"eixo-1-pesca\" style=\"top: 300px\"><div class=\"eixo-div-img\"></div><div class=\"eixo-div-nome eixo-div-nome-pesca\">PESCA</div><div class=\"eixo-div-sociedade\">Cadeia produtiva ou cadeia de valores</div><div class=\"eixo-div-biodiversidade\">E biodiversidade através de atividades de educação ambiental</div><div class=\"eixo-ecossistemas\"><div class=\"eixo-ecossistemas-titulo\"><span class=\"eixo-ecossistemas-titulo-eco\">ECOSSISTEMAS</span><div class=\"eixo-ecossistemas-titulo-linha\">&nbsp;</div><div class=\"eixo-ecossistemas-icon\"><div class=\"eixo-ecossistemas-icon-div eco-1\"></div><div class=\"eixo-ecossistemas-icon-div eco-2\"></div><div class=\"eixo-ecossistemas-icon-div eco-3\"></div><div class=\"eixo-ecossistemas-icon-div eco-4\"></div><div class=\"eixo-ecossistemas-icon-div eco-5\"></div></div></div></div></div><div class=\"eixo-div eixo-div-pesca\" id=\"eixo-2-pesca\" style=\"top: 300px\"><div class=\"eixo-div-img\"></div><div class=\"eixo-div-nome eixo-div-nome-pesca\">PESCA</div><div class=\"eixo-div-sociedade\">Séries históricas, caracterização de desembarque, produtividade histórica</div><div class=\"eixo-div-biodiversidade\">E biodiversidade através de atividades de educação ambiental</div><div class=\"eixo-ecossistemas\"><div class=\"eixo-ecossistemas-titulo\"><span class=\"eixo-ecossistemas-titulo-eco\">ECOSSISTEMAS</span><div class=\"eixo-ecossistemas-titulo-linha\">&nbsp;</div><div class=\"eixo-ecossistemas-icon\"><div class=\"eixo-ecossistemas-icon-div eco-1\"></div><div class=\"eixo-ecossistemas-icon-div eco-2\"></div><div class=\"eixo-ecossistemas-icon-div eco-3\"></div><div class=\"eixo-ecossistemas-icon-div eco-4\"></div><div class=\"eixo-ecossistemas-icon-div eco-5\"></div></div></div></div></div><div class=\"eixo-div eixo-div-pesca\" id=\"eixo-3-pesca\" style=\"top: 300px\"><div class=\"eixo-div-img\"></div><div class=\"eixo-div-nome eixo-div-nome-pesca\">PESCA</div><div class=\"eixo-div-sociedade\">Áreas de conflito</div><div class=\"eixo-div-biodiversidade\">E biodiversidade através de atividades de educação ambiental</div><div class=\"eixo-ecossistemas\"><div class=\"eixo-ecossistemas-titulo\"><span class=\"eixo-ecossistemas-titulo-eco\">ECOSSISTEMAS</span><div class=\"eixo-ecossistemas-titulo-linha\">&nbsp;</div><div class=\"eixo-ecossistemas-icon\"><div class=\"eixo-ecossistemas-icon-div eco-1\"></div><div class=\"eixo-ecossistemas-icon-div eco-2\"></div><div class=\"eixo-ecossistemas-icon-div eco-3\"></div><div class=\"eixo-ecossistemas-icon-div eco-4\"></div><div class=\"eixo-ecossistemas-icon-div eco-5\"></div></div></div></div></div><div class=\"eixo-div eixo-div-pesca\" id=\"eixo-4-pesca\" style=\"top: 50px\"><div class=\"eixo-div-img\"></div><div class=\"eixo-div-nome eixo-div-nome-pesca\">PESCA</div><div class=\"eixo-div-sociedade\">Artes de pesca e caracterização da pesca</div><div class=\"eixo-div-biodiversidade\">E biodiversidade através de atividades de educação ambiental</div><div class=\"eixo-ecossistemas\"><div class=\"eixo-ecossistemas-titulo\"><span class=\"eixo-ecossistemas-titulo-eco\">ECOSSISTEMAS</span><div class=\"eixo-ecossistemas-titulo-linha\">&nbsp;</div><div class=\"eixo-ecossistemas-icon\"><div class=\"eixo-ecossistemas-icon-div eco-1\"></div><div class=\"eixo-ecossistemas-icon-div eco-2\"></div><div class=\"eixo-ecossistemas-icon-div eco-3\"></div><div class=\"eixo-ecossistemas-icon-div eco-4\"></div><div class=\"eixo-ecossistemas-icon-div eco-5\"></div></div></div></div></div>")
    }else if(input_eixo_texto == "SOCIOAMBIENTAL"){
        $(document).ready(function(){
            setTimeout(eixo1Socioambiental, 300);
            setTimeout(eixo1SocioambientalVolta, 1300);
            setTimeout(eixo2Socioambiental, 200);
            setTimeout(eixo2SocioambientalVolta, 1200);
            setTimeout(eixo3Socioambiental, 100);
            setTimeout(eixo3SocioambientalVolta, 1100);
            setTimeout(eixo4Socioambiental, 0);
            setTimeout(eixo4SocioambientalVolta, 1000);
    
            function eixo1Socioambiental(){
                $("#eixo-1-socioambiental").css("top", "-60px")
            }
            
            function eixo1SocioambientalVolta(){
                $("#eixo-1-socioambiental").css("top", "0px")
            }
    
            function eixo2Socioambiental(){
                $("#eixo-2-socioambiental").css("top", "-60px")
            }
            
            function eixo2SocioambientalVolta(){
                $("#eixo-2-socioambiental").css("top", "0px")
            }
    
            function eixo3Socioambiental(){
                $("#eixo-3-socioambiental").css("top", "-60px")
            }
    
            function eixo3SocioambientalVolta(){
                $("#eixo-3-socioambiental").css("top", "0px")
            }
    
            function eixo4Socioambiental(){
                $("#eixo-4-socioambiental").css("top", "-60px");
            }
    
            function eixo4SocioambientalVolta(){
                $("#eixo-4-socioambiental").css("top", "0px")
            }
        });

        $(".eixo-div-corpo").css("display", "none");
        $(".eixo-div-busca").css("display", "block");
        $(".eixo-div-busca").html("<div class=\"eixo-div eixo-div-socioambiental\" id=\"eixo-1-socioambiental\" style=\"top: 300px\"><div class=\"eixo-div-img\"></div><div class=\"eixo-div-nome eixo-div-nome-socioambiental\">SOCIOAMBIENTAL</div><div class=\"eixo-div-sociedade\">Inserir a sociedade na temática de bioinvasão, conservação</div><div class=\"eixo-div-biodiversidade\">E biodiversidade através de atividades de educação ambiental</div><div class=\"eixo-ecossistemas\"><div class=\"eixo-ecossistemas-titulo\"><span class=\"eixo-ecossistemas-titulo-eco eixo-ecossistemas-titulo-eco-socioambiental\">ECOSSISTEMAS</span><div class=\"eixo-ecossistemas-titulo-linha\">&nbsp;</div><div class=\"eixo-ecossistemas-icon\"><div class=\"eixo-ecossistemas-icon-div eco-1\"></div><div class=\"eixo-ecossistemas-icon-div eco-2\"></div><div class=\"eixo-ecossistemas-icon-div eco-3\"></div><div class=\"eixo-ecossistemas-icon-div eco-4\"></div><div class=\"eixo-ecossistemas-icon-div eco-5\"></div></div></div></div></div><div class=\"eixo-div eixo-div-socioambiental\" id=\"eixo-2-socioambiental\" style=\"top: 300px\"><div class=\"eixo-div-img\"></div><div class=\"eixo-div-nome eixo-div-nome-socioambiental\">SOCIOAMBIENTAL</div><div class=\"eixo-div-sociedade\">Perfil socioeconômico</div><div class=\"eixo-div-biodiversidade\">E biodiversidade através de atividades de educação ambiental</div><div class=\"eixo-ecossistemas\"><div class=\"eixo-ecossistemas-titulo\"><span class=\"eixo-ecossistemas-titulo-eco eixo-ecossistemas-titulo-eco-socioambiental\">ECOSSISTEMAS</span><div class=\"eixo-ecossistemas-titulo-linha\">&nbsp;</div><div class=\"eixo-ecossistemas-icon\"><div class=\"eixo-ecossistemas-icon-div eco-1\"></div><div class=\"eixo-ecossistemas-icon-div eco-2\"></div><div class=\"eixo-ecossistemas-icon-div eco-3\"></div><div class=\"eixo-ecossistemas-icon-div eco-4\"></div><div class=\"eixo-ecossistemas-icon-div eco-5\"></div></div></div></div></div><div class=\"eixo-div eixo-div-socioambiental\" id=\"eixo-3-socioambiental\" style=\"top: 300px\"><div class=\"eixo-div-img\"></div><div class=\"eixo-div-nome eixo-div-nome-socioambiental\">SOCIOAMBIENTAL</div><div class=\"eixo-div-sociedade\">Mulheres na pesca</div><div class=\"eixo-div-biodiversidade\">E biodiversidade através de atividades de educação ambiental</div><div class=\"eixo-ecossistemas\"><div class=\"eixo-ecossistemas-titulo\"><span class=\"eixo-ecossistemas-titulo-eco eixo-ecossistemas-titulo-eco-socioambiental\">ECOSSISTEMAS</span><div class=\"eixo-ecossistemas-titulo-linha\">&nbsp;</div><div class=\"eixo-ecossistemas-icon\"><div class=\"eixo-ecossistemas-icon-div eco-1\"></div><div class=\"eixo-ecossistemas-icon-div eco-2\"></div><div class=\"eixo-ecossistemas-icon-div eco-3\"></div><div class=\"eixo-ecossistemas-icon-div eco-4\"></div><div class=\"eixo-ecossistemas-icon-div eco-5\"></div></div></div></div></div><div class=\"eixo-div eixo-div-socioambiental\" id=\"eixo-4-socioambiental\" style=\"top: 50px\"><div class=\"eixo-div-img\"></div><div class=\"eixo-div-nome eixo-div-nome-socioambiental\">SOCIOAMBIENTAL</div><div class=\"eixo-div-sociedade\">Formação de pessoas, cursos e palestras</div><div class=\"eixo-div-biodiversidade\">E biodiversidade através de atividades de educação ambiental</div><div class=\"eixo-ecossistemas\"><div class=\"eixo-ecossistemas-titulo\"><span class=\"eixo-ecossistemas-titulo-eco eixo-ecossistemas-titulo-eco-socioambiental\">ECOSSISTEMAS</span><div class=\"eixo-ecossistemas-titulo-linha\">&nbsp;</div><div class=\"eixo-ecossistemas-icon\"><div class=\"eixo-ecossistemas-icon-div eco-1\"></div><div class=\"eixo-ecossistemas-icon-div eco-2\"></div><div class=\"eixo-ecossistemas-icon-div eco-3\"></div><div class=\"eixo-ecossistemas-icon-div eco-4\"></div><div class=\"eixo-ecossistemas-icon-div eco-5\"></div></div></div></div></div><div class=\"eixo-div eixo-div-socioambiental\"><div class=\"eixo-div-img\"></div><div class=\"eixo-div-nome eixo-div-nome-socioambiental\">SOCIOAMBIENTAL</div><div class=\"eixo-div-sociedade\">Conscientização ambiental</div><div class=\"eixo-div-biodiversidade\">E biodiversidade através de atividades de educação ambiental</div><div class=\"eixo-ecossistemas\"><div class=\"eixo-ecossistemas-titulo\"><span class=\"eixo-ecossistemas-titulo-eco eixo-ecossistemas-titulo-eco-socioambiental\">ECOSSISTEMAS</span><div class=\"eixo-ecossistemas-titulo-linha\">&nbsp;</div><div class=\"eixo-ecossistemas-icon\"><div class=\"eixo-ecossistemas-icon-div eco-1\"></div><div class=\"eixo-ecossistemas-icon-div eco-2\"></div><div class=\"eixo-ecossistemas-icon-div eco-3\"></div><div class=\"eixo-ecossistemas-icon-div eco-4\"></div><div class=\"eixo-ecossistemas-icon-div eco-5\"></div></div></div></div></div><div class=\"eixo-div eixo-div-socioambiental\"><div class=\"eixo-div-img\"></div><div class=\"eixo-div-nome eixo-div-nome-socioambiental\">SOCIOAMBIENTAL</div><div class=\"eixo-div-sociedade\">Conscientização tradicional</div><div class=\"eixo-div-biodiversidade\">E biodiversidade através de atividades de educação ambiental</div><div class=\"eixo-ecossistemas\"><div class=\"eixo-ecossistemas-titulo\"><span class=\"eixo-ecossistemas-titulo-eco eixo-ecossistemas-titulo-eco-socioambiental\">ECOSSISTEMAS</span><div class=\"eixo-ecossistemas-titulo-linha\">&nbsp;</div><div class=\"eixo-ecossistemas-icon\"><div class=\"eixo-ecossistemas-icon-div eco-1\"></div><div class=\"eixo-ecossistemas-icon-div eco-2\"></div><div class=\"eixo-ecossistemas-icon-div eco-3\"></div><div class=\"eixo-ecossistemas-icon-div eco-4\"></div><div class=\"eixo-ecossistemas-icon-div eco-5\"></div></div></div></div></div>")
    }else if(input_eixo_texto == "ECOLOGIA E BIOLOGIA"){
        $(document).ready(function(){
            setTimeout(eixo1Ecologia, 300);
            setTimeout(eixo1EcologiaVolta, 1300);
            setTimeout(eixo2Ecologia, 200);
            setTimeout(eixo2EcologiaVolta, 1200);
            setTimeout(eixo3Ecologia, 100);
            setTimeout(eixo3EcologiaVolta, 1100);
            setTimeout(eixo4Ecologia, 0);
            setTimeout(eixo4EcologiaVolta, 1000);
    
            function eixo1Ecologia(){
                $("#eixo-1-ecologia").css("top", "-60px")
            }
            
            function eixo1EcologiaVolta(){
                $("#eixo-1-ecologia").css("top", "0px")
            }
    
            function eixo2Ecologia(){
                $("#eixo-2-ecologia").css("top", "-60px")
            }
            
            function eixo2EcologiaVolta(){
                $("#eixo-2-ecologia").css("top", "0px")
            }
    
            function eixo3Ecologia(){
                $("#eixo-3-ecologia").css("top", "-60px")
            }
    
            function eixo3EcologiaVolta(){
                $("#eixo-3-ecologia").css("top", "0px")
            }
    
            function eixo4Ecologia(){
                $("#eixo-4-ecologia").css("top", "-60px");
            }
    
            function eixo4EcologiaVolta(){
                $("#eixo-4-ecologia").css("top", "0px")
            }
        });

        $(".eixo-div-corpo").css("display", "none");
        $(".eixo-div-busca").css("display", "block");
        $(".eixo-div-busca").html("<div class=\"eixo-div eixo-div-ecologia\" id=\"eixo-1-ecologia\" style=\"top: 300px\"><div class=\"eixo-div-img\"></div><div class=\"eixo-div-nome eixo-div-nome-ecologia\">ECOLOGIA</div><div class=\"eixo-div-sociedade\">Espécies invasoras</div><div class=\"eixo-div-biodiversidade\">E biodiversidade através de atividades de educação ambiental</div><div class=\"eixo-ecossistemas\"><div class=\"eixo-ecossistemas-titulo\"><span class=\"eixo-ecossistemas-titulo-eco eixo-ecossistemas-titulo-eco-ecologia\">ECOSSISTEMAS</span><div class=\"eixo-ecossistemas-titulo-linha\">&nbsp;</div><div class=\"eixo-ecossistemas-icon\"><div class=\"eixo-ecossistemas-icon-div eco-1\"></div><div class=\"eixo-ecossistemas-icon-div eco-2\"></div><div class=\"eixo-ecossistemas-icon-div eco-3\"></div><div class=\"eixo-ecossistemas-icon-div eco-4\"></div><div class=\"eixo-ecossistemas-icon-div eco-5\"></div></div></div></div></div><div class=\"eixo-div eixo-div-ecologia\" id=\"eixo-2-ecologia\" style=\"top: 300px\"><div class=\"eixo-div-img\"></div><div class=\"eixo-div-nome eixo-div-nome-ecologia\">ECOLOGIA</div><div class=\"eixo-div-sociedade\">Teia trófica</div><div class=\"eixo-div-biodiversidade\">E biodiversidade através de atividades de educação ambiental</div><div class=\"eixo-ecossistemas\"><div class=\"eixo-ecossistemas-titulo\"><span class=\"eixo-ecossistemas-titulo-eco eixo-ecossistemas-titulo-eco-ecologia\">ECOSSISTEMAS</span><div class=\"eixo-ecossistemas-titulo-linha\">&nbsp;</div><div class=\"eixo-ecossistemas-icon\"><div class=\"eixo-ecossistemas-icon-div eco-1\"></div><div class=\"eixo-ecossistemas-icon-div eco-2\"></div><div class=\"eixo-ecossistemas-icon-div eco-3\"></div><div class=\"eixo-ecossistemas-icon-div eco-4\"></div><div class=\"eixo-ecossistemas-icon-div eco-5\"></div></div></div></div></div><div class=\"eixo-div eixo-div-ecologia\" id=\"eixo-3-ecologia\" style=\"top: 300px\"><div class=\"eixo-div-img\"></div><div class=\"eixo-div-nome eixo-div-nome-ecologia\">ECOLOGIA</div><div class=\"eixo-div-sociedade\">Movimentos e rotas migratórias, limites geográfico, ecologia espacial</div><div class=\"eixo-div-biodiversidade\">E biodiversidade através de atividades de educação ambiental</div><div class=\"eixo-ecossistemas\"><div class=\"eixo-ecossistemas-titulo\"><span class=\"eixo-ecossistemas-titulo-eco eixo-ecossistemas-titulo-eco-ecologia\">ECOSSISTEMAS</span><div class=\"eixo-ecossistemas-titulo-linha\">&nbsp;</div><div class=\"eixo-ecossistemas-icon\"><div class=\"eixo-ecossistemas-icon-div eco-1\"></div><div class=\"eixo-ecossistemas-icon-div eco-2\"></div><div class=\"eixo-ecossistemas-icon-div eco-3\"></div><div class=\"eixo-ecossistemas-icon-div eco-4\"></div><div class=\"eixo-ecossistemas-icon-div eco-5\"></div></div></div></div></div><div class=\"eixo-div eixo-div-ecologia\" id=\"eixo-4-ecologia\" style=\"top: 50px\"><div class=\"eixo-div-img\"></div><div class=\"eixo-div-nome eixo-div-nome-ecologia\">ECOLOGIA</div><div class=\"eixo-div-sociedade\">Tamanho populacional, estrutura populacional, parametros idade e crescimento</div><div class=\"eixo-div-biodiversidade\">E biodiversidade através de atividades de educação ambiental</div><div class=\"eixo-ecossistemas\"><div class=\"eixo-ecossistemas-titulo\"><span class=\"eixo-ecossistemas-titulo-eco eixo-ecossistemas-titulo-eco-ecologia\">ECOSSISTEMAS</span><div class=\"eixo-ecossistemas-titulo-linha\">&nbsp;</div><div class=\"eixo-ecossistemas-icon\"><div class=\"eixo-ecossistemas-icon-div eco-1\"></div><div class=\"eixo-ecossistemas-icon-div eco-2\"></div><div class=\"eixo-ecossistemas-icon-div eco-3\"></div><div class=\"eixo-ecossistemas-icon-div eco-4\"></div><div class=\"eixo-ecossistemas-icon-div eco-5\"></div></div></div></div></div>")
    }else if(input_eixo_texto == "POLÍTICAS PÚBLICAS"){
        $(document).ready(function(){
            setTimeout(eixo1Politicas, 300);
            setTimeout(eixo1PoliticasVolta, 1300);
            setTimeout(eixo2Politicas, 200);
            setTimeout(eixo2PoliticasVolta, 1200);
            setTimeout(eixo3Politicas, 100);
            setTimeout(eixo3PoliticasVolta, 1100);
            setTimeout(eixo4Politicas, 0);
            setTimeout(eixo4PoliticasVolta, 1000);
    
            function eixo1Politicas(){
                $("#eixo-1-politicas").css("top", "-60px")
            }
            
            function eixo1PoliticasVolta(){
                $("#eixo-1-politicas").css("top", "0px")
            }
    
            function eixo2Politicas(){
                $("#eixo-2-politicas").css("top", "-60px")
            }
            
            function eixo2PoliticasVolta(){
                $("#eixo-2-politicas").css("top", "0px")
            }
    
            function eixo3Politicas(){
                $("#eixo-3-politicas").css("top", "-60px")
            }
    
            function eixo3PoliticasVolta(){
                $("#eixo-3-politicas").css("top", "0px")
            }
    
            function eixo4Politicas(){
                $("#eixo-4-politicas").css("top", "-60px");
            }
    
            function eixo4PoliticasVolta(){
                $("#eixo-4-politicas").css("top", "0px")
            }
        });

        $(".eixo-div-corpo").css("display", "none");
        $(".eixo-div-busca").css("display", "block");
        $(".eixo-div-busca").html("<div class=\"eixo-div eixo-div-politicas\" id=\"eixo-1-politicas\" style=\"top: 300px\"><div class=\"eixo-div-img\"></div><div class=\"eixo-div-nome eixo-div-nome-politicas\">POLÍTICAS PÚBLICAS</div><div class=\"eixo-div-sociedade\">Ações voltadas para as Unidades de Conservação</div><div class=\"eixo-div-biodiversidade\">E biodiversidade através de atividades de educação ambiental</div><div class=\"eixo-ecossistemas\"><div class=\"eixo-ecossistemas-titulo\"><span class=\"eixo-ecossistemas-titulo-eco eixo-ecossistemas-titulo-eco-politicas\">ECOSSISTEMAS</span><div class=\"eixo-ecossistemas-titulo-linha\">&nbsp;</div><div class=\"eixo-ecossistemas-icon\"><div class=\"eixo-ecossistemas-icon-div eco-1\"></div><div class=\"eixo-ecossistemas-icon-div eco-2\"></div><div class=\"eixo-ecossistemas-icon-div eco-3\"></div><div class=\"eixo-ecossistemas-icon-div eco-4\"></div><div class=\"eixo-ecossistemas-icon-div eco-5\"></div></div></div></div></div><div class=\"eixo-div eixo-div-politicas\" id=\"eixo-2-politicas\" style=\"top: 300px\"><div class=\"eixo-div-img\"></div><div class=\"eixo-div-nome eixo-div-nome-politicas\">POLÍTICAS PÚBLICAS</div><div class=\"eixo-div-sociedade\">Ações voltadas para o governo</div><div class=\"eixo-div-biodiversidade\">E biodiversidade através de atividades de educação ambiental</div><div class=\"eixo-ecossistemas\"><div class=\"eixo-ecossistemas-titulo\"><span class=\"eixo-ecossistemas-titulo-eco eixo-ecossistemas-titulo-eco-politicas\">ECOSSISTEMAS</span><div class=\"eixo-ecossistemas-titulo-linha\">&nbsp;</div><div class=\"eixo-ecossistemas-icon\"><div class=\"eixo-ecossistemas-icon-div eco-1\"></div><div class=\"eixo-ecossistemas-icon-div eco-2\"></div><div class=\"eixo-ecossistemas-icon-div eco-3\"></div><div class=\"eixo-ecossistemas-icon-div eco-4\"></div><div class=\"eixo-ecossistemas-icon-div eco-5\"></div></div></div></div></div><div class=\"eixo-div eixo-div-politicas\" id=\"eixo-3-politicas\" style=\"top: 300px\"><div class=\"eixo-div-img\"></div><div class=\"eixo-div-nome eixo-div-nome-politicas\">POLÍTICAS PÚBLICAS</div><div class=\"eixo-div-sociedade\">Sistematização de licenciamentos Petróleo e Gás, Estado da arte PEAs e PCAPs</div><div class=\"eixo-div-biodiversidade\">E biodiversidade através de atividades de educação ambiental</div><div class=\"eixo-ecossistemas\"><div class=\"eixo-ecossistemas-titulo\"><span class=\"eixo-ecossistemas-titulo-eco eixo-ecossistemas-titulo-eco-politicas\">ECOSSISTEMAS</span><div class=\"eixo-ecossistemas-titulo-linha\">&nbsp;</div><div class=\"eixo-ecossistemas-icon\"><div class=\"eixo-ecossistemas-icon-div eco-1\"></div><div class=\"eixo-ecossistemas-icon-div eco-2\"></div><div class=\"eixo-ecossistemas-icon-div eco-3\"></div><div class=\"eixo-ecossistemas-icon-div eco-4\"></div><div class=\"eixo-ecossistemas-icon-div eco-5\"></div></div></div></div></div>")
    }else if(input_eixo_texto == "SAÚDE ÚNICA"){
        $(document).ready(function(){
            setTimeout(eixo1Saude, 300);
            setTimeout(eixo1SaudeVolta, 1300);
            setTimeout(eixo2Saude, 200);
            setTimeout(eixo2SaudeVolta, 1200);
            setTimeout(eixo3Saude, 100);
            setTimeout(eixo3SaudeVolta, 1100);
            setTimeout(eixo4Saude, 0);
            setTimeout(eixo4SaudeVolta, 1000);
    
            function eixo1Saude(){
                $("#eixo-1-saude").css("top", "-60px")
            }
            
            function eixo1SaudeVolta(){
                $("#eixo-1-saude").css("top", "0px")
            }
    
            function eixo2Saude(){
                $("#eixo-2-saude").css("top", "-60px")
            }
            
            function eixo2SaudeVolta(){
                $("#eixo-2-saude").css("top", "0px")
            }
    
            function eixo3Saude(){
                $("#eixo-3-saude").css("top", "-60px")
            }
    
            function eixo3SaudeVolta(){
                $("#eixo-3-saude").css("top", "0px")
            }
    
            function eixo4Saude(){
                $("#eixo-4-saude").css("top", "-60px");
            }
    
            function eixo4SaudeVolta(){
                $("#eixo-4-saude").css("top", "0px")
            }
        });

        $(".eixo-div-corpo").css("display", "none");
        $(".eixo-div-busca").css("display", "block");
        $(".eixo-div-busca").html("<div class=\"eixo-div eixo-div-saude\" id=\"eixo-1-saude\" style=\"top: 300px\"><div class=\"eixo-div-img\"></div><div class=\"eixo-div-nome eixo-div-nome-saude\">SAÚDE ÚNICA</div><div class=\"eixo-div-sociedade\">Poluentes e contaminantes</div><div class=\"eixo-div-biodiversidade\">E biodiversidade através de atividades de educação ambiental</div><div class=\"eixo-ecossistemas\"><div class=\"eixo-ecossistemas-titulo\"><span class=\"eixo-ecossistemas-titulo-eco eixo-ecossistemas-titulo-eco-saude\">ECOSSISTEMAS</span><div class=\"eixo-ecossistemas-titulo-linha\">&nbsp;</div><div class=\"eixo-ecossistemas-icon\"><div class=\"eixo-ecossistemas-icon-div eco-1\"></div><div class=\"eixo-ecossistemas-icon-div eco-2\"></div><div class=\"eixo-ecossistemas-icon-div eco-3\"></div><div class=\"eixo-ecossistemas-icon-div eco-4\"></div><div class=\"eixo-ecossistemas-icon-div eco-5\"></div></div></div></div></div><div class=\"eixo-div eixo-div-saude\" id=\"eixo-2-saude\" style=\"top: 300px\"><div class=\"eixo-div-img\"></div><div class=\"eixo-div-nome eixo-div-nome-saude\">SAÚDE ÚNICA</div><div class=\"eixo-div-sociedade\">Impactos/Mudanças climáticas</div><div class=\"eixo-div-biodiversidade\">E biodiversidade através de atividades de educação ambiental</div><div class=\"eixo-ecossistemas\"><div class=\"eixo-ecossistemas-titulo\"><span class=\"eixo-ecossistemas-titulo-eco eixo-ecossistemas-titulo-eco-saude\">ECOSSISTEMAS</span><div class=\"eixo-ecossistemas-titulo-linha\">&nbsp;</div><div class=\"eixo-ecossistemas-icon\"><div class=\"eixo-ecossistemas-icon-div eco-1\"></div><div class=\"eixo-ecossistemas-icon-div eco-2\"></div><div class=\"eixo-ecossistemas-icon-div eco-3\"></div><div class=\"eixo-ecossistemas-icon-div eco-4\"></div><div class=\"eixo-ecossistemas-icon-div eco-5\"></div></div></div></div></div><div class=\"eixo-div eixo-div-saude\" id=\"eixo-3-saude\" style=\"top: 300px\"><div class=\"eixo-div-img\"></div><div class=\"eixo-div-nome eixo-div-nome-saude\">SAÚDE ÚNICA</div><div class=\"eixo-div-sociedade\">Parasitos (doenças)</div><div class=\"eixo-div-biodiversidade\">E biodiversidade através de atividades de educação ambiental</div><div class=\"eixo-ecossistemas\"><div class=\"eixo-ecossistemas-titulo\"><span class=\"eixo-ecossistemas-titulo-eco eixo-ecossistemas-titulo-eco-saude\">ECOSSISTEMAS</span><div class=\"eixo-ecossistemas-titulo-linha\">&nbsp;</div><div class=\"eixo-ecossistemas-icon\"><div class=\"eixo-ecossistemas-icon-div eco-1\"></div><div class=\"eixo-ecossistemas-icon-div eco-2\"></div><div class=\"eixo-ecossistemas-icon-div eco-3\"></div><div class=\"eixo-ecossistemas-icon-div eco-4\"></div><div class=\"eixo-ecossistemas-icon-div eco-5\"></div></div></div></div></div>")
    }else{
        $(".eixo-div-corpo").css("display", "block");
        $(".eixo-div-busca").css("display", "none");
    }
}

function ecossistemas(tipo){

    var input_ecossistemas = $("#InputEcossistemasTexto").val();
    

    if(input_ecossistemas == "MAR ABERTO"){
        $(".eixo-div-corpo").css("display", "none");
        $(".eixo-div-busca").css("display", "block");
        $(".eixo-div-busca").html("<div class=\"eixo-div eixo-div-socioambiental\"><div class=\"eixo-div-img\"></div><div class=\"eixo-div-nome\">ECOLOGIA</div><div class=\"eixo-div-sociedade\">Perfil socioeconômico</div><div class=\"eixo-div-biodiversidade\">E biodiversidade através de atividades de educação ambiental</div><div class=\"eixo-ecossistemas\"><div class=\"eixo-ecossistemas-titulo\"><span class=\"eixo-ecossistemas-titulo-eco eixo-ecossistemas-titulo-eco-socioambiental\">ECOSSISTEMAS</span><div class=\"eixo-ecossistemas-titulo-linha\">&nbsp;</div><div class=\"eixo-ecossistemas-icon\"><div class=\"eixo-ecossistemas-icon-div eco-1\"></div><div class=\"eixo-ecossistemas-icon-div eco-2\"></div><div class=\"eixo-ecossistemas-icon-div eco-3\"></div><div class=\"eixo-ecossistemas-icon-div eco-4\"></div><div class=\"eixo-ecossistemas-icon-div eco-5\"></div></div></div></div></div><div class=\"eixo-div eixo-div-politicas\"><div class=\"eixo-div-img\"></div><div class=\"eixo-div-nome\">POLÍTICAS PÚBLICAS</div><div class=\"eixo-div-sociedade\">Ações voltadas para as Unidades de Conservação</div><div class=\"eixo-div-biodiversidade\">E biodiversidade através de atividades de educação ambiental</div><div class=\"eixo-ecossistemas\"><div class=\"eixo-ecossistemas-titulo\"><span class=\"eixo-ecossistemas-titulo-eco eixo-ecossistemas-titulo-eco-politicas\">ECOSSISTEMAS</span><div class=\"eixo-ecossistemas-titulo-linha\">&nbsp;</div><div class=\"eixo-ecossistemas-icon\"><div class=\"eixo-ecossistemas-icon-div eco-1\"></div><div class=\"eixo-ecossistemas-icon-div eco-2\"></div><div class=\"eixo-ecossistemas-icon-div eco-3\"></div><div class=\"eixo-ecossistemas-icon-div eco-4\"></div><div class=\"eixo-ecossistemas-icon-div eco-5\"></div></div></div></div></div>")
    }else if(input_ecossistemas == "CORAIS"){
        $(".eixo-div-corpo").css("display", "none");
        $(".eixo-div-busca").css("display", "block");
        $(".eixo-div-busca").html("<div class=\"eixo-div eixo-div-pesca\"><div class=\"eixo-div-img\"></div><div class=\"eixo-div-nome\">PESCA</div><div class=\"eixo-div-sociedade\">Cadeia produtiva ou cadeia de valores</div><div class=\"eixo-div-biodiversidade\">E biodiversidade através de atividades de educação ambiental</div><div class=\"eixo-ecossistemas\"><div class=\"eixo-ecossistemas-titulo\"><span class=\"eixo-ecossistemas-titulo-eco eixo-ecossistemas-titulo-eco-pesca\">ECOSSISTEMAS</span><div class=\"eixo-ecossistemas-titulo-linha\">&nbsp;</div><div class=\"eixo-ecossistemas-icon\"><div class=\"eixo-ecossistemas-icon-div eco-1\"></div><div class=\"eixo-ecossistemas-icon-div eco-2\"></div><div class=\"eixo-ecossistemas-icon-div eco-3\"></div><div class=\"eixo-ecossistemas-icon-div eco-4\"></div><div class=\"eixo-ecossistemas-icon-div eco-5\"></div></div></div></div></div><div class=\"eixo-div eixo-div-socioambiental\"><div class=\"eixo-div-img\"></div><div class=\"eixo-div-nome\">SOCIOAMBIENTAL</div><div class=\"eixo-div-sociedade\">Mulheres na pesca</div><div class=\"eixo-div-biodiversidade\">E biodiversidade através de atividades de educação ambiental</div><div class=\"eixo-ecossistemas\"><div class=\"eixo-ecossistemas-titulo\"><span class=\"eixo-ecossistemas-titulo-eco eixo-ecossistemas-titulo-eco-socioambiental\">ECOSSISTEMAS</span><div class=\"eixo-ecossistemas-titulo-linha\">&nbsp;</div><div class=\"eixo-ecossistemas-icon\"><div class=\"eixo-ecossistemas-icon-div eco-1\"></div><div class=\"eixo-ecossistemas-icon-div eco-2\"></div><div class=\"eixo-ecossistemas-icon-div eco-3\"></div><div class=\"eixo-ecossistemas-icon-div eco-4\"></div><div class=\"eixo-ecossistemas-icon-div eco-5\"></div></div></div></div></div><div class=\"eixo-div eixo-div-ecologia\"><div class=\"eixo-div-img\"></div><div class=\"eixo-div-nome\">ECOLOGIA E BIOLOGIA</div><div class=\"eixo-div-sociedade\">Espécies invasoras</div><div class=\"eixo-div-biodiversidade\">E biodiversidade através de atividades de educação ambiental</div><div class=\"eixo-ecossistemas\"><div class=\"eixo-ecossistemas-titulo\"><span class=\"eixo-ecossistemas-titulo-eco eixo-ecossistemas-titulo-eco-ecologia\">ECOSSISTEMAS</span><div class=\"eixo-ecossistemas-titulo-linha\">&nbsp;</div><div class=\"eixo-ecossistemas-icon\"><div class=\"eixo-ecossistemas-icon-div eco-1\"></div><div class=\"eixo-ecossistemas-icon-div eco-2\"></div><div class=\"eixo-ecossistemas-icon-div eco-3\"></div><div class=\"eixo-ecossistemas-icon-div eco-4\"></div><div class=\"eixo-ecossistemas-icon-div eco-5\"></div></div></div></div></div><div class=\"eixo-div eixo-div-politicas\"><div class=\"eixo-div-img\"></div><div class=\"eixo-div-nome\">POLÍTICAS PÚBLICAS</div><div class=\"eixo-div-sociedade\">Ações voltadas para o governo</div><div class=\"eixo-div-biodiversidade\">E biodiversidade através de atividades de educação ambiental</div><div class=\"eixo-ecossistemas\"><div class=\"eixo-ecossistemas-titulo\"><span class=\"eixo-ecossistemas-titulo-eco eixo-ecossistemas-titulo-eco-politicas\">ECOSSISTEMAS</span><div class=\"eixo-ecossistemas-titulo-linha\">&nbsp;</div><div class=\"eixo-ecossistemas-icon\"><div class=\"eixo-ecossistemas-icon-div eco-1\"></div><div class=\"eixo-ecossistemas-icon-div eco-2\"></div><div class=\"eixo-ecossistemas-icon-div eco-3\"></div><div class=\"eixo-ecossistemas-icon-div eco-4\"></div><div class=\"eixo-ecossistemas-icon-div eco-5\"></div></div></div></div></div><div class=\"eixo-div eixo-div-saude\"><div class=\"eixo-div-img\"></div><div class=\"eixo-div-nome\">SAÚDE ÚNICA</div><div class=\"eixo-div-sociedade\">Poluentes e contaminantes</div><div class=\"eixo-div-biodiversidade\">E biodiversidade através de atividades de educação ambiental</div><div class=\"eixo-ecossistemas\"><div class=\"eixo-ecossistemas-titulo\"><span class=\"eixo-ecossistemas-titulo-eco eixo-ecossistemas-titulo-eco-saude\">ECOSSISTEMAS</span><div class=\"eixo-ecossistemas-titulo-linha\">&nbsp;</div><div class=\"eixo-ecossistemas-icon\"><div class=\"eixo-ecossistemas-icon-div eco-1\"></div><div class=\"eixo-ecossistemas-icon-div eco-2\"></div><div class=\"eixo-ecossistemas-icon-div eco-3\"></div><div class=\"eixo-ecossistemas-icon-div eco-4\"></div><div class=\"eixo-ecossistemas-icon-div eco-5\"></div></div></div></div></div>")
    }else if(input_ecossistemas == "COSTÕES/POÇAS"){
        $(".eixo-div-corpo").css("display", "none");
        $(".eixo-div-busca").css("display", "block");
        $(".eixo-div-busca").html("<div class=\"eixo-div eixo-div-pesca\"><div class=\"eixo-div-img\"></div><div class=\"eixo-div-nome\">PESCA</div><div class=\"eixo-div-sociedade\">Séries históricas, caracterização de desembarque, produtividade histórica</div><div class=\"eixo-div-biodiversidade\">E biodiversidade através de atividades de educação ambiental</div><div class=\"eixo-ecossistemas\"><div class=\"eixo-ecossistemas-titulo\"><span class=\"eixo-ecossistemas-titulo-eco eixo-ecossistemas-titulo-eco-pesca\">ECOSSISTEMAS</span><div class=\"eixo-ecossistemas-titulo-linha\">&nbsp;</div><div class=\"eixo-ecossistemas-icon\"><div class=\"eixo-ecossistemas-icon-div eco-1\"></div><div class=\"eixo-ecossistemas-icon-div eco-2\"></div><div class=\"eixo-ecossistemas-icon-div eco-3\"></div><div class=\"eixo-ecossistemas-icon-div eco-4\"></div><div class=\"eixo-ecossistemas-icon-div eco-5\"></div></div></div></div></div><div class=\"eixo-div eixo-div-politicas\"><div class=\"eixo-div-img\"></div><div class=\"eixo-div-nome\">POLÍTICAS PÚBLICAS</div><div class=\"eixo-div-sociedade\">Sistematização de licenciamentos Petróleo e Gás, Estado da arte PEAs e PCAPs</div><div class=\"eixo-div-biodiversidade\">E biodiversidade através de atividades de educação ambiental</div><div class=\"eixo-ecossistemas\"><div class=\"eixo-ecossistemas-titulo\"><span class=\"eixo-ecossistemas-titulo-eco eixo-ecossistemas-titulo-eco-politicas\">ECOSSISTEMAS</span><div class=\"eixo-ecossistemas-titulo-linha\">&nbsp;</div><div class=\"eixo-ecossistemas-icon\"><div class=\"eixo-ecossistemas-icon-div eco-1\"></div><div class=\"eixo-ecossistemas-icon-div eco-2\"></div><div class=\"eixo-ecossistemas-icon-div eco-3\"></div><div class=\"eixo-ecossistemas-icon-div eco-4\"></div><div class=\"eixo-ecossistemas-icon-div eco-5\"></div></div></div></div></div><div class=\"eixo-div eixo-div-saude\"><div class=\"eixo-div-img\"></div><div class=\"eixo-div-nome\">SAÚDE ÚNICA</div><div class=\"eixo-div-sociedade\">Impactos/Mudanças climáticas</div><div class=\"eixo-div-biodiversidade\">E biodiversidade através de atividades de educação ambiental</div><div class=\"eixo-ecossistemas\"><div class=\"eixo-ecossistemas-titulo\"><span class=\"eixo-ecossistemas-titulo-eco eixo-ecossistemas-titulo-eco-saude\">ECOSSISTEMAS</span><div class=\"eixo-ecossistemas-titulo-linha\">&nbsp;</div><div class=\"eixo-ecossistemas-icon\"><div class=\"eixo-ecossistemas-icon-div eco-1\"></div><div class=\"eixo-ecossistemas-icon-div eco-2\"></div><div class=\"eixo-ecossistemas-icon-div eco-3\"></div><div class=\"eixo-ecossistemas-icon-div eco-4\"></div><div class=\"eixo-ecossistemas-icon-div eco-5\"></div></div></div></div></div>")
    }else if(input_ecossistemas == "PRAIAS ARENOSAS"){
        $(".eixo-div-corpo").css("display", "none");
        $(".eixo-div-busca").css("display", "block");
        $(".eixo-div-busca").html("<div class=\"eixo-div eixo-div-saude\"><div class=\"eixo-div-img\"></div><div class=\"eixo-div-nome\">SAÚDE ÚNICA</div><div class=\"eixo-div-sociedade\">Parasitos (doenças)</div><div class=\"eixo-div-biodiversidade\">E biodiversidade através de atividades de educação ambiental</div><div class=\"eixo-ecossistemas\"><div class=\"eixo-ecossistemas-titulo\"><span class=\"eixo-ecossistemas-titulo-eco eixo-ecossistemas-titulo-eco-saude\">ECOSSISTEMAS</span><div class=\"eixo-ecossistemas-titulo-linha\">&nbsp;</div><div class=\"eixo-ecossistemas-icon\"><div class=\"eixo-ecossistemas-icon-div eco-1\"></div><div class=\"eixo-ecossistemas-icon-div eco-2\"></div><div class=\"eixo-ecossistemas-icon-div eco-3\"></div><div class=\"eixo-ecossistemas-icon-div eco-4\"></div><div class=\"eixo-ecossistemas-icon-div eco-5\"></div></div></div></div></div>")
    }else if(input_ecossistemas == "SAÚDE ÚNICA"){
        $(".eixo-div-corpo").css("display", "none");
        $(".eixo-div-busca").css("display", "block");
        $(".eixo-div-busca").html("<div class=\"eixo-div eixo-div-saude\"><div class=\"eixo-div-img\"></div><div class=\"eixo-div-nome\">SAÚDE ÚNICA</div><div class=\"eixo-div-sociedade\">Poluentes e contaminantes</div><div class=\"eixo-div-biodiversidade\">E biodiversidade através de atividades de educação ambiental</div><div class=\"eixo-ecossistemas\"><div class=\"eixo-ecossistemas-titulo\"><span class=\"eixo-ecossistemas-titulo-eco\">ECOSSISTEMAS</span><div class=\"eixo-ecossistemas-titulo-linha\">&nbsp;</div><div class=\"eixo-ecossistemas-icon\"><div class=\"eixo-ecossistemas-icon-div eco-1\"></div><div class=\"eixo-ecossistemas-icon-div eco-2\"></div><div class=\"eixo-ecossistemas-icon-div eco-3\"></div><div class=\"eixo-ecossistemas-icon-div eco-4\"></div><div class=\"eixo-ecossistemas-icon-div eco-5\"></div></div></div></div></div><div class=\"eixo-div eixo-div-saude\"><div class=\"eixo-div-img\"></div><div class=\"eixo-div-nome\">SAÚDE ÚNICA</div><div class=\"eixo-div-sociedade\">Impactos/Mudanças climáticas</div><div class=\"eixo-div-biodiversidade\">E biodiversidade através de atividades de educação ambiental</div><div class=\"eixo-ecossistemas\"><div class=\"eixo-ecossistemas-titulo\"><span class=\"eixo-ecossistemas-titulo-eco\">ECOSSISTEMAS</span><div class=\"eixo-ecossistemas-titulo-linha\">&nbsp;</div><div class=\"eixo-ecossistemas-icon\"><div class=\"eixo-ecossistemas-icon-div eco-1\"></div><div class=\"eixo-ecossistemas-icon-div eco-2\"></div><div class=\"eixo-ecossistemas-icon-div eco-3\"></div><div class=\"eixo-ecossistemas-icon-div eco-4\"></div><div class=\"eixo-ecossistemas-icon-div eco-5\"></div></div></div></div></div><div class=\"eixo-div eixo-div-saude\"><div class=\"eixo-div-img\"></div><div class=\"eixo-div-nome\">SAÚDE ÚNICA</div><div class=\"eixo-div-sociedade\">Parasitos (doenças)</div><div class=\"eixo-div-biodiversidade\">E biodiversidade através de atividades de educação ambiental</div><div class=\"eixo-ecossistemas\"><div class=\"eixo-ecossistemas-titulo\"><span class=\"eixo-ecossistemas-titulo-eco\">ECOSSISTEMAS</span><div class=\"eixo-ecossistemas-titulo-linha\">&nbsp;</div><div class=\"eixo-ecossistemas-icon\"><div class=\"eixo-ecossistemas-icon-div eco-1\"></div><div class=\"eixo-ecossistemas-icon-div eco-2\"></div><div class=\"eixo-ecossistemas-icon-div eco-3\"></div><div class=\"eixo-ecossistemas-icon-div eco-4\"></div><div class=\"eixo-ecossistemas-icon-div eco-5\"></div></div></div></div></div>");
    }else if(input_ecossistemas == "SISTEMAS LAGUNARES"){
        $(".eixo-div-corpo").css("display", "none");
        $(".eixo-div-busca").css("display", "block");
        $(".eixo-div-busca").html("<div class=\"eixo-div eixo-div-ecologia\"><div class=\"eixo-div-img\"></div><div class=\"eixo-div-nome\">ECOLOGIA E BIOLOGIA</div><div class=\"eixo-div-sociedade\">Teia trófica</div><div class=\"eixo-div-biodiversidade\">E biodiversidade através de atividades de educação ambiental</div><div class=\"eixo-ecossistemas\"><div class=\"eixo-ecossistemas-titulo\"><span class=\"eixo-ecossistemas-titulo-eco eixo-ecossistemas-titulo-eco-ecologia\">ECOSSISTEMAS</span><div class=\"eixo-ecossistemas-titulo-linha\">&nbsp;</div><div class=\"eixo-ecossistemas-icon\"><div class=\"eixo-ecossistemas-icon-div eco-1\"></div><div class=\"eixo-ecossistemas-icon-div eco-2\"></div><div class=\"eixo-ecossistemas-icon-div eco-3\"></div><div class=\"eixo-ecossistemas-icon-div eco-4\"></div><div class=\"eixo-ecossistemas-icon-div eco-5\"></div></div></div></div></div>");
    }else if(input_ecossistemas == "MANGUEZAIS"){
        $(".eixo-div-corpo").css("display", "none");
        $(".eixo-div-busca").css("display", "block");
        $(".eixo-div-busca").html("<div class=\"eixo-div eixo-div-pesca\"><div class=\"eixo-div-img\"></div><div class=\"eixo-div-nome\">PESCA</div><div class=\"eixo-div-sociedade\">Áreas de conflito</div><div class=\"eixo-div-biodiversidade\">E biodiversidade através de atividades de educação ambiental</div><div class=\"eixo-ecossistemas\"><div class=\"eixo-ecossistemas-titulo\"><span class=\"eixo-ecossistemas-titulo-eco eixo-ecossistemas-titulo-pesca\">PESCA</span><div class=\"eixo-ecossistemas-titulo-linha\">&nbsp;</div><div class=\"eixo-ecossistemas-icon\"><div class=\"eixo-ecossistemas-icon-div eco-1\"></div><div class=\"eixo-ecossistemas-icon-div eco-2\"></div><div class=\"eixo-ecossistemas-icon-div eco-3\"></div><div class=\"eixo-ecossistemas-icon-div eco-4\"></div><div class=\"eixo-ecossistemas-icon-div eco-5\"></div></div></div></div></div><div class=\"eixo-div eixo-div-ecologia\"><div class=\"eixo-div-img\"></div><div class=\"eixo-div-nome\">ECOLOGIA E BIOLOGIA</div><div class=\"eixo-div-sociedade\">Impactos/Mudanças climáticas</div><div class=\"eixo-div-biodiversidade\">E biodiversidade através de atividades de educação ambiental</div><div class=\"eixo-ecossistemas\"><div class=\"eixo-ecossistemas-titulo\"><span class=\"eixo-ecossistemas-titulo-eco eixo-ecossistemas-titulo-eco-ecologia\">ECOSSISTEMAS</span><div class=\"eixo-ecossistemas-titulo-linha\">&nbsp;</div><div class=\"eixo-ecossistemas-icon\"><div class=\"eixo-ecossistemas-icon-div eco-1\"></div><div class=\"eixo-ecossistemas-icon-div eco-2\"></div><div class=\"eixo-ecossistemas-icon-div eco-3\"></div><div class=\"eixo-ecossistemas-icon-div eco-4\"></div><div class=\"eixo-ecossistemas-icon-div eco-5\"></div></div></div></div></div>");
    }else if(input_ecossistemas == "ESTUÁRIO/RIO"){
        $(".eixo-div-corpo").css("display", "none");
        $(".eixo-div-busca").css("display", "block");
        $(".eixo-div-busca").html("<div class=\"eixo-div eixo-div-pesca\"><div class=\"eixo-div-img\"></div><div class=\"eixo-div-nome\">PESCA</div><div class=\"eixo-div-sociedade\">Artes de pesca e caracterização da pesca</div><div class=\"eixo-div-biodiversidade\">E biodiversidade através de atividades de educação ambiental</div><div class=\"eixo-ecossistemas\"><div class=\"eixo-ecossistemas-titulo\"><span class=\"eixo-ecossistemas-titulo-eco eixo-ecossistemas-titulo-pesca\">PESCA</span><div class=\"eixo-ecossistemas-titulo-linha\">&nbsp;</div><div class=\"eixo-ecossistemas-icon\"><div class=\"eixo-ecossistemas-icon-div eco-1\"></div><div class=\"eixo-ecossistemas-icon-div eco-2\"></div><div class=\"eixo-ecossistemas-icon-div eco-3\"></div><div class=\"eixo-ecossistemas-icon-div eco-4\"></div><div class=\"eixo-ecossistemas-icon-div eco-5\"></div></div></div></div></div><div class=\"eixo-div eixo-div-socioambiental\"><div class=\"eixo-div-img\"></div><div class=\"eixo-div-nome\">SOCIOAMBIENTAL</div><div class=\"eixo-div-sociedade\">Formação de pessoas, cursos e palestras</div><div class=\"eixo-div-biodiversidade\">E biodiversidade através de atividades de educação ambiental</div><div class=\"eixo-ecossistemas\"><div class=\"eixo-ecossistemas-titulo\"><span class=\"eixo-ecossistemas-titulo-eco eixo-ecossistemas-titulo-eco-socioambiental\">ECOSSISTEMAS</span><div class=\"eixo-ecossistemas-titulo-linha\">&nbsp;</div><div class=\"eixo-ecossistemas-icon\"><div class=\"eixo-ecossistemas-icon-div eco-1\"></div><div class=\"eixo-ecossistemas-icon-div eco-2\"></div><div class=\"eixo-ecossistemas-icon-div eco-3\"></div><div class=\"eixo-ecossistemas-icon-div eco-4\"></div><div class=\"eixo-ecossistemas-icon-div eco-5\"></div></div></div></div></div><div class=\"eixo-div eixo-div-ecologia\"><div class=\"eixo-div-img\"></div><div class=\"eixo-div-nome\">ECOLOGIA E BIOLOGIA</div><div class=\"eixo-div-sociedade\">Tamanho populacional, estrutura populacional, parametros idade e crescimento</div><div class=\"eixo-div-biodiversidade\">E biodiversidade através de atividades de educação ambiental</div><div class=\"eixo-ecossistemas\"><div class=\"eixo-ecossistemas-titulo\"><span class=\"eixo-ecossistemas-titulo-eco eixo-ecossistemas-titulo-eco-ecologia\">ECOSSISTEMAS</span><div class=\"eixo-ecossistemas-titulo-linha\">&nbsp;</div><div class=\"eixo-ecossistemas-icon\"><div class=\"eixo-ecossistemas-icon-div eco-1\"></div><div class=\"eixo-ecossistemas-icon-div eco-2\"></div><div class=\"eixo-ecossistemas-icon-div eco-3\"></div><div class=\"eixo-ecossistemas-icon-div eco-4\"></div><div class=\"eixo-ecossistemas-icon-div eco-5\"></div></div></div></div></div>");
    }else{
        $(".eixo-div-corpo").css("display", "block");
        $(".eixo-div-busca").css("display", "none");
    }
}

function alternativas(){
    var eixo_select = $("#alternativas").val();
    if(eixo_select == "Biodigestor"){
        $(".eixo-div-corpo").css("display", "none");
        $(".eixo-div-busca").css("display", "block");
        $(".eixo-div-busca").html("<div class=\"eixo-div eixo-div-socioambiental\"><div class=\"eixo-div-img\"></div><div class=\"eixo-div-nome\">ECOLOGIA</div><div class=\"eixo-div-sociedade\">Perfil socioeconômico</div><div class=\"eixo-div-biodiversidade\">E biodiversidade através de atividades de educação ambiental</div><div class=\"eixo-ecossistemas\"><div class=\"eixo-ecossistemas-titulo\"><span class=\"eixo-ecossistemas-titulo-eco eixo-ecossistemas-titulo-eco-socioambiental\">ECOSSISTEMAS</span><div class=\"eixo-ecossistemas-titulo-linha\">&nbsp;</div><div class=\"eixo-ecossistemas-icon\"><div class=\"eixo-ecossistemas-icon-div eco-1\"></div><div class=\"eixo-ecossistemas-icon-div eco-2\"></div><div class=\"eixo-ecossistemas-icon-div eco-3\"></div><div class=\"eixo-ecossistemas-icon-div eco-4\"></div><div class=\"eixo-ecossistemas-icon-div eco-5\"></div></div></div></div></div><div class=\"eixo-div eixo-div-politicas\"><div class=\"eixo-div-img\"></div><div class=\"eixo-div-nome\">POLÍTICAS PÚBLICAS</div><div class=\"eixo-div-sociedade\">Ações voltadas para as Unidades de Conservação</div><div class=\"eixo-div-biodiversidade\">E biodiversidade através de atividades de educação ambiental</div><div class=\"eixo-ecossistemas\"><div class=\"eixo-ecossistemas-titulo\"><span class=\"eixo-ecossistemas-titulo-eco eixo-ecossistemas-titulo-eco-politicas\">ECOSSISTEMAS</span><div class=\"eixo-ecossistemas-titulo-linha\">&nbsp;</div><div class=\"eixo-ecossistemas-icon\"><div class=\"eixo-ecossistemas-icon-div eco-1\"></div><div class=\"eixo-ecossistemas-icon-div eco-2\"></div><div class=\"eixo-ecossistemas-icon-div eco-3\"></div><div class=\"eixo-ecossistemas-icon-div eco-4\"></div><div class=\"eixo-ecossistemas-icon-div eco-5\"></div></div></div></div></div>")
    }else if(eixo_select == "Guia de consumo consciente"){
        $(".eixo-div-corpo").css("display", "none");
        $(".eixo-div-busca").css("display", "block");
        $(".eixo-div-busca").html("<div class=\"eixo-div eixo-div-pesca\"><div class=\"eixo-div-img\"></div><div class=\"eixo-div-nome\">PESCA</div><div class=\"eixo-div-sociedade\">Cadeia produtiva ou cadeia de valores</div><div class=\"eixo-div-biodiversidade\">E biodiversidade através de atividades de educação ambiental</div><div class=\"eixo-ecossistemas\"><div class=\"eixo-ecossistemas-titulo\"><span class=\"eixo-ecossistemas-titulo-eco eixo-ecossistemas-titulo-eco-pesca\">ECOSSISTEMAS</span><div class=\"eixo-ecossistemas-titulo-linha\">&nbsp;</div><div class=\"eixo-ecossistemas-icon\"><div class=\"eixo-ecossistemas-icon-div eco-1\"></div><div class=\"eixo-ecossistemas-icon-div eco-2\"></div><div class=\"eixo-ecossistemas-icon-div eco-3\"></div><div class=\"eixo-ecossistemas-icon-div eco-4\"></div><div class=\"eixo-ecossistemas-icon-div eco-5\"></div></div></div></div></div><div class=\"eixo-div eixo-div-socioambiental\"><div class=\"eixo-div-img\"></div><div class=\"eixo-div-nome\">SOCIOAMBIENTAL</div><div class=\"eixo-div-sociedade\">Mulheres na pesca</div><div class=\"eixo-div-biodiversidade\">E biodiversidade através de atividades de educação ambiental</div><div class=\"eixo-ecossistemas\"><div class=\"eixo-ecossistemas-titulo\"><span class=\"eixo-ecossistemas-titulo-eco eixo-ecossistemas-titulo-eco-socioambiental\">ECOSSISTEMAS</span><div class=\"eixo-ecossistemas-titulo-linha\">&nbsp;</div><div class=\"eixo-ecossistemas-icon\"><div class=\"eixo-ecossistemas-icon-div eco-1\"></div><div class=\"eixo-ecossistemas-icon-div eco-2\"></div><div class=\"eixo-ecossistemas-icon-div eco-3\"></div><div class=\"eixo-ecossistemas-icon-div eco-4\"></div><div class=\"eixo-ecossistemas-icon-div eco-5\"></div></div></div></div></div><div class=\"eixo-div eixo-div-ecologia\"><div class=\"eixo-div-img\"></div><div class=\"eixo-div-nome\">ECOLOGIA E BIOLOGIA</div><div class=\"eixo-div-sociedade\">Espécies invasoras</div><div class=\"eixo-div-biodiversidade\">E biodiversidade através de atividades de educação ambiental</div><div class=\"eixo-ecossistemas\"><div class=\"eixo-ecossistemas-titulo\"><span class=\"eixo-ecossistemas-titulo-eco eixo-ecossistemas-titulo-eco-ecologia\">ECOSSISTEMAS</span><div class=\"eixo-ecossistemas-titulo-linha\">&nbsp;</div><div class=\"eixo-ecossistemas-icon\"><div class=\"eixo-ecossistemas-icon-div eco-1\"></div><div class=\"eixo-ecossistemas-icon-div eco-2\"></div><div class=\"eixo-ecossistemas-icon-div eco-3\"></div><div class=\"eixo-ecossistemas-icon-div eco-4\"></div><div class=\"eixo-ecossistemas-icon-div eco-5\"></div></div></div></div></div><div class=\"eixo-div eixo-div-politicas\"><div class=\"eixo-div-img\"></div><div class=\"eixo-div-nome\">POLÍTICAS PÚBLICAS</div><div class=\"eixo-div-sociedade\">Ações voltadas para o governo</div><div class=\"eixo-div-biodiversidade\">E biodiversidade através de atividades de educação ambiental</div><div class=\"eixo-ecossistemas\"><div class=\"eixo-ecossistemas-titulo\"><span class=\"eixo-ecossistemas-titulo-eco eixo-ecossistemas-titulo-eco-politicas\">ECOSSISTEMAS</span><div class=\"eixo-ecossistemas-titulo-linha\">&nbsp;</div><div class=\"eixo-ecossistemas-icon\"><div class=\"eixo-ecossistemas-icon-div eco-1\"></div><div class=\"eixo-ecossistemas-icon-div eco-2\"></div><div class=\"eixo-ecossistemas-icon-div eco-3\"></div><div class=\"eixo-ecossistemas-icon-div eco-4\"></div><div class=\"eixo-ecossistemas-icon-div eco-5\"></div></div></div></div></div><div class=\"eixo-div eixo-div-saude\"><div class=\"eixo-div-img\"></div><div class=\"eixo-div-nome\">SAÚDE ÚNICA</div><div class=\"eixo-div-sociedade\">Poluentes e contaminantes</div><div class=\"eixo-div-biodiversidade\">E biodiversidade através de atividades de educação ambiental</div><div class=\"eixo-ecossistemas\"><div class=\"eixo-ecossistemas-titulo\"><span class=\"eixo-ecossistemas-titulo-eco eixo-ecossistemas-titulo-eco-saude\">ECOSSISTEMAS</span><div class=\"eixo-ecossistemas-titulo-linha\">&nbsp;</div><div class=\"eixo-ecossistemas-icon\"><div class=\"eixo-ecossistemas-icon-div eco-1\"></div><div class=\"eixo-ecossistemas-icon-div eco-2\"></div><div class=\"eixo-ecossistemas-icon-div eco-3\"></div><div class=\"eixo-ecossistemas-icon-div eco-4\"></div><div class=\"eixo-ecossistemas-icon-div eco-5\"></div></div></div></div></div>")
    }else if(eixo_select == "Turismo de base comunitária"){
        $(".eixo-div-corpo").css("display", "none");
        $(".eixo-div-busca").css("display", "block");
        $(".eixo-div-busca").html("<div class=\"eixo-div eixo-div-pesca\"><div class=\"eixo-div-img\"></div><div class=\"eixo-div-nome\">PESCA</div><div class=\"eixo-div-sociedade\">Séries históricas, caracterização de desembarque, produtividade histórica</div><div class=\"eixo-div-biodiversidade\">E biodiversidade através de atividades de educação ambiental</div><div class=\"eixo-ecossistemas\"><div class=\"eixo-ecossistemas-titulo\"><span class=\"eixo-ecossistemas-titulo-eco eixo-ecossistemas-titulo-eco-pesca\">ECOSSISTEMAS</span><div class=\"eixo-ecossistemas-titulo-linha\">&nbsp;</div><div class=\"eixo-ecossistemas-icon\"><div class=\"eixo-ecossistemas-icon-div eco-1\"></div><div class=\"eixo-ecossistemas-icon-div eco-2\"></div><div class=\"eixo-ecossistemas-icon-div eco-3\"></div><div class=\"eixo-ecossistemas-icon-div eco-4\"></div><div class=\"eixo-ecossistemas-icon-div eco-5\"></div></div></div></div></div><div class=\"eixo-div eixo-div-politicas\"><div class=\"eixo-div-img\"></div><div class=\"eixo-div-nome\">POLÍTICAS PÚBLICAS</div><div class=\"eixo-div-sociedade\">Sistematização de licenciamentos Petróleo e Gás, Estado da arte PEAs e PCAPs</div><div class=\"eixo-div-biodiversidade\">E biodiversidade através de atividades de educação ambiental</div><div class=\"eixo-ecossistemas\"><div class=\"eixo-ecossistemas-titulo\"><span class=\"eixo-ecossistemas-titulo-eco eixo-ecossistemas-titulo-eco-politicas\">ECOSSISTEMAS</span><div class=\"eixo-ecossistemas-titulo-linha\">&nbsp;</div><div class=\"eixo-ecossistemas-icon\"><div class=\"eixo-ecossistemas-icon-div eco-1\"></div><div class=\"eixo-ecossistemas-icon-div eco-2\"></div><div class=\"eixo-ecossistemas-icon-div eco-3\"></div><div class=\"eixo-ecossistemas-icon-div eco-4\"></div><div class=\"eixo-ecossistemas-icon-div eco-5\"></div></div></div></div></div><div class=\"eixo-div eixo-div-saude\"><div class=\"eixo-div-img\"></div><div class=\"eixo-div-nome\">SAÚDE ÚNICA</div><div class=\"eixo-div-sociedade\">Impactos/Mudanças climáticas</div><div class=\"eixo-div-biodiversidade\">E biodiversidade através de atividades de educação ambiental</div><div class=\"eixo-ecossistemas\"><div class=\"eixo-ecossistemas-titulo\"><span class=\"eixo-ecossistemas-titulo-eco eixo-ecossistemas-titulo-eco-saude\">ECOSSISTEMAS</span><div class=\"eixo-ecossistemas-titulo-linha\">&nbsp;</div><div class=\"eixo-ecossistemas-icon\"><div class=\"eixo-ecossistemas-icon-div eco-1\"></div><div class=\"eixo-ecossistemas-icon-div eco-2\"></div><div class=\"eixo-ecossistemas-icon-div eco-3\"></div><div class=\"eixo-ecossistemas-icon-div eco-4\"></div><div class=\"eixo-ecossistemas-icon-div eco-5\"></div></div></div></div></div>")
    }else if(eixo_select == "Práticas de pesca mais sustentáveis"){
        $(".eixo-div-corpo").css("display", "none");
        $(".eixo-div-busca").css("display", "block");
        $(".eixo-div-busca").html("<div class=\"eixo-div eixo-div-saude\"><div class=\"eixo-div-img\"></div><div class=\"eixo-div-nome\">SAÚDE ÚNICA</div><div class=\"eixo-div-sociedade\">Parasitos (doenças)</div><div class=\"eixo-div-biodiversidade\">E biodiversidade através de atividades de educação ambiental</div><div class=\"eixo-ecossistemas\"><div class=\"eixo-ecossistemas-titulo\"><span class=\"eixo-ecossistemas-titulo-eco eixo-ecossistemas-titulo-eco-saude\">ECOSSISTEMAS</span><div class=\"eixo-ecossistemas-titulo-linha\">&nbsp;</div><div class=\"eixo-ecossistemas-icon\"><div class=\"eixo-ecossistemas-icon-div eco-1\"></div><div class=\"eixo-ecossistemas-icon-div eco-2\"></div><div class=\"eixo-ecossistemas-icon-div eco-3\"></div><div class=\"eixo-ecossistemas-icon-div eco-4\"></div><div class=\"eixo-ecossistemas-icon-div eco-5\"></div></div></div></div></div>")
    }else if(eixo_select == "Consumo responsável"){
        $(".eixo-div-corpo").css("display", "none");
        $(".eixo-div-busca").css("display", "block");
        $(".eixo-div-busca").html("<div class=\"eixo-div eixo-div-saude\"><div class=\"eixo-div-img\"></div><div class=\"eixo-div-nome\">SAÚDE ÚNICA</div><div class=\"eixo-div-sociedade\">Poluentes e contaminantes</div><div class=\"eixo-div-biodiversidade\">E biodiversidade através de atividades de educação ambiental</div><div class=\"eixo-ecossistemas\"><div class=\"eixo-ecossistemas-titulo\"><span class=\"eixo-ecossistemas-titulo-eco\">ECOSSISTEMAS</span><div class=\"eixo-ecossistemas-titulo-linha\">&nbsp;</div><div class=\"eixo-ecossistemas-icon\"><div class=\"eixo-ecossistemas-icon-div eco-1\"></div><div class=\"eixo-ecossistemas-icon-div eco-2\"></div><div class=\"eixo-ecossistemas-icon-div eco-3\"></div><div class=\"eixo-ecossistemas-icon-div eco-4\"></div><div class=\"eixo-ecossistemas-icon-div eco-5\"></div></div></div></div></div><div class=\"eixo-div eixo-div-saude\"><div class=\"eixo-div-img\"></div><div class=\"eixo-div-nome\">SAÚDE ÚNICA</div><div class=\"eixo-div-sociedade\">Impactos/Mudanças climáticas</div><div class=\"eixo-div-biodiversidade\">E biodiversidade através de atividades de educação ambiental</div><div class=\"eixo-ecossistemas\"><div class=\"eixo-ecossistemas-titulo\"><span class=\"eixo-ecossistemas-titulo-eco\">ECOSSISTEMAS</span><div class=\"eixo-ecossistemas-titulo-linha\">&nbsp;</div><div class=\"eixo-ecossistemas-icon\"><div class=\"eixo-ecossistemas-icon-div eco-1\"></div><div class=\"eixo-ecossistemas-icon-div eco-2\"></div><div class=\"eixo-ecossistemas-icon-div eco-3\"></div><div class=\"eixo-ecossistemas-icon-div eco-4\"></div><div class=\"eixo-ecossistemas-icon-div eco-5\"></div></div></div></div></div><div class=\"eixo-div eixo-div-saude\"><div class=\"eixo-div-img\"></div><div class=\"eixo-div-nome\">SAÚDE ÚNICA</div><div class=\"eixo-div-sociedade\">Parasitos (doenças)</div><div class=\"eixo-div-biodiversidade\">E biodiversidade através de atividades de educação ambiental</div><div class=\"eixo-ecossistemas\"><div class=\"eixo-ecossistemas-titulo\"><span class=\"eixo-ecossistemas-titulo-eco\">ECOSSISTEMAS</span><div class=\"eixo-ecossistemas-titulo-linha\">&nbsp;</div><div class=\"eixo-ecossistemas-icon\"><div class=\"eixo-ecossistemas-icon-div eco-1\"></div><div class=\"eixo-ecossistemas-icon-div eco-2\"></div><div class=\"eixo-ecossistemas-icon-div eco-3\"></div><div class=\"eixo-ecossistemas-icon-div eco-4\"></div><div class=\"eixo-ecossistemas-icon-div eco-5\"></div></div></div></div></div>");
    }else if(eixo_select == "Receitas"){
        $(".eixo-div-corpo").css("display", "none");
        $(".eixo-div-busca").css("display", "block");
        $(".eixo-div-busca").html("<div class=\"eixo-div eixo-div-ecologia\"><div class=\"eixo-div-img\"></div><div class=\"eixo-div-nome\">ECOLOGIA E BIOLOGIA</div><div class=\"eixo-div-sociedade\">Teia trófica</div><div class=\"eixo-div-biodiversidade\">E biodiversidade através de atividades de educação ambiental</div><div class=\"eixo-ecossistemas\"><div class=\"eixo-ecossistemas-titulo\"><span class=\"eixo-ecossistemas-titulo-eco eixo-ecossistemas-titulo-eco-ecologia\">ECOSSISTEMAS</span><div class=\"eixo-ecossistemas-titulo-linha\">&nbsp;</div><div class=\"eixo-ecossistemas-icon\"><div class=\"eixo-ecossistemas-icon-div eco-1\"></div><div class=\"eixo-ecossistemas-icon-div eco-2\"></div><div class=\"eixo-ecossistemas-icon-div eco-3\"></div><div class=\"eixo-ecossistemas-icon-div eco-4\"></div><div class=\"eixo-ecossistemas-icon-div eco-5\"></div></div></div></div></div>");
    }else{
        $(".eixo-div-corpo").css("display", "block");
        $(".eixo-div-busca").css("display", "none");
    }
}

function compartilharAbrir(){
    $(".compartilhar-popup").css("display", "block")
    $(".compartilhar-abrir").css("display", "none")
    $(".compartilhar-fechar").css("display", "block")
}

function compartilharFechar(){
    $(".compartilhar-popup").css("display", "none")
    $(".compartilhar-abrir").css("display", "block")
    $(".compartilhar-fechar").css("display", "none")
}

function compartilharMobileAbrir(){
    $("#compartilhar").css("display", "block")
}

function fecharCompartilhar(){
    $("#compartilhar").css("display", "none")
}

function SelectEixo(tipo){
    $("#SelectEixoTexto").html(tipo);
    $("#InputEixoTexto").val(tipo).trigger('change');
    $(".filtrar-limpar").css("display", "block")
}

function SelectEcossistemas(tipo){
    $("#SelectEcossistemasTexto").html(tipo);
    $("#InputEcossistemasTexto").val(tipo).trigger('change');
    $(".filtrar-limpar").css("display", "block")
}

function limpar(){
    $(".eixo-div-corpo").css("display", "block");
    $(".eixo-div-busca").css("display", "none");
    $(".filtrar-limpar").css("display", "none");
    $("#InputEixoTexto").val("EIXO TEMÁTICO");
    $("#InputEcossistemasTexto").val("ECOSSISTEMAS");
    $("#InputAlternativasTexto").val("ALTERNATIVAS");
    $("#SelectEixoTexto").html("EIXO TEMÁTICO");
    $("#SelectEcossistemasTexto").html("ECOSSISTEMAS");
    $("#SelectAlternativasTexto").html("ALTERNATIVAS");
}

function copiarTexto(event) {
    var target = event.target;
    var copyText = "funbio.org.br";
    navigator.clipboard.writeText(copyText);
    $("#area-transferencia").css("display", "block");
    $("#area-transferencia").css("opacity", "1");
    setTimeout(sumirAreaTransferencia, 5000);
}

function sumirAreaTransferencia() {
    $("#area-transferencia").css("opacity", "0");
    setTimeout(sumirAreaTransferencia2, 100);
}

function sumirAreaTransferencia2() {
    $("#area-transferencia").css("display", "none");
    $("#area-transferencia").css("opacity", "1")
}

$(document).ready(function(){
    
    
    setTimeout(eixo1, 300);
    setTimeout(eixo1Volta, 1300);
    setTimeout(eixo2, 200);
    setTimeout(eixo2Volta, 1200);
    setTimeout(eixo3, 100);
    setTimeout(eixo3Volta, 1100);
    setTimeout(eixo4, 0);
    setTimeout(eixo4Volta, 1000);

    function eixo1(){
        $("#eixo-1").css("top", "-60px")
    }
    
    function eixo1Volta(){
        $("#eixo-1").css("top", "0px")
    }

    function eixo2(){
        $("#eixo-2").css("top", "-60px")
    }
    
    function eixo2Volta(){
        $("#eixo-2").css("top", "0px")
    }

    function eixo3(){
        $("#eixo-3").css("top", "-60px")
    }

    function eixo3Volta(){
        $("#eixo-3").css("top", "0px")
    }

    function eixo4(){
        $("#eixo-4").css("top", "-60px");
    }

    function eixo4Volta(){
        $("#eixo-4").css("top", "0px")
    }

    $("#eixo-5").css("top", "0px")
    $("#eixo-6").css("top", "0px")
    $("#eixo-7").css("top", "0px")
    $("#eixo-8").css("top", "0px");
    $("#eixo-9").css("top", "0px")
    $("#eixo-10").css("top", "0px")
    $("#eixo-11").css("top", "0px")
    $("#eixo-12").css("top", "0px");
    $("#eixo-13").css("top", "0px")
    $("#eixo-14").css("top", "0px")
    $("#eixo-15").css("top", "0px")
    $("#eixo-16").css("top", "0px");
    $("#eixo-17").css("top", "0px")
    $("#eixo-18").css("top", "0px")
    $("#eixo-19").css("top", "0px")
});