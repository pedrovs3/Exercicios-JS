/* 
Operadores de Comparação
>   maior que
<   menor que 
>=  maior que ou igual a
<=  menor que ou igual a
==  igualdade (valor) ******** nao se usa!!!
=== igualdade estrita (valor e tipo)
!= diferente (valor) ******** nao se usa!!!
!== diferente estrito (valor e tipo)
*/

/*
Operadores lógicos:

&& -> AND -> E -> Todas as expressoes precisam ser verdadeiras para retornar true
|| -> OR -> OU
! -> NOT -> NÃO
*/

const expressaoAnd = true && true && true;
const expressaoOr = false || true || true;


const comp = 10 > 5;
console.log(comp);
console.log(expressaoAnd);
console.log(expressaoOr)