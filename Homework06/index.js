const Koa = require("koa");
const Router = require("@koa/router");

const app = new Koa();
const router = new Router();

const port = 5000;

router.get("/", (ctx, next) => {
  ctx.body = `<h1>Index sayfasına hoşgeldiniz!</h1>`;
});

router.get("/about", (ctx, next) => {
  ctx.body = `<h1>Hakkımda sayfasına hoşgeldiniz!</h1>`;
});

router.get("/contact", (ctx, next) => {
  ctx.body = `<h1>İletişim sayfasına hoşgeldiniz!</h1>`;
});

app.use(router.routes()).use(router.allowedMethods());
app.listen(port, () => {
  console.log("Server başlatıldı.");
});
