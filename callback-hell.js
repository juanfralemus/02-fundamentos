const empleados = [
    {
        id: 1,
        nombre: 'Fernando'
    },
    {
        id: 2,
        nombre: 'Linda'
    },
    {
        id: 3,
        nombre: 'Karen'
    }
];
 
const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    }
];

const getEmpleado = ( id, callback ) => {
    
    const empleado = empleados.find( e => e.id === id )?.nombre



    if ( empleado ) {
        callback( null, empleado );
    } else {
        callback(`Empleado con id "${ id }" no existe.`);
    }
        
}

const getSalario = ( id, callback ) => {

    const salario = salarios.find( s => s.id === id)?.salario

    if ( salario ) {
        callback( null, salario );
    } else {
        callback('Salario: *No se tiene información del salario de este empleado*');
    }
}

const  id = 44

getEmpleado(id, ( err, empleadoParameter ) => {

    if ( err ) {
        console.log('ERROR!');
        return console.log(err); //El return hace que lo de abajo ya no se ejecute, como si existier un "else"
    } 

    getSalario( id, ( err, salarioParameter ) => {

        if (err) {
            console.log(`Información del empleado:
Id: ${ id }
Nombre: ${ empleadoParameter }`)
            return console.log(err);
        }
    
        console.log(`Información del empleado:
Id: ${ id }
Nombre: ${ empleadoParameter }
Salario: $${ salarioParameter }`);
    
    })
});



