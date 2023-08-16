/**
 * separates the text content of an element into rendered lines
 * 文字列をブラウザ上の改行で分割する。
 * @param element 対象のHTML要素は直下にテキストノードを持つ必要がある
 * @see https://www.bennadel.com/blog/4310-detecting-rendered-line-breaks-in-a-text-node-in-javascript.htm
 */
export const extractLinesFromElement = (element: HTMLElement): string[] => {
  const textNode = element.firstChild;
  if (!textNode || textNode.nodeType !== 3 || !textNode.textContent) {
    console.warn("No text node found in element");
    return [];
  }
  textNode.textContent = collapseWhiteSpace(textNode.textContent);
  const content = textNode.textContent;
  const range = document.createRange();
  const lines: string[][] = [];
  let lineCharacters: string[] = [];
  for (let i = 0; i < content.length; i++) {
    range.setStart(textNode, 0);
    range.setEnd(textNode, i + 1);
    const lineIndex = range.getClientRects().length - 1;
    if (!lines[lineIndex]) {
      lineCharacters = [];
      lines.push(lineCharacters);
    }
    lineCharacters.push(content.charAt(i));
  }
  return lines.map((line) => line.join(""));
};

const collapseWhiteSpace = (value: string) => {
  return value.trim().replace(/\s+/g, " ");
};
