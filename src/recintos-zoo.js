import { animaisInfo } from "./animaisInfo.js";
import { Animal } from "./Animal.js";
import { Recinto } from "./Recinto.js";

class RecintosZoo {
    constructor(animais = [], tamanhos = []) {
        this.recintos = this.criaRecintos(animais, tamanhos);
    }

    criaRecintos(animais, tamanhos) {
        /**
         * permite que sejam criados recintos com outros animais e tamanhos, porem nao checa se eles sao validos, portanto
         * quem cria precisa garantir que sejam
        */
        const animaisPadrao = [{ 'macaco': 3 }, {}, { 'gazela': 1 }, {}, { 'leao': 1 }];
        const tamanhosPadrao = [10, 5, 7, 8, 9];
        const biomas = ['savana', 'floresta', 'savana e rio', 'rio', 'savana'];

        const animais_existentes = animais.length > 0 ? animais : animaisPadrao;
        const tamanho_total = tamanhos.length > 0 ? tamanhos : tamanhosPadrao;

        return biomas.map((bioma, i) => new Recinto(i + 1, bioma, tamanho_total[i], animais_existentes[i]));
    }

    analisaRecintos(animal, quantidade) {
        const animalInfo = animaisInfo[animal.toLowerCase()];
        if (!animalInfo) return {'erro': 'Animal inválido'};
        if (quantidade <= 0 || isNaN(quantidade)) return {'erro': 'Quantidade inválida'};

        const animalObj = new Animal(animalInfo, quantidade);
        const recintosViaveis = this.recintos.filter(recinto => recinto.podeAcomodar(animalObj));

        if (recintosViaveis.length == 0) return { 'erro': 'Não há recinto viável' };

        return { 'recintosViaveis': recintosViaveis.map(recinto => {
            recinto.addAnimal(animalObj);
            return this.formataRecinto(recinto);
        }) }
    }

    formataRecinto(recinto) {
        return `Recinto ${recinto.numero} (espaço livre: ${recinto.espacoDisponivel()} total: ${recinto.tamanhoTotal})`;
    }
}

export { RecintosZoo as RecintosZoo };