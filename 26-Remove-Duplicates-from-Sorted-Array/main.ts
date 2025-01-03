function removeDuplicates(nums: number[]): number {
  let leftIndex = 0;
  for (let rightIndex = 1; rightIndex < nums.length; rightIndex++) {
    if (nums[leftIndex] !== nums[rightIndex]) {
      leftIndex++;
      nums[leftIndex] = nums[rightIndex];
    }
  }
  return leftIndex + 1;
}
