import app from './src/app.js';

const port = 8001;

const server = app.listen(port, () => console.log(`Successfully started at ${port}`));

server.on('error', (err) => {
    console.error('Error starting server');
    server.close();
    process.exit(1);
});
