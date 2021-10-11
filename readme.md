# Front-End Developer Task

Create an application to manage Pizzeria menu using HTML5, JavaScript and CSS without using any third party libraries or frameworks.

## Requirements:
- Form to add a new pizza to the menu.
	- Must have following properties:
		- **name** : string _// required, unique, max-length 30_
		- **price** : number _// required, positive, decimal points 2_
		-	**heat** : number _// optional, integer, range 1-3_
		- **toppings** : Array\&lt;string\&gt; _// required, min-length 2_
		- **photo** : string _// optional. Selection from 3-10 hard coded images_

	- Add pizza button
		- Adds pizza to the list
			- Use _sessionStorage_ to store data
		- Clears form
 - Pizza menu:
 	- Display all pizzas that are stored in _sessionStorage_
		- Show info about each pizza (name, price, heat, list of toppings, photo) 
		- Toppings should be displayed as comma separated text
		- Heat should be displayed as chilli peppers next to name
			- Use _svg_ or _png_ image
		- Delete button
			- Show confirmation popup before deleting
			- Removes pizza when confirmed
	- Possibility to sort by name (default option), price or heat
		- Keep original (oldest to latest) order in _sessionStorage_


## Contact 

[![LinkedIn][linkedin-shield]][linkedin-url]

[linkedin-shield]: https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=whit
[linkedin-url]: https://www.linkedin.com/in/gvidass/