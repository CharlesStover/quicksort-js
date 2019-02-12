import { expect } from 'chai';
import quickSort from '../quicksort';

interface Lengths {
  [key: string]: Types;
}

interface Orders {
  [key: string]: Lengths;
}

interface Types {
  [key: string]: number[];
}

describe('Quicksort', () => {

  const sorted: Lengths = {
    even: {
      consecutive:    [  1,  2,  3,  4,  5,  6 ],
      nonConsecutive: [  1,  2,  3,  5,  8, 13 ]
    },
    odd: {
      consecutive:    [  1,  2,  3,  4,  5 ],
      nonConsecutive: [  2,  3,  5,  8, 13 ]
    }
  };

  const unsorted: Orders = {

    // Randomly sorted
    random: {
      even: {
        consecutive:    [  5,  2,  3,  6,  1,  4 ],
        nonConsecutive: [  3, 13,  1,  8,  2,  5 ],
      },
      odd: {
        consecutive:    [  3,  2,  5,  4,  1 ],
        nonConsecutive: [ 13,  3,  2,  5,  8 ]
      }
    },

    // Reverse sorted
    reversed: {
      even: {
        consecutive:    sorted.even.consecutive.slice(0).reverse(),
        nonConsecutive: sorted.even.nonConsecutive.slice(0).reverse()
      },
      odd: {
        consecutive:    sorted.odd.consecutive.slice(0).reverse(),
        nonConsecutive: sorted.odd.nonConsecutive.slice(0).reverse()
      }
    },

    // Sorted
    sorted: {
      even: {
        consecutive:    sorted.even.consecutive.slice(0),
        nonConsecutive: sorted.even.nonConsecutive.slice(0)
      },
      odd: {
        consecutive:    sorted.odd.consecutive.slice(0),
        nonConsecutive: sorted.odd.nonConsecutive.slice(0)
      }
    }
  };

  // Test every combination of even/odd, consecutive/non-consecutive, and
  //   random/reversed/sorted.
  for (const order of Object.keys(unsorted)) {
    for (const length of Object.keys(unsorted[order])) {
      for (const [ type, unsortedArray ] of Object.entries(unsorted[order][length])) {
        it(`should sort an ${length}-length ${order} array of ${type} numbers`, () => {
          expect(quickSort(unsortedArray))
            .to.deep.equal(sorted[length][type]);
        });
      }
    }
  }
});
