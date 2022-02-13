function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputValue = parseFloat(inputField.value);
    inputField.value = '';
    return inputValue;
}
function getSaveValue(saveFieldId, newAmount){
    const saveField = document.getElementById(saveFieldId);
    const prevValue = parseFloat(saveField.innerText);
    saveField.innerText = prevValue+newAmount;
}

function updateBalance(amount, isTrue){
    const prevBalance = parseFloat(document.getElementById('total-balance').innerText);
    if(isTrue == true){
        const newBalance = prevBalance+amount;
        document.getElementById('total-balance').innerText = newBalance;
    }
    else{
        const newBalance = prevBalance-amount;
        document.getElementById('total-balance').innerText = newBalance;
    }
}
document.getElementById('deposit-button').addEventListener('click', function(){
    //save deposite
    const depositAmount = getInputValue('deposit-input');
    if(depositAmount>0){
        getSaveValue('deposit-save',depositAmount);
        updateBalance(depositAmount , true);
    }
})

document.getElementById('withdraw-button').addEventListener('click', function(){   
    //save-withdraw
    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance = parseFloat(document.getElementById('total-balance').innerText);
    if (withdrawAmount > 0 && withdrawAmount <= currentBalance) {
        getSaveValue('withdraw-save', withdrawAmount);
        updateBalance(withdrawAmount , false);
    }
})