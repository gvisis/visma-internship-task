import { toppingsData } from '../data/toppingsData.js';
import { addPizzaButton, pizzaName, pizzaHeat, pizzaPrice, pizzaPhotoSelect, pizzaSelect, sortBySelect } from '../../utils/helpers/domValues.js';
import { pizzaActions, renderPizzaList, renderAllToppings, capitalizeFirstLetter } from '../../utils/helpers/index.js';
import { isFormValid } from '../../utils/validators/isFormValid.js';


renderAllToppings(toppingsData);
renderPizzaList()

// Event Listeners
addPizzaButton.addEventListener('click', (e) => {
	e.preventDefault();
	try {
		const allCheckBoxes = document.querySelectorAll('.check_box');
		const getSelectedToppings = () => {
			const selectedToppings = allCheckBoxes && [...allCheckBoxes].filter(checkbox => checkbox.checked).map(checkbox => capitalizeFirstLetter(checkbox.value));
			const toppingsToSelect = 2;
			if (selectedToppings.length < toppingsToSelect) {
				throw new Error(`You must select at least ${toppingsToSelect} toppings`);
			} else {
				return selectedToppings;
			}
		}
		isFormValid(pizzaName.value, pizzaPrice.value);
		const selectedToppings = getSelectedToppings()
		const pizza = {
			id: '_' + Math.random().toString(36).substring(2, 9),
			name: pizzaName.value,
			price: pizzaPrice.value,
			heat: pizzaHeat.value,
			photo: pizzaPhotoSelect.value,
			toppings: selectedToppings
		};
		pizzaActions.add(pizza);
		renderPizzaList();
	} catch (error) {
		alert(error.message);
	}
});

pizzaSelect.addEventListener('change', (e) => {
	const pizzaSelectValue = e.target.value;
	const pizzaOptionName = document.querySelector(`option[value="${pizzaSelectValue}"]`).innerText;
	const pizzaPhotoPreview = document.getElementById('pizza-photo-preview');
	pizzaPhotoPreview.src = `./assets/images/${pizzaSelectValue}.png`
	pizzaPhotoPreview.alt = pizzaOptionName;
});

sortBySelect.addEventListener('change', (e) => {
	const sortByValue = e.target.value;
	const sortedList = pizzaActions.sort(sortByValue);
	renderPizzaList(sortedList);
});
