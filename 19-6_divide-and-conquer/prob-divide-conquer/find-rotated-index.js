function findRotatedIndex(arr, num) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === num) {
        return mid; // Found the number, return its index.
      }
  
      // Check which side of the array is sorted.
      if (arr[left] <= arr[mid]) {
        // The left half is sorted.
  
        if (arr[left] <= num && num < arr[mid]) {
          // If the number is in the left sorted half, update the right boundary.
          right = mid - 1;
        } else {
          // Otherwise, search in the right half.
          left = mid + 1;
        }
      } else {
        // The right half is sorted.
  
        if (arr[mid] < num && num <= arr[right]) {
          // If the number is in the right sorted half, update the left boundary.
          left = mid + 1;
        } else {
          // Otherwise, search in the left half.
          right = mid - 1;
        }
      }
    }
  
    return -1; // Number not found in the array.
  }
  
  // Example usage:
  const rotatedArray = [4, 5, 6, 7, 8, 1, 2, 3];
  const num = 6;
  console.log(findRotatedIndex(rotatedArray, num)); // Output: 2
  