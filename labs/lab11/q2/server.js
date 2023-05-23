const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    // Set the content type to "application/pdf"
    res.setHeader('Content-Type', 'application/pdf');

    const pathToFile = path.join(__dirname, "..", "attachments", "file.pdf");

    // Read the PDF file
    fs.readFile(pathToFile, (err, data) => {
        if (err) {
            // If an error occurs while reading the file, send an error response
            res.statusCode = 500;
            res.end('Error reading the PDF file');
            return;
        }

        // Send the PDF file as the response
        res.statusCode = 200;
        res.end(data);
    });
});

// Start the server on the specified port
const port = 3000;
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
