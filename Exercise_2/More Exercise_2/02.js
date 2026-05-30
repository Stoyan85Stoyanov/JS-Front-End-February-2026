function bitcoinMining(shift) {

    const bitcoinPrice = 11949.16;
    const goldPricePerGram = 67.51;

    let totalMoney = 0;
    let bitcoinsBought = 0;
    let firstBitcoinDay = 0;

    for (let i = 0; i < shift.length; i++) {
        let goldMined = shift[i];

        
        if ((i + 1) % 3 === 0) {
            goldMined *= 0.70;
        }

        totalMoney += goldMined * goldPricePerGram;

        while (totalMoney >= bitcoinPrice) {
            bitcoinsBought++;
            totalMoney -= bitcoinPrice;

            if (firstBitcoinDay === 0) {
                firstBitcoinDay = i + 1;
            }
        }
    }

    console.log(`Bought bitcoins: ${bitcoinsBought}`);

    if (bitcoinsBought > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstBitcoinDay}`);
    }

    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
}


bitcoinMining([100, 200, 300]);
bitcoinMining([50, 100]);
bitcoinMining([3124.15, 504.212, 2511.124]);