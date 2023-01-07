const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

require('./model');
const errorHandler = require('./middleware/error-handler');

const router = require('./router');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(morgan('dev'));
// 解析请求提
app.use(express.json());
app.use(express.urlencoded());
// 支持跨域
app.use(cors());

app.use('/api', router);

// 挂载统一错误处理 必须放在最后
app.use(errorHandler());


app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`);
});