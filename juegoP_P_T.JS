function juego(jugador,maquina){
 if(jugador == "piedra" && maquina == "papel"){
    console.log("Gana maquina");
 }
 else if(jugador == "piedra" && maquina == "tijera"){
    console.log("Gana jugador");
 }
 else if(jugador == "papel" && maquina == "tijera"){
    console.log("Gana maquina");
 }
 else if(jugador == "papel" && maquina == "piedra"){
    console.log("Gana jugador");
 }
 else if(jugador == "tijera" && maquina == "piedra"){
    console.log("Gana maquina");
 }
 else if(jugador == "tijera" && maquina == "papel"){
    console.log("Gana jugador");
 }
else{
    console.log("empate");
}
}