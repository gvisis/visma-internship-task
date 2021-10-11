export const isFormValid = (pizzaName, pizzaHeat, pizzaPrice) => {
	if (pizzaName === '') {
		throw new Error('Please enter correct pizza name');
	}
	if (!isNaN(pizzaName)) {
		throw new Error('Name cannot be only numbers');
	}
	if (pizzaName.length < 3) {
		throw new Error('Pizza name at least 3 characters');
	}
	if (pizzaHeat === 'null') {
		throw new Error('Please select the heat');
	}
	if (pizzaPrice === '' || isNaN(pizzaPrice)) {
		throw new Error('Please enter pizza price.');
	}
	return true;
}