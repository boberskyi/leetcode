let containsDuplicate = nums => {
  const s = new Set(nums);
  return s.size !== nums.length;
};