document.getElementById("donateNoakhali").addEventListener("click", function(){
    const myBlance = DonateText("myBlance");
    const noakhaliDonateBlance = DonateText("noakhaliDonateBlance");
    const donateInputMoney = DonateValue("donateInputMoney");

    const totalNoakhaliDonateBlance = myBlance - donateInputMoney;

    document.getElementById("noakhaliDonateBlance").innerText = noakhaliDonateBlance + donateInputMoney;
    document.getElementById("myBlance").innerText = totalNoakhaliDonateBlance;
    
    
    
})