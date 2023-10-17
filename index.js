require('dotenv').config()

const Koa = require('koa')
const app = new Koa()
const PORT = process.env.APP_PORT

const Router = require('koa-router')
const router = new Router()

const cors = require('@koa/cors')
const bodyparser = require('koa-bodyparser')

const testRoute = require('./src/resources/test/route')

testRoute({ router })

app.use(cors())
app.use(bodyparser())

app.use(router.routes())

app.listen(PORT, () => console.log(`app is running on port ${PORT}`))
