function ativar() {
    fetch("http://192.168.0.102/on");
}

function enviar() {
    var botao = document.getElementById("agendar");

    var horasUm = document.getElementById("horasUm").value;
    var minutosUm = document.getElementById("minutosUm").value;
    var horasDois = document.getElementById("horasDois").value;
    var minutosDois = document.getElementById("minutosDois").value;
    var horasTres = document.getElementById("horasTres").value;
    var minutosTres = document.getElementById("minutosTres").value;

    var tempo = new Date();

    var horas = tempo.getHours();
    var minutos = tempo.getMinutes();

    console.log(horas +":"+minutos);

    if(horasUm == horas && minutosUm == minutos){
        console.log("ativou o primeiro horário!");
        fetch("http://192.168.0.102/on");
    }

    if(horasDois == horas && minutosDois == minutos){
        console.log("ativou o segundo horário!");
        fetch("http://192.168.0.102/on");
    }

    if(horasTres == horas && minutosTres == minutos){
        console.log("ativou o terceiro horário!");
        fetch("http://192.168.0.102/on");
    }

    botao.innerHTML = "ENVIADO";
}

setInterval(enviar, 60000);