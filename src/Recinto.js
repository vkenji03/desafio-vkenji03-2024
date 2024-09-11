import { animaisInfo } from "./animaisInfo.js";

class Recinto {
    constructor(numero, bioma, tamanhoTotal, animaisExistentes) {
        this.numero = numero;
        this.bioma = bioma;
        this.tamanhoTotal = tamanhoTotal;
        this.animaisExistentes = new Map(Object.entries(animaisExistentes));
        this.carnivoro = this.inicializaCarnivoro();
        this.espacoOcupado = this.calculaEspacoOcupado();
    }

    temEspeciesDiferentes() {
        return this.numAnimals() > 1;
    }

    calculaEspacoOcupado() {
        return [...this.animaisExistentes.entries()].reduce(
            (espaco, [animal, quantidade]) => espaco + quantidade * animaisInfo[animal].tamanho,
            this.temEspeciesDiferentes() ? 1 : 0 // caso existam dois ou mais animais diferentes no recinto, por exemplo macacos e gazelas, precisa adicionar um no valor do espaco ocupado
        );
    }

    inicializaCarnivoro() {
        return [...this.animaisExistentes.keys()].some(animal => animaisInfo[animal].carnivoro);
    }

    numAnimals() {
        return this.animaisExistentes.size;
    }

    temAnimal(animal) {
        return this.animaisExistentes.has(animal);
    }

    espacoDisponivel() {
        return this.tamanhoTotal - this.espacoOcupado
    }

    podeAcomodar(animalObj) {
        const espacoNecessario = animalObj.espacoNecessario();
        return (
            this.temEspaco(espacoNecessario) &&
            this.biomaValido(animalObj) &&
            !this.temRestricaoEspecial(animalObj)
        );
    }

    temEspaco(espaco) {
        return espaco <= this.espacoDisponivel();
    }

    biomaValido({ bioma }) {
        return bioma.has(this.bioma);
    }

    temRestricaoEspecial(animalObj) {
        return (
            this.temRestricaoMacaco(animalObj) ||
            this.temRestricaoHipopotamo(animalObj) ||
            this.temRestricaoCarnivoro(animalObj) ||
            this.temRestricaoHerbivoro(animalObj) ||
            !this.temAnimal(animalObj.animal) && this.numAnimals() === 1 && animalObj.espacoNecessario() === this.espacoDisponivel()
        );
    }

    temRestricaoMacaco({ animal, quantidade }) {
        return (
            animal === 'macaco' &&
            quantidade === 1 &&
            this.numAnimals() === 0
        ) ;
    }

    temRestricaoHipopotamo({ animal }) {
        return (
            animal === 'hipopotamo' &&
            !this.temAnimal(animal) &&
            this.numAnimals() > 0 &&
            this.bioma !== 'savana e rio'
        );
    }

    temRestricaoCarnivoro(animalObj) {
        return (
            animalObj.isCarnivoro() &&
            ((!this.carnivoro && this.numAnimals() > 0) || (this.carnivoro && !this.temAnimal(animalObj.animal)))
        );
    }

    temRestricaoHerbivoro(animalObj) {
        return !animalObj.isCarnivoro() && this.carnivoro;
    }

    setEspacoOcupado(animalObj) {
        this.espacoOcupado += animalObj.espacoNecessario();
        if (this.numAnimals() == 1 && !this.temAnimal(animalObj.animal)) this.espacoOcupado++;
    }

    setCarnivoro({ carnivoro }) {
        this.carnivoro = carnivoro;
    }

    addAnimal(animalObj) {
        this.setEspacoOcupado(animalObj);

        if (this.temAnimal(animalObj.animal)) {
            this.animaisExistentes.set(animalObj.animal, this.animaisExistentes.get(animalObj.animal) + animalObj.quantidade);
        } else {
            this.animaisExistentes.set(animalObj.animal, animalObj.quantidade);
        }
        
        if (!this.carnivoro) this.setCarnivoro(animalObj)
    }
}

export { Recinto };