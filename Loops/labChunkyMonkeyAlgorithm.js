function chunkArrayInGroups (array, num) {
  const chunked = [];
  for (let i = 0; i < Math.ceil(array.length / num); i++) {
    const chunk = [];
    for (let j = 0; j < num; j++) {
      if (array[j + i * num] !== undefined) {
      chunk.push(array[j + i * num]);}
    }
    chunked.push(chunk);
  }
  return chunked
}