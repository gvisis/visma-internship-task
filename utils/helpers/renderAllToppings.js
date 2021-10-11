import { capitalizeFirstLetter } from './index.js';

export const renderAllToppings = (toppingsToRender) => {
	const checkBoxWrap = document.querySelector('.checkboxes-wrap');
	toppingsToRender.map(topping => checkBoxWrap.innerHTML += `
	<div class="form-checkbox">
		<input class='check_box' type="checkbox" id=${topping} name="toppings" value=${topping}>
		<label for=${topping}>${capitalizeFirstLetter(topping)}</label>
	</div>`
	);
}