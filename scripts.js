const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

 

function convertValues() {
    const inputCurrencyValue = document.querySelector(".valor").value
    const currencyValueToConvert = document.querySelector(".entry-value")//Valor da venda - entrada
    const currencyValueConverted = document.querySelector(".exit-value")//Valor Final - 

    const valor = inputCurrencyValue
    const taxaDebito = 2.39
    const valorFinal = valor * (1 - taxaDebito / 100)

    const value = inputCurrencyValue
    const taxaCredito = 4.99
    const valorCredito = value * (1 - taxaCredito / 100)
     

    
    const aVista = valorFinal
    const aPrazo = valorCredito


    if (currencySelect.value == "debito") {
        //Se o select estiver selecionado o valor de dolar, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(aVista)
    }

    if (currencySelect.value == "credito") {
        //Se o select estiver selecionado o valor de euro, enre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(aPrazo)
    }


    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue) // Formatação do número para moeda corrente
}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if (currencySelect.value == "debito") {
        currencyName.innerHTML = "Débito"
        currencyImage.src = "./assets/imagens-de-dinheiro-real-png-3.png"
    }

    if (currencySelect.value == "credito") {
        currencyName.innerHTML = "Crédito"
        //currencyImage.src = "./assets/PagSeguro-Logo.png"
    }

    convertValues()
}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)