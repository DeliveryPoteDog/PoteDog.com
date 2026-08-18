let pedidos = [];


// ======================================================
// ABRIR SISTEMA DE PEDIDO
// ======================================================

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


            <!-- POTE DOG -->

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


            <!-- QUANTIDADE -->

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


            <!-- ADICIONAIS -->

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


            <!-- BEBIDA -->

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


            <!-- TIPO DO PEDIDO -->

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


            <!-- DADOS DO CLIENTE -->

            <div id="dados-entrega">

                <label>
                    👤 Nome
                </label>

                <input
                    type="text"
                    id="nomeCliente"
                    placeholder="Digite seu nome"
                >


                <div id="campos-delivery">

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

            </div>


            <!-- AVISO DE RETIRADA -->

            <div
                id="aviso-retirada"
                style="
                    display:none;
                    margin-top:15px;
                    padding:15px;
                    border-radius:12px;
                    background:#e9ffe9;
                    border:2px solid #21a52d;
                    color:#155d1b;
                    line-height:1.5;
                "
            >

                🛍️ <strong>RETIRADA</strong>

                <br><br>

                Após enviar o pedido,
                <strong>
                    a Pote Dog enviará pelo WhatsApp
                    a localização do local de retirada.
                </strong>

            </div>


            <!-- FORMA DE PAGAMENTO -->

            <label style="margin-top:20px;">
                💳 Forma de pagamento
            </label>

            <select
                id="formaPagamento"
                onchange="mostrarPagamento()"
            >

                <option value="">
                    Selecione uma forma de pagamento
                </option>

                <option value="Pix">
                    💚 Pix
                </option>

                <option value="Dinheiro">
                    💵 Dinheiro
                </option>

                <option value="Cartão">
                    💳 Cartão
                </option>

            </select>


            <!-- PIX -->

            <div
                id="aviso-pix"
                style="
                    display:none;
                    margin-top:12px;
                    padding:15px;
                    border-radius:12px;
                    background:#e9ffe9;
                    border:2px solid #21a52d;
                    color:#155d1b;
                    line-height:1.5;
                "
            >

                💚 <strong>PAGAMENTO VIA PIX</strong>

                <br><br>

                A chave Pix será enviada pelo
                <strong>WhatsApp</strong> após o pedido.

                <br><br>

                📎 Depois de realizar o pagamento,
                envie o <strong>comprovante pelo WhatsApp</strong>.

            </div>


            <!-- DINHEIRO -->

            <div
                id="campo-dinheiro"
                style="
                    display:none;
                    margin-top:15px;
                "
            >

                <label>
                    💵 Precisa de troco?
                </label>


                <div
                    class="tipo-pedido"
                    style="margin-bottom:10px;"
                >

                    <label>
                        <input
                            type="radio"
                            name="troco"
                            value="Não"
                            checked
                            onchange="mostrarTroco()"
                        >
                        Não
                    </label>


                    <label>
                        <input
                            type="radio"
                            name="troco"
                            value="Sim"
                            onchange="mostrarTroco()"
                        >
                        Sim
                    </label>

                </div>


                <div
                    id="campo-valor-troco"
                    style="display:none;"
                >

                    <label>
                        💰 Troco para quanto?
                    </label>

                    <input
                        type="number"
                        id="valorTroco"
                        min="0"
                        step="0.01"
                        placeholder="Ex: 50,00"
                    >

                </div>

            </div>


            <!-- OBSERVAÇÕES -->

            <label>
                Observações
            </label>

            <textarea
                id="observacoes"
                placeholder="Ex: sem milho, pouco molho..."
            ></textarea>


            <!-- BOTÃO -->

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
    mostrarPagamento();
}


// ======================================================
// DELIVERY / RETIRADA
// ======================================================

function mostrarEndereco() {

    const tipo =
        document.querySelector(
            'input[name="tipo"]:checked'
        );

    const camposDelivery =
        document.getElementById("campos-delivery");

    const avisoRetirada =
        document.getElementById("aviso-retirada");

    if (!tipo) return;


    if (tipo.value === "Delivery") {

        camposDelivery.style.display = "block";

        avisoRetirada.style.display = "none";

    } else {

        camposDelivery.style.display = "none";

        avisoRetirada.style.display = "block";
    }
}


// ======================================================
// PAGAMENTO
// ======================================================

function mostrarPagamento() {

    const forma =
        document.getElementById("formaPagamento");

    const avisoPix =
        document.getElementById("aviso-pix");

    const campoDinheiro =
        document.getElementById("campo-dinheiro");

    if (!forma) return;


    avisoPix.style.display = "none";

    campoDinheiro.style.display = "none";


    if (forma.value === "Pix") {

        avisoPix.style.display = "block";
    }


    if (forma.value === "Dinheiro") {

        campoDinheiro.style.display = "block";

        mostrarTroco();
    }
}


// ======================================================
// TROCO
// ======================================================

function mostrarTroco() {

    const troco =
        document.querySelector(
            'input[name="troco"]:checked'
        );

    const campo =
        document.getElementById("campo-valor-troco");

    if (!troco || !campo) return;


    if (troco.value === "Sim") {

        campo.style.display = "block";

    } else {

        campo.style.display = "none";

        const valor =
            document.getElementById("valorTroco");

        if (valor) {
            valor.value = "";
        }
    }
}


// ======================================================
// SELECIONAR POTE
// ======================================================

function selecionarPote(botao) {

    document
        .querySelectorAll(".pote-opcao")
        .forEach(function(item) {

            item.classList.remove("selecionado");

        });


    botao.classList.add("selecionado");


    document.getElementById("produto").value =
        botao.dataset.produto;


    document.getElementById("produtoPreco").value =
        botao.dataset.preco;
}


// ======================================================
// FECHAR
// ======================================================

function fecharSistemaPedido() {

    const sistema =
        document.getElementById("sistema-pedido");

    if (sistema) {

        sistema.remove();
    }
}


// ======================================================
// ADICIONAR PEDIDO
// ======================================================

function adicionarPedido() {

    const quantidade =
        Number(
            document.getElementById("quantidade").value
        );


    if (quantidade < 1) {

        alert("Escolha uma quantidade válida.");

        return;
    }


    const tipo =
        document.querySelector(
            'input[name="tipo"]:checked'
        ).value;


    const nome =
        document
            .getElementById("nomeCliente")
            .value
            .trim();


    if (!nome) {

        alert("Digite seu nome.");

        return;
    }


    // DADOS DO DELIVERY

    let endereco = "";
    let numero = "";
    let bairro = "";
    let complemento = "";


    if (tipo === "Delivery") {

        endereco =
            document
                .getElementById("enderecoCliente")
                .value
                .trim();


        numero =
            document
                .getElementById("numeroCliente")
                .value
                .trim();


        bairro =
            document
                .getElementById("bairroCliente")
                .value
                .trim();


        complemento =
            document
                .getElementById("complementoCliente")
                .value
                .trim();


        if (
            !endereco ||
            !numero ||
            !bairro
        ) {

            alert(
                "Preencha endereço, número e bairro."
            );

            return;
        }
    }


    // PAGAMENTO

    const formaPagamento =
        document.getElementById("formaPagamento").value;


    if (!formaPagamento) {

        alert(
            "Escolha a forma de pagamento."
        );

        return;
    }


    let precisaTroco = "Não";
    let valorTroco = "";


    if (formaPagamento === "Dinheiro") {

        const troco =
            document.querySelector(
                'input[name="troco"]:checked'
            );


        if (troco) {

            precisaTroco =
                troco.value;
        }


        if (precisaTroco === "Sim") {

            valorTroco =
                document
                    .getElementById("valorTroco")
                    .value
                    .trim();


            if (
                !valorTroco ||
                Number(valorTroco) <= 0
            ) {

                alert(
                    "Informe para quanto precisa de troco."
                );

                return;
            }
        }
    }


    // PRODUTO

    const produto =
        document.getElementById("produto").value;


    const precoProduto =
        Number(
            document.getElementById("produtoPreco").value
        );


    // BEBIDA

    const bebida =
        document.getElementById("bebida");


    const bebidaNome =
        bebida.value;


    const bebidaPreco =
        Number(
            bebida.options[
                bebida.selectedIndex
            ].dataset.preco
        );


    // ADICIONAIS

    const selecionados =
        document.querySelectorAll(
            '.opcoes-pedido input[type="checkbox"]:checked'
        );


    let adicionais = [];

    let precoAdicionais = 0;


    selecionados.forEach(function(item) {

        adicionais.push(item.value);

        precoAdicionais +=
            Number(item.dataset.preco);

    });


    // TOTAL

    const valorUnitario =
        precoProduto +
        precoAdicionais +
        bebidaPreco;


    const subtotal =
        valorUnitario * quantidade;


    // OBSERVAÇÕES

    const observacoes =
        document
            .getElementById("observacoes")
            .value
            .trim();


    // SALVAR PEDIDO

    pedidos.push({

        produto: produto,

        quantidade: quantidade,

        adicionais: adicionais,

        bebida: bebidaNome,

        tipo: tipo,

        nomeCliente: nome,

        enderecoCliente: endereco,

        numeroCliente: numero,

        bairroCliente: bairro,

        complementoCliente: complemento,

        formaPagamento: formaPagamento,

        precisaTroco: precisaTroco,

        valorTroco: valorTroco,

        observacoes: observacoes,

        subtotal: subtotal

    });


    mostrarResumo();
}


// ======================================================
// RESUMO
// ======================================================

function mostrarResumo() {

    const sistema =
        document.getElementById("sistema-pedido");


    let total = 0;

    let texto = "";


    pedidos.forEach(function(pedido, index) {

        total += pedido.subtotal;


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

                <br>

                💳 Pagamento:
                ${pedido.formaPagamento}

                ${
                    pedido.formaPagamento === "Dinheiro"
                    ?
                    `
                    <br>
                    💵 Troco:
                    ${
                        pedido.precisaTroco === "Sim"
                        ?
                        "Para R$ " +
                        Number(pedido.valorTroco)
                            .toFixed(2)
                            .replace(".", ",")
                        :
                        "Não precisa"
                    }
                    `
                    :
                    ""
                }

                ${
                    pedido.formaPagamento === "Pix"
                    ?
                    `
                    <br>
                    💚 A chave Pix será enviada pelo WhatsApp.
                    <br>
                    📎 Cliente deverá enviar o comprovante pelo WhatsApp.
                    `
                    :
                    ""
                }

                ${
                    pedido.tipo === "Retirada"
                    ?
                    `
                    <br>
                    📍 <strong>
                    A Pote Dog enviará a localização
                    do local de retirada pelo WhatsApp.
                    </strong>
                    `
                    :
                    ""
                }

                ${
                    pedido.observacoes
                    ?
                    `
                    <br>
                    📝 Obs:
                    ${pedido.observacoes}
                    `
                    :
                    ""
                }

                <br><br>

                <strong>
                    R$
                    ${pedido.subtotal
                        .toFixed(2)
                        .replace(".", ",")}
                </strong>

            </div>
        `;
    });


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
                    R$
                    ${total
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


// ======================================================
// ADICIONAR OUTRO ITEM
// ======================================================

function abrirNovoItem() {

    const sistema =
        document.getElementById("sistema-pedido");


    if (sistema) {

        sistema.remove();
    }


    abrirSistemaPedido();
}


// ======================================================
// CANCELAR
// ======================================================

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


// ======================================================
// WHATSAPP
// ======================================================

function enviarWhatsApp(event) {

    event.preventDefault();


    if (pedidos.length === 0) {

        alert("Seu pedido está vazio.");

        return;
    }


    let mensagem =
        "🌭 *NOVO PEDIDO - DELIVERY POTE DOG*%0A";


    mensagem +=
        "━━━━━━━━━━━━━━━━━━%0A";


    let total = 0;


    pedidos.forEach(function(pedido, index) {

        total += pedido.subtotal;


        mensagem +=
            `%0A*ITEM ${index + 1}*%0A`;


        mensagem +=
            `${pedido.quantidade}x ${pedido.produto}%0A`;


        if (pedido.adicionais.length > 0) {

            mensagem +=
                `Adicionais: ${pedido.adicionais.join(", ")}%0A`;

        } else {

            mensagem +=
                "Adicionais: Nenhum%0A";
        }


        mensagem +=
            `Bebida: ${pedido.bebida}%0A`;


        mensagem +=
            `Tipo: ${pedido.tipo}%0A`;


        if (pedido.observacoes) {

            mensagem +=
                `Observação: ${pedido.observacoes}%0A`;
        }


        mensagem +=
            `Subtotal: R$ ${pedido.subtotal
                .toFixed(2)
                .replace(".", ",")}%0A`;

    });


    // DADOS DO CLIENTE

    const primeiro =
        pedidos[0];


    mensagem +=
        "%0A━━━━━━━━━━━━━━━━━━%0A";


    mensagem +=
        "👤 *DADOS DO CLIENTE*%0A";


    mensagem +=
        `Nome: ${primeiro.nomeCliente}%0A`;


    // DELIVERY

    if (
        primeiro.tipo === "Delivery"
    ) {

        mensagem +=
            "🛵 *DELIVERY*%0A";


        mensagem +=
            `Endereço: ${primeiro.enderecoCliente}%0A`;


        mensagem +=
            `Número: ${primeiro.numeroCliente}%0A`;


        mensagem +=
            `Bairro: ${primeiro.bairroCliente}%0A`;


        if (
            primeiro.complementoCliente
        ) {

            mensagem +=
                `Complemento: ${primeiro.complementoCliente}%0A`;
        }

    }


    // RETIRADA

    if (
        primeiro.tipo === "Retirada"
    ) {

        mensagem +=
            "🛍️ *RETIRADA*%0A";


        mensagem +=
            "📍 *A Pote Dog enviará a localização do local de retirada pelo WhatsApp.*%0A";
    }


    // PAGAMENTO

    mensagem +=
        "%0A💳 *FORMA DE PAGAMENTO*%0A";


    mensagem +=
        `Pagamento: ${primeiro.formaPagamento}%0A`;


    // DINHEIRO

    if (
        primeiro.formaPagamento === "Dinheiro"
    ) {

        if (
            primeiro.precisaTroco === "Sim"
        ) {

            mensagem +=
                `💵 Troco para: R$ ${
                    Number(primeiro.valorTroco)
                        .toFixed(2)
                        .replace(".", ",")
                }%0A`;

        } else {

            mensagem +=
                "💵 Não precisa de troco.%0A";
        }
    }


    // PIX

    if (
        primeiro.formaPagamento === "Pix"
    ) {

        mensagem +=
            "💚 A chave Pix será enviada pelo WhatsApp.%0A";


        mensagem +=
            "📎 O cliente deverá enviar o comprovante pelo WhatsApp.%0A";
    }


    // CARTÃO

    if (
        primeiro.formaPagamento === "Cartão"
    ) {

        mensagem +=
            "💳 Pagamento com cartão.%0A";
    }


    // TOTAL

    mensagem +=
        "%0A━━━━━━━━━━━━━━━━━━%0A";


    mensagem +=
        `💰 *TOTAL: R$ ${total
            .toFixed(2)
            .replace(".", ",")}*%0A`;


    mensagem +=
        "━━━━━━━━━━━━━━━━━━%0A";


    mensagem +=
        "🌭 Delivery Pote Dog";


    // WHATSAPP

    const numero =
        "5544997655536";


    const url =
        `https://wa.me/${numero}?text=${mensagem}`;


    window.open(
        url,
        "_blank"
    );
}


// ======================================================
// SISTEMA CARREGADO
// ======================================================

console.log(
    "🌭 Delivery Pote Dog - sistema de pedidos carregado!"
);
