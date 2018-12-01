import app from "./app";
const PORT = 3000;

app.listen(PORT, () => {
    console.log('Servidor de Express activo en el puerto: ' + PORT);
})