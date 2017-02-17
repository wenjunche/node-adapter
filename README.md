# OpenFin JavaScript adapter

Works in
- Node.js LTS ^6.9 

# Install as dependency

$ `npm install -S openfin/js-adapter`

# Usage
```javascript
const { connect, Identity } = require("js-adapter");

connect({
    address: "ws://localhost:9696",
    uuid: "my-uuid-123"
}).then(logic).catch(connError);
   
function logic(fin) {
    
    fin.System.getVersion().then(v => console.log("Connected to OpenFin version", v));

    const win = fin.Window.wrap(new Identity("remote-app-uuid", "remote-window-name"));
        
    win.moveBy(500, 0).then(win.flash());
       
}

function connError(err) {

    console.log("Error triying to connect,", err.message);

    console.log(err.stack);
}
```
# Local build

$ `npm run build`

# Test

$ `npm test`

# Repl

$ `npm run repl`
