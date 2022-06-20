function declararVar() {
    var materia="WEB";

    if (true) {
        var materia = "BD"
        console.log(materia)//BD
    }

    console.log(materia)//BD

}

function declararLet() {
    var materia="WEB";

    if (true) {
        let materia="BD";//LET ASIGNA EL VALOR SOLO A ESTE BLOQUE(EL BLOQUE IF SE GUARDA EL CAMBIO Y MUERE FUERA DE SU BLOQUE)
        console.log(materia)//BD
    }

    console.log(materia)//WEB
    
}

function declararCons() {
    var materia="WEB";

    if (true) {
        const materia="BD";
        console.log(materia)//BD
    }

    console.log(materia)//WEB
    
}

function declararObj() {
    const persona = {
        nombre: "Johann",
        apellido: "Escobar",
        edad: 19,
        colorF: "Azul"
    }
    console.log(persona);
    console.log(persona.apellido);

    persona.nombre= 'Arturo'
    console.log(persona)

    persona.nombre= 'Mario'
    console.log(persona)

    Object.freeze(persona.nombre)
    persona.nombre= 'Pablo'
    console.log(persona)
}
