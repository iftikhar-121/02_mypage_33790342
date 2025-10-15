// Mypage web app

var http = require("http");
const port = 8000;

http.createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`<!doctype html>
<html>
<head>
    <title>Mohammad Hasan</title>
</head>
<body style="background-color:whitesmoke;">
    <h1 style="background-color:DodgerBlue; color:white; padding:20px;">Welcome to My Page</h1>
    
    <h2 style="background-color:orange; color:white; padding:10px;">About Me</h2>
    <p style="background-color:peachpuff; padding:15px;">Hello! I'm a Computer Science student currently studying at Goldsmiths. I'm fascinated by technology, especially when it comes to analyzing how systems work and using logic to solve challenges.</p>
    
    <h2 style="background-color:purple; color:white; padding:10px;">My Interests</h2>
    <p style="background-color:plum; padding:15px;">Outside of my studies, I'm a huge football fan and enjoy both playing and watching the sport. I also enjoy strategy games, which challenge me to think critically and manage resources effectively.</p>

    <h2 style="background-color:red; color:white; padding:10px;">Contact</h2>
    <p style="background-color:lightcoral; padding:15px;">Feel free to reach out if you'd like to collaborate on projects or discuss technology. I'm always open to new opportunities and interesting conversations!</p>
</body>
</html>`);
}).listen(port, function() {
    console.log(`Node server is running on port ${port}...`);
});