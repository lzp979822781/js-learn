const fs = require('fs');
const path = require('path');

const {promisify}  = require('util');

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

const dbPath = path.join(__dirname, './db.json');

exports.getDb = async () => {
    const db = await readFile(dbPath, 'utf8');
    return JSON.parse(db);
};

exports.getItem = (data, id) => {
    if (!Array.isArray(data)) {
        return;
    }

    return data.find(item => item.id === id);
};

exports.saveDb = async db => {
    const data = JSON.stringify(db, null, '  ');
    return writeFile(data, 'utf8');
}

