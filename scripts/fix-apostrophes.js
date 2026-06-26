const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/lib/blog-lawn-care-data.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Find lines where a string field (content/intro/title/description/h2) has
// an unescaped apostrophe inside the single-quoted value
const lines = content.split('\n');
let fixes = 0;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  // Match lines like:    content: 'some text',  or  intro: 'some text',
  // where the value starts and ends with single quotes on the same line
  const match = line.match(/^(\s+(?:content|intro|title|description|h2):\s*')(.*)(')(\s*(?:,|$))/);
  if (!match) continue;

  const prefix = match[1];
  const inner = match[2];
  const suffix = match[3] + match[4];

  // Check if inner contains any unescaped single quote
  if (!inner.includes("'")) continue;

  // Replace unescaped apostrophes (not already escaped)
  let fixed = '';
  for (let j = 0; j < inner.length; j++) {
    if (inner[j] === "'" && (j === 0 || inner[j-1] !== '\\')) {
      fixed += "\\'";
      fixes++;
    } else {
      fixed += inner[j];
    }
  }

  lines[i] = prefix + fixed + suffix;
  console.log('Fixed line', i + 1);
}

content = lines.join('\n');
fs.writeFileSync(filePath, content, 'utf8');
console.log('Total apostrophe fixes:', fixes);
