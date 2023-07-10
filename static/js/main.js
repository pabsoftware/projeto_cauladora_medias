const form = document.getElementById('form-atividade');
const imgAprovado = '<img src=./static/img/aprovado.png alt="Emoji Celebrando">';
const imgReprovado = '<img src=./static/img/reprovado.png alt="Emoji decepcionado">';
const atividade = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = prompt(parseFloat("Digite a nota mínima: "))

let linhas = '';
form.addEventListener('submit', function(e){
    e.preventDefault();

    
    adicionaLinha();
    atualizaMediaFinal();
    calculaMedia();
    atualisaTabela();
    
}) 

function adicionaLinha(){
    
    const inputNomeAtividade = document.getElementById('nome-atividade')
    const inputNotaAtividade = document.getElementById('nota-atividade')
    let ap_rp = inputNotaAtividade.value >=notaMinima ? imgAprovado : imgReprovado;

    if (atividade.includes(inputNomeAtividade.value)){
        alert('A atividade' + inputNomeAtividade.value + 'ja foi inclusa' )
    } else {
    
    /* push - inseri itens no array*/
    atividade.push(inputNomeAtividade.value);
    notas.push(parseFloat(inputNotaAtividade.value));

    let linha = '<tr>';
    linha += '<td>' + inputNomeAtividade.value + '</td>';
    linha += '<td>' + inputNotaAtividade.value + '</td>';
    linha += '<td>' + ap_rp+ '</td>';
    linha += '</tr>'

    linhas += linha;

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
    }
}

function atualisaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function calculaMedia(){
    let somaNotas = 0;
    for(let i =0; i< notas.length; i++){
        somaNotas += notas[i];
    }
    const mediaDasNotas = somaNotas/notas.length;
  
    return mediaDasNotas
}

function atualizaMediaFinal(){
    const mediaFinal = calculaMedia();
    /* toFixed(2) - apresenta até a segunda casa decimal o resultado de uma divisao não exata*/
    document.getElementById('valor-media-final').innerHTML = mediaFinal.toFixed(2);
    document.getElementById('resultado-media-final').innerHTML = mediaFinal >= notaMinima? spanAprovado: spanReprovado;
}

