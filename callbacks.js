


//setTimeout( function() {
//    console.log('Hola Vegetta');
//}, 1000);

//setTimeout( () => {
//    console.log('Hola Willy');
//}, 1000);

const getUsuarioByID = ( id, callback ) => {

    const user = {
        id,
        nombre: 'Juan'
    }

    setTimeout( () => {
        callback(user);
    }, 1500 )

}

getUsuarioByID( 10, (user) => {   //aquí también se podría desestructurar el objeto en los parámetros
    console.log(user.nombre);
} );

