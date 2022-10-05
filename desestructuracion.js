 

 const deadpool = {
     nombre: 'Wade',
     apellido: 'Winston',
     poder: 'Regeneración',
     getNombre() {
         return `${ this.nombre } ${ this.apellido } ${ this.poder }`  
     }
 }
 
 //const nombre   = deadpool.nombre;
 //const apellido = deadpool.apellido;
 //const poder    = deadpool.poder;

 //const {nombre, apellido, poder} = deadpool;
 //console.log(nombre, apellido, poder);

 function imprimeHeroe( {nombre, apellido, poder, edad = 0} ) {
     console.log(nombre, apellido, poder, edad);
 }

 //imprimeHeroe(deadpool);

 const heroes = ['Deadpool', 'Spiderman', 'Ironman'];

 //const h1 = heroes[0];
 //const h2 = heroes[1];
 //const h3 = heroes[2];

 //let [, , robert] = heroes;
 //console.log(`El héroe del universo se llama ${robert}`);
 //robert = 'Downey';
 //console.log(robert);

//const [d,s] = heroes;

//console.log( d + ' y ' + s + ' no son amigos.' );
function imprimeHeroesVerdaderos ([no,arania,hierro]) {
     console.log( 'Los verdaderos héroes son ' + arania + ' y ' + hierro + '. ' + no + ' no es un héroe.' );
}

imprimeHeroesVerdaderos(heroes);



 