export const isFormValid = (pizzaName, pizzaHeat, pizzaPrice) => {
	if (pizzaName === '') {
		throw new Error('Please enter correct pizza name');
	}
	if (!isNaN(pizzaName)) {
		throw new Error('Name cannot be only numbers');
	}
	if (pizzaName.length < 3 || pizzaName.length > 30) {
		throw new Error('Pizza name minimum 3 characters and max 30');
	}
	if (pizzaPrice === '' || isNaN(pizzaPrice)) {
		throw new Error('Please enter pizza price.');
	}
	if (pizzaPrice > 1000) {
		throw new Error('Pizza price cannot be more than 1000');
	}
	return true;
}