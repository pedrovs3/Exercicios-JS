//              SWITCH MODE                 //
/* const text = document.querySelector('.container h1')

function getDiaSemanaTexto (diaSemanaNum){
    let diaSemanaTexto;

    switch (diaSemanaNum) {
        case 0:
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Segunda-Feira';
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça-Feira';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta-Feira';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta-Feira';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta-Feira';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sábado';
            return diaSemanaTexto;
        default:
            diaSemanaTexto = '';
            return diaSemanaTexto;
    }
}

function getMonthName(month) {
    let MonthName;

    switch (month) {
        case 0:
            MonthName = 'Janeiro';
            return MonthName;
        case 1:
            MonthName = 'Fevereiro';
            return MonthName;
        case 2:
            MonthName = 'Março';
            return MonthName;
        case 3:
            MonthName = 'Abril';
            return MonthName;
        case 4:
            MonthName = 'Maio';
            return MonthName;
        case 5:
            MonthName = 'Junho';
            return MonthName;
        case 6:
            MonthName = 'Julho';
            return MonthName;
        case 7:
            MonthName = 'Agosto';
            return MonthName;
        case 8:
            MonthName = 'Setembro';
            return MonthName;
        case 9:
            MonthName = 'Outubro';
            return MonthName;
        case 10:
            MonthName = 'Novembro';
            return MonthName;
        case 11:
            MonthName = 'Dezembro';
            return MonthName;
        default:
            MonthName = '';
            return MonthName;
    }
}

function criaData (date) {
    const diaSemanaNum = date.getDay();
    const month = date.getMonth();

    const diaSemanaTexto = getDiaSemanaTexto(diaSemanaNum);
    const MonthName = getMonthName(month);

    return `${diaSemanaTexto}, ${dia} de ${MonthName} de ${year} ${zeroAesquerda(hour)}:${zeroAesquerda(minutes)}`
}

function zeroAesquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

const date = new Date();
const dia = date.getDate();
const year = date.getFullYear();
const hour = date.getHours();
const minutes = date.getMinutes();

text.innerHTML = criaData(date); */

//          DATE MODE           //
/* 
const date = new Date();
const text = document.querySelector('.container h1')

text.innerHTML = date.toLocaleString('pt-BR', { dateStyle: 'full', timeStyle: 'short'});
*/

//          Arrays MODE         //
const text = document.querySelector('.container h1');

function getDiaSemanaTexto (diaSemanaNum){
    const diasDaSemana = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'];
    return diasDaSemana[diaSemanaNum];
}

function getMonthName(month) {
    const meses = ['Janeiro','Fevereiro', 'Março', 'Abril', 'Maio', 'Junho','Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    
    return meses[month];
}

function criaData (date) {
    const diaSemanaNum = date.getDay();
    const month = date.getMonth();

    const diaSemanaTexto = getDiaSemanaTexto(diaSemanaNum);
    const MonthName = getMonthName(month);

    return `${diaSemanaTexto}, ${dia} de ${MonthName} de ${year} ${zeroAesquerda(hour)}:${zeroAesquerda(minutes)}`;
}

function zeroAesquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

const date = new Date();
const dia = date.getDate();
const year = date.getFullYear();
const hour = date.getHours();
const minutes = date.getMinutes();

text.innerHTML = criaData(date);
