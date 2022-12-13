const mesesDelAño = () => {
  const meses = ['Enero','Febrero','Marzo','Abril','Mayo', 'Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
  for ( i = 0; i< meses.length; i++) {
    document.write(meses [i]);
    document.write('</br>');
  } 
  var test = 6 + 7;
  document.write (test);
}


const Arreglociudades = () =>{

  const ciudades = [];
    do {
    ciudades.push (prompt('agregue una ciudad'));
  } while (confirm ('desea agregar otra ciudad?'));

  for (i = 0; i<ciudades.length; i++){
    document.write (ciudades [i]);
    document.write ('<br>');
  }
  
  document.write ('Longitud del arreglo = ',ciudades.length);
  document.write('<br>');
  document.write ('primera posicion:', ciudades[0]);
  document.write('<br>');
  document.write ('tercera posicion: ', ciudades[2]);
  document.write('<br>');
  document.write ('ultima posicion: ', ciudades[ciudades.length-1]);
  document.write('<br>');
  document.write('<br>');
  ciudades.push ('Paris');
  ciudades [1] = 'Barcelona';

  document.write ('arreglo 2: ');
  document.write('<br>');
  for (i = 0; i<ciudades.length; i++){
    document.write (ciudades [i]);
    document.write ('<br>');
  }
}

const dados = () =>{
  const dado = [];
  for (i = 0; i < 50; i++) {
      let dado1 = parseInt(Math.random (1)*6);
      //console.log (dado1);
      let dado2 = parseInt(Math.random (1)*6) ;
      //console.log (dado2);
    sumaDado =  dado1+dado2;
    dado.push (sumaDado);
  }
for (i = 0; i<dado.length; i++){
  document.write (dado[i]);
  document.write ('</br>');
}
}

const numPar = (numero) =>{
  if (numero % 2 == 0){
    console.log (`${numero} ES NUMERO PAR`);
  } else {
    console.log (`${numero} ES NUMERO IMPAR`);
  }
}

const infoCadena = (cadena) =>{
cadena = prompt ('ingrese un texto');
if (cadena==cadena.toUpperCase()){
  console.log ('esta formado por letras mayusculas');
}else if (cadena == cadena.toLowerCase()){
  console.log ('esta formado por letras minusculas');
}else {
  console.log ('esta formado por letras mayusculas y minusculas');
}
}

const ladosRectangulo = (lado1,lado2) =>{
  lado1 = parseInt(prompt ('ingrese valor del lado 1'));
  lado2 = parseInt(prompt ('ingrese valor del lado 2'));

  let perimetro = (2*(lado1+lado2));

  return (`EL PERIMETRO ES ${perimetro}`);
}

const tablaMultiplicar = (numero) =>{
  numero = parseInt(prompt('ingrese el numero que quiere multiplicar'));

  for (i=1; i<=10; i++){
    let multiplicacion = i * numero;
    console.log (multiplicacion);
  }
}

