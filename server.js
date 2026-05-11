const { SerialPort } = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline');
const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const SERIAL_PATH = '/dev/cu.usbmodem1101';
const BAUD_RATE = 9600;

const DATABASE = {
    "53C19186520001": { name: "object 1", info: "111111。", color: "#ff4d4d" },
    "53AC8C86520001": { name: "object 2", info: "222222。", color: "#ffeb3b" },
    "53B28486520001": { name: "object 3", info: "333333。", color: "#9c27b0" },
    "53A36287520001": { name: "object 4", info: "444444。", color: "#4caf50" },
    "53C97A86520001": { name: "object 5", info: "555555。", color: "#ff9800" },
    "532B6E86520001": { name: "object 6", info: "666666。", color: "#2196f3" }
};

function connectSerial() {
    const port = new SerialPort({ path: SERIAL_PATH, baudRate: BAUD_RATE });
    const parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }));

    port.on('open', () => console.log('serial port opened'));

    port.on('close', () => {
        console.log('串口断开，3秒后重连...');
        setTimeout(connectSerial, 3000);
    });

    port.on('error', (err) => {
        console.error('serial port error:', err.message);
        setTimeout(connectSerial, 3000);
    });

    parser.on('data', (data) => {
        const uid = data.trim();
        console.log("NFC detected:", uid);
        if (DATABASE[uid]) {
            io.emit('show_info', { ...DATABASE[uid], uid });
        }
    });
}

connectSerial();

// serve static files (CSS, JS, Scene images, etc.)
app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

http.listen(3000, () => {
    console.log('Server listening at: http://localhost:3000');
});