import { array1000 } from './test-array';
import { insertionSort } from './insertion-sort';
import { bubbleSort } from './bubble-sort';
import { quickSort } from './quick-sort';
import { mergeSort } from './merge-sort';
import { mergeSortAlt } from './merge-sort-alt';
import { heapSort } from './heap-sort';
import { bucketSort } from './bucket-sort';
import { radixSort } from './radix-sort';
import { radixSortAlt } from './radix-sort-alt';
import { selectionSort } from './selection-sort';
import { shuffleArray } from '../../utilities/shuffle-array';

export const Main = () => {
  let sorts = [
    {
      fn:insertionSort
    },
    {
      fn:bubbleSort
    },
    {
      fn:quickSort
    },
    {
      fn:mergeSort
    },
    {
      fn:mergeSortAlt
    },
    {
      fn:heapSort
    },
    {
      fn:bucketSort,
      secondArg:5
    },
    {
      fn:radixSort
    },
    {
      fn:radixSortAlt,
      secondArg:3
    },
    {
      fn:selectionSort
    }
  ];
  sorts = shuffleArray(sorts);
  const doSort = (sorts) => {
    let testCount = 1000;

    for(let i = 0; i < sorts.length; i++) {

      let testArray = shuffleArray(array1000),
      secondArg = sorts[i].secondArg || undefined;
      console.time(sorts[i].fn.name);
      for (let j = 0; j < testCount; j++) {

        sorts[i].fn([].concat(testArray), secondArg);

      }
      console.timeEnd(sorts[i].fn.name);
    }
  }

  doSort(sorts);
/*
  let testCount = 1000;
  testArray = shuffleArray(array1000);
  console.time('insertionSort');
  for (let i = 0; i < testCount; i++) {
    insertionSort([].concat(testArray));
  }
  console.timeEnd('insertionSort');


  testArray = shuffleArray(array1000);
  console.time('radixSortAlt');
  for (let i = 0; i < testCount; i++) {
    radixSortAlt([].concat(testArray), 3);
  }
  console.timeEnd('radixSortAlt');



  let testArray = shuffleArray(array1000);
  console.time('bucketSort');
  for (let i = 0; i < testCount; i++) {
    bucketSort([].concat([],testArray));
  }
  console.timeEnd('bucketSort');

  testArray = shuffleArray(array1000);
  console.time('bubbleSort');
  for (let i = 0; i < testCount; i++) {
    bubbleSort([].concat([],testArray));
  }
  console.timeEnd('bubbleSort');

  testArray = shuffleArray(array1000);
  console.time('mergeSort');
  for (let i = 0; i < testCount; i++) {
    mergeSort([].concat([],testArray));
  }
  console.timeEnd('mergeSort');

  testArray = shuffleArray(array1000);
  console.time('mergeSortAlt');
  for (let i = 0; i < testCount; i++) {
    mergeSortAlt([].concat([],testArray));
  }
  console.timeEnd('mergeSortAlt');

  testArray = shuffleArray(array1000);
  console.time('quickSort');
  for (let i = 0; i < testCount; i++) {
    quickSort([].concat([],testArray));
  }
  console.timeEnd('quickSort');

  testArray = shuffleArray(array1000);
  console.time('heapSort');
  for (let i = 0; i < testCount; i++) {
    heapSort([].concat([],testArray));
  }
  console.timeEnd('heapSort');

  testArray = shuffleArray(array1000);
  console.time('radixSort');
  for (let i = 0; i < testCount; i++) {
    radixSort([].concat([],testArray));
  }
  console.timeEnd('radixSort');


  testArray = shuffleArray(array1000);
  console.time('selectionSort');
  for (let i = 0; i < testCount; i++) {
    selectionSort([].concat([],testArray));
  }
  console.timeEnd('selectionSort');
*/
}
