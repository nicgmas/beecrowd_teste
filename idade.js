const diasTotais = parseInt(readline());


const anos = Math.floor(diasTotais / 365);


const diasRestantesAposAnos = diasTotais % 365;
const meses = Math.floor(diasRestantesAposAnos / 30);


const dias = diasRestantesAposAnos % 30;
console.log(`${anos} ano(s)`);
console.log(`${meses} mes(es)`);
console.log(`${dias} dia(s)`);