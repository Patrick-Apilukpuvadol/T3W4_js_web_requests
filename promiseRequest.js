
const AIP_BASE_URL = "https://pokeapi.co/api/v2/pokemon/"; 

function getRandomPokemon(){
    // example variations of the same get request of the API
    //let result = fetch("https://pokeapi.co/api/v2/pokemon/" + 25).then()
	//let result = fetch("https://pokeapi.co/api/v2/pokemon/25").then()
	// let ID = 25;
	// let result = fetch("https://pokeapi.co/api/v2/pokemon/" + ID).then()

	let ID = 25;
	let result = fetch(API_BASE_URL + ID).then((response) => {
		console.log("Response is: " + JSON.stringify(response, null, 4));

		return response.json();
	})
	.then(data => {
		console.log("Data is: " + JSON.stringify(data, null, 4));

		console.log("Data retrieved for: " + data.name);
		console.log("Image is: " + data.sprites.other["official-artwork"].front_default);

		let pkmImage = document.getElementById("pokemonImage");
		pkmImage.src = data.sprites.other["official-artwork"].front_default;

		return data;
	}).catch(error => {
		console.log(error);
	});

	// console.log("Result of API request is:" + result);

	// let somePromise = new Promise(resolve, reject => {

	// });
	// somePromise().then().catch();


}