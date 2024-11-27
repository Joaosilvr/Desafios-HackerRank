function plusMinus(arr) {
    let radiusCal = []
    let calc = 0
    for(let i = 0; i < arr.length;i++) {
        calc = arr[i]/ 6.2830
        radiusCal.push(calc)
    }

    for(let i = 0; i < radiusCal.length;i++) {
        console.log(radiusCal[i].toFixed(6));
    }
}

console.log(plusMinus([4,2,10]));

// Este código recebe um array, a função é retornar o raio desses numeros com 6 casas decimais