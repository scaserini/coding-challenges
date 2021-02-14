function permutations(string) {
  return [...new Set(permutationsRecursive([...string]))];
}

const permutationsRecursive = (array) => {
  if (array.length == 0) return [''];
  let permutationsList = [];

  for (let i = 0; i < array.length; i++) {
    let remainders = [...array];
    remainders.splice(i, 1);
    let remaindersPermutations = permutationsRecursive(remainders);
    remaindersPermutations = remaindersPermutations.map((p) => [...p, array[i]]);
    for (let p of remaindersPermutations) {
      permutationsList.push(p.join(''));
    }
  }

  return permutationsList;
};
