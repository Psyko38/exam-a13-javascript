function dansPlage(nombre, min, max) {
	if (
		parseFloat(nombre) >= parseFloat(min) &&
		parseFloat(nombre) <= parseFloat(max)
	)
		return true;
	return false;
}

console.log(dansPlage(5, 1, 10)); // Résultat attendu : true
console.log(dansPlage(15, 1, 10)); // Résultat attendu : false
console.log(dansPlage(10, 1, 10)); // true
console.log(dansPlage(1, 1, 10)); // true
console.log(dansPlage(2, 1, 2.5)); // true
