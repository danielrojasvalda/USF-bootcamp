function countZeroes(arr) {
    let left = 0;
    let right = arr.length - 1;
    let firstZeroIndex = -1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === 0) {
        firstZeroIndex = mid;
        right = mid - 1; // Continue searching on the left side
      } else {
        left = mid + 1; // Continue searching on the right side
      }
    }
  
    if (firstZeroIndex === -1) {
      // If no zero is found, return 0
      return 0;
    }
  
    // The count of zeroes is the length of the array minus the index of the first zero
    return arr.length - firstZeroIndex;
  }  