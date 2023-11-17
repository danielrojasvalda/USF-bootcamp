function sortedFrequency(arr, num) {
    const firstIndex = findFirst(arr, num);
    const lastIndex = findLast(arr, num);
  
    if (firstIndex === -1) {
      // If the number is not found, return 0
      return 0;
    }
  
    return lastIndex - firstIndex + 1;
  }
  
  // Helper function to find the first occurrence of num using binary search
  function findFirst(arr, num) {
    let left = 0;
    let right = arr.length - 1;
    let firstIndex = -1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === num) {
        firstIndex = mid;
        right = mid - 1; // Continue searching on the left side
      } else if (arr[mid] < num) {
        left = mid + 1; // Continue searching on the right side
      } else {
        right = mid - 1; // Continue searching on the left side
      }
    }
  
    return firstIndex;
  }
  
  // Helper function to find the last occurrence of num using binary search
  function findLast(arr, num) {
    let left = 0;
    let right = arr.length - 1;
    let lastIndex = -1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === num) {
        lastIndex = mid;
        left = mid + 1; // Continue searching on the right side
      } else if (arr[mid] < num) {
        left = mid + 1; // Continue searching on the right side
      } else {
        right = mid - 1; // Continue searching on the left side
      }
    }
  
    return lastIndex;
  }