function test(algo){

    switch (algo) {
        case 'es':
            console.log('es espanol')
        case 'en':
            console.log('es ingles')
            break;
        default:
            console.log('no reconozco el idioma')
            break;
    }
    
}

test('es')