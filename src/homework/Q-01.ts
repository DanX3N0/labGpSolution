(() => {

  /* NOMBRE CORRECTAMETE LAS SIGUIENTES VARIABLES 
     ADEMAS DE COMPROBAR SI USA LET O CONST,
    SE PUEDE REFACTORIZAR, ETC.
  */

  //lista de emails de usuarios de Meta-X
  const emailsList: Array<string> = [
    "email1@gmail.com", 
    "email1@gmail.com", 
    "email1@gmail.com"
  ];

  console.log(emailsList);

  //Lista de compras de un carrito
  const cartItems: Array<Object> = [
    {product: "switch"},
    {product: "X-box Controller"},
    {product: "steam-gift-card"},
  ];

  console.log(cartItems);
  

  //funcion para sumar mas 3 a un numero y retornarlo
  const addThree = (asdfg: number): number => {
    return asdfg + 3;
  }

  console.log(addThree(2));
  
  
  //funcion para capitalizar una palabra pasara por params
  //idente o refactorice de ser necesario
  //el resultado no deberia cambiar
  function capitalize(word: string): string {
    word.toLowerCase();    
    const c = word.charAt(0).toUpperCase().toString().concat(word.substring(1, word.length));
    return c;
  }

  console.log(capitalize("capricorn"));
  
  //variable que alerta en caso de que algun evento suceda
  let isEventOcurred: boolean = false;

  if(isEventOcurred) console.log('event');

  //variable que se encarga de verificar 
  //si un usuario puede acceder o no
  let canUserAccess: boolean = true;

  if(canUserAccess) console.log('welcome');
  

  //variable para hallar el promedio de 3 numeros
  const averageOfThreeNumbers: number = (1 + 2 + 3) / 3;

  console.log(averageOfThreeNumbers);
  
  //variable que almacena el valor de PI
  const PI: number = 3.141592654;

  console.log(PI);
  

  //variabel que controla si un archivo es modificable 
  let isEditAvailable: boolean = false;

  if(isEditAvailable) console.log('edit this file?');
  
  //variable para almacenar el valor de e
  const E: number = 2.718281828; 

})();