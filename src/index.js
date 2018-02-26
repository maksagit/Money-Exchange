// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    var coins = {}; 

	if (currency <= 0) { 
        return coins;}  // 0¢
    if (currency > 10000) { coins.error = "You are rich, my friend! We don't have so much coins for exchange"; 
        return coins;}  // >10000¢

    coins.H = 0;    // 50¢
    coins.Q = 0;    // 25¢
    coins.D = 0;    // 10¢
    coins.N = 0;    // 5¢
    coins.P = 0;    // 1¢

    function countMoney(nominalCoins, quantity) {
		quantity = currency/nominalCoins; 
		currency == nominalCoins ? currency = 0 : currency %= nominalCoins;
		return quantity = Math.floor(quantity); //	Rounding down, example: Math.floor(59, 1); ==> 50
    }
    
    if (currency >= 50) coins.H = countMoney(50,coins.H);
    if (currency >= 25) coins.Q = countMoney(25,coins.Q); 
	if (currency >= 10) coins.D = countMoney(10,coins.D);  
	if (currency >= 5)  coins.N = countMoney(5,coins.N); 
	if (currency >= 1)  coins.P = countMoney(1,coins.P);

	for (key in coins) { 
        coins[key] == 0 ? delete coins[key] : Math.round(coins[key])
    }
	return coins;
}
