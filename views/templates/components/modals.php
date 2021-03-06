<!-- MODAL AGREGAR Y EDITAR USUARIOS -->
<div class="modal fade" id="modalUsuarios" tabindex="-1" aria-labelledby="modalUsuariosLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content border-0">
            <div class="modal-header border-0 d-flex justify-content-between align-items-center" style="background: linear-gradient(to right, #b91926,#e63c4d);">
                <h5 class="modal-title text-white" id="modalUsuariosLabel"></h5>
                <button type="button" class="btn-close bg-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body p-0">
                <form id="formUsuarios" class="form-row card p-3 m-0 needs-validation" novalidate>
                    <input type="hidden" id="txtIdUsuario">
                    <div class="col-md-12 mb-3">
                        <label for="txtNombreUsuario" class="form-label">Nombre</label>
                        <input type="text" class="form-control" id="txtNombreUsuario" autocomplete="off" required />
                        <div class="valid-feedback">Correcto!</div>
                        <div class="invalid-feedback">Ingrese un nombre válido!</div>
                    </div>
                    <div class="col-md-12 mb-3">
                        <label for="txtCorreoUsuario" class="form-label">Correo</label>
                        <input type="email" class="form-control" id="txtCorreoUsuario" autocomplete="off" required />
                        <div class="valid-feedback">Correcto!</div>
                        <div class="invalid-feedback">Ingrese un correo válido!</div>
                    </div>
                    <div class="form-row m-0">
                        <div class="col-md-5 col-sm-11 col-11 mb-3" id="contrasenia">
                            <label for="txtContraseniaUsuario" class="form-label">Contraseña</label>
                            <input type="password" class="form-control" id="txtContraseniaUsuario" autocomplete="off" required />
                            <div class="valid-feedback">Correcto!</div>
                            <div class="invalid-feedback">Ingrese una contraseña válida!</div>
                        </div>
                        <div class="col-md-1 col-sm-1 col-1 mx-0 mt-4 pt-3 px-0 text-center" id="contrasenia2">
                            <a id="ojo"><i class="fas fa-eye fa-lg" id="ojito"></i></a>
                        </div>
                        <div class="col-md-6 mb-3" id="contrasenia2">
                            <label for="txtPhoneUsuario" class="form-label">Teléfono</label>
                            <input type="number" class="form-control" id="txtPhoneUsuario" autocomplete="off" required />
                            <div class="valid-feedback">Correcto!</div>
                            <div class="invalid-feedback">Ingrese un teléfono válido!</div>
                        </div>
                    </div>
                    <div class="col-md-12 mb-3">
                        <label for="txtOcupacionUsuario" class="form-label">Dirección general</label>
                        <input type="text" class="form-control" id="txtOcupacionUsuario" autocomplete="off" required />
                        <div class="valid-feedback">Correcto!</div>
                        <div class="invalid-feedback">Ingrese una dirección válida!</div>
                    </div>
                    <div class="form-row mb-3">
                        <div class="col-md-6">
                            <label for="txtTipoUsuario" class="form-label">Tipo de usuario</label>
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
                        <button type="submit" class="btn btn-outline-primary ml-3 adminElement">Enviar</button>
                    </div>
                </form>
            </div>
            <div class="modal-footer p-1" style="background: linear-gradient(to left, #b91926,#e63c4d);"></div>
        </div>
    </div>
</div>

<!-- MODAL AGREGAR Y EDITAR DEPENDENCIAS -->
<div class="modal fade" id="modalDependencias" tabindex="-1" aria-labelledby="modalDependenciasLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content border-0">
            <div class="modal-header border-0 d-flex justify-content-between align-items-center" style="background: linear-gradient(to right, #b91926,#e63c4d);">
                <h5 class="modal-title text-white" id="modalDependenciasLabel"></h5>
                <button type="button" class="btn-close bg-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form id="formDependencias" class="card p-3 m-0 needs-validation" novalidate>
                <div class="modal-body form-row p-0">
                    <div class="col-12">
                        <div class="form-row">
                            <div class="col-md-6 mb-3">
                                <label for="txtIdDependencia">Clave</label>
                                <input type="number" class="form-control" id="txtIdDependencia" autocomplete="off" required min="0" />
                                <div class="valid-feedback">Correcto!</div>
                                <div class="invalid-feedback">Ingrese un numero válido!</div>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label for="AnioDependencia">Año</label>
                                <select class="form-control" aria-label="Default select example" id="AnioDependencia" required>
                                    <option value="" disabled selected>?</option>
                                </select>
                                <div class="valid-feedback">Correcto!</div>
                                <div class="invalid-feedback">Ingrese un opción válida!</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 mb-3">
                        <datalist id="listaDependencias"></datalist>
                        <label for="txtDependencia" class="form-label">Nombre de Dependencia</label>
                        <input type="text" class="form-control" id="txtDependencia" autocomplete="off" required list="listaDependencias" />
                        <div class="valid-feedback">Correcto!</div>
                        <div class="invalid-feedback">Ingrese un nombre válido!</div>
                    </div>
                    <div class="col-12 mb-3">
                        <label for="clasificacionDependencia">Tipo de Clasificación</label>
                        <select class="form-control" aria-label="Default select example" id="clasificacionDependencia" required>
                            <option value="" disabled selected>?</option>
                            <option value="1">Administración Publica Centralizada</option>
                            <option value="2">Administración Publica Paraestatal</option>
                        </select>
                        <div class="valid-feedback">Correcto!</div>
                        <div class="invalid-feedback">Ingrese un opción válida!</div>
                    </div>
                </div>
                <div class="w-100 d-flex justify-content-end">
                    <button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">Cerrar</button>
                    <button id="submitDependencia" type="submit" class="btn btn-outline-primary ml-3">Enviar</button>
                </div>
            </form>
            <div class="modal-footer p-1" style="background: linear-gradient(to left, #b91926,#e63c4d);"></div>
        </div>
    </div>
</div>

<!-- MODAL ELIMINAR DEPENDENCIAS -->
<div class="modal fade" id="modalDependenciasEliminar" tabindex="-1" aria-labelledby="modalDependenciasEliminarLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content border-0">
            <div class="modal-header border-0 d-flex justify-content-between align-items-center" style="background: linear-gradient(to right, #b91926,#e63c4d);">
                <h6 class="modal-title text-white" id="modalDependenciasLabel">Eliminando dependencia...</h6>
                <button type="button" class="btn-close bg-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form id="formDependenciaEliminar" class="card p-3 m-0 needs-validation" novalidate>
                <div class="modal-body form-row p-0">
                    <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                        <div class="form-check text-center p-0">
                            <label class="form-check-label mb-1" for="flexRadioDefault1">Eliminar dependencia</label><br>
                            <input class="btn-check" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="all" required>
                            <label class="btn btn-sm btn-outline-success text-white" for="flexRadioDefault1">
                                <i class="fas fa-2x fa-times"></i>
                            </label>
                        </div>
                        <p class="small mt-2 mb-0 mx-1 text-justify text-muted">
                            Esto eliminará todo registro de esta dependencia en el año seleccionado, incluyendo la alta en el sistema, las respuestas del cuestionario y la contraseña de acceso.
                        </p>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                        <div class="form-check text-center p-0">
                            <label class="form-check-label mb-1" for="flexRadioDefault12">Eliminar resultados</label><br>
                            <input class="btn-check" type="radio" name="flexRadioDefault" id="flexRadioDefault12" value="historial" required>
                            <label class="btn btn-sm btn-outline-success text-white" for="flexRadioDefault12">
                                <i class="fas fa-2x fa-times"></i>
                            </label>
                        </div>
                        <p class="small mt-2 mb-0 mx-1 text-justify text-muted">
                            Esto eliminará las respuestas del cuestionario en el año seleccionado y la contraseña de acceso pero se conservará su alta en el sistema.
                        </p>
                    </div>
                </div>
                <div class="w-100 d-flex justify-content-end mt-3">
                    <button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">Cerrar</button>
                    <button type="submit" class="btn btn-outline-primary ml-3">Enviar</button>
                </div>
            </form>
            <div class="modal-footer p-1" style="background: linear-gradient(to left, #b91926,#e63c4d);"></div>
        </div>
    </div>
</div>