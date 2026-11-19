
/* Biblioteca do Bairro
   Exercícios de JavaScript
*/

// EXERCÍCIO 1 — Olá, consola

console.log("Bem-vindos à Biblioteca do Bairro!");


// EXERCÍCIO 2 — Dados da biblioteca

{
    const nome = "Biblioteca do Bairro";
    const morada = "Alberto Sampaio, Guimarães";
    let livros = 1250;

    livros = livros - 3;

    console.log("Livros disponíveis:", livros);
    console.log(`A ${nome} tem ${livros} livros disponíveis.`);

    console.log(typeof nome, typeof morada, typeof livros);
    console.log(nome.toUpperCase());
}


// EXERCÍCIO 3 — Aberta ou fechada?

{
    const dia = "sabado";
    const hora = 11;
    let aberta;

    if (dia === "domingo") {
        aberta = false;
    } else if (dia === "sabado") {
        aberta = hora >= 10 && hora < 13;
    } else {
        aberta = hora >= 9 && hora < 19;
    }

    console.log(aberta ? "Biblioteca aberta" : "Biblioteca fechada");
}


// EXERCÍCIO 4 — Funções para calcular multas

{
    function cMulta(dias) {
        return dias > 15 ? (dias - 15) * 0.5 : 0;
    }

    function fmrEuros(valor) {
        return valor.toFixed(2).replace(".", ",") + " €";
    }

    function mensagemMulta(dias) {
        const multa = cMulta(dias);

        if (multa === 0) {
            return "Sem multa";
        }

        return `Multa a pagar: ${fmrEuros(multa)}`;
    }

    console.log(mensagemMulta(10));
    console.log(mensagemMulta(22));
}


// EXERCÍCIO 5 — Lista de leituras

{
    const livros = [
        "livro1",
        "livro2",
        "livro3",
        "livro4",
        "livro5"
    ];

    livros.push("livro6", "livro7");

    console.log(livros.length);

    livros.forEach((titulo, i) => {
        console.log(`${i + 1}. ${titulo}`);
    });

    const longos = livros.filter(t => t.length > 10);
    const maiusculas = livros.map(t => t.toUpperCase());

    console.log(longos, maiusculas);
}
