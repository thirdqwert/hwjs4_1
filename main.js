var numbers = [1,2,3,4,5,6,7,8,9,10]
var evenList = []
var oddList = []
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
        evenList.push(numbers[i])
    }
    else if (numbers[i] % 2 != 0) {
        oddList.push(numbers[i])
    }
}
console.log(evenList);
console.log(oddList);
var results = []
for (let i = 0; i < Infinity; i++) {
    var inputWin = prompt('Введите что то').split(' ')

    if (inputWin[0] == 'add,') {
        for (let i = 0; i < inputWin.length; i++) {
            var contentt = inputWin[i]
            if (contentt != 'add,') {
                results.push(contentt)
            }
        }
    }
    else if (inputWin[0] == 'del,') {
        for (let i = 0; i < inputWin.length; i++) {
            for (let j = 0; j < results.length; j++) {
                if (inputWin[i] == results[j]) {
                    results.splice(j, 1)
                }
            }
        }
        // for (let i = 0; i < inputWin.length; i++) {
        //     if (inputWin[i] in results) {
        //         for (let j = 0; j < results.length; j++) {
        //             if (inputWin[i] == results[j]) {
        //                 results.splice(j, 1)
        //             }
        //         }
        //     }
        // }
    }
    else if (inputWin[0] == 'stop') {
        break
    }
    console.log(results);
}



