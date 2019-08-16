const consts = {
	TAX_RATE: 0.08,
	PHONE_PRICE: 99,
	ACCESSORY_PRICE: 9.9,
	SPENDING_THRESHOLD: 250,
	BANK_ACCOUNT_BALANCE: 700,
}



function calculateFinalPurchaseAmount(cts) {
	let sum = 0;
	while ( sum < cts.BANK_ACCOUNT_BALANCE && sum < cts.SPENDING_THRESHOLD) {
		if (sum + cts.PHONE_PRICE < cts.BANK_ACCOUNT_BALANCE) {
			sum += cts.PHONE_PRICE;
		}
		if (sum + cts.ACCESSORY_PRICE < cts.SPENDING_THRESHOLD) {
			sum += cts.ACCESSORY_PRICE;
		}
	}
	return sum;
}

function addTaxToPurchaseAmount(cts, sum) {
	return sum += sum * cts.TAX_RATE;
}

function checkIfYouCanAffordPurchase(cts, sum) {
	if (sum < cts.BANK_ACCOUNT_BALANCE) {
		return true;
	} else {
		return false;
	}
}

function logPurchaseInfo(cts) {
	const sumWithoutTax = calculateFinalPurchaseAmount(cts);
	const sumWithTax = addTaxToPurchaseAmount(cts, sumWithoutTax);
	const canAffordPurchase = checkIfYouCanAffordPurchase(cts, sumWithTax);
	
	console.log(`Sum with tax will be $${sumWithTax.toFixed(2)}`);
	console.log(`You can afford it - ${canAffordPurchase}`);
}

logPurchaseInfo(consts);