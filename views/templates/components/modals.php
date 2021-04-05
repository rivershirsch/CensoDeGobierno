<div class="modal fade" id="modalUsuarios" tabindex="-1" aria-labelledby="modalUsuariosLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content border-0">
            <div class="modal-header border-0 d-flex justify-content-between align-items-center" style="background: linear-gradient(to right, #b91926,#e63c4d);">
                <h5 class="modal-title text-white" id="modalUsuariosLabel">Catálogos</h5>
                <button type="button" class="btn-close bg-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body p-0">
                <form id="formUsuarios" class="form-row card p-3 m-0 needs-validation" novalidate>
                    <input type="hidden" id="txtIdUsuario">
                    <div class="col-md-12 mb-3">
                        <label for="txtNombreUsuario" class="form-label">Nombre</label>
                        <input type="text" class="form-control" id="txtNombreUsuario" required />
                        <div class="valid-feedback">Correcto!</div>
                        <div class="invalid-feedback">Ingrese un nombre válido!</div>
                    </div>
                    <div class="col-md-12 mb-3">
                        <label for="txtCorreoUsuario" class="form-label">Correo</label>
                        <input type="email" class="form-control" id="txtCorreoUsuario" required />
                        <div class="valid-feedback">Correcto!</div>
                        <div class="invalid-feedback">Ingrese un correo válido!</div>
                    </div>
                    <div class="form-row m-0">
                        <div class="col-md-5 mb-3" id="contrasenia">
                            <label for="txtContraseniaUsuario" class="form-label">Contrasenia</label>
                            <input type="password" class="form-control" id="txtContraseniaUsuario" required />
                            <div class="valid-feedback">Correcto!</div>
                            <div class="invalid-feedback">Ingrese una contraseña válida!</div>
                        </div>
                        <div class="col-md-1 mx-0 mt-4 pt-3 px-0 text-center" id="contrasenia2">
                            <a id="ojo"><i class="fas fa-eye fa-lg" id="ojito"></i></a>
                        </div>
                        <div class="col-md-6 mb-3" id="contrasenia2">
                            <label for="txtPhoneUsuario" class="form-label">Teléfono</label>
                            <input type="number" class="form-control" id="txtPhoneUsuario" required />
                            <div class="valid-feedback">Correcto!</div>
                            <div class="invalid-feedback">Ingrese un teléfono válido!</div>
                        </div>
                    </div>
                    <div class="col-md-12 mb-3">
                        <label for="txtOcupacionUsuario" class="form-label">Direccion General</label>
                        <input type="text" class="form-control" id="txtOcupacionUsuario" required />
                        <div class="valid-feedback">Correcto!</div>
                        <div class="invalid-feedback">Ingrese una dirección válida!</div>
                    </div>
                    <div class="form-row mb-3">
                        <div class="col-md-6">
                            <label for="txtTipoUsuario" class="form-label">Tipo Usuario</label>
                            <select id="txtTipoUsuario" class="custom-select" aria-label="Select tipo de usuario" required>
                                <option value="" selected disabled>?</option>
                                <option value="Usuario">Usuario</option>
                                <option value="Administrador">Administrador</option>
                            </select>
                            <div class="valid-feedback">Correcto!</div>
                            <div class="invalid-feedback">Selecciona una opción!</div>
                        </div>
                        <div class="col-md-6">
                            <label for="txtEstatusUsuario" class="form-label">Estatus</label>
                            <select id="txtEstatusUsuario" class="custom-select" aria-label="Select tipo de usuario" required>
                                <option value="" selected disabled>?</option>
                                <option value="Activo">Activo</option>
                                <option value="Inactivo">Inactivo</option>
                            </select>
                            <div class="valid-feedback">Correcto!</div>
                            <div class="invalid-feedback">Selecciona una opción!</div>
                        </div>
                    </div>
                    <div class="col-12 d-flex justify-content-end">
                        <button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">Cerrar</button>
                        <button type="submit" class="btn btn-outline-primary ml-3">Enviar</button>
                    </div>
                </form>
            </div>
            <div class="modal-footer" style="background: linear-gradient(to left, #b91926,#e63c4d);"></div>
        </div>
    </div>
</div>