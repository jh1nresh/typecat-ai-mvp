import { readFileSync } from 'node:fs';

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const requiredSnippets = [
  '<title>TypeCat AI',
  'Ask cat',
  'setMode',
  '#askCat',
  'mousemove',
];

for (const snippet of requiredSnippets) {
  if (!html.includes(snippet)) {
    throw new Error(`Missing expected MVP snippet: ${snippet}`);
  }
}

console.log('TypeCat MVP smoke check passed');
