/**
 * Задача 1: написать функцию smoosh, которая принимает массив, "выравнивает" вложенные массивы
 * в одноуровневый массив и возвращает новый плоский массив.
 * Например:
 * smoosh([1, 2, [3, 4], 5])
 * > [1, 2, 3, 4, 5]
 * Входной массив может содержать массивы любого уровня вложенности.
 * Например: [[1, 2], [3, [4, [5]]]]
 *
 * Задача 2: написать функцию squeeze (по аналогии со smoosh) таким образом,
 * чтобы она модифицировала исходный массив, а не возвращала новый.
 *
 * Задача 3*: для функций smoosh и squeeze добавить валидацию входного параметра.
 * В случае, если на вход передан не массив функция должна выбросить исключение
 * с сообщением 'argument should be an array'.
 */

function smoosh(array) {
  // checkArgument(array);
  const errorMessage = 'argument should be an array';
  if (!(array instanceof Array)) {
    throw { message: 'argument should be an array' };
  }
  const result = [];
  function inspect(array) {
    array.forEach((item, i) => {
      if (item instanceof Array) {
        // console.log('=== if ===');
        // console.log('i: ', i);
        // console.log('item: ', item);
        // console.log('result: ', result);
        inspect(item);
      } else {
        // console.log('--- else ---');
        // console.log('i: ', i);
        // console.log('item pushed: ', item);
        // console.log('result: ', result);
        result.push(item);
      }
    });
  }
  inspect(array);
  return result;
}

function squeeze(array) {
  // checkArgument(array);
  /*
  function inspect(array) {
    array.forEach((item, i) => {
      if (item instanceof Array) {
        inspect(array.shift(item));
        console.log('if branch');
        console.log('i: ', i);
        console.log('item: ', item);
        console.log('array: ', array);
        // console.log('result: ', result);
        
      } else {
        return item;
        
        
        console.log('else branch');
        console.log('i: ', i);
        console.log('item pushed: ', item);
        console.log('array: ', array);
        // console.log('result: ', result);
        
      }
      // array.unshift(result);
      // return array;
    });
  }
  inspect(array);
  */
  let result = smoosh(array);
  const len = array.length;
  for (let i = 0; i < len; i++) {
    array.pop();
  }
  result.forEach(item => {
    array.push(item);
  });

  return array;
  }


  function argException() {
    this.message = 'argument should be an array';
  }

// console.log(smoosh([[1,2], 3, [4, [5]]]));
// console.log('func result: ', squeeze([[1,2], 3, [4, [5]]]));
// console.log('func result: ', squeeze([1, [2, [3, 4]], [[5, 6], [7, [8, [9]]]]]));

export { smoosh, squeeze };
// console.log(smoosh([1, [2, [3, 4]], [[5, 6], [7, [8, [9]]]]]));