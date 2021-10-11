import { constants } from "../constants.js";
import { resetForm } from "./index.js";

function setNewPizzas(newPizzas) {
	sessionStorage.setItem('allPizzas', JSON.stringify(newPizzas));
}

function getAllPizzas() {
	return sessionStorage.getItem('allPizzas') ? JSON.parse(sessionStorage.getItem('allPizzas')) : []
};

function addNewPizza(newPizza) {
	const allPizzas = getAllPizzas() ?? getAllPizzas();

	let newPizzas = [];
	if (allPizzas) {
		newPizzas = [newPizza, ...allPizzas];
	} else {
		newPizzas = [newPizza];
	}
	setNewPizzas(newPizzas);
	resetForm();
}

function deletePizza(id) {
	if (confirm('Are you sure you want to delete this pizza?')) {
		const allPizzas = getAllPizzas();
		if (allPizzas) {
			const newPizzas = allPizzas.filter(pizza => pizza.id !== id);
			setNewPizzas(newPizzas);
		}
	}
}

function sortBy(field) {
	const allPizzas = getAllPizzas();
	if (allPizzas && field === constants.sort.name) {
		return getAllPizzas().sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1);
	} else {
		return allPizzas.sort((a, b) => a[field] - b[field]);
	}
}

export const pizzaActions = {
	add: addNewPizza,
	getAll: function () {
		getAllPizzas();
		return this;
	},
	sort: sortBy,
	delete: deletePizza,
}

