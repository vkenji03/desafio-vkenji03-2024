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
    constructor(numero, bioma, tamanho_total, animais_existentes, carnivoro) {
        this.numero = numero;
        this.bioma = bioma;
        this.tamanho_total = tamanho_total;
        this.animais_existentes = animais_existentes;
        this.carnivoro = carnivoro;
        this.espaco_ocupado = 0;

        if (!Number.isNaN(this.animais_existentes)) {
            for (let animal in this.animais_existentes) {
                this.espaco_ocupado += this.animais_existentes[animal] * animais_info[animal].tamanho;
            }
        }

    }
}

class RecintosZoo {
    constructor() {
        this.recintos = [];
        const numeros = [1, 2, 3, 4, 5];
        const biomas = ['savana', 'floresta', 'savana e rio', 'rio', 'savana'];
        const tamanho_total = [10, 5, 7, 8, 9];
        const animais_existentes = [
            {'macaco': 3},
            NaN,
            {'gazela': 1},
            NaN,
            {'leao': 1}
        ];
        const carnivoro = [false, NaN, false, NaN, true];

        for (let i = 0; i < 5; i++) {
            this.recintos.push(new Recintos(numeros[i], biomas[i], tamanho_total[i], animais_existentes[i], carnivoro[i]));
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
            if (animal_info.bioma.has(recinto.bioma)) {
                if (!animal_info.carnivoro && !recinto.carnivoro) {
                    if (animal != 'hipopotamo' && recinto.espaco_ocupado + animal_info.espaco_ocupado <= recinto.tamanho_total) {
                        if (Number.isNaN(recinto.animais_existentes)) {
                            if (animal == 'macaco' && quantidade == 1) {
                                continue;
                            }
                            recinto.espaco_ocupado += animal_info.espaco_ocupado;
                            biomas.push(recinto);
                        } else if (recinto.animais_existentes.hasOwnProperty(animal) && recinto.espaco_ocupado + animal_info.espaco_ocupado <= recinto.tamanho_total) {
                            recinto.espaco_ocupado += animal_info.espaco_ocupado;
                            biomas.push(recinto);
                        } else if (!recinto.animais_existentes.hasOwnProperty(animal) && recinto.espaco_ocupado + animal_info.espaco_ocupado < recinto.tamanho_total) {
                            recinto.espaco_ocupado += animal_info.espaco_ocupado + 1;
                            biomas.push(recinto);
                        }
                    } else if (animal == 'hipopotamo' && recinto.espaco_ocupado + animal_info.espaco_ocupado <= recinto.tamanho_total) {
                        if (Number.isNaN(recinto.animais_existentes)) {
                            console.log('hipo')
                            recinto.espaco_ocupado += animal_info.espaco_ocupado;
                            biomas.push(recinto);
                        } else if (!recinto.animais_existentes.hasOwnProperty(animal) && recinto.espaco_ocupado + animal_info.espaco_ocupado < recinto.tamanho_total && recinto.bioma == 'savana e rio') {
                            recinto.espaco_ocupado += animal_info.espaco_ocupado + 1;
                            biomas.push(recinto);
                        }
                    }
                } else if (animal_info.carnivoro && (recinto.carnivoro || Number.isNaN(recinto.carnivoro))) {
                    if ((recinto.animais_existentes.hasOwnProperty(animal) || Number.isNaN(recinto.animais_existentes)) && recinto.espaco_ocupado + animal_info.espaco_ocupado <= recinto.tamanho_total) {
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
            out.push(`Recinto ${bioma.numero} (espaço livre: ${bioma.tamanho_total - bioma.espaco_ocupado} total: ${bioma.tamanho_total})`)
        }
        return {recintosViaveis: out}
    }

}

export { RecintosZoo as RecintosZoo };

const x = new RecintosZoo();
console.log(x.analisaRecintos('MACACO', 5));