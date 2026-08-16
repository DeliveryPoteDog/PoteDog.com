let pedidos = [];


// ===============================
// ABRIR SISTEMA DE PEDIDO
// ===============================

function abrirSistemaPedido() {

    const sistema = document.createElement("div");

    sistema.id = "sistema-pedido";

    sistema.innerHTML = `

        <div class="pedido-box">

            <button
                class="fechar-pedido"
                onclick="fecharSistemaPedido()"
            >
                ×
            </button>

            <h2>🌭 FAÇA SEU PEDIDO</h2>

            <p class="pedido-subtitulo">
                Escolha seu Pote Dog e monte seu pedido.
            </p>


            <!-- ===============================
                 ESCOLHA DO POTE DOG
            ================================ -->

            <label>
                Escolha o Pote Dog
            </label>

            <div class="potes-dog">

                <button
                    type="button"
                    class="pote-opcao selecionado"
                    data-produto="Pote Dog Tradicional"
                    data-preco="29.90"
                    onclick="selecionarPote(this)"
                >
                    <span class="pote-emoji">🌭</span>

                    <span class="pote-info">
                        <strong>Pote Dog Tradicional</strong>
                        <small>R$ 29,90</small>
                    </span>
                </button>


                <button
                    type="button"
                    class="pote-opcao"
                    data-produto="Pote Dog Bacon"
                    data-preco="34.99"
                    onclick="selecionarPote(this)"
                >
                    <span class="pote-emoji">🥓</span>

                    <span class="pote-info">
                        <strong>Pote Dog Bacon</strong>
                        <small>R$ 34,99</small>
                    </span>
                </button>


                <button
                    type="button"
                    class="pote-opcao"
                    data-produto="Pote Dog Calabresa"
                    data-preco="34.99"
                    onclick="selecionarPote(this)"
                >
                    <span class="pote-emoji">🌶️</span>

                    <span class="pote-info">
                        <strong>Pote Dog Calabresa</strong>
                        <small>R$ 34,99</small>
                    </span>
                </button>


                <button
                    type="button"
                    class="pote-opcao"
                    data-produto="Big Pote Dog"
                    data-preco="49.99"
                    onclick="selecionarPote(this)"
                >
                    <span class="pote-emoji">🔥</span>

                    <span class="pote-info">
                        <strong>Big Pote Dog</strong>
                        <small>R$ 49,99</small>
                    </span>
                </button>

            </div>


            <input
                type="hidden"
                id="produto"
                value="Pote Dog Tradicional"
            >

            <input
                type="hidden"
                id="produtoPreco"
                value="29.90"
            >


            <!-- ===============================
                 QUANTIDADE
            ================================ -->

            <label>
                Quantidade
            </label>

            <input
                type="number"
                id="quantidade"
                value="1"
                min="1"
                max="20"
            >


            <!-- ===============================
                 ADICIONAIS
            ================================ -->

            <label>
                Adicionais
            </label>

            <div class="opcoes-pedido">

                <label>
                    <input
                        type="checkbox"
                        value="Cheddar"
                        data-preco="4"
                    >
                    🧀 Cheddar + R$ 4,00
                </label>


                <label>
                    <input
                        type="checkbox"
                        value="Catupiry"
                        data-preco="4"
                    >
                    🥫 Catupiry + R$ 4,00
                </label>


                <label>
                    <input
                        type="checkbox"
                        value="Bacon"
                        data-preco="4"
                    >
                    🥓 Bacon + R$ 4,00
                </label>


                <label>
                    <input
                        type="checkbox"
                        value="Calabresa"
                        data-preco="4"
                    >
                    🌶️ Calabresa + R$ 4,00
                </label>

            </div>


            <!-- ===============================
                 BEBIDA
            ================================ -->

            <label>
                Bebida
            </label>

            <select id="bebida">

                <option
                    value="Sem bebida"
                    data-preco="0"
                >
                    Sem bebida
                </option>

                <option
                    value="Coca-Cola 200ML"
                    data-preco="3.50"
                >
                    Coca-Cola 200ML — R$ 3,50
                </option>

                <option
                    value="Coca-Cola Lata 220ML"
                    data-preco="4"
                >
                    Coca-Cola Lata 220ML — R$ 4,00
                </option>

                <option
                    value="Coca-Cola Lata 350ML"
                    data-preco="6"
                >
                    Coca-Cola Lata 350ML — R$ 6,00
                </option>

            </select>


            <!-- ===============================
                 TIPO DE PEDIDO
            ================================ -->

            <label>
                Tipo de pedido
            </label>

            <div class="tipo-pedido">

                <label>
                    <input
                        type="radio"
                        name="tipo"
                        value="Delivery"
                        checked
                        onchange="mostrarEndereco()"
                    >
                    🛵 Delivery
                </label>


                <label>
                    <input
                        type="radio"
                        name="tipo"
                        value="Retirada"
                        onchange="mostrarEndereco()"
                    >
                    🛍️ Retirada
                </label>

            </div>


            <!-- ===============================
                 DADOS DO CLIENTE
            ================================ -->

            <div id="dados-entrega">

                <label>
                    👤 Nome
                </label>

                <input
                    type="text"
                    id="nomeCliente"
                    placeholder="Digite seu nome"
                >


                <label>
                    🏠 Endereço
                </label>

                <input
                    type="text"
                    id="enderecoCliente"
                    placeholder="Rua / Avenida"
                >


                <label>
                    🔢 Número
                </label>

                <input
                    type="text"
                    id="numeroCliente"
                    placeholder="Número da casa"
                >


                <label>
                    📌 Bairro
                </label>

                <input
                    type="text"
                    id="bairroCliente"
                    placeholder="Digite seu bairro"
                >


                <label>
                    📝 Complemento
                </label>

                <input
                    type="text"
                    id="complementoCliente"
                    placeholder="Ex: Casa azul, apto 2..."
                >

            </div>


            <!-- ===============================
                 OBSERVAÇÕES
            ================================ -->

            <label>
                Observações
            </label>

            <textarea
                id="observacoes"
                placeholder="Ex: sem milho, pouco molho..."
            ></textarea>


            <!-- ===============================
                 ADICIONAR
            =============================== -->

            <button
                class="adicionar-pedido"
                onclick="adicionarPedido()"
            >
                ➕ ADICIONAR AO PEDIDO
            </button>

        </div>
    `;

    document.body.appendChild(sistema);

    mostrarEndereco();
}


// ===============================
// MOSTRAR / ESCONDER ENDEREÇO
// ===============================

function mostrarEndereco() {

    const tipo = document.querySelector(
        'input[name="tipo"]:checked'
    );

    const dadosEntrega =
        document.getElementById("dados-entrega");

    if (!tipo || !dadosEntrega) return;

    if (tipo.value === "Delivery") {

        dadosEntrega.style.display = "block";

    } else {

        dadosEntrega.style.display = "none";

    }
}


// ===============================
// SELECIONAR POTE DOG
// ===============================

function selecionarPote(botao) {

    const botoes =
        document.querySelectorAll(".pote-opcao");

    botoes.forEach(function(item) {

        item.classList.remove("selecionado");

    });


    botao.classList.add("selecionado");


    const produto =
        botao.dataset.produto;

    const preco =
        botao.dataset.preco;


    document.getElementById("produto").value =
        produto;

    document.getElementById("produtoPreco").value =
        preco;

}


// ===============================
// FECHAR SISTEMA
// ===============================

function fecharSistemaPedido() {

    const sistema =
        document.getElementById("sistema-pedido");

    if (sistema) {

        sistema.remove();

    }

}


// ===============================
// ADICIONAR PEDIDO
// ===============================

function adicionarPedido() {

    const produto =
        document.getElementById("produto");

    const quantidade =
        Number(
            document.getElementById("quantidade").value
        );

    const bebida =
        document.getElementById("bebida");

    const observacoes =
        document.getElementById("observacoes").value;


    if (quantidade < 1) {

        alert(
            "Escolha uma quantidade válida."
        );

        return;
    }


    // ===============================
    // DADOS DO CLIENTE
    // ===============================

    const tipoSelecionado =
        document.querySelector(
            'input[name="tipo"]:checked'
        ).value;


    let nomeCliente = "";
    let enderecoCliente = "";
    let numeroCliente = "";
    let bairroCliente = "";
    let complementoCliente = "";


    if (tipoSelecionado === "Delivery") {

        nomeCliente =
            document.getElementById("nomeCliente").value.trim();

        enderecoCliente =
            document.getElementById("enderecoCliente").value.trim();

        numeroCliente =
            document.getElementById("numeroCliente").value.trim();

        bairroCliente =
            document.getElementById("bairroCliente").value.trim();

        complementoCliente =
            document.getElementById("complementoCliente").value.trim();


        if (
            !nomeCliente ||
            !enderecoCliente ||
            !numeroCliente ||
            !bairroCliente
        ) {

            alert(
                "Preencha seu nome, endereço, número e bairro."
            );

            return;
        }

    }


    // ===============================
    // PRODUTO
    // ===============================

    const produtoNome =
        produto.value;


    const produtoPreco =
        Number(
            document.getElementById("produtoPreco").value
        );


    // ===============================
    // BEBIDA
    // ===============================

    const bebidaNome =
        bebida.value;


    const bebidaPreco =
        Number(
            bebida.options[
                bebida.selectedIndex
            ].dataset.preco
        );


    // ===============================
    // ADICIONAIS
    // ===============================

    const adicionaisSelecionados =
        document.querySelectorAll(
            '.opcoes-pedido input[type="checkbox"]:checked'
        );


    let adicionais = [];

    let precoAdicionais = 0;


    adicionaisSelecionados.forEach(
        function(item) {

            adicionais.push(
                item.value
            );

            precoAdicionais +=
                Number(item.dataset.preco);

        }
    );


    // ===============================
    // CALCULAR
    // ===============================

    const valorUnitario =
        produtoPreco +
        precoAdicionais +
        bebidaPreco;


    const subtotal =
        valorUnitario * quantidade;


    // ===============================
    // SALVAR PEDIDO
    // ===============================

    pedidos.push({

        produto:
            produtoNome,

        quantidade:
            quantidade,

        adicionais:
            adicionais,

        bebida:
            bebidaNome,

        tipo:
            tipoSelecionado,

        nomeCliente:
            nomeCliente,

        enderecoCliente:
            enderecoCliente,

        numeroCliente:
            numeroCliente,

        bairroCliente:
            bairroCliente,

        complementoCliente:
            complementoCliente,

        observacoes:
            observacoes,

        subtotal:
            subtotal

    });


    mostrarResumo();

}


// ===============================
// MOSTRAR RESUMO
// ===============================

function mostrarResumo() {

    const sistema =
        document.getElementById("sistema-pedido");


    let total = 0;

    let texto = "";


    pedidos.forEach(
        function(pedido, index) {

            total +=
                pedido.subtotal;


            texto += `

                <div style="margin-bottom:18px">

                    <strong>
                        ${pedido.quantidade}x
                        ${pedido.produto}
                    </strong>

                    <br>

                    ${
                        pedido.adicionais.length > 0
                        ?
                        "Adicionais: " +
                        pedido.adicionais.join(", ")
                        :
                        "Sem adicionais"
                    }

                    <br>

                    Bebida:
                    ${pedido.bebida}

                    <br>

                    Tipo:
                    ${pedido.tipo}

                    ${
                        pedido.observacoes
                        ?
                        `<br>Obs:
                        ${pedido.observacoes}`
                        :
                        ""
                    }

                    <br>

                    <strong>
                        R$ ${pedido.subtotal
                        .toFixed(2)
                        .replace(".", ",")}
                    </strong>

                </div>

            `;

        }
    );


    sistema.innerHTML = `

        <div class="pedido-box">

            <button
                class="fechar-pedido"
                onclick="fecharSistemaPedido()"
            >
                ×
            </button>


            <h2>
                🧾 SEU PEDIDO
            </h2>


            <p class="pedido-subtitulo">
                Confira tudo antes de enviar.
            </p>


            <div class="resumo-texto">

                ${texto}

                <hr>

                <h3>
                    TOTAL:
                    R$ ${total
                    .toFixed(2)
                    .replace(".", ",")}
                </h3>

            </div>


            <button
                class="adicionar-pedido"
                onclick="abrirNovoItem()"
            >
                ➕ ADICIONAR OUTRO ITEM
            </button>


            <a
                href="#"
                class="enviar-whatsapp"
                onclick="enviarWhatsApp(event)"
            >
                📲 ENVIAR PEDIDO PELO WHATSAPP
            </a>


            <button
                class="voltar-pedido"
                onclick="cancelarPedido()"
            >
                🗑️ CANCELAR PEDIDO
            </button>

        </div>

    `;

}


// ===============================
// ADICIONAR OUTRO ITEM
// ===============================

function abrirNovoItem() {

    const sistema =
        document.getElementById("sistema-pedido");

    if (sistema) {

        sistema.remove();

    }

    abrirSistemaPedido();

}


// ===============================
// CANCELAR
// ===============================

function cancelarPedido() {

    const confirmar =
        confirm(
            "Tem certeza que deseja cancelar o pedido?"
        );


    if (confirmar) {

        pedidos = [];

        fecharSistemaPedido();

    }

}


// ===============================
// ENVIAR WHATSAPP
// ===============================

function enviarWhatsApp(event) {

    event.preventDefault();


    if (pedidos.length === 0) {

        alert(
            "Seu pedido está vazio."
        );

        return;
    }


    let mensagem =
        "🌭 *NOVO PEDIDO - DELIVERY POTE DOG*%0A";


    mensagem +=
        "━━━━━━━━━━━━━━━━━━%0A";


    let total = 0;


    pedidos.forEach(
        function(pedido, index) {

            total +=
                pedido.subtotal;


            mensagem +=
                `%0A*ITEM ${index + 1}*%0A`;


            mensagem +=
                `${pedido.quantidade}x ${pedido.produto}%0A`;


            // ADICIONAIS

            if (
                pedido.adicionais.length > 0
            ) {

                mensagem +=
                    `Adicionais: ${pedido.adicionais.join(", ")}%0A`;

            } else {

                mensagem +=
                    `Adicionais: Nenhum%0A`;

            }


            // BEBIDA

            mensagem +=
                `Bebida: ${pedido.bebida}%0A`;


            // TIPO

            mensagem +=
                `Tipo: ${pedido.tipo}%0A`;


            // OBSERVAÇÃO

            if (
                pedido.observacoes
            ) {

                mensagem +=
                    `Observação: ${pedido.observacoes}%0A`;

            }


            // SUBTOTAL

            mensagem +=
                `Subtotal: R$ ${pedido.subtotal
                .toFixed(2)
                .replace(".", ",")}%0A`;

        }
    );


    // ===============================
    // DADOS DO CLIENTE
    // ===============================

    const primeiroPedido =
        pedidos[0];


    if (primeiroPedido.tipo === "Delivery") {

        mensagem +=
            "%0A━━━━━━━━━━━━━━━━━━%0A";

        mensagem +=
            "👤 *DADOS PARA ENTREGA*%0A";

        mensagem +=
            `Nome: ${primeiroPedido.nomeCliente}%0A`;

        mensagem +=
            `Endereço: ${primeiroPedido.enderecoCliente}%0A`;

        mensagem +=
            `Número: ${primeiroPedido.numeroCliente}%0A`;

        mensagem +=
            `Bairro: ${primeiroPedido.bairroCliente}%0A`;

        if (primeiroPedido.complementoCliente) {

            mensagem +=
                `Complemento: ${primeiroPedido.complementoCliente}%0A`;

        }

    }


    mensagem +=
        "%0A━━━━━━━━━━━━━━━━━━%0A";


    mensagem +=
        `💰 *TOTAL: R$ ${total
        .toFixed(2)
        .replace(".", ",")}*%0A`;


    mensagem +=
        "━━━━━━━━━━━━━━━━━━%0A";


    mensagem +=
        "📍 Delivery Pote Dog";


    // ===============================
    // NÚMERO DO WHATSAPP
    // ===============================

    const numero =
        "5544997655536";


    const url =
        `https://wa.me/${numero}?text=${mensagem}`;


    window.open(
        url,
        "_blank"
    );

}


// ===============================
// CONSOLE
// ===============================

console.log(
    "🌭 Delivery Pote Dog - sistema de pedidos carregado!"
);
