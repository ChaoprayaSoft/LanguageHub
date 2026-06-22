const fs = require('fs');

let page = fs.readFileSync('src/app/korean/page.tsx', 'utf8');
page = page.replace(/scrollToLesson\("lesson-9"\)/g, 'scrollToLesson("final-exam")');
for (let i = 10; i <= 27; i++) {
    page = page.replace(new RegExp('lesson-' + i, 'g'), 'lesson-' + (i-1) + '_TEMP');
    page = page.replace(new RegExp('Lesson ' + i, 'g'), 'Lesson ' + (i-1));
}
page = page.replace(/_TEMP/g, '');
fs.writeFileSync('src/app/korean/page.tsx', page);

let data = fs.readFileSync('src/data/korean.ts', 'utf8');
data = data.replace(/id: "lesson-9"/g, 'id: "final-exam"');
data = data.replace(/"lesson-9": \[/g, '"final-exam": [');
for (let i = 10; i <= 27; i++) {
    data = data.replace(new RegExp('id: "lesson-' + i + '"', 'g'), 'id: "lesson-' + (i-1) + '_TEMP"');
    data = data.replace(new RegExp('"lesson-' + i + '": \\[', 'g'), '"lesson-' + (i-1) + '_TEMP": [');
    data = data.replace(new RegExp('Lesson ' + i + ':', 'g'), 'Lesson ' + (i-1) + ':');
    data = data.replace(new RegExp('Lesson ' + i + ',', 'g'), 'Lesson ' + (i-1) + ',');
    data = data.replace(new RegExp('Lesson ' + i + ' ', 'g'), 'Lesson ' + (i-1) + ' ');
}
data = data.replace(/_TEMP/g, '');
fs.writeFileSync('src/data/korean.ts', data);
console.log('Renaming complete');
