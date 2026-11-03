// Run with: npm start  (Node.js required)
const http=require('http'),fs=require('fs'),path=require('path');
const root=__dirname,types={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.json':'application/json','.webmanifest':'application/manifest+json','.png':'image/png'};
http.createServer((req,res)=>{let url;try{url=decodeURIComponent(new URL(req.url,'http://localhost').pathname)}catch{res.writeHead(400);return res.end('Bad request')}
if(url==='/')url='/index.html';const file=path.resolve(root,'.'+url);
if(!file.startsWith(root+path.sep)){res.writeHead(403);return res.end('Forbidden')}
fs.readFile(file,(err,data)=>{if(err){res.writeHead(404);return res.end('Not found')}res.writeHead(200,{'Content-Type':types[path.extname(file)]||'application/octet-stream','Cache-Control':'no-cache','Service-Worker-Allowed':'/'});res.end(data)});
}).listen(process.env.PORT||8080,'0.0.0.0',()=>console.log('UPSC Daily Backlog Planner running on port '+(process.env.PORT||8080)));