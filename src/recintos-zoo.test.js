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

    test('Não deve encontrar recintos para 2 leopardos', () => {
        const resultado = new RecintosZoo().analisaRecintos('LEOPARDO', 2);
        expect(resultado.erro).toBe('Não há recinto viável');
        expect(resultado.recintosViaveis).toBeFalsy();
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

    test('Não deve encontrar recintos para 3 leopardos', () => {
        const resultado = new RecintosZoo().analisaRecintos('LEOPARDO', 3);
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
    test('Não deve encontrar recintos para 4 leoes', () => {
        const resultado = new RecintosZoo().analisaRecintos('LEAO', 4);
        expect(resultado.erro).toBe('Não há recinto viável');
        expect(resultado.recintosViaveis).toBeFalsy();
    });

    test('Não deve encontrar recintos para 4 leopardos', () => {
        const resultado = new RecintosZoo().analisaRecintos('LEOPARDO', 4);
        expect(resultado.erro).toBe('Não há recinto viável');
        expect(resultado.recintosViaveis).toBeFalsy();
    });

    test('Não deve encontrar recinto para 4 crocodilos', () => {
        const resultado = new RecintosZoo().analisaRecintos('CROCODILO', 4);
        expect(resultado.erro).toBe('Não há recinto viável');
        expect(resultado.recintosViaveis).toBeFalsy();
    });

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

    //4 unidades do animal
    test('Não deve encontrar recintos para 4 leoes', () => {
        const resultado = new RecintosZoo().analisaRecintos('LEAO', 4);
        expect(resultado.erro).toBe('Não há recinto viável');
        expect(resultado.recintosViaveis).toBeFalsy();
    });

    test('Não deve encontrar recintos para 4 leopardos', () => {
        const resultado = new RecintosZoo().analisaRecintos('LEOPARDO', 4);
        expect(resultado.erro).toBe('Não há recinto viável');
        expect(resultado.recintosViaveis).toBeFalsy();
    });

    test('Não deve encontrar recinto para 4 crocodilos', () => {
        const resultado = new RecintosZoo().analisaRecintos('CROCODILO', 4);
        expect(resultado.erro).toBe('Não há recinto viável');
        expect(resultado.recintosViaveis).toBeFalsy();
    });

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
    test('Não deve encontrar recintos para 5 leoes', () => {
        const resultado = new RecintosZoo().analisaRecintos('LEAO', 5);
        expect(resultado.erro).toBe('Não há recinto viável');
        expect(resultado.recintosViaveis).toBeFalsy();
    });

    test('Não deve encontrar recintos para 5 leopardos', () => {
        const resultado = new RecintosZoo().analisaRecintos('LEOPARDO', 5);
        expect(resultado.erro).toBe('Não há recinto viável');
        expect(resultado.recintosViaveis).toBeFalsy();
    });

    test('Não deve encontrar recinto para 5 crocodilos', () => {
        const resultado = new RecintosZoo().analisaRecintos('CROCODILO', 5);
        expect(resultado.erro).toBe('Não há recinto viável');
        expect(resultado.recintosViaveis).toBeFalsy();
    });

    test('Deve encontrar recintos para 5 macacos', () => {
        const resultado = new RecintosZoo().analisaRecintos('MACACO', 5);
        expect(resultado.erro).toBeFalsy();
        expect(resultado.recintosViaveis[0]).toBe('Recinto 1 (espaço livre: 2 total: 10)');
        expect(resultado.recintosViaveis[1]).toBe('Recinto 2 (espaço livre: 0 total: 5)');
        expect(resultado.recintosViaveis.length).toBe(2);
    });

    test('Não deve encontrar recinto para 5 gazelas', () => {
        const resultado = new RecintosZoo().analisaRecintos('GAZELA', 5);
        expect(resultado.erro).toBe('Não há recinto viável');
        expect(resultado.recintosViaveis).toBeFalsy();
    });

    test('Não deve encontrar recinto para 5 hipopotamos', () => {
        const resultado = new RecintosZoo().analisaRecintos('HIPOPOTAMO', 5);
        expect(resultado.erro).toBe('Não há recinto viável');
        expect(resultado.recintosViaveis).toBeFalsy();
    });

    //6 unidades do animal
    test('Não deve encontrar recintos para 6 leoes', () => {
        const resultado = new RecintosZoo().analisaRecintos('LEAO', 6);
        expect(resultado.erro).toBe('Não há recinto viável');
        expect(resultado.recintosViaveis).toBeFalsy();
    });

    test('Não deve encontrar recintos para 6 leopardos', () => {
        const resultado = new RecintosZoo().analisaRecintos('LEOPARDO', 6);
        expect(resultado.erro).toBe('Não há recinto viável');
        expect(resultado.recintosViaveis).toBeFalsy();
    });

    test('Não deve encontrar recinto para 6 crocodilos', () => {
        const resultado = new RecintosZoo().analisaRecintos('CROCODILO', 6);
        expect(resultado.erro).toBe('Não há recinto viável');
        expect(resultado.recintosViaveis).toBeFalsy();
    });

    test('Deve encontrar recintos para 6 macacos', () => {
        const resultado = new RecintosZoo().analisaRecintos('MACACO', 6);
        expect(resultado.erro).toBeFalsy();
        expect(resultado.recintosViaveis[0]).toBe('Recinto 1 (espaço livre: 1 total: 10)');
        expect(resultado.recintosViaveis.length).toBe(1);
    });

    test('Não deve encontrar recinto para 6 gazelas', () => {
        const resultado = new RecintosZoo().analisaRecintos('GAZELA', 6);
        expect(resultado.erro).toBe('Não há recinto viável');
        expect(resultado.recintosViaveis).toBeFalsy();
    });

    test('Não deve encontrar recinto para 6 hipopotamos', () => {
        const resultado = new RecintosZoo().analisaRecintos('HIPOPOTAMO', 6);
        expect(resultado.erro).toBe('Não há recinto viável');
        expect(resultado.recintosViaveis).toBeFalsy();
    });

    //7 unidades do animal
    test('Não deve encontrar recintos para 7 leoes', () => {
        const resultado = new RecintosZoo().analisaRecintos('LEAO', 7);
        expect(resultado.erro).toBe('Não há recinto viável');
        expect(resultado.recintosViaveis).toBeFalsy();
    });

    test('Não deve encontrar recintos para 7 leopardos', () => {
        const resultado = new RecintosZoo().analisaRecintos('LEOPARDO', 7);
        expect(resultado.erro).toBe('Não há recinto viável');
        expect(resultado.recintosViaveis).toBeFalsy();
    });

    test('Não deve encontrar recinto para 7 crocodilos', () => {
        const resultado = new RecintosZoo().analisaRecintos('CROCODILO', 7);
        expect(resultado.erro).toBe('Não há recinto viável');
        expect(resultado.recintosViaveis).toBeFalsy();
    });

    test('Deve encontrar recintos para 7 macacos', () => {
        const resultado = new RecintosZoo().analisaRecintos('MACACO', 7);
        expect(resultado.erro).toBeFalsy();
        expect(resultado.recintosViaveis[0]).toBe('Recinto 1 (espaço livre: 0 total: 10)');
        expect(resultado.recintosViaveis.length).toBe(1);
    });

    test('Não deve encontrar recinto para 7 gazelas', () => {
        const resultado = new RecintosZoo().analisaRecintos('GAZELA', 7);
        expect(resultado.erro).toBe('Não há recinto viável');
        expect(resultado.recintosViaveis).toBeFalsy();
    });

    test('Não deve encontrar recinto para 7 hipopotamos', () => {
        const resultado = new RecintosZoo().analisaRecintos('HIPOPOTAMO', 7);
        expect(resultado.erro).toBe('Não há recinto viável');
        expect(resultado.recintosViaveis).toBeFalsy();
    });

    //8 unidades do animal
    test('Não deve encontrar recintos para 8 leoes', () => {
        const resultado = new RecintosZoo().analisaRecintos('LEAO', 8);
        expect(resultado.erro).toBe('Não há recinto viável');
        expect(resultado.recintosViaveis).toBeFalsy();
    });

    test('Não deve encontrar recintos para 8 leopardos', () => {
        const resultado = new RecintosZoo().analisaRecintos('LEOPARDO', 8);
        expect(resultado.erro).toBe('Não há recinto viável');
        expect(resultado.recintosViaveis).toBeFalsy();
    });

    test('Não deve encontrar recinto para 8 crocodilos', () => {
        const resultado = new RecintosZoo().analisaRecintos('CROCODILO', 8);
        expect(resultado.erro).toBe('Não há recinto viável');
        expect(resultado.recintosViaveis).toBeFalsy();
    });

    test('Não deve encontrar recintos para 8 macacos', () => {
        const resultado = new RecintosZoo().analisaRecintos('MACACO', 8);
        expect(resultado.erro).toBe('Não há recinto viável');
        expect(resultado.recintosViaveis).toBeFalsy();
    });

    test('Não deve encontrar recinto para 8 gazelas', () => {
        const resultado = new RecintosZoo().analisaRecintos('GAZELA', 8);
        expect(resultado.erro).toBe('Não há recinto viável');
        expect(resultado.recintosViaveis).toBeFalsy();
    });

    test('Não deve encontrar recinto para 8 hipopotamos', () => {
        const resultado = new RecintosZoo().analisaRecintos('HIPOPOTAMO', 8);
        expect(resultado.erro).toBe('Não há recinto viável');
        expect(resultado.recintosViaveis).toBeFalsy();
    });

    //9 unidades do animal
    test('Não deve encontrar recintos para 9 leoes', () => {
        const resultado = new RecintosZoo().analisaRecintos('LEAO', 9);
        expect(resultado.erro).toBe('Não há recinto viável');
        expect(resultado.recintosViaveis).toBeFalsy();
    });

    test('Não deve encontrar recintos para 9 leopardos', () => {
        const resultado = new RecintosZoo().analisaRecintos('LEOPARDO', 9);
        expect(resultado.erro).toBe('Não há recinto viável');
        expect(resultado.recintosViaveis).toBeFalsy();
    });

    test('Não deve encontrar recinto para 9 crocodilos', () => {
        const resultado = new RecintosZoo().analisaRecintos('CROCODILO', 9);
        expect(resultado.erro).toBe('Não há recinto viável');
        expect(resultado.recintosViaveis).toBeFalsy();
    });

    test('Não deve encontrar recintos para 9 macacos', () => {
        const resultado = new RecintosZoo().analisaRecintos('MACACO', 9);
        expect(resultado.erro).toBe('Não há recinto viável');
        expect(resultado.recintosViaveis).toBeFalsy();
    });

    test('Não deve encontrar recinto para 9 gazelas', () => {
        const resultado = new RecintosZoo().analisaRecintos('GAZELA', 9);
        expect(resultado.erro).toBe('Não há recinto viável');
        expect(resultado.recintosViaveis).toBeFalsy();
    });

    test('Não deve encontrar recinto para 9 hipopotamos', () => {
        const resultado = new RecintosZoo().analisaRecintos('HIPOPOTAMO', 9);
        expect(resultado.erro).toBe('Não há recinto viável');
        expect(resultado.recintosViaveis).toBeFalsy();
    });

    //10 unidades do animal
    test('Não deve encontrar recintos para 10 leoes', () => {
        const resultado = new RecintosZoo().analisaRecintos('LEAO', 10);
        expect(resultado.erro).toBe('Não há recinto viável');
        expect(resultado.recintosViaveis).toBeFalsy();
    });

    test('Não deve encontrar recintos para 10 leopardos', () => {
        const resultado = new RecintosZoo().analisaRecintos('LEOPARDO', 10);
        expect(resultado.erro).toBe('Não há recinto viável');
        expect(resultado.recintosViaveis).toBeFalsy();
    });

    test('Não deve encontrar recinto para 10 crocodilos', () => {
        const resultado = new RecintosZoo().analisaRecintos('CROCODILO', 10);
        expect(resultado.erro).toBe('Não há recinto viável');
        expect(resultado.recintosViaveis).toBeFalsy();
    });

    test('Não deve encontrar recintos para 10 macacos', () => {
        const resultado = new RecintosZoo().analisaRecintos('MACACO', 10);
        expect(resultado.erro).toBe('Não há recinto viável');
        expect(resultado.recintosViaveis).toBeFalsy();
    });

    test('Não deve encontrar recinto para 10 gazelas', () => {
        const resultado = new RecintosZoo().analisaRecintos('GAZELA', 10);
        expect(resultado.erro).toBe('Não há recinto viável');
        expect(resultado.recintosViaveis).toBeFalsy();
    });

    test('Não deve encontrar recinto para 10 hipopotamos', () => {
        const resultado = new RecintosZoo().analisaRecintos('HIPOPOTAMO', 10);
        expect(resultado.erro).toBe('Não há recinto viável');
        expect(resultado.recintosViaveis).toBeFalsy();
    })
});

