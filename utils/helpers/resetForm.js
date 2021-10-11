export const resetForm = () => {
	document.querySelector(".form_container").reset();
	const pizzaImage = document.getElementById('pizza-photo-preview');
	pizzaImage.src = "./assets/images/defaultPizza.png"
	pizzaImage.alt = "No picture selected"
}