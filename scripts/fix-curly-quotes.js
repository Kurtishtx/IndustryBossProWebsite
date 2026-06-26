const fs = require('fs');
const filePath = 'src/lib/blog-irrigation-data.ts';
let content = fs.readFileSync(filePath, 'utf8');

// Replace curly/smart apostrophes (Unicode right single quotation mark U+2019 and left U+2018)
// with escaped straight apostrophes for TypeScript single-quoted strings
const before = (content.match(/[‘’]/g) || []).length;
content = content.replace(/[‘’]/g, "\\'");
const after = (content.match(/[‘’]/g) || []).length;

console.log(`Replaced ${before - after} curly apostrophes/quotes`);

// Also replace curly double quotes with straight double quotes if any
const dq_before = (content.match(/[“”]/g) || []).length;
content = content.replace(/[“”]/g, '"');
console.log(`Replaced ${dq_before} curly double quotes`);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Done');
