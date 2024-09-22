document.getElementById("donateNoakhali").addEventListener("click", function(){
    const myBlance = DonateText("myBlance");
    const noakhaliDonateBlance = DonateText("noakhaliDonateBlance");
    const donateInputMoney = DonateValue("donateInputMoney");
      

    if(isNaN(donateInputMoney) || donateInputMoney <=0 || donateInputMoney > myBlance){
        alert("Please enter a valid number");
        return;
    }

    const p = document.createElement("div");
    p.innerHTML = `
      <div class = "border-2 border-gray-200 p-5 rounded-lg my-3 container mx-auto bg-white">
        <h3 class = "text-xl font-bold">${donateInputMoney} Taka is Donate for Flood at Noakhali, Bangladesh</h3>
        <p class = "font-bold">Date: ${new Date()}</p>
      </div>
    `;
   const donateHistory = document.getElementById("donateHistory").appendChild(p);
   console.log(donateHistory);
   

    const totalNoakhaliDonateBlance = myBlance - donateInputMoney;

    document.getElementById("noakhaliDonateBlance").innerText = noakhaliDonateBlance + donateInputMoney;
    document.getElementById("myBlance").innerText = totalNoakhaliDonateBlance;
        
})