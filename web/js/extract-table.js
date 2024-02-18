// Obtém a referência da tabela pelo ID
let tabela = document.getElementById('myTable');
// Array para armazenar os dados da tabela
let dados = [];

// Itera sobre as linhas da tabela (começando do índice 1 para ignorar o cabeçalho)
for (let i = 1; i < tabela.rows.length; i++) {
    let linha = tabela.rows[i]; // Obtém a referência para cada linha da tabela <tr></tr>
    let colunas = linha.cells; // Obtém as células (colunas) da linha <td></td>
    let linhaDados = {}; // Objeto que vai armazenar os dados da linha


    // Adiciona um elemento 'id' com número crescente para cada objeto
    linhaDados['id'] = i;

    // Itera sobre as colunas da tabela
    for (let j = 0; j < colunas.length; j++) {
        // Usa o texto do cabeçalho como chave e o texto da célula como valor
        linhaDados[tabela.rows[0].cells[j].innerText] = colunas[j].innerText;
    }

    // Adiciona o objeto ao array dados
    dados.push(linhaDados);
}
// Converte os dados para uma string JSON formatada e imprime no console
console.log(JSON.stringify(dados, null, 2));

// Função replacer para excluir a propriedade 'id' durante a stringificação
// function replacer(key, value) {
//     // Se a chave for 'id', não inclua na string JSON
//     const keys = ['id', 'Name']
//     if (keys.includes(key)) {
//         return undefined;
//     }
//     return value;
// }

// Stringifica o array 'dados' com a função replacer para personalizar a stringificação
//console.log(JSON.stringify(dados, replacer, 2));