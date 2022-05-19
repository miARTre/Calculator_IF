function inflationCalculator() {
    
    let inflationRate = document.querySelector("#inflationRate");
    // console.log(inflationRate.value);

    // console.log(typeof(inflationRate.value));
    
    let money = document.querySelector("#money");
    // console.log(money.value);

    // console.log(typeof(money.value));

    // parse Float sluzi za pretavaranje stringa u broj s zarezom
    inflationRate = parseFloat(inflationRate.value);
    money = parseFloat(money.value);

    // console.log(typeof(inflationRate));
    // console.log(typeof(money));

    // // let sabiranje = inflationRate.value + money.value;

    // let sabiranje = inflationRate + money;
    // console.log(sabiranje);

    let years = document.querySelector("#years").value;
    // console.log(years);
    years = parseFloat(years);

    // Formula za izracunavanje inflacije.
    let worth = money + (money * (inflationRate / 100));

    // console.log(worth);

    // 2% 1000E i 10godina
    // 1000 + (1000 * (2% / 100)) = 
    // 1000 + (1000 * 0,02) = 1000 + 20 = 1020 ==> Za samo jednu godinu

    for (let i = 1; i < years; i++) {
        worth += worth * (inflationRate / 100);
    }

    // console.log(worth);

    worth = worth.toFixed(2);

    let newElement = document.createElement("div"); 
    newElement.className = "new-value"; 
    newElement.innerText = `Danasnjih ${money}€ vrijedi isto kao ${worth}€ za ${years}`;
    document.querySelector(".container").appendChild(newElement);

    
};