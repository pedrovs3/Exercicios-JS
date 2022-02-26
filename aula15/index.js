const alunos = ['a', 'b', 'c']
const aluno = document.getElementById('aluno')

alunos[0] = prompt('Digite o nome do 1º Aluno: ')
alunos[1] = prompt('Digite o nome do 2º Aluno: ')

aluno.innerHTML = `O nome do primeiro aluno é: ${alunos[0]}<br>Do segundo aluno é: ${alunos[1]}`