// arquivo que possui as informacoes dos animais que sao validos

const animaisInfo = {
    'leao': {
        'animal': 'leao',
        'tamanho': 3,
        'bioma': new Set(['savana', 'savana e rio']),
        'carnivoro': true
    },
    'leopardo': {
        'animal': 'leopardo',
        'tamanho': 2,
        'bioma': new Set(['savana', 'savana e rio']),
        'carnivoro': true
    },
    'crocodilo': {
        'animal': 'crocodilo',
        'tamanho': 3,
        'bioma': new Set(['rio', 'savana e rio']),
        'carnivoro': true
    },
    'macaco': {
        'animal': 'macaco',
        'tamanho': 1,
        'bioma': new Set(['savana', 'floresta', 'savana e rio']),
        'carnivoro': false
    },
    'gazela': {
        'animal': 'gazela',
        'tamanho': 2,
        'bioma': new Set(['savana', 'savana e rio']),
        'carnivoro': false
    },
    'hipopotamo': {
        'animal': 'hipopotamo',
        'tamanho': 4,
        'bioma': new Set(['savana', 'rio', 'savana e rio']),
        'carnivoro': false
    }
}

export { animaisInfo };