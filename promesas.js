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

const getEmpleado = ( id ) => {
    
    const empleado = empleados.find( e => e.id === id )?.nombre;

    return new Promise( ( resolve, reject ) => {

        ( empleado ) 
            ? resolve( empleado )
            : reject( `No existe empleado con id "${ id }".` );
    } );
        
}

const getSalario = () => {

    const salario = salarios.find( s => s.id === id )?.salario;

    return new Promise( ( resolve, reject ) => {

        (salario)
        ? resolve(salario)
        : reject(`No existe información del salario para este id de empleado.`) 
    } );

}

const id = 4;

//getEmpleado( id )
//    .then( empleadoParameter => console.log( empleadoParameter ) ) 
//    .catch( errParameter => console.log( errParameter ) );
//
//getSalario()
//    .then( salarioParameter => console.log( salarioParameter))
//    .catch( err => console.log( err ));

let nombre;

getEmpleado( id )
    .then( empleado => {
        nombre = empleado;
        return getSalario()
    } )
    .then( salario => console.log( 'El empleado "' + nombre + '" tiene un salario de $' + salario + '.' ) )
    .catch( err => console.log( err));