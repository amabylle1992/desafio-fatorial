function filtroPetFriendly(nome, idade, animal, vip) {

    if (nome === "") {
        return "Erro 400";
    }

    if (idade > 20 || idade < 0) {
        return "Erro 400";
    }

    if (animal === "gato" && vip === false) {
        return "Erro 400";
    }

    return "Sucesso 201";
}

console.log(filtroPetFriendly("Rex", 5, "cachorro", false)); // Sucesso 201
console.log(filtroPetFriendly("", 5, "cachorro", false)); // Erro 400
console.log(filtroPetFriendly("Mimi", 3, "gato", false)); // Erro 400
console.log(filtroPetFriendly("Mimi", 3, "gato", true)); // Sucesso 201
