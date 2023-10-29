
let  name_user = sessionStorage.getItem('name_user')
let  amount = sessionStorage.getItem('amount')
let data = sessionStorage.getItem('msgVacancy')
let type_local = sessionStorage.getItem('type')
let msgV = []



// Parse
let amountParse = JSON.parse(amount)

if(data !== " " && data !== null){
    msgV = JSON.parse(data)
}

function createMsgPart(obj){

    const itemPart = document.createElement('li')
    itemPart.classList.add('list-group-item')

    const msg = document.createElement('span')
    msg.classList.add('name')
    msg.textContent = "Name: " + obj.name_user 

    const br = document.createElement('br')
    const br2 = document.createElement('br')

    const amount_money = document.createElement('span')
    amount_money.classList.add('name')
    amount_money.textContent = "Amount: $" + obj.amount 

    const type = document.createElement('span')
    type.textContent = "Type: " + obj.type_local 


    class Bank {

        create(){
        const list = []
            
        if (amountParse < 45){
            const standard = new StandardType()
            standard.newStandardUser()
            }
        if (amountParse >= 45 && amountParse < 60){
            const silver = new SilverType()
            silver.newSilverUser()
    
            }
        if (amountParse >= 60){
            const gold = new GoldType()
            gold.newGoldUser()
    
        }
        }
    }
    
    class StandardType extends Bank{
       newStandardUser(user_type){
        user_type = "Standard"
        // console.log(`User name: ${name_user}, Type: ${user_type} ,Money: $${amountParse}`);
        sessionStorage.setItem('type', user_type)
       }
    }
    
    class SilverType extends Bank{
        newSilverUser(user_type){
            user_type = "Silver"
            // console.log(`User name: ${name_user}, Type: ${user_type} ,Money: $${amountParse}`);
        sessionStorage.setItem('type', user_type)

        }
    }
    
    class GoldType extends Bank{
        newGoldUser(user_type){
            user_type = "Gold"
            // console.log(`User name: ${name_user}, Type: ${user_type} ,Money: $${amountParse}`);
        sessionStorage.setItem('type', user_type)

        }
    }
    
    try{
        const standard = new Bank()
    standard.create()
    }
    catch(e){
        if (e instanceof TypeError){
            console.log("TypeError");
        }else if (e instanceof EvalError){
            console.log("EvalError");
        }else if (e instanceof SyntaxError){
            console.log("SyntaxError");
        }else{
            console.log("Undefined Problem");
        }
    }
    
    itemPart.append(msg)
    itemPart.append(br)
    itemPart.append(amount_money)
    itemPart.append(br2)
    itemPart.append(type)

    document.getElementById('msgList').append(itemPart)
}

for (const msg_do of msgV) {
    createMsgPart(msg_do)
}


msgPartObj = {
    name_user:name_user,
    amount:amount,
    type_local: type_local
}

msgV.push(msgPartObj)
    createMsgPart(msgPartObj)

start.onclick = function (){
    sessionStorage.setItem('name_user', input_name.value)
    sessionStorage.setItem('amount', +input_cost.value)
    sessionStorage.setItem('msgVacancy', JSON.stringify(msgV))
    location.reload()

    change_parse = 0
    console.log(change_parse);

    setTimeout(() => {
        
    location.reload()
    }, 1000);
}


