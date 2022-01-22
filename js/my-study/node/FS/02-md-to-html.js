const fs = require('fs');
const path = require('path');
const marked = require('marked');
const browserSync = require('browser-sync');

const mdPath = path.resolve(__dirname, process.argv[2]);
const htmlPath = mdPath.replace(path.extname(mdPath), '.html');
let cssPath = path.resolve('github.css');

const temp = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title></title>
        <style>
            .markdown-body {
                box-sizing: border-box;
                min-width: 200px;
                max-width: 1000px;
                margin: 0 auto;
                padding: 45px;
            }
            @media (max-width: 750px) {
                .markdown-body {
                    padding: 15px;
                }
            }
            {{style}}
        </style>
    </head>
    <body>
        <div class="markdown-body">
            {{content}}
        </div>
    </body>
    </html>
`;

function transformMd() {
    fs.readFile(mdPath, 'utf-8', (err, data) => {
        const htmlStr = marked.parse(data);
        fs.readFile(cssPath, 'utf-8', (err, data) => {
            const resHtml = temp.replace("{{content}}", htmlStr).replace("{{style}}", data);
            // 将上述的内容写入到指定的 html 文件中，用于在浏览器里进行展示
            fs.writeFile(htmlPath, resHtml, err => {
                console.log('写入成功');
            })
        });
    });
}

fs.watchFile(mdPath, (curr, prev) => {
    if (curr.mtime !== prev.mtime) {
        transformMd();
    }
});

transformMd();

console.log('basename', path.basename(htmlPath));

browserSync.init({
    browser: '',
    server: __dirname,
    watch: true,
    index: path.basename(htmlPath) // 根路径
});

