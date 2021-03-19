const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const public = __dirname + '/docs/';

app.use(express.static('docs'));

app.get('/', (req, res) => {
	res.sendFile(public + 'home.html')
});

app.get('/blog', (req, res) => {
	res.sendFile(public + 'blog/index.html');
});

app.get('/projects/sightreading', (req, res) => {
	res.sendFile(public + 'pojects/sightreading/index.html');
});

app.get('/annajaneandniels', (req, res) => {
	res.sendFile(public + 'annajaneandniels/index.html');
});

app.get('/cum', (req, res) => {
	res.sendFile(public + 'cum/index.html');
});
app.get('/cum/about', (req, res) => {
	res.sendFile(public + 'cum/about.html');
});
app.get('/cum/contact', (req, res) => {
	res.sendFile(public + 'cum/contact.html');
});

app.listen(port, () => console.log(`Server running on port ${port}`));