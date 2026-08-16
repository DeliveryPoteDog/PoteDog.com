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


            <label>
                Escolha o Pote Dog
            </label>

            <select id="produto">

                <option value="Pote Dog Tradicional" data-preco="29.90">
                    Pote Dog Tradicional — R$ 29,90
                </option>

                <option value="Pote Dog Bacon" data-preco="34.99">
                    Pote Dog Bacon — R$ 34,99
                </option>

                <option value="Pote Dog Calabresa" data-preco="34.99">
                    Pote Dog Calabresa — R$ 34,99
                </option>

                <option value="Big Pote Dog" data-preco="49.99">
                    Big Pote Dog — R$ 49,99
                </option>

            </select>


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


            <label>
                Bebida
            </label>

            <select id="bebida">

                <option value="Sem bebida" data-preco="0">
                    Sem bebida
                </option>

                <option value="Coca-Cola 200ML" data-preco="3.50">
                    Coca-Cola 200ML — R$ 3,50
                </option>

                <option value="Coca-Cola Lata 220ML" data-preco="4">
                    Coca-Cola Lata 220ML — R$ 4,00
                </option>

                <option value="Coca-Cola Lata 350ML" data-preco="6">
                    Coca-Cola Lata 350ML — R$ 6,00
                </option>

            </select>


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
                    >
                    🛵 Delivery
                </label>


                <label>
                    <input
                        type="radio"
                        name="tipo"
                        value="Retirada"
                    >
                    🛍️ Retirada
                </label>

            </div>


            <label>
                Observações
            </label>

            <textarea
                id="observacoes"
                placeholder="Ex: sem milho, pouco molho..."
            ></textarea>


            <button
                class="adicionar-pedido"
                onclick="adicionarPedido()"
            >
                ➕ ADICIONAR AO PEDIDO
            </button>

        </div>
    `;

    document.body.appendChild(sistema);
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
        Number(document.getElementById("quantidade").value);

    const bebida =
        document.getElementById("bebida");

    const observacoes =
        document.getElementById("observacoes").value;


    if (quantidade < 1) {

        alert("Escolha uma quantidade válida.");

        return;
    }


    const produtoNome =
        produto.value;

    const produtoPreco =
        Number(
            produto.options[
                produto.selectedIndex
            ].dataset.preco
        );


    const bebidaNome =
        bebida.value;

    const bebidaPreco =
        Number(
            bebida.options[
                bebida.selectedIndex
            ].dataset.preco
        );


    // PEGAR ADICIONAIS

    const adicionaisSelecionados =
        document.querySelectorAll(
            '.opcoes-pedido input[type="checkbox"]:checked'
        );


    let adicionais = [];

    let precoAdicionais = 0;


    adicionaisSelecionados.forEach(
        function(item) {

            adicionais.push(item.value);

            precoAdicionais +=
                Number(item.dataset.preco);

        }
    );


    const tipoSelecionado =
        document.querySelector(
            'input[name="tipo"]:checked'
        ).value;


    const valorUnitario =
        produtoPreco +
        precoAdicionais +
        bebidaPreco;


    const subtotal =
        valorUnitario * quantidade;


    pedidos.push({

        produto: produtoNome,

        quantidade: quantidade,

        adicionais: adicionais,

        bebida: bebidaNome,

        tipo: tipoSelecionado,

        observacoes: observacoes,

        subtotal: subtotal

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

    sistema.remove();

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

        alert("Seu pedido está vazio.");

        return;
    }


    let mensagem =
        "🌭 *NOVO PEDIDO - DELIVERY POTE DOG*%0A";

    mensagem +=
        "━━━━━━━━━━━━━━━━━━%0A";


    let total = 0;


    pedidos.forEach(
        function(pedido, index) {

            total += pedido.subtotal;


            mensagem +=
                `%0A*ITEM ${index + 1}*%0A`;

            mensagem +=
                `${pedido.quantidade}x ${pedido.produto}%0A`;


            if (
                pedido.adicionais.length > 0
            ) {

                mensagem +=
                    `Adicionais: ${pedido.adicionais.join(", ")}%0A`;

            } else {

                mensagem +=
                    `Adicionais: Nenhum%0A`;

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

        }
    );


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