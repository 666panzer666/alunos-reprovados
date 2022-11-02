// Criar um programa que calcula a média das notas entre os alunos
// e envia mensagem do cálculo da média

const alunoA = [
    {
        nome: "Ruanzito",
        nota: 9.6
    },
    {
        nome: "Ítalo funkeiro",
        nota: 7.4
    },
    {
        nome: "Marco Véio",
        nota: 3
    }
]

const alunoB = [
    {
        nome: "Jurema",
        nota: 1.6
    },
    {
        nome: "Jacinto",
        nota: 4.4
    },
    {
        nome: "Pafúncio",
        nota: 7
    }
]

function calculoMedia(alunos) {
    let soma = 0;
    for (let i = 0; i < alunos.length; i++) {
        soma += alunos[i].nota;
    }
    const media = soma / alunos.length
    return media
}

const media1 = calculoMedia(alunoA)
const media2 = calculoMedia(alunoB)

// Se a média for maior que 5, parabenizar a turma

function enviaMensagem(media, turma) {
    if (media > 6) {
        console.log(`A nota média da ${turma} foi ${media.toFixed(2)}, Parabéns`)
    } else {
        console.log(`A média da ${turma} foi menor que 6.`)
    }
}

enviaMensagem(media1, "Turma A");
enviaMensagem(media2, "Turma B");

function marcarReprovado(aluno) {
    aluno.reprovado = false;
    if (aluno.nota < 6) {
        aluno.reprovado = true;

    }
}

function enviarMensagemReprovado(aluno) {
    if (aluno.reprovado) {
        console.log(`O Aluno ${aluno.nome} está reprovado!`)
    }
}

function alunoReprovado(alunos) {
    for (let aluno of alunos){
        marcarReprovado(aluno);
        enviarMensagemReprovado(aluno);
    }
}

alunoReprovado(alunoA)
alunoReprovado(alunoB)