// 1 - TYPED ARRAYS
console.log('1 - TYPED ARRAYS');

// podemos criar um array tipado passando o tamanho para o construtor
const arr = new Uint8Array(1024);

// podemos também os métodos estáticos .from e .of que funcinam como Array.from
// e Array.of

// o .from() espera apenas elementos numéricos
const white = Uint8ClampedArray.of(255, 255, 255, 0);
const ints = Uint32Array.from(white);

// array tipados podem truncar os valores
const uInt8array = Uint8Array.of(1.23, 2.99, 45000);
const uInt8arrayClamped = Uint8ClampedArray.of(1.23, 2.99, 45000);
let result = uInt8array; // Uint8Array(3) [ 1, 2, 200 ] - (bits mais significativos de 45000 são removidos)
console.log('uInt8Array', result);
result = uInt8arrayClamped; // Uint8Array(3) [ 1, 2, 255 ]
console.log('uInt8ClampedArray', result);

// uma outra forma de criar um array tipado é com um ArrayBuffer
// um ArrayBuffer é uma referência opaca a um bloco de memória

const buffer = new ArrayBuffer(1024 * 1024); // array buffer com 1 MegaByte
console.log(buffer.byteLength); // 1024

// a partir do buffer de 1MB podem ser criados os seguintes arrays tipados
const asBytes = new Uint8Array(buffer);
const asInts = new Int32Array(buffer);
const lastKiloByte = new Uint8Array(buffer, 1023 * 1024); // ultimo KB como um array de bytes
const ints2 = new Int32Array(buffer, 1024, 256); // segundo KB como 256 inteiros

result = asBytes.length; // 1048576 = 1024 * 1024
console.log(result);
result = asInts.length; // 262144 = (1024 * 1024)/4
console.log(result);
result = lastKiloByte.length; // 1024
console.log(result);
result = ints2.length; // 256
console.log(result);

// 2 - MÉTODOS E PROPRIEDADES DE ARRAYS TIPADOS
console.log('2 - MÉTODOS E PROPRIEDADES DE ARRAYS TIPADOS');

// METODO SET()

// o método set seta vários elementos de um array tipado a partir do um outro
// array (tipado ou não)
let bytes = new Uint8Array(1024);
let pattern = new Uint8Array([0, 1, 2, 3]);

bytes.set(pattern); // setando um array tipado
bytes.set([0, 1, 2, 3], 4); // setando array comum com um offset
result = bytes.slice(0, 8); //Uint8Array(8) [0, 1, 2, 3, 0, 1, 2, 3]
console.log(result);

// MÉTODO SUBARRAY()

// retorna um slice do array porém sem copiar os dados na memória.
// retorna apenas uma visão para o mesmo buffers

let integers = new Int16Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
let last3 = integers.subarray(integers.length - 3, integers.length);

result = last3[0]; // 7
console.log(result);
integers[9] = -1; // alterando um valor no array original
result = last3[2]; // -1 : o valor é alterado no subarray
console.log(result);

// todo array tipado tem 3 propriedades relacionadas a seu ArrayBuffer

// buffer: aponta para o ArrayBuffer do array
result = last3.buffer === integers.buffer; // true
console.log(result);

// byteOffset: posição de início do array dentro do buffer
result = last3.byteOffset; // 14: a view começa no byte 14 do buffer
console.log(result);

// byteLength: tamanho dos dados do array em bytes
result = last3.byteLength; // 6 = 3 * int 16
console.log(result);
result = last3.buffer.byteLength; // 20: 10 * int 16
console.log(result);

const a = integers;
// a linha seguinte é verdadeira para qualquer array tipado
result = a.length * a.BYTES_PER_ELEMENT === a.byteLength; // true
console.log(result);

// 3 - DATA VIEW E ENDIANNESS
console.log('3 - DATA VIEW E ENDIANNESS');

// arrays tipados usam a endianness do sistema em que estão rodando
// é possível determinar a endianness do sistema da seguinte forma:

// Se o inteiro 0x00000001 é armazenado na memória como 01 00 00 00 estamos
// em uma plataforma little endian.
const isLittleEndian = new Int8Array(new Int32Array([1]).buffer)[0] === 1;
console.log(isLittleEndian);

// quando trabalhamos com dados externos não podemos assumir a "endianness"
// que foi usada.
// não é seguro por exemplo usar arrays tipados com tipo multibyte (>8 bits)
// podemos usar a classe DataView que define métodos para leitura e escrita
// de arrays tipados especificando a ordem dos bytes

// supondo que temos um array de bytes binários para processar, podemos
// usar um DataView da seguinte forma:

// byte: 0x010203040506070809
const byteArray = new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8, 9]);
const view = new DataView(
  byteArray.buffer,
  byteArray.byteOffset,
  byteArray.byteLength
);

let int = view.getInt32(0); // lê signed int em big-endian do byte 0
console.log(int); // 16909060 = 0x01020304

int = view.getInt32(0, true); // lê signed int em little-endian do byte 0
console.log(int); // 67305985 = 0x40302010

view.setUint32(8, int, false); // Escrever novamente em formato big-endian
