// Targeted apostrophe fixer for TypeScript blog data files
// Only fixes unescaped apostrophes inside the actual text content of specific fields
// (title, description, intro, h2, content) - NOT in slugs, dates, hubSlug, industry, or imports

const fs = require('fs');
const filePath = 'src/lib/blog-irrigation-data.ts';
let content = fs.readFileSync(filePath, 'utf8');

// Step 1: Reverse the broad fix - change \' back to ' everywhere first
// The broad fix added \' to places it shouldn't have
content = content.replace(/\\'/g, "'");
console.log('Step 1: Reversed all escaped apostrophes back to plain');

// Step 2: Now properly escape ONLY apostrophes in text content fields
// Strategy: find lines that are: content: '...', intro: '...', h2: '...', title: '...', description: '...'
// These can span across the line but in this file they're all on single lines

// For each line that matches a text content pattern, escape internal apostrophes
const lines = content.split('\n');
let fixCount = 0;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];

  // Skip import lines, slug lines, date lines, hub lines, industry lines
  if (line.match(/^\s*(import|export|slug:|date:|hubSlug:|hubKeyword:|industry:|readTime:)/)) {
    continue;
  }

  // Match text content fields: title, description, intro, h2, content
  // Pattern: fieldName: 'string value here',
  const textFieldMatch = line.match(/^(\s*(?:title|description|intro|h2|content):\s*')(.*)(')(\s*,?\s*)$/);
  if (textFieldMatch) {
    const prefix = textFieldMatch[1];   // e.g.: "    content: '"
    const value = textFieldMatch[2];    // the actual text content
    const suffix = textFieldMatch[3];   // closing '
    const trail = textFieldMatch[4];    // trailing comma/space

    // Escape unescaped apostrophes within the value
    const fixed = value.replace(/(?<!\\)'/g, "\\'");
    if (fixed !== value) {
      lines[i] = prefix + fixed + suffix + trail;
      fixCount += (fixed.split("\\'").length - 1) - (value.split("\\'").length - 1);
    }
    continue;
  }

  // Also handle multi-line content (shouldn't be in this file but just in case)
}

content = lines.join('\n');
console.log(`Step 2: Escaped ${fixCount} apostrophes in text content fields`);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Done');
