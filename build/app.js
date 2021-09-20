"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
// Create a new express application instance
var app = (0, express_1.default)();
var puerto = 3000;
app.listen(puerto, function () {
    console.log("Servidor escuchando en el puerto " + puerto);
});
app.get('/', function (req, res) {
    res.send('Hola Mundo Soy Wilmar!');
});
