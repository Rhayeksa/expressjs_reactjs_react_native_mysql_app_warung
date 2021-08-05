const createError = require("http-errors");
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const fileUpload = require("express-fileupload");
const db = require("./models");
const Role = db.role;
const Pelanggan = db.pelanggan;
const authRouter = require("./routes/auth.router");
const produkRouter = require("./routes/produk.router");
const pemasokRouter = require("./routes/pemasok.router");
const pelangganRouter = require("./routes/pelanggan.router");
const pembelianRouter = require("./routes/pembelian.router");
const penjualanRouter = require("./routes/penjualan.router");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(fileUpload());
app.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

// db.sequelize.sync();

db.sequelize.sync({ force: true }).then(() => {
  Role.create({
    id: 1,
    name: "admin",
  });
  Role.create({
    id: 2,
    name: "pelanggan",
  });
  Pelanggan.create({
    id: 1,
    nama: "none",
    email: "none@none.com",
    phone: "00000000000",
    photo: "none",
    alamat: "none",
  });
});

// routers
app.use("/auth", authRouter);
app.use("/produk", produkRouter);
app.use("/pemasok", pemasokRouter);
app.use("/pelanggan", pelangganRouter);
app.use("/pembelian", pembelianRouter);
app.use("/penjualan", penjualanRouter);

// home
app.get("/", (req, res) => {
  res.send({ message: "Welcome to Market REST API" });
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // error message
  res.status(err.status || 500);
  res.send({ err });
});

module.exports = app;
