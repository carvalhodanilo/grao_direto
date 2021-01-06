isPalindron  = (target) => {
    return (target.replace(/ /g, '').toLowerCase() == target.replace(/ /g, '').toLowerCase().split("").reverse().join("") ? true : false) 
}

podeComprarCerveja = (idade, dinheiro) => {
    return (idade > 17 && dinheiro >= 8 ? true : false)
}

function mostraNomeProduto(indice, pedido, mostrarTodos) {
    return [0, 1, 2].includes(indice) || mostrarTodos ? pedido.nomeProduto :""
}

function obtemArea(forma, largura, altura, raio) {
    switch (forma) {
        case 'circulo' : 
            return Math.PI * raio * raio;
        case 'quadrado' :
            return largura * largura;
        case 'retângulo' : 
            return largura * altura;
        case 'triangulo' :
            return (largura * altura) / 2;
        case 'hexágono' : 
            return ((3 * Math.pow(largura, 2) * Math.sqrt(3)) / 2);
    }
}