type Comparator = (a: any, b: any) => SortingPosition;
type SortingAlgorithm = <T>(unsortedArray: T[], comparator?: Comparator) => T[];
type SortingPosition = -1 | 0 | 1;

const defaultComparator: Comparator = (a: any, b: any): SortingPosition => {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
};

const quickSort: SortingAlgorithm = <T>(
  unsortedArray: T[],
  comparator: Comparator = defaultComparator
): T[] => {

  // Create a sortable array to return.
  const sortedArray: T[] = [ ...unsortedArray ];

  // Recursively sort sub-arrays.
  const recursiveSort = (start: number, end: number) => {

    // If this sub-array contains less than 2 elements, it's sorted.
    if (end - start < 2) {
      return;
    }

    const pivotValue: T = sortedArray[end];
    let splitIndex: number = start;
    for (let i: number = start; i < end; i++) {
      const sort: SortingPosition = comparator(sortedArray[i], pivotValue);

      // This value is less than the pivot value.
      if (sort === -1) {

        // If the element just to the right of the split index,
        //   isn't this element, swap them.
        if (splitIndex !== i) {
          const temp: T = sortedArray[splitIndex];
          sortedArray[splitIndex] = sortedArray[i];
          sortedArray[i] = temp;
        }

        // Move the split index to the right by one,
        //   denoting an increase in the less-than sub-array size.
        splitIndex++;
      }

      // Leave values that are greater than or equal to
      //   the pivot value where they are.
    }

    // Move the pivot value to between the split.
    sortedArray[end] = sortedArray[splitIndex];
    sortedArray[splitIndex] = pivotValue;

    // Recursively sort the less-than and greater-than arrays.
    recursiveSort(start, splitIndex - 1);
    recursiveSort(splitIndex, end);
  };

  // Sort the entire array.
  recursiveSort(0, unsortedArray.length - 1);
  return sortedArray;
};

export default quickSort;
