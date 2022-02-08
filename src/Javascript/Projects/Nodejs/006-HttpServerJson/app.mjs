import http from 'http';
import {writeLine} from '../../../csd-modules/csdstdioutil.mjs'
import {MessageInfo} from "./messageinfo.mjs";

const msgInfo = new MessageInfo("")

function rootUrlCallback(req, res)
{
    res.writeHead(200, {'Content-Type':'application/json'})
    msgInfo.message = "Root Url"
    res.end(msgInfo.toString())
}

function helloTRUrlCallback(req, res)
{
    res.writeHead(200, {'Content-Type':'application/json'})
    msgInfo.message = "Merhaba arkadaşlar"
    res.end(msgInfo.toString())
}

function helloENUrlCallback(req, res)
{
    res.writeHead(200, {'Content-Type':'application/json'})
    msgInfo.message = "Hi friends"
    res.end(msgInfo.toString())
}

function notFoundUrlCallback(req, res)
{
    res.writeHead(404, {'Content-Type':'application/json'})
    msgInfo.message = `${req.url} not found`
    res.end(msgInfo.toString())
}

function serverCallback(req, res)
{
    writeLine(`url:${req.url}`)

    switch (req.url) {
        case '/':
            rootUrlCallback(req, res)
            break;
        case '/hello-tr':
            helloTRUrlCallback(req, res)
            break;
        case '/hello-en':
            helloENUrlCallback(req, res)
            break;
        default:
            notFoundUrlCallback(req, res)
    }
}

function main()
{
    const server = http.createServer(serverCallback)
    const port = 50500

    writeLine(`Server is listening on port:${port}`)
    server.listen(port)
}

main()

