function longueursMots(mots) {
	let NewMots = [];
	for (let i of mots) {
		NewMots.push(i.length);
	}
	return NewMots;
}
console.log(longueursMots(["chat", "éléphant", "lion"])); // Résultat attendu : [4, 8, 4]
