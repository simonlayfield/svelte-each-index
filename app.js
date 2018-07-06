const express = require('express');
const app = express();

app.use(express.static('public'));

app.get(["/", "index.html"], (req, res) => {
	res.sendFile(__dirname + "/public/index.html");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}`);
});
