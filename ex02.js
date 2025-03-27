function carre(nombre) {
	return parseFloat(nombre) ** 2;
}

console.log(carre(4)); // Résultat attendu : 16
console.log(carre(2)); // Résultat attendu : 4
console.log(carre(6)); // Résultat attendu : 36
console.log(carre(6.8)); // Résultat attendu : 46,239999999999995
console.log(carre("4")); // Résultat attendu : 16
console.log(carre("a")); // Résultat attendu : NaN
