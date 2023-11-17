function findFloor(arr, x) {
    let left = 0;
    let right = arr.length - 1;
    let floor = -1; // Initialize floor to -1
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === x) {
        // If the middle element is equal to x, it is the floor.
        return arr[mid];
      } else if (arr[mid] < x) {
        // If the middle element is less than x, it could be a potential floor.
        floor = arr[mid];
        left = mid + 1;
      } else {
        // If the middle element is greater than x, search in the left half.
        right = mid - 1;
      }
    }
  
    return floor; // Return the floor found, or -1 if not found.
  }
  