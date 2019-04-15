/**
 * Реализовать функцию cloneDeep которая копирует объекты по значению с любой глубиной вложенности
 */
export default
function cloneDeep(sourceObject) {
  // return JSON.parse(JSON.stringify(sourceObject));

  function isObject(obj) {
    return (obj.__proto__.constructor.name.toLowerCase() === 'object');
  }

  function isArray(obj) {
    return (obj.__proto__.constructor.name.toLowerCase() === 'array');
  }


  // function cloneObject(sourceObject) {
    let clonedObject;
    if (isObject(sourceObject)) {
      clonedObject = {};
    } else {
      if (isArray(sourceObject)) {
        clonedObject = [];
      } else {
        return sourceObject;
      }
    }
    for (let i in sourceObject) {
      clonedObject[i] = cloneDeep(sourceObject[i]);
    }
    return clonedObject;
}




  /*
  function addIterator(sourceObject) {
    const keys = Object.keys(sourceObject);
    const values = Object.values(sourceObject);
    function iterator() {
      let i = 0;
      return {
        next() {
          if (i < keys.length) {
            i++;
            return {
              value: values[i-1],
              done: false
            }
          } else {
            return {
              done: true
            }
          }
        }
      }
    }
    sourceObject[Symbol.iterator] = iterator;

  }
*/


  // if (typeof sourceObject !== 'object') {
  //   throw new Error('argument should be an object');
  // }

/*
    addIterator(sourceObject);
    const result = {};
    for (let i in sourceObject) {
      if (isObject(sourceObject[i])) {
        result[i] = cloneDeep(sourceObject[i]);
      }
    }

    function checkEntries(obj) {
      if (obj[Symbol.iterator] === undefined) {
        addIterator(obj);
      }
    }





}
*/

/*

/

//tests
  // const sourceObject = {
  //   forgeFrontend: {
  //     coaches: [{ name: 'Pavel Kovalev' }, { name: 'Artur Davidyan' }],
  //     students: ['Dmitry', 'Oleg', 'Sergey', 'Yuri']
  //   },
  //   forgeBackend: {
  //     coaches: ['Yury Globo', 'Ilya Roslyakov', 'Alexey Romanov']
  //   },
  //   forgeMaintaince: [
  //     {
  //       part1: {
  //         students: ['Student 7', 'Student 8']
  //       }
  //     },
  //     {
  //       part2: {
  //         coaches: ['Coache 5', 'Coache 6']
  //       }
  //     }
  //   ]
  // };


// console.log(Object.values(sourceObject));
// console.log(Object.keys(sourceObject));


/*
console.log('sourceObject iterator: ', sourceObject[Symbol.iterator]);

console.log('cloneDeep is a function');
if (typeof cloneDeep === 'function') {
  console.log('PASSED');
} else {
  console.log('FAILED');
}

const clonedInstance = cloneDeep(sourceObject);

console.log('clone deep objects by value');
  if (clonedInstance.forgeFrontend.coaches[0] !== sourceObject.forgeFrontend.coaches[0]) {
  console.log('PASSED');
} else {
  console.log('FAILED');
}
  if (clonedInstance.forgeMaintaince[0] !== sourceObject.forgeMaintaince[0]) {
  console.log('PASSED');
} else {
  console.log('FAILED');
}
*/
