const ws = new WebSocket('ws://wsc.2123.io/');
ws.binaryType = 'arraybuffer';
ws.onopen = () => {
  ws.send(JSON.stringify({
    "name": "My_name_11111111",
    "command": "challenge accepted"
  }));
}
ws.onmessage = function(e) {
  if(e.data instanceof ArrayBuffer) {
    console.log(e.data);
  } else {
    console.log(e.data);
  }
}
