const Koa = require('koa')
const send = require('koa-send')
const Router = require('koa-router')

const app = new Koa() 
const router = new Router() 

router.get('/',async function(ctx){
  await send(ctx,'demo/index.html')
})
router.get('/app.js',async function(ctx){
  await send(ctx,'build/app.js')
})



router.get('**/react.min.js',async function(ctx){
  await send(ctx,'demo/react-with-addons.js')
})
router.get('**/react-dom.min.js',async function(ctx){
  await send(ctx,'demo/react-dom.js')
})


app.use(router.routes())

app.listen(3000,function(){
  console.log('server running on http://localhost:3000')
})



