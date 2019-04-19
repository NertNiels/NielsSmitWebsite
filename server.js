const express = require('express');
const app = express();
const port = 3000;
const public = __dirname + '/public/';

app.use(express.static('public'));

app.get('/', (req, res) => {
	res.sendFile(public + 'home.html')
});

app.listen(port, () => console.log(`Server running on port ${port}`));