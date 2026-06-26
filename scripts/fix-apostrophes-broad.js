// Fix all unescaped apostrophes inside single-quoted TypeScript string values
// Strategy: parse line by line, find lines with content/h2/title/description/intro/slug string values,
// and escape any unescaped apostrophes in the string content
const fs = require('fs');
const filePath = 'src/lib/blog-irrigation-data.ts';
let content = fs.readFileSync(filePath, 'utf8');

let fixCount = 0;

// Replace unescaped apostrophes that are NOT already preceded by backslash
// The pattern: a word character, then an unescaped apostrophe, then a word character
// This catches: year's, client's, you're, don't, etc.
// But NOT: the quotes that delimit the string itself (those are at word boundaries)

// We'll do a targeted replacement: inside string values (between ': ' and the closing ',\n')
// Actually the safest approach: replace \w'\w (word-apostrophe-word) patterns that are NOT \w\'\w

// Count occurrences first
const matches = content.match(/(?<!\\)(?<=\w)'/g);
console.log(`Found ${matches ? matches.length : 0} unescaped word-apostrophes`);

// Replace \w' followed by \w (contractions/possessives) - but not already escaped
content = content.replace(/(?<!\\)(?<=\w)'/g, "\\'");

fixCount = matches ? matches.length : 0;
console.log(`Fixed ${fixCount} apostrophes`);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Done');
