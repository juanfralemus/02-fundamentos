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

const getInfoUsuario = async( id ) => { //async transforma mi función para que regrese una promesa

   try {
  
    const empleado = await getEmpleado( id ); //el await permite asignar a una const o variable el valor de una función que trabaja con una promesa 
    const salario = await getSalario(); 

    return `El salario del empleado "${ empleado }" es de $${ salario }.`;

   } catch (error) {
        throw error; // "throw" es llamar el reject de la función asíncrona, entonces se trabaja en catch cuando se llama a esta. Usar "return" en vez es como que haya manejado la posible excepción pero igual salgo correctamente, entonces se trabaja en "then" cuando se llama a la función asíncrona.
   }
}

const id = 3; 

getInfoUsuario( id )
    .then( mensaje => console.log(mensaje))
    .catch( err => {
        console.log('ERROR!');
        console.log( err )
    });


    