const http = require("http");

http
  .createServer((req, res) => {
    console.log(req);

    //establece que la respuesta sera de texto plano y el header sera 200
    //res.writeHead(200, { "Content-Type": "text-plain" });

    // respuesta como JSON
    //res.writeHead(200, { "Content-Type": "application/json" });

    // const persona = {
    //   id: 1,
    //   nombre: "gohan",
    // };

    // res.write(JSON.stringify(persona));
    // res.end();

    /*****************************************/

    // respuesta CSV como attachment
    res.setHeader("Content-Disposition", "attachment; filename=lista.csv");
    res.writeHead(200, { "Content-Type": "application/csv" });

    res.write("id, nombre \n");
    res.write("1, johan \n");
    res.write("2, andres \n");
    res.write("3, peralta \n");
    res.end();
  })
  .listen(3000);

console.log("Escuchando en puerto 3000");
