import { RecintosZoo } from "./recintos-zoo.js";

describe('Recintos do Zoologico', () => {

    // rejeitar animais
    test('Deve rejeitar animal inválido', () => {
            const resultado = new RecintosZoo().analisaRecintos('UNICORNIO', 1);
            expect(resultado.erro).toBe("Animal inválido");
            expect(resultado.recintosViaveis).toBeFalsy();
    });

    // rejeitar quantidade invalida
    test('Deve rejeitar quantidade inválida', () => {
            const resultado = new RecintosZoo().analisaRecintos('MACACO', 0);
            expect(resultado.erro).toBe("Quantidade inválida");
            expect(resultado.recintosViaveis).toBeFalsy();
    });

    test('Deve rejeitar quantidade inválida', () => {
        const resultado = new RecintosZoo().analisaRecintos('MACACO', -10);
        expect(resultado.erro).toBe("Quantidade inválida");
        expect(resultado.recintosViaveis).toBeFalsy();
    });

    test('Deve rejeitar quantidade inválida', () => {
        const resultado = new RecintosZoo().analisaRecintos('MACACO', 'um');
        expect(resultado.erro).toBe("Quantidade inválida");
        expect(resultado.recintosViaveis).toBeFalsy();
    });

    // nao deve encontrar recintos
    test('Não deve encontrar recintos para 10 macacos', () => {
            const resultado = new RecintosZoo().analisaRecintos('MACACO', 10);
            expect(resultado.erro).toBe("Não há recinto viável");
            expect(resultado.recintosViaveis).toBeFalsy();
    });

    test('Não deve encontrar recintos para 4 leoes', () => {
        const resultado = new RecintosZoo().analisaRecintos('LEAO', 4);
        expect(resultado.erro).toBe("Não há recinto viável");
        expect(resultado.recintosViaveis).toBeFalsy();
    });

    // 1 unidade do animal
    test('Deve encontrar recinto para 1 leao', () => {
        const resultado = new RecintosZoo().analisaRecintos('LEAO', 1);
        expect(resultado.erro).toBeFalsy();
        expect(resultado.recintosViaveis[0]).toBe('Recinto 5 (espaço livre: 3 total: 9)');
        expect(resultado.recintosViaveis.length).toBe(1);
    });

    test('Não deve encontrar recintos para 1 leopardo', () => {
        const resultado = new RecintosZoo().analisaRecintos('LEOPARDO', 1);
        expect(resultado.erro).toBe('Não há recinto viável');
        expect(resultado.recintosViaveis).toBeFalsy();
        
    });

    test('Deve encontrar recinto para 1 crocodilo', () => {
        const resultado = new RecintosZoo().analisaRecintos('CROCODILO', 1);
        expect(resultado.erro).toBeFalsy();
        expect(resultado.recintosViaveis[0]).toBe('Recinto 4 (espaço livre: 5 total: 8)');
        expect(resultado.recintosViaveis.length).toBe(1);
    });

    test('Deve encontrar recinto para 1 macaco', () => {
        const resultado = new RecintosZoo().analisaRecintos('MACACO', 1);
        expect(resultado.erro).toBeFalsy();
        expect(resultado.recintosViaveis[0]).toBe('Recinto 1 (espaço livre: 6 total: 10)');
        expect(resultado.recintosViaveis[1]).toBe('Recinto 3 (espaço livre: 3 total: 7)');
        expect(resultado.recintosViaveis.length).toBe(2);
    });

    test('Deve encontrar recinto para 1 gazela', () => {
        const resultado = new RecintosZoo().analisaRecintos('GAZELA', 1);
        expect(resultado.erro).toBeFalsy();
        expect(resultado.recintosViaveis[0]).toBe('Recinto 1 (espaço livre: 4 total: 10)');
        expect(resultado.recintosViaveis[1]).toBe('Recinto 3 (espaço livre: 3 total: 7)');
        expect(resultado.recintosViaveis.length).toBe(2);
    });

    test('Deve encontrar recinto para 1 hipopotamo', () => {
        const resultado = new RecintosZoo().analisaRecintos('HIPOPOTAMO', 1);
        expect(resultado.erro).toBeFalsy();
        expect(resultado.recintosViaveis[0]).toBe('Recinto 3 (espaço livre: 0 total: 7)');
        expect(resultado.recintosViaveis[1]).toBe('Recinto 4 (espaço livre: 4 total: 8)');
        expect(resultado.recintosViaveis.length).toBe(2);
    });

    // 2 unidades do animal
    test('Deve encontrar recintos para 2 leoes', () => {
        const resultado = new RecintosZoo().analisaRecintos('LEAO', 2);
        expect(resultado.erro).toBeFalsy();
        expect(resultado.recintosViaveis[0]).toBe('Recinto 5 (espaço livre: 0 total: 9)');
        expect(resultado.recintosViaveis.length).toBe(1);
    });

    test('Deve encontrar recinto para 2 crocodilos', () => {
        const resultado = new RecintosZoo().analisaRecintos('CROCODILO', 2);
        expect(resultado.erro).toBeFalsy();
        expect(resultado.recintosViaveis[0]).toBe('Recinto 4 (espaço livre: 2 total: 8)');
        expect(resultado.recintosViaveis.length).toBe(1);
    });

    test('Deve encontrar recintos para 2 macacos', () => {
        const resultado = new RecintosZoo().analisaRecintos('MACACO', 2);
        expect(resultado.erro).toBeFalsy();
        expect(resultado.recintosViaveis[0]).toBe('Recinto 1 (espaço livre: 5 total: 10)');
        expect(resultado.recintosViaveis[1]).toBe('Recinto 2 (espaço livre: 3 total: 5)');
        expect(resultado.recintosViaveis[2]).toBe('Recinto 3 (espaço livre: 2 total: 7)');
        expect(resultado.recintosViaveis.length).toBe(3);
    });

    test('Deve encontrar recinto para 2 gazelas', () => {
        const resultado = new RecintosZoo().analisaRecintos('GAZELA', 2);
        expect(resultado.erro).toBeFalsy();
        expect(resultado.recintosViaveis[0]).toBe('Recinto 1 (espaço livre: 2 total: 10)');
        expect(resultado.recintosViaveis[1]).toBe('Recinto 3 (espaço livre: 1 total: 7)');
        expect(resultado.recintosViaveis.length).toBe(2);
    });

    test('Deve encontrar recinto para 2 hipopotamos', () => {
        const resultado = new RecintosZoo().analisaRecintos('HIPOPOTAMO', 2);
        expect(resultado.erro).toBeFalsy();
        expect(resultado.recintosViaveis[0]).toBe('Recinto 4 (espaço livre: 0 total: 8)');
        expect(resultado.recintosViaveis.length).toBe(1);
    });

    // 3 unidades do animal
    test('Não deve encontrar recintos para 3 leoes', () => {
        const resultado = new RecintosZoo().analisaRecintos('LEAO', 3);
        expect(resultado.erro).toBe('Não há recinto viável');
        expect(resultado.recintosViaveis).toBeFalsy();
    });

    test('Não deve encontrar recinto para 3 crocodilos', () => {
        const resultado = new RecintosZoo().analisaRecintos('CROCODILO', 3);
        expect(resultado.erro).toBe('Não há recinto viável');
        expect(resultado.recintosViaveis).toBeFalsy();
    });

    test('Deve encontrar recintos para 3 macacos', () => {
        const resultado = new RecintosZoo().analisaRecintos('MACACO', 3);
        expect(resultado.erro).toBeFalsy();
        expect(resultado.recintosViaveis[0]).toBe('Recinto 1 (espaço livre: 4 total: 10)');
        expect(resultado.recintosViaveis[1]).toBe('Recinto 2 (espaço livre: 2 total: 5)');
        expect(resultado.recintosViaveis[2]).toBe('Recinto 3 (espaço livre: 1 total: 7)');
        expect(resultado.recintosViaveis.length).toBe(3);
    });

    test('Deve encontrar recinto para 3 gazelas', () => {
        const resultado = new RecintosZoo().analisaRecintos('GAZELA', 3);
        expect(resultado.erro).toBeFalsy();
        expect(resultado.recintosViaveis[0]).toBe('Recinto 1 (espaço livre: 0 total: 10)');
        expect(resultado.recintosViaveis.length).toBe(1);
    });

    test('Não deve encontrar recinto para 3 hipopotamos', () => {
        const resultado = new RecintosZoo().analisaRecintos('HIPOPOTAMO', 3);
        expect(resultado.erro).toBe('Não há recinto viável');
        expect(resultado.recintosViaveis).toBeFalsy();
    });

    //4 unidades do animal
    test('Deve encontrar recintos para 4 macacos', () => {
        const resultado = new RecintosZoo().analisaRecintos('MACACO', 4);
        expect(resultado.erro).toBeFalsy();
        expect(resultado.recintosViaveis[0]).toBe('Recinto 1 (espaço livre: 3 total: 10)');
        expect(resultado.recintosViaveis[1]).toBe('Recinto 2 (espaço livre: 1 total: 5)');
        expect(resultado.recintosViaveis[2]).toBe('Recinto 3 (espaço livre: 0 total: 7)');
        expect(resultado.recintosViaveis.length).toBe(3);
    });

    test('Não deve encontrar recinto para 4 gazelas', () => {
        const resultado = new RecintosZoo().analisaRecintos('GAZELA', 4);
        expect(resultado.erro).toBe('Não há recinto viável');
        expect(resultado.recintosViaveis).toBeFalsy();
    });

    test('Não deve encontrar recinto para 4 hipopotamos', () => {
        const resultado = new RecintosZoo().analisaRecintos('HIPOPOTAMO', 4);
        expect(resultado.erro).toBe('Não há recinto viável');
        expect(resultado.recintosViaveis).toBeFalsy();
    });

    //5 unidades do animal
    test('Deve encontrar recintos para 5 macacos', () => {
        const resultado = new RecintosZoo().analisaRecintos('MACACO', 5);
        expect(resultado.erro).toBeFalsy();
        expect(resultado.recintosViaveis[0]).toBe('Recinto 1 (espaço livre: 2 total: 10)');
        expect(resultado.recintosViaveis[1]).toBe('Recinto 2 (espaço livre: 0 total: 5)');
        expect(resultado.recintosViaveis.length).toBe(2);
    });

    //6 unidades do animal
    test('Deve encontrar recintos para 6 macacos', () => {
        const resultado = new RecintosZoo().analisaRecintos('MACACO', 6);
        expect(resultado.erro).toBeFalsy();
        expect(resultado.recintosViaveis[0]).toBe('Recinto 1 (espaço livre: 1 total: 10)');
        expect(resultado.recintosViaveis.length).toBe(1);
    });

    //7 unidades do animal
    test('Deve encontrar recintos para 7 macacos', () => {
        const resultado = new RecintosZoo().analisaRecintos('MACACO', 7);
        expect(resultado.erro).toBeFalsy();
        expect(resultado.recintosViaveis[0]).toBe('Recinto 1 (espaço livre: 0 total: 10)');
        expect(resultado.recintosViaveis.length).toBe(1);
    });

    //8 unidades do animal
    test('Não deve encontrar recintos para 8 macacos', () => {
        const resultado = new RecintosZoo().analisaRecintos('MACACO', 8);
        expect(resultado.erro).toBe('Não há recinto viável');
        expect(resultado.recintosViaveis).toBeFalsy();
    });

    // MODIFICANDO OS ANIMAIS EXISTENTES NO RECINTO
    test('Deve encontrar recinto para 1 hipopotamo quando ja existe hipopotamo no recinto', () => {
        const resultado = new RecintosZoo([{'macaco': 3}, {}, {'gazela': 1}, {'hipopotamo': 1}, {'leao': 1}]).analisaRecintos('HIPOPOTAMO', 1);
        expect(resultado.erro).toBeFalsy();
        expect(resultado.recintosViaveis[0]).toBe('Recinto 3 (espaço livre: 0 total: 7)');
        expect(resultado.recintosViaveis[1]).toBe('Recinto 4 (espaço livre: 0 total: 8)');
        expect(resultado.recintosViaveis.length).toBe(2);
    });

    test('Deve encontrar recinto para 1 macaco quando existe macaco e outro animal no recinto', () => {
        const resultado = new RecintosZoo([{'macaco': 3, 'gazela': 1}, {}, {'gazela': 1}, {}, {'leao': 1}]).analisaRecintos('MACACO', 1);
        expect(resultado.erro).toBeFalsy();
        expect(resultado.recintosViaveis[0]).toBe('Recinto 1 (espaço livre: 3 total: 10)');
        expect(resultado.recintosViaveis[1]).toBe('Recinto 3 (espaço livre: 3 total: 7)');
        expect(resultado.recintosViaveis.length).toBe(2);
    });

    test('Deve encontrar recinto para 1 gazela quando existe gazela e outro animal no recinto', () => {
        const resultado = new RecintosZoo([{'macaco': 3, 'gazela': 1}, {}, {'gazela': 1}, {}, {'leao': 1}]).analisaRecintos('GAZELA', 1);
        expect(resultado.erro).toBeFalsy();
        expect(resultado.recintosViaveis[0]).toBe('Recinto 1 (espaço livre: 2 total: 10)');
        expect(resultado.recintosViaveis[1]).toBe('Recinto 3 (espaço livre: 3 total: 7)');
        expect(resultado.recintosViaveis.length).toBe(2);
    });

    test('Deve encontrar recinto para 1 hipopotamo quando existe hipopotamo e outro animal no recinto', () => {
        const resultado = new RecintosZoo([{'macaco': 3}, {}, {'gazela': 1, 'hipopotamo': 1}, {}, {'leao': 1}], [10, 5, 11, 8, 9]).analisaRecintos('HIPOPOTAMO', 1);
        expect(resultado.erro).toBeFalsy();
        expect(resultado.recintosViaveis[0]).toBe('Recinto 3 (espaço livre: 0 total: 11)');
        expect(resultado.recintosViaveis[1]).toBe('Recinto 4 (espaço livre: 4 total: 8)');
        expect(resultado.recintosViaveis.length).toBe(2);
    });

    test('Deve encontrar recinto para 1 macaco quando existem dois animais no recinto e sao diferentes dele', () => {
        const resultado = new RecintosZoo([{'macaco': 3}, {}, {'gazela': 1, 'hipopotamo': 1}, {}, {'leao': 1}], [10, 5, 8, 8, 9]).analisaRecintos('MACACO', 1);
        expect(resultado.erro).toBeFalsy();
        expect(resultado.recintosViaveis[0]).toBe('Recinto 1 (espaço livre: 6 total: 10)');
        expect(resultado.recintosViaveis[1]).toBe('Recinto 3 (espaço livre: 0 total: 8)');
        expect(resultado.recintosViaveis.length).toBe(2);
    });

    test('Deve encontrar recinto para 1 gazela quando existem dois animais no recinto e sao diferentes dela', () => {
        const resultado = new RecintosZoo([{'macaco': 3}, {}, {'macaco': 1, 'hipopotamo': 1}, {}, {'leao': 1}], [10, 5, 8, 8, 9]).analisaRecintos('GAZELA', 1);
        expect(resultado.erro).toBeFalsy();
        expect(resultado.recintosViaveis[0]).toBe('Recinto 1 (espaço livre: 4 total: 10)');
        expect(resultado.recintosViaveis[1]).toBe('Recinto 3 (espaço livre: 0 total: 8)');
        expect(resultado.recintosViaveis.length).toBe(2);
    });

    test('Deve encontrar recinto para 1 hipopotamo quando existem dois animais no recinto e sao diferentes dele', () => {
        const resultado = new RecintosZoo([{'macaco': 3}, {}, {'gazela': 1, 'macaco': 1}, {}, {'leao': 1}], [10, 5, 8, 8, 9]).analisaRecintos('HIPOPOTAMO', 1);
        expect(resultado.erro).toBeFalsy();
        expect(resultado.recintosViaveis[0]).toBe('Recinto 3 (espaço livre: 0 total: 8)');
        expect(resultado.recintosViaveis[1]).toBe('Recinto 4 (espaço livre: 4 total: 8)');
        expect(resultado.recintosViaveis.length).toBe(2);
    });

    // ANIMAIS CARNIVOROS
    test('Deve encontrar recinto para 1 leopardo quando ja existe leopardo no recinto', () => {
        const resultado = new RecintosZoo([{'leopardo': 2}, {}, {'gazela': 1}, {}, {'leao': 1}]).analisaRecintos('LEOPARDO', 1);
        expect(resultado.erro).toBeFalsy();
        expect(resultado.recintosViaveis[0]).toBe('Recinto 1 (espaço livre: 4 total: 10)');
        expect(resultado.recintosViaveis.length).toBe(1);
    });

    test('Deve encontrar recinto para 1 leopardo quando nao ha animal no recinto', () => {
        const resultado = new RecintosZoo([{}, {}, {}, {}, {}]).analisaRecintos('LEOPARDO', 1);
        expect(resultado.erro).toBeFalsy();
        expect(resultado.recintosViaveis[0]).toBe('Recinto 1 (espaço livre: 8 total: 10)');
        expect(resultado.recintosViaveis[1]).toBe('Recinto 3 (espaço livre: 5 total: 7)');
        expect(resultado.recintosViaveis[2]).toBe('Recinto 5 (espaço livre: 7 total: 9)');
        expect(resultado.recintosViaveis.length).toBe(3);
    });

    test('Deve encontrar recinto para 1 leao quando nao ha animal no recinto', () => {
        const resultado = new RecintosZoo([{}, {}, {}, {}, {}]).analisaRecintos('LEAO', 1);
        expect(resultado.erro).toBeFalsy();
        expect(resultado.recintosViaveis[0]).toBe('Recinto 1 (espaço livre: 7 total: 10)');
        expect(resultado.recintosViaveis[1]).toBe('Recinto 3 (espaço livre: 4 total: 7)');
        expect(resultado.recintosViaveis[2]).toBe('Recinto 5 (espaço livre: 6 total: 9)');
        expect(resultado.recintosViaveis.length).toBe(3);
    });
});

