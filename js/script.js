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
   

    const totalNoakhaliDonateBlance = myBlance - donateInputMoney;

    document.getElementById("noakhaliDonateBlance").innerText = noakhaliDonateBlance + donateInputMoney;
    document.getElementById("myBlance").innerText = totalNoakhaliDonateBlance;

    document.getElementById("my_modal_5").showModal();
            
})

//Feni validation start here now
//Feni validation start here now

document.getElementById("feniDonate").addEventListener("click", function(){
    const myBlance = DonateText("myBlance");
    const feniMoney = DonateText("feniMoney");
    const feniDonateMoney = DonateValue("feniDonateMoney");
    
      
    
    if(isNaN(feniDonateMoney) || feniDonateMoney <=0 || feniDonateMoney > myBlance){
        alert("Please enter a valid number");
        return;
    }

    const p = document.createElement("div");
    p.innerHTML = `
      <div class = "border-2 border-gray-200 p-5 rounded-lg my-3 container mx-auto bg-white">
        <h3 class = "text-xl font-bold">${feniDonateMoney} Taka is Donate for Flood Relief in Feni,Bangladesh</h3>
        <p class = "font-bold">Date: ${new Date()}</p>
      </div>
    `;
   const donateHistory = document.getElementById("donateHistory").appendChild(p);
   

    const totalfeniDonateBlance = myBlance - feniDonateMoney;

    document.getElementById("feniMoney").innerText = feniMoney + feniDonateMoney;
    document.getElementById("myBlance").innerText = totalfeniDonateBlance;

    document.getElementById("my_modal_4").showModal();
        
})

//Quota validation start here now
//Quota validation start here now

document.getElementById("quotaDonate").addEventListener("click", function(){
    const myBlance = DonateText("myBlance");
    const quotaBlance = DonateText("quotaBlance");
    const quotaDonateMoney = DonateValue("quotaDonateMoney");
      

    if(isNaN(quotaDonateMoney) || quotaDonateMoney <=0 || quotaDonateMoney > myBlance){
        alert("Please enter a valid number");
        return;
    }

    const p = document.createElement("div");
    p.innerHTML = `
      <div class = "border-2 border-gray-200 p-5 rounded-lg my-3 container mx-auto bg-white">
        <h3 class = "text-xl font-bold">${quotaDonateMoney} Taka is Donate for Aid for Injured in the Quota Movement</h3>
        <p class = "font-bold">Date: ${new Date()}</p>
      </div>
    `;
   const donateHistory = document.getElementById("donateHistory").appendChild(p);
   
    const totalQuotaDonateBlance = myBlance - quotaDonateMoney;

    document.getElementById("quotaBlance").innerText = quotaBlance + quotaDonateMoney;
    document.getElementById("myBlance").innerText = totalQuotaDonateBlance;

    document.getElementById("my_modal_3").showModal();
        
})

//History validation start here now
//History validation start here now

document.getElementById("history").addEventListener("click", function(){
    
    const main = document.getElementById("main");
    main.classList.add("hidden");

    const donateHistory = document.getElementById("donateHistory");
    donateHistory.classList.remove("hidden");

    const history = document.getElementById("history");
    history.classList.add(
        "hover:bg-lime-500",
        "font-bold",
        "text-black",
        "px-8",
        "py-3",
        "text-xl",
        "rounded-md",
        "border-2",
        "bg-lime-400",
    );

    const donations = document.getElementById("donations");
    donations.classList.remove(
        "hover:bg-lime-500",
        "font-bold",
        "text-black",
        "px-8",
        "py-3",
        "text-xl",
        "rounded-md",
        "border-2",
        "bg-lime-400",
    );
  
    const donationss = document.getElementById("donations");
    donationss.classList.add(
        "rounded-md",
        "text-xl",
        "py-3",
        "px-8",
        "text-black",
        "border-2",
        "border-gray-300",
        "font-bold"
    );
        
})
document.getElementById("donations").addEventListener("click", function(){
    
    const main = document.getElementById("main");
    main.classList.remove("hidden");

    const donateHistory = document.getElementById("donateHistory");
    donateHistory.classList.add("hidden");
    const history = document.getElementById("history");
    history.classList.remove(
        "hover:bg-lime-500",
        "font-bold",
        "text-black",
        "px-8",
        "py-3",
        "border-2",
        "text-xl",
        "rounded-md",
        "bg-lime-400",
    );

    const donations = document.getElementById("donations");
    donations.classList.add(
        "hover:bg-lime-500",
        "font-bold",
        "text-black",
        "px-8",
        "py-3",
        "text-xl",
        "border-2",
        "rounded-md",
        "bg-lime-400",
    );
  
    const historys = document.getElementById("history");
    historys.classList.add(
        "rounded-md",
        "text-xl",
        "py-3",
        "px-8",
        "text-black",
        "border-2",
        "border-gray-300",
        "font-bold"
    );
    
    
})
// document.getElementById("blog").addEventListener("click", function(){
//     window.location="blog.html";    
// })
// document.getElementById("home").addEventListener("click", function(){
    
//     window.location="index.html";
    
// })