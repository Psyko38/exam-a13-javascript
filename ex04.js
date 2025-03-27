function estNegatif(nombre) {
	if (parseFloat(nombre) < 0) return true;
	return false;
}

console.log(estNegatif(-3)); // Résultat attendu : true
console.log(estNegatif(5)); // Résultat attendu : false
