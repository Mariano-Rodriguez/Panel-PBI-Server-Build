"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.get('/', async () => {
    return { hello: 'world' };
});
Route_1.default.group(() => {
    Route_1.default.resource('usuarios', 'UsuariosController').apiOnly();
    Route_1.default.resource('permisos', 'PermisosController').apiOnly();
    Route_1.default.resource('vistas', 'VistasController').apiOnly();
    Route_1.default.get('allPermisos', 'PermisosController.indexAll');
    Route_1.default.post('asignarPermisos', 'UsuariosController.asignarPermisos');
    Route_1.default.get('getPermisosUsuario/:id', 'PermisosController.getPermisosUser');
    Route_1.default.get('usuariosPermisos', 'UsuariosController.usuariosPermisos');
}).prefix("api/v1").middleware(['auth']);
Route_1.default.group(() => {
    Route_1.default.post('login', 'AuthController.login');
}).prefix("auth/v1");
Route_1.default.group(() => {
    Route_1.default.get('logout', 'AuthController.logout');
}).prefix("auth/v1");
//# sourceMappingURL=routes.js.map