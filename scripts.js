var topicos = "A-F-I-K-O-P-Q-R-S|Cadeia produtiva ou cadeia de valores]A-F-H-I-J-K-L-O-R-19|Séries históricas, caracterização de desembarque, produtividade histórica]A-I-K-L-O-Q|Áreas de conflito]A-F-I-J-K-L|Artes de pesca e caracterização da pesca]B-I-J|Perfil socioeconômico]B-I-J-K|Mulheres na pesca]B-F-G-H-I-J-K-L-M-N-O-P-Q-R-S|Formação de pessoas, cursos e palestras]B-F-G-H-I-J-K-L-N-O-P-Q|Conscientização Ambiental]B-F-I-J-K-L|Conhecimento tradicional]C-H-L-M-Q|Espécies invasoras]C-F-G-H-I-J-K-L-O-Q-R|Teia trófica]C-F-H-I-J-K-L-R|Movimentos e rotas migratórias, limites geográfico, ecologia espacial]C-F-G-H-I-J-K-L-Q-R|Tamanho populacional, estrutura populacional, parametros idade e crescimento]D-F-I-J-K-L-O-P-Q-R|Ações voltadas para as Unidades de Conservação]D-F-I-J-K-L-M-O-P-Q-R|Ações voltadas para o governo]D-F-J-K-L|Sistematização de licenciamentos Petróleo e Gás, Estado da arte PEAs e PCAPs]E-F-J-K-L-M-O-Q-R|Poluentes e contaminantes]E-F-G-H-I-J-K-L-O-P-Q-R|Impactos/Mudanças climáticas]E-F-O|Parasitos (doenças)]";

function FiltrarAdicionaNumeroEixo(id, text){
    $("#FiltrarNumerosEixo").val(id);
    $("#SelectEixoTexto").html(text.toUpperCase());
    FiltrarNumero()
}

function FiltrarAdicionaNumeroEcossistemas(id, text){
    $("#FiltrarNumerosEcossistemas").val(id);
    $("#SelectEcossistemasTexto").html(text.toUpperCase());
    FiltrarNumero()
}

function FiltrarAdicionaNumeroAlternativas(id, text){
    $("#FiltrarNumerosAlternativas").val(id);
    $("#SelectAlternativasTexto").html(text.toUpperCase());
    FiltrarNumero()
}

function FiltrarNumero(){
    $("#SelectEixoTexto").val($("#FiltrarNumerosEixo").val());
    $("#SelectEcossistemasTexto").val($("#FiltrarNumerosEcossistemas").val());
    $("#SelectAlternativasTexto").val($("#FiltrarNumerosAlternativas").val());
    $("#DropAbrirFecharEixo").css("opacity", "0");
    $("#DropAbrirFecharEcossistemas").css("opacity", "0");
    $("#DropAbrirFecharAlternativas").css("opacity", "0");

        var numeros = $("#FiltrarNumerosEixo").val()+"-"+$("#FiltrarNumerosEcossistemas").val()+"-"+$("#FiltrarNumerosAlternativas").val();
        
        var numerosTopicos;
        if(numeros.length > 2){
            numerosTopicos = numeros.split("-");
        }else{
            numerosTopicos =  "";
        }
        var topicosFiltrar = topicos;
        var topicosFiltrarSplit = topicosFiltrar.split("]");
        var contadorFiltrar = 0;
    
        $("#eixo .body-inner-div").html("");
    
        for (let i = 0; i < topicosFiltrarSplit.length; i++) {
            var topicosFiltrarSplitID = topicosFiltrarSplit[i].split("|");

            ////////////////////////
            //////////////////ÍCONES
            ////////////////////////
            var filtrarIcones = topicosFiltrarSplitID[0].split("-");
            var filtrarIconesTexto = "";
            for (let x = 0; x < filtrarIcones.length; x++) {
                if(filtrarIcones[x] == "F"){
                    filtrarIconesTexto = filtrarIconesTexto + "<div class='eixo-ecossistemas-icon-div eco-F\'><div class=\'eixo-ecossistemas-icon-div-flag\'><div class=\'eixo-ecossistemas-icon-div-flag-triangle\'></div>MAR ABERTO</div></div>";
                }
                if(filtrarIcones[x] == "G"){
                    filtrarIconesTexto =  filtrarIconesTexto + "<div class=\'eixo-ecossistemas-icon-div eco-G\'><div class=\'eixo-ecossistemas-icon-div-flag\'><div class=\'eixo-ecossistemas-icon-div-flag-triangle\'></div>CORAIS</div></div>";
                }
                if(filtrarIcones[x] == "H"){
                    filtrarIconesTexto =  filtrarIconesTexto + "<div class=\'eixo-ecossistemas-icon-div eco-H\'><div class=\'eixo-ecossistemas-icon-div-flag\'><div class=\'eixo-ecossistemas-icon-div-flag-triangle\'></div>COSTÕES/POÇAS</div></div>";
                }
                if(filtrarIcones[x] == "I"){
                    filtrarIconesTexto =  filtrarIconesTexto + "<div class=\'eixo-ecossistemas-icon-div eco-I\'><div class=\'eixo-ecossistemas-icon-div-flag\'><div class=\'eixo-ecossistemas-icon-div-flag-triangle\'></div>PRAIAS ARENOSAS</div></div>";
                }
                if(filtrarIcones[x] == "J"){
                    filtrarIconesTexto =  filtrarIconesTexto + "<div class=\'eixo-ecossistemas-icon-div eco-J\'><div class=\'eixo-ecossistemas-icon-div-flag\'><div class=\'eixo-ecossistemas-icon-div-flag-triangle\'></div>SISTEMAS LAGUNARES</div></div>";
                }
                if(filtrarIcones[x] == "K"){
                    filtrarIconesTexto =  filtrarIconesTexto + "<div class=\'eixo-ecossistemas-icon-div eco-K\'><div class=\'eixo-ecossistemas-icon-div-flag\'><div class=\'eixo-ecossistemas-icon-div-flag-triangle\'></div>MANGUEZAIS</div></div>";
                }
                if(filtrarIcones[x] == "L"){
                    filtrarIconesTexto =  filtrarIconesTexto + "<div class=\'eixo-ecossistemas-icon-div eco-L\'><div class=\'eixo-ecossistemas-icon-div-flag\'><div class=\'eixo-ecossistemas-icon-div-flag-triangle\'></div>ESTUÁRIO/RIO</div></div>";
                }
                if(filtrarIcones[x] == "M"){
                    filtrarIconesTexto =  filtrarIconesTexto + "<div class=\'eixo-ecossistemas-icon-div eco-L\'><div class=\'eixo-ecossistemas-icon-div-flag\'><div class=\'eixo-ecossistemas-icon-div-flag-triangle\'></div>SUBSTRATO CONSOLIDADO</div></div>";
                }
            }
    
            ////////////////////////
            //////////////////TÍTULO
            ////////////////////////
            var tituloFiltro = topicosFiltrarSplitID[0].split("-");
            console.log(tituloFiltro)
            var tituloFiltroExibir = "";
            var tituloClasse = "";
            if(tituloFiltro[0] == "A"){
                tituloFiltroExibir = "PESCA";
                tituloClasse = "pesca";
            }
            if(tituloFiltro[0] == "B"){
                tituloFiltroExibir = "SOCIOAMBIENTAL";
                tituloClasse = "socioambiental";
            }
            if(tituloFiltro[0] == "C"){
                tituloFiltroExibir = "ECOLOGIA E BIOLOGIA";
                tituloClasse = "ecologia";
            }
            if(tituloFiltro[0] == "D"){
                tituloFiltroExibir = "POLÍTICAS PÚBLICAS";
                tituloClasse = "politicas";
            }
            if(tituloFiltro[0] == "E"){
                tituloFiltroExibir = "SAÚDE ÚNICA";
                tituloClasse = "saude";
            }
            
            
            if(numerosTopicos[0] !== "" && numerosTopicos[1] == "" && numerosTopicos[2] == ""){
                if(topicosFiltrarSplitID[0].indexOf(numerosTopicos[0]) >= 0){
    
    
                    contadorFiltrar = contadorFiltrar + 1;
                
                    $("#eixo .body-inner-div").append("<a href=\"pagina.html\"><div id=\"eixo-"+ contadorFiltrar +"\" class=\"eixo-div eixo-div-"+ tituloClasse +"\" id=\"eixo-1\"><div class=\"eixo-div-img\"></div><div class=\"eixo-div-nome eixo-div-nome-"+ tituloClasse +"\">"+ tituloFiltroExibir +"</div><div class=\"eixo-div-sociedade eixo-div-sociedade3\">"+ topicosFiltrarSplitID[1] +"</div><div class=\"eixo-div-biodiversidade\">E biodiversidade através de atividades de educação ambiental</div><div class=\"eixo-\"><div class=\"eixo-ecossistemas-titulo\"><span class=\"eixo-ecossistemas-titulo-eco eixo-ecossistemas-titulo-eco-"+ tituloClasse +"\">ECOSSISTEMAS</span><div class=\"eixo-ecossistemas-titulo-linha\">&nbsp;</div><div class=\"eixo-ecossistemas-icon\">"+filtrarIconesTexto+"</div></div></div></div></a>");
                }
            }
            
            if(numerosTopicos[0] == "" && numerosTopicos[1] !== "" && numerosTopicos[2] == ""){
                if(topicosFiltrarSplitID[0].indexOf(numerosTopicos[1]) >= 0){
    
                    contadorFiltrar = contadorFiltrar + 1;
    
                    $("#eixo .body-inner-div").append("<a href=\"pagina.html\"><div id=\"eixo-"+ contadorFiltrar +"\" class=\"eixo-div eixo-div- eixo-div-"+ tituloClasse +" id=\"eixo-1\"><div class=\"eixo-div-img\"></div><div class=\"eixo-div-nome eixo-div-nome-"+ tituloClasse +"\">"+ tituloFiltroExibir +"</div><div class=\"eixo-div-sociedade eixo-div-sociedade3\">"+ topicosFiltrarSplitID[1] +"</div><div class=\"eixo-div-biodiversidade\">E biodiversidade através de atividades de educação ambiental</div><div class=\"eixo-\"><div class=\"eixo-ecossistemas-titulo\"><span class=\"eixo-ecossistemas-titulo-eco eixo-ecossistemas-titulo-eco-"+ tituloClasse +"\">ECOSSISTEMAS</span><div class=\"eixo-ecossistemas-titulo-linha\">&nbsp;</div><div class=\"eixo-ecossistemas-icon\">"+filtrarIconesTexto+"</div></div></div></div></a>")
                }
            }
    
            if(numerosTopicos[0] == "" && numerosTopicos[1] == "" && numerosTopicos[2] !== ""){
                if(topicosFiltrarSplitID[0].indexOf(numerosTopicos[2]) >= 0){
    
                    contadorFiltrar = contadorFiltrar + 1;
    
                    $("#eixo .body-inner-div").append("<a href=\"pagina.html\"><div id=\"eixo-"+ contadorFiltrar +"\" class=\"eixo-div eixo-div-"+ tituloClasse +" id=\"eixo-1\"><div class=\"eixo-div-img\"></div><div class=\"eixo-div-nome eixo-div-nome-"+ tituloClasse +"\">"+ tituloFiltroExibir +"</div><div class=\"eixo-div-sociedade eixo-div-sociedade3\">"+ topicosFiltrarSplitID[1] +"</div><div class=\"eixo-div-biodiversidade\">E biodiversidade através de atividades de educação ambiental</div><div class=\"eixo-\"><div class=\"eixo-ecossistemas-titulo\"><span class=\"eixo-ecossistemas-titulo-eco eixo-ecossistemas-titulo-eco-"+ tituloClasse +"\">ECOSSISTEMAS</span><div class=\"eixo-ecossistemas-titulo-linha\">&nbsp;</div><div class=\"eixo-ecossistemas-icon\">"+ filtrarIconesTexto +"</div></div></div></div></a>")
                }
            }
    
            if(numerosTopicos[0] !== "" && numerosTopicos[1] !== "" && numerosTopicos[2] == ""){
                if(topicosFiltrarSplitID[0].indexOf(numerosTopicos[0]) >= 0 && topicosFiltrarSplitID[0].indexOf(numerosTopicos[1]) >= 0){
                    
                    contadorFiltrar = contadorFiltrar + 1;
    
                    $("#eixo .body-inner-div").append("<a href=\"pagina.html\"><div id=\"eixo-"+ contadorFiltrar +"\" class=\"eixo-div eixo-div-"+ tituloClasse +" id=\"eixo-1\"><div class=\"eixo-div-img\"></div><div class=\"eixo-div-nome eixo-div-nome-"+ tituloClasse +"\">"+ tituloFiltroExibir +"</div><div class=\"eixo-div-sociedade eixo-div-sociedade3\">"+ topicosFiltrarSplitID[1] +"</div><div class=\"eixo-div-biodiversidade\">E biodiversidade através de atividades de educação ambiental</div><div class=\"eixo-\"><div class=\"eixo-ecossistemas-titulo\"><span class=\"eixo-ecossistemas-titulo-eco eixo-ecossistemas-titulo-eco-"+ tituloClasse +"\">ECOSSISTEMAS</span><div class=\"eixo-ecossistemas-titulo-linha\">&nbsp;</div><div class=\"eixo-ecossistemas-icon\">"+ filtrarIconesTexto +"</div></div></div></div></a>")
                }
            }
    
            if(numerosTopicos[0] == "" && numerosTopicos[1] !== "" && numerosTopicos[2] !== ""){
                if(topicosFiltrarSplitID[0].indexOf(numerosTopicos[1]) >= 0 && topicosFiltrarSplitID[0].indexOf(numerosTopicos[2]) >= 0){
                    
                    contadorFiltrar = contadorFiltrar + 1;
                    
                    $("#eixo .body-inner-div").append("<a href=\"pagina.html\"><div id=\"eixo-"+ contadorFiltrar +"\" class=\"eixo-div eixo-div-"+ tituloClasse +" id=\"eixo-1\"><div class=\"eixo-div-img\"></div><div class=\"eixo-div-nome eixo-div-nome-"+ tituloClasse +"\">"+ tituloFiltroExibir +"</div><div class=\"eixo-div-sociedade eixo-div-sociedade3\">"+ topicosFiltrarSplitID[1] +"</div><div class=\"eixo-div-biodiversidade\">E biodiversidade através de atividades de educação ambiental</div><div class=\"eixo-\"><div class=\"eixo-ecossistemas-titulo\"><span class=\"eixo-ecossistemas-titulo-eco eixo-ecossistemas-titulo-eco-"+ tituloClasse +"\">ECOSSISTEMAS</span><div class=\"eixo-ecossistemas-titulo-linha\">&nbsp;</div><div class=\"eixo-ecossistemas-icon\">"+ filtrarIconesTexto +"</div></div></div></div></a>")
                }
            }
    
            if(numerosTopicos[0] !== "" && numerosTopicos[1] == "" && numerosTopicos[2] !== ""){
                if(topicosFiltrarSplitID[0].indexOf(numerosTopicos[0]) >= 0 && topicosFiltrarSplitID[0].indexOf(numerosTopicos[2]) >= 0){
                    
                    contadorFiltrar = contadorFiltrar + 1;
    
                    $("#eixo .body-inner-div").append("<a href=\"pagina.html\"><div id=\"eixo-"+ contadorFiltrar +"\" class=\"eixo-div eixo-div-"+ tituloClasse +" id=\"eixo-1\"><div class=\"eixo-div-img\"></div><div class=\"eixo-div-nome eixo-div-nome-"+ tituloClasse +"\">"+ tituloFiltroExibir +"</div><div class=\"eixo-div-sociedade eixo-div-sociedade3\">"+ topicosFiltrarSplitID[1] +"</div><div class=\"eixo-div-biodiversidade\">E biodiversidade através de atividades de educação ambiental</div><div class=\"eixo-\"><div class=\"eixo-ecossistemas-titulo\"><span class=\"eixo-ecossistemas-titulo-eco eixo-ecossistemas-titulo-eco-"+ tituloClasse +"\">ECOSSISTEMAS</span><div class=\"eixo-ecossistemas-titulo-linha\">&nbsp;</div><div class=\"eixo-ecossistemas-icon>"+ filtrarIconesTexto +"</div></div></div></div></a>")
                }
            }
            
            if(numerosTopicos[0] !== "" && numerosTopicos[1] !== "" && numerosTopicos[2] !== ""){
                if(topicosFiltrarSplitID[0].indexOf(numerosTopicos[0]) >= 0 && topicosFiltrarSplitID[0].indexOf(numerosTopicos[1]) >= 0 && topicosFiltrarSplitID[0].indexOf(numerosTopicos[2]) >= 0){
    
                    contadorFiltrar = contadorFiltrar + 1;
    
                    $("#eixo .body-inner-div").append("<a href=\"pagina.html\"><div id=\"eixo-"+ contadorFiltrar +"\" class=\"eixo-div eixo-div-"+ tituloClasse +" id=\"eixo-1\"><div class=\"eixo-div-img\"></div><div class=\"eixo-div-nome eixo-div-nome-"+ tituloClasse +"\">"+ tituloFiltroExibir +"</div><div class=\"eixo-div-sociedade eixo-div-sociedade3\">"+ topicosFiltrarSplitID[1] +"</div><div class=\"eixo-div-biodiversidade\">E biodiversidade através de atividades de educação ambiental</div><div class=\"eixo-\"><div class=\"eixo-ecossistemas-titulo\"><span class=\"eixo-ecossistemas-titulo-eco eixo-ecossistemas-titulo-eco-"+ tituloClasse +"\">ECOSSISTEMAS</span><div class=\"eixo-ecossistemas-titulo-linha\">&nbsp;</div><div class=\"eixo-ecossistemas-icon\">"+ filtrarIconesTexto +"</div></div></div></div></a>")
                }
            }

            if(numerosTopicos == ""){
                contadorFiltrar = contadorFiltrar + 1;

                if(typeof topicosFiltrarSplitID[1] === "undefined"){
                }else{
                    console.log(topicosFiltrarSplitID[1])
                    $("#eixo .body-inner-div").append("<a href=\"pagina.html\"><div id=\"eixo-"+ contadorFiltrar +"\" class=\"eixo-div eixo-div-"+ tituloClasse +" id=\"eixo-1\"><div class=\"eixo-div-img\"></div><div class=\"eixo-div-nome eixo-div-nome-"+ tituloClasse +"\">"+ tituloFiltroExibir +"</div><div class=\"eixo-div-sociedade eixo-div-sociedade3\">"+ topicosFiltrarSplitID[1] +"</div><div class=\"eixo-div-biodiversidade\">E biodiversidade através de atividades de educação ambiental</div><div class=\"eixo-\"><div class=\"eixo-ecossistemas-titulo\"><span class=\"eixo-ecossistemas-titulo-eco eixo-ecossistemas-titulo-eco-"+ tituloClasse +"\">ECOSSISTEMAS</span><div class=\"eixo-ecossistemas-titulo-linha\">&nbsp;</div><div class=\"eixo-ecossistemas-icon\">"+ filtrarIconesTexto +"</div></div></div></div></a>");
                }
            }
        }
    

    $(".filtrar-limpar").css("display", "block");

    //////////////////////
    ////////EFEITOS DE TOP
    //////////////////////
    $("#eixo-1").css("top", "300px");
    $("#eixo-2").css("top", "300px");
    $("#eixo-3").css("top", "300px");
    $("#eixo-4").css("top", "300px");
    setTimeout(eixo1Filtro, 75);
    setTimeout(eixo1FiltroVolta, 1075);
    setTimeout(eixo2Filtro, 50);
    setTimeout(eixo2FiltroVolta, 1050);
    setTimeout(eixo3Filtro, 25);
    setTimeout(eixo3FiltroVolta, 1025);
    setTimeout(eixo4Filtro, 0);
    setTimeout(eixo4FiltroVolta, 1000);
    setTimeout(DropAbrirFechar, 1600);
}

function eixo1Filtro(){
    $("#eixo-1").css("top", "-40px")
}

function eixo1FiltroVolta(){
    $("#eixo-1").css("top", "0px")
    $("#eixo-1").css("z-index", "0")
}

function eixo2Filtro(){
    $("#eixo-2").css("top", "-40px")
    
}

function eixo2FiltroVolta(){
    $("#eixo-2").css("top", "0px")
    $("#eixo-2").css("z-index", "0")
}

function eixo3Filtro(){
    $("#eixo-3").css("top", "-40px")
}

function eixo3FiltroVolta(){
    $("#eixo-3").css("top", "0px")
    $("#eixo-3").css("z-index", "0")
}

function eixo4Filtro(){
    $("#eixo-4").css("top", "-40px")
}

function eixo4FiltroVolta(){
    $("#eixo-4").css("top", "0px")
    $("#eixo-4").css("z-index", "0")
}

function abre_fecha(id){
    //$(".topico-div-corpo").css("display", "none")
    //$(".topico-maior-menor").html("+")
    // $(".topico-div-titulo-abre-fecha-maior-menor").removeClass("topico-abre-fecha-laranja")
    // $(".topico-div-titulo-abre-fecha").removeClass("topico-abre-fecha-laranja-corpo-select")
    // $(".topico-fecha").css("display", "none")

    $("#topico-corpo-"+id).css("display", "block")
    $("#topico-maior-menor-"+id).html("-")
    $("#topico-abre-fecha-"+id).addClass("topico-abre-fecha-laranja");
    $("#topico-abre-fecha-corpo-"+id).addClass("topico-abre-fecha-laranja-corpo-select")
    $("#topico-fecha-"+id).css("display", "block")
}

function fecha(id){
    $("#topico-corpo-"+id).css("display", "none")    
    $("#topico-maior-menor-"+id).html("+")
    $("#topico-abre-fecha-"+id).removeClass("topico-abre-fecha-laranja")
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

function home(){
    window.location.href="index.html"
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
    // $(".eixo-div-corpo").css("display", "block");
    // $(".eixo-div-busca").css("display", "none");
    // $(".filtrar-limpar").css("display", "none");
    // $("#InputEixoTexto").val("EIXO TEMÁTICO");
    // $("#InputEcossistemasTexto").val("ECOSSISTEMAS");
    // $("#InputAlternativasTexto").val("ALTERNATIVAS");
    // $("#SelectEixoTexto").html("EIXO TEMÁTICO");
    // $("#SelectEcossistemasTexto").html("ECOSSISTEMAS");
    // $("#SelectAlternativasTexto").html("ALTERNATIVAS");

    $("#FiltrarNumerosEixo").val("");
    $("#FiltrarNumerosEcossistemas").val("");
    $("#FiltrarNumerosAlternativas").val("");
    $("#SelectEixoTexto").html("EIXO TEMÁTICO");
    $("#SelectEcossistemasTexto").html("ECOSSISTEMAS");
    $("#SelectAlternativasTexto").html("AÇÕES");
    FiltrarNumero();

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
    setTimeout(eixo1Volta, 1250);
    setTimeout(eixo2, 200);
    setTimeout(eixo2Volta, 1150);
    setTimeout(eixo3, 100);
    setTimeout(eixo3Volta, 1050);
    setTimeout(eixo4, 0);
    setTimeout(eixo4Volta, 950);
    setTimeout(DropAbrirFechar, 1600);

    function eixo1(){
        $("#eixo-1").css("top", "-40px")
    }
    
    function eixo1Volta(){
        $("#eixo-1").css("top", "0px")
        $("#eixo-1").css("z-index", "0")
    }

    function eixo2(){
        $("#eixo-2").css("top", "-40px")
    }
    
    function eixo2Volta(){
        $("#eixo-2").css("top", "0px")
        $("#eixo-2").css("z-index", "0")
    }

    function eixo3(){
        $("#eixo-3").css("top", "-40px")
    }

    function eixo3Volta(){
        $("#eixo-3").css("top", "0px")
        $("#eixo-3").css("z-index", "0")
    }

    function eixo4(){
        $("#eixo-4").css("top", "-40px");
    }

    function eixo4Volta(){
        $("#eixo-4").css("top", "0px")
        $("#eixo-4").css("z-index", "0");
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

function DropAbrirFechar(){
    $("#DropAbrirFecharEixo").css("opacity", "1")
    $("#DropAbrirFecharEcossistemas").css("opacity", "1")
    $("#DropAbrirFecharAlternativas").css("opacity", "1")
}