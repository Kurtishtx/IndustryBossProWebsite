const fs = require('fs');
const filePath = 'src/lib/blog-irrigation-data.ts';
let content = fs.readFileSync(filePath, 'utf8');

// Fix unescaped apostrophes in string content (possessives and contractions)
// These appear inside single-quoted TS strings
const replacements = [
  // Common contractions and possessives that appear in content strings
  ["can't", "can\\'t"],
  ["don't", "don\\'t"],
  ["won't", "won\\'t"],
  ["isn't", "isn\\'t"],
  ["aren't", "aren\\'t"],
  ["doesn't", "doesn\\'t"],
  ["didn't", "didn\\'t"],
  ["haven't", "haven\\'t"],
  ["hasn't", "hasn\\'t"],
  ["wouldn't", "wouldn\\'t"],
  ["couldn't", "couldn\\'t"],
  ["shouldn't", "shouldn\\'t"],
  ["that's", "that\\'s"],
  ["it's", "it\\'s"],
  ["there's", "there\\'s"],
  ["here's", "here\\'s"],
  ["what's", "what\\'s"],
  ["who's", "who\\'s"],
  ["you're", "you\\'re"],
  ["they're", "they\\'re"],
  ["we're", "we\\'re"],
  ["I'm", "I\\'m"],
  ["you've", "you\\'ve"],
  ["we've", "we\\'ve"],
  ["they've", "they\\'ve"],
  ["you'll", "you\\'ll"],
  ["we'll", "we\\'ll"],
  ["they'll", "they\\'ll"],
  ["I'll", "I\\'ll"],
  ["let's", "let\\'s"],
  // Possessives - common ones
  ["client's", "client\\'s"],
  ["company's", "company\\'s"],
  ["technician's", "technician\\'s"],
  ["contractor's", "contractor\\'s"],
  ["business's", "business\\'s"],
  ["property's", "property\\'s"],
  ["system's", "system\\'s"],
  ["team's", "team\\'s"],
  ["manager's", "manager\\'s"],
  ["owner's", "owner\\'s"],
  ["dispatcher's", "dispatcher\\'s"],
  ["crew's", "crew\\'s"],
  ["season's", "season\\'s"],
  ["company's", "company\\'s"],
  ["your's", "your\\'s"],
];

let fixCount = 0;
for (const [from, to] of replacements) {
  const regex = new RegExp(from.replace(/'/g, "'"), 'g');
  const before = content.split(from).length - 1;
  if (before > 0) {
    content = content.split(from).join(to);
    fixCount += before;
    console.log(`Fixed ${before}x: ${from}`);
  }
}

fs.writeFileSync(filePath, content, 'utf8');
console.log(`\nTotal fixes: ${fixCount}`);
