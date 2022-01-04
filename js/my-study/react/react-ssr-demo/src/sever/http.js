const express = require('express');

const app = express();

app.listen(3000, (req, res) => {
    console.log('serve is running');
});

export default app;