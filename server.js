const Koa = require('koa')
const send = require('koa-send')
const Router = require('koa-router')

const app = new Koa() 
const router = new Router() 

const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('./webpack/webpack.dev.config')


const DEVPORT = 3001



router.get('/',async function(ctx){
  await send(ctx,'demo/index.html')
})
/*router.get('/app.js',async function(ctx){
  await send(ctx,'build/app.js')
})*/
router.get('**/*.js(on)?', async function (ctx) {
  ctx.redirect(`http://localhost:${DEVPORT}/${ctx.path}`)
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


new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    quiet: false,
    noInfo: true,
    stats: {
        colors: true
    }
}).listen(DEVPORT, 'localhost',function (err,result){
    if(err) {
        return console.log(err)
    }
})

