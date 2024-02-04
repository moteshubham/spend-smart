var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cors = require('cors')

var cookieParser = require('cookie-parser');
var logger = require('morgan');


var app = express();
const port = 3000;

app.use(cors());



// cors


const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.get("/products", async (req, res) => {
    const allProducts = await prisma.product.findMany({});
    return res.status(200).json(allProducts);
})

app.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const product = await prisma.product.findUnique({
        where: { id: Number(id) },
      });
      if (product) {
        res.json(product);
      } else {
        res.status(404).json({ message: 'Product not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  });

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })