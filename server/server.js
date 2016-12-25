var http = require('http')
var React = require('react')
var ReactDOMServer = require('react-dom/server')
var renderToString = ReactDOMServer.renderToString
var App = require('../app/index.js')

const webpackServer = 'http://localhost:8080'
const port = 8081

const createPage = (markup, data) => `
<!doctype html>
<html>
  <head>
    <meta charset="utf-8"/>
    <title>My Universal App</title>
  </head>
  <body>
    <div id="app">${markup}</div>
    <script>window.DATA = ${JSON.stringify(data)}</script>
    <script src="${webpackServer}/__build__/shared.js"></script>
    <script src="${webpackServer}/__build__/ServerRendering-solution.js"></script>
  </body>
</html>
`

const app = http.createServer((req, res) => {
    const markup = renderToString(<App contacts={contacts}/>)
    const html = createPage(markup, { contacts })

    res.writeHead(200, {
      'Content-Type': 'text/html',
      'Content-Length': html.length
    })

    res.end(html)
})

app.listen(port, () => {
  console.log('\nOpen http://localhost:%s', port)
})
