const http = require('http');

const server = http.createServer((req, res) =>{

	res.writeHead(200, { 'Content-Type': 'text/plain'});
	res.end('Hola mundo soy yo el licenciado28!');
});

const PORT = 3000;

server.listen(PORT, () => {
	console.log(`Servidor funcionando en http://localhost:${PORT}`)
})