import { pizzaActions, pizzaList, capitalizeFirstLetter } from './index.js';
import { constants } from '../constants.js';

export const deletePizzaButton = document.querySelectorAll('.delete-pizza');

export const renderPizzaList = (sortedList) => {
	const allPizzas = sortedList ? sortedList : pizzaActions.getAll().sort(constants.sort.name);

	const pizzaHeatRating = (pizzaHeatValue) => {
		let allPizzaHeatRatings = '';
		for (let i = 0; i < pizzaHeatValue; i++) {
			allPizzaHeatRatings += `<img class='pizza_item-heat-image' src="./assets/images/chilli.png" alt="" />`;
		}
		return allPizzaHeatRatings;
	}

	const allPizzaToppings = (pizzaToppings) => pizzaToppings && pizzaToppings.map((topping) => topping).join(', ')

	if (allPizzas !== undefined && allPizzas.length > 0) {
		const allPizzasToDom = allPizzas.map(pizza => {
			const { id, name, photo, heat, price, toppings } = pizza;

			return `<div class='pizza_item' data-id="${id}">
				<div class="delete-pizza">Delete</div>
				<div class='pizza_item-photo-wrap'>
					<img class="pizza-image" src="./assets/images/${photo}.png" alt="${name}">
				</div>
				<div class='pizza_item-info'>
					<div class='pizza_item-title-wrap mb-5'>
						<h3 class='pizza_item-title'>${capitalizeFirstLetter(name)}</h3>
						<div class='pizza_item-heat-wrap'>
						
						${pizzaHeatRating(heat)}

					</div>
					</div>
					<div class='pizza_item-price-wrap'>
						<span class='pizza_item-price'>€ ${price}</span>
					</div>
					<div class='pizza_item-toppings mb-5'>
						<span class='pizza_item-toppings-title'>${allPizzaToppings(toppings)}</span>
					</div>
				</div>
			</div>`
		})
		pizzaList.innerHTML = allPizzasToDom.join('');
	} else {
		pizzaList.innerHTML = '<h2>No pizzas in the list</h2>';
	}


	const deletePizzaButton = document.querySelectorAll('.delete-pizza');
	deletePizzaButton.forEach(button => {
		button.addEventListener('click', (e) => {
			e.preventDefault();
			const pizzaId = e.target.parentElement.dataset.id;
			pizzaActions.delete(pizzaId);
			renderPizzaList();
		});
	});
}