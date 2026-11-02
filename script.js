let herois = [
    { nome: "Homem Aranha" , xp : 1000},
    { nome: "Homem de Ferro" , xp : 8500},
    { nome: "Capitão América" , xp : 15000},
    
];
for (let i = 0; i < herois.length; i++) {
    let nome = herois[i].nome;
    let xp = herois[i].xp;
    let nivel; 
  
if (xp < 1000) {
    nivel = "Ferro";
} else if (xp <= 2000) {
    nivel = "Bronze";
}else if (xp <= 5000) {
    nivel = "Prata";
} else if (xp <= 7000) {
    nivel = "Ouro";
} else if (xp <= 8000) {
    nivel = "platina"; 
} else if (xp <= 9000) {
    nivel = "Ascendente";
} else if (xp <= 10000) {
    nivel = "Imortal"; 
} else if (xp >= 10001) {
    nivel = "Radiante";
}

console.log("O Herói de nome " + nome + " está no nível de " + nivel);

}







