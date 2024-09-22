function DonateText(id){
    const donateMoney = parseFloat(document.getElementById(id).innerHTML);
    return donateMoney;
}
function DonateValue(id){
    const inputDonate = parseFloat(document.getElementById(id).value);
    return inputDonate;
}