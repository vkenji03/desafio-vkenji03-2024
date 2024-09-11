class Animal {
    constructor({ animal, tamanho, bioma, carnivoro }, quantidade = 1) {
        this.animal = animal;
        this.tamanho = tamanho;
        this.bioma = bioma;
        this.carnivoro = carnivoro;
        this.quantidade = quantidade;
    }

    espacoNecessario() {
        return this.tamanho * this.quantidade;
    }

    isCarnivoro() {
        return this.carnivoro;
    }
}

export { Animal };