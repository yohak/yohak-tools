// https://stackoverflow.com/a/2450976/2207021
/**
 * @category array
 * @description 順番をランダムにした新しい配列を返す
 * @param array
 */
export function shuffle<T extends any>(array: T[]): T[] {
  const _array = [...array];
  let currentIndex = _array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [_array[currentIndex], _array[randomIndex]] = [_array[randomIndex], _array[currentIndex]];
  }

  return _array;
}
