function findRotationCount(arr) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      if (arr[left] <= arr[right]) {
        // The array is already sorted, so no rotations.
        return left;
      }
  
      const mid = Math.floor((left + right) / 2);
      const next = (mid + 1) % arr.length;
      const prev = (mid - 1 + arr.length) % arr.length;
  
      if (arr[mid] <= arr[next] && arr[mid] <= arr[prev]) {
        // The minimum element (pivot) has been found.
        return mid;
      } else if (arr[mid] <= arr[right]) {
        // The right half is sorted, search in the left half.
        right = mid - 1;
      } else if (arr[mid] >= arr[left]) {
        // The left half is sorted, search in the right half.
        left = mid + 1;
      }
    }
  
    // If not found, return -1 or some other indication.
    return -1;
  }
  