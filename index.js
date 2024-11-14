document.addEventListener("DOMContentLoaded", () => {
    const btnPartida = document.getElementById(btn-partida);
    const btnBorrar = document.getElementById("btn-borrar");
    const nomJugador = document.getElementById("nomJugador");
    const puntuacio = document.getElementById("puntuacio");
    const infoNavegador = document.getElementById("info-navegador");
    const infoURL = document.getElementById("info-url");

    //mostrar informacio del navegador
    infoNavegador.textContent = `Nom del navegador: ${navigator.appName},versió: ${navigator.appVersion}`;
    
    //mostra informacio URL
    infoURL.textContent = `URL actual: ${window.location.href}`;

    //iniciar partida
    btnPartida.addEventListener("click", () => {
        const nom = nomJugador.value.trim();
        if(nom) {
            puntuacio.textContent = `Jugador: ${nom} - Puntuacio: 0`;
            alert(`Benvingut/da, ${nom}! Comença la partida`);
        } else {
            alert("Introdueix el teu nom per començar");
        }
    });

    //Borrar partida
    btnBorrar.addEventListener("click", () => {
        puntuacio.textContent = "Encara no hi ha puntuacio";
        nomJugador.value = "";
        alert("La partida actual s'ha borrat.");
    });
});
