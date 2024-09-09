const animais_info = {
    'leao': {
        'tamanho': 3,
        'bioma': new Set(['savana', 'savana e rio']),
        'carnivoro': true
    },
    'leopardo': {
        'tamanho': 2,
        'bioma': new Set(['savana', 'savana e rio']),
        'carnivoro': true
    },
    'crocodilo': {
        'tamanho': 3,
        'bioma': new Set(['rio', 'savana e rio']),
        'carnivoro': true
    },
    'macaco': {
        'tamanho': 1,
        'bioma': new Set(['savana', 'floresta', 'savana e rio']),
        'carnivoro': false
    },
    'gazela': {
        'tamanho': 2,
        'bioma': new Set(['savana', 'savana e rio']),
        'carnivoro': false
    },
    'hipopotamo': {
        'tamanho': 4,
        'bioma': new Set(['savana', 'rio', 'savana e rio']),
        'carnivoro': false
    }
}

class Recintos {
    constructor(numero, bioma, tamanho_total, animais_existentes) {
        this.numero = numero;
        this.bioma = bioma;
        this.tamanho_total = tamanho_total;
        this.animais_existentes = animais_existentes;
        this.carnivoro = false;
        this.espaco_ocupado = 0;

        if (this.num_animals() > 0) {
            for (let animal in this.animais_existentes) {
                this.espaco_ocupado += this.animais_existentes[animal] * animais_info[animal].tamanho;
                if (!this.carnivoro && animais_info[animal].carnivoro) {
                    this.carnivoro = true;
                }
            }
        }

        if (this.num_animals() > 1) {
            this.espaco_ocupado++
        }

    }

    num_animals() {
        return Object.keys(this.animais_existentes).length
    }

    tem_animal(animal) {
        return this.animais_existentes.hasOwnProperty(animal);
    }

    espaco_disponivel() {
        return this.tamanho_total - this.espaco_ocupado
    }
}

class RecintosZoo {
    constructor(animais=[], tamanhos=[]) {
        this.recintos = [];
        const biomas = ['savana', 'floresta', 'savana e rio', 'rio', 'savana'];

        let animais_existentes;
        if (animais.length == 0) {
            animais_existentes = [
                {'macaco': 3},
                {},
                {'gazela': 1},
                {},
                {'leao': 1}
            ];
        } else {
            animais_existentes = animais;
        }

        let tamanho_total;
        if (tamanhos.length == 0) {
            tamanho_total = [10, 5, 7, 8, 9];
        } else {
            tamanho_total = tamanhos;
        }

        for (let i = 0; i < 5; i++) {
            this.recintos.push(new Recintos(i + 1, biomas[i], tamanho_total[i], animais_existentes[i]));
        }
    }

    analisaRecintos(animal, quantidade) {
        animal = animal.toLowerCase();

        if (animais_info[animal] == undefined) {
            return {'erro': 'Animal inválido'};
        }

        if (quantidade <= 0 || isNaN(quantidade)) {
            return {'erro': 'Quantidade inválida'};
        }

        const animal_info = animais_info[animal];
        animal_info.espaco_ocupado = animal_info.tamanho * quantidade
        const biomas = [];
        for (const recinto of this.recintos) {
            if (animal_info.bioma.has(recinto.bioma) && animal_info.espaco_ocupado <= recinto.espaco_disponivel()) {
                if (!animal_info.carnivoro && !recinto.carnivoro) {
                    if (recinto.num_animals() == 0) { // nao existe nenhum animal no recinto
                        if (animal == 'macaco' && quantidade == 1) {
                            continue;
                        }
                        recinto.espaco_ocupado += animal_info.espaco_ocupado;
                        biomas.push(recinto);
                    } else if (recinto.tem_animal(animal)) { // existe pelo menos um animal igual no recinto
                        recinto.espaco_ocupado += animal_info.espaco_ocupado;
                        biomas.push(recinto)
                    } else if (!recinto.tem_animal(animal)) { // existe pelo menos um animal no recinto e e diferente do animal que queremos adicionar
                        if (animal == 'hipopotamo' && recinto.bioma != 'savana e rio') {
                            continue;
                        } else if (recinto.num_animals() == 1 && animal_info.espaco_ocupado < recinto.espaco_disponivel()) {
                            recinto.espaco_ocupado += animal_info.espaco_ocupado + 1;
                            biomas.push(recinto);
                        } else if (recinto.num_animals() > 1) {
                            recinto.espaco_ocupado += animal_info.espaco_ocupado;
                            biomas.push(recinto);
                        }
                    }
                } else if (animal_info.carnivoro && (recinto.carnivoro || recinto.num_animals() == 0)) {
                    if ((recinto.tem_animal(animal) || recinto.num_animals() == 0) && animal_info.espaco_ocupado <= recinto.espaco_disponivel()) {
                        recinto.espaco_ocupado += animal_info.espaco_ocupado;
                        biomas.push(recinto);
                    }
                }
            }
        }

        if (biomas.length == 0) {
            return {'erro': 'Não há recinto viável'};
        }

        const out = []
        for (const bioma of biomas) {
            out.push(`Recinto ${bioma.numero} (espaço livre: ${bioma.espaco_disponivel()} total: ${bioma.tamanho_total})`)
        }
        return {recintosViaveis: out}
    }

}

export { RecintosZoo as RecintosZoo };

const x = new RecintosZoo();
console.log(x.analisaRecintos('MACACO', 1));