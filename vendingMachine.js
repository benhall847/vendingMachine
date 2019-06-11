
function ChangeMaker(price, payment) {
    if(typeof price === 'number'){
        let arrayIsNumbers = true

        payment.forEach(num =>{
            if (!(typeof num === 'number')){
                arrayIsNumbers = false
            }
        })

        if(arrayIsNumbers){
            let myPrice = price * 100
            let totalPaid = 0
            let penny = 0
            let nickle = 0
            let dime = 0
            let quater = 0
            let payable = true

            payment.forEach(eaPayment=>{
            totalPaid += eaPayment * 100
            })

            let amountOwed = totalPaid - myPrice
            if (amountOwed < 0){
            payable = false
            }

            if (payable){
                while (!(amountOwed === 0)){
                    if(amountOwed >= 25){
                    quater += 1
                    amountOwed -= 25
                    }else if (amountOwed >= 10){
                    dime += 1
                    amountOwed -= 10
                    }else if (amountOwed >= 5){
                    nickle += 1
                    amountOwed -= 5
                    }else if (amountOwed >= 1){
                    penny += 1
                    amountOwed -=1
                    }
                }
            }else{
                amountOwed = totalPaid
                while (!(amountOwed === 0)){
                    if(amountOwed >= 25){
                    quater += 1
                    amountOwed -= 25
                    }else if (amountOwed >= 10){
                    dime += 1
                    amountOwed -= 10
                    }else if (amountOwed >= 5){
                    nickle += 1
                    amountOwed -= 5
                    }else if (amountOwed >= 1){
                    penny += 1
                    amountOwed -=1
                    }
                }
            }
            return [penny,nickle,dime,quater]
        }else{
            return
        }
    }else{
        return
    }
}


ChangeMaker(1.87,[ 0.25, 0.25, 0.25, 0.25, 1 ])