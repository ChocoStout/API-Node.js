"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const PORT = 3000;
app_1.default.listen(PORT, () => {
    console.log('Servidor de Express activo en el puerto: ' + PORT);
});
//# sourceMappingURL=server.js.map