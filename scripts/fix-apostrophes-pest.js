const fs = require('fs');
const filePath = 'src/lib/blog-pest-data.ts';
let content = fs.readFileSync(filePath, 'utf8');

// Step 1: Reverse any previously escaped apostrophes
content = content.replace(/\\'/g, "'");
console.log('Step 1: Reversed all escaped apostrophes');

const lines = content.split('\n');
let fixCount = 0;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (line.match(/^\s*(import|export|slug:|date:|hubSlug:|hubKeyword:|industry:|readTime:)/)) continue;

  const textFieldMatch = line.match(/^(\s*(?:title|description|intro|h2|content):\s*')(.*)(')(\s*,?\s*)$/);
  if (textFieldMatch) {
    const prefix = textFieldMatch[1];
    const value = textFieldMatch[2];
    const suffix = textFieldMatch[3];
    const trail = textFieldMatch[4];
    const fixed = value.replace(/(?<!\\)'/g, "\\'");
    if (fixed !== value) {
      lines[i] = prefix + fixed + suffix + trail;
      fixCount++;
    }
  }
}

content = lines.join('\n');
console.log('Step 2: Fixed apostrophes in ' + fixCount + ' lines');
fs.writeFileSync(filePath, content, 'utf8');
console.log('Done');
