// VARIABLES GLOBALES DEL REPORTE DEL CUESTIONARIO 2021
let reporte, idInstitucion, anioInstitucion, clasificacionInstitucion, nombreInstitucion

document.addEventListener('DOMContentLoaded', () => {
    // DESCIFRAR PARAMETROS DE LA RUTA
    let parametros = window.location.href.split('?')[1].split('&')
    idInstitucion = atob(parametros[0])
    anioInstitucion = atob(parametros[1])

    // ESCUCHADOR PARA CERRAR LA VENTANA DESPUES DE IMPRIMIRLA
    window.addEventListener('afterprint', function () { this.close() }, false)

    // REPORTE INDIVIDUAL O CONCENTRADOS
    if (idInstitucion != 'general' && idInstitucion != 'centralizadas' && idInstitucion != 'paraestatales') {
        // OBTENER EL NOMBRE DE LA DEPENDENCIA
        recuperarNombreDependencia(idInstitucion, anioInstitucion).then(() => {
            // VERIFICAR SI EL CUESTIONARIO ESTA FINALIZADO, CERRAR LA VENTANA SI NO ES ASI
            verificarCuestionarioFinalizado().then((res) => {
                if (res != undefined && res == true) {
                    // OBTENER EL REPORTE HACIENDO USO DE LAS VARIABLES EN LA RUTA
                    obtenerReporte(idInstitucion, nombreInstitucion, clasificacionInstitucion, anioInstitucion).then(() => {
                        // PREGUNTA 1 SECCION 1
                        tr = document.createElement('tr')
                        tr.append(crearTD(idInstitucion, '1', '5%'))
                        tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                        tr.append(crearTD(clasificacionInstitucion, '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta1seccion1']['tipoInstitucion'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta1seccion1']['funcionPrincipal'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta1seccion1']['funcionSecundaria1'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta1seccion1']['funcionSecundaria2'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta1seccion1']['funcionSecundaria3'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta1seccion1']['funcionSecundaria4'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta1seccion1']['funcionSecundaria5'], '1', 'auto'))
                        document.getElementById('identifierQuestionP1S1').innerHTML = ''
                        document.getElementById('identifierQuestionP1S1').append(tr)
                        displayComentarios(reporte['pregunta1seccion1']['funcionesEspecificas'], 'contenedorComentariosEspecificosP1s1', 'txtDatosEspecificosP1s1')
                        displayComentarios(reporte['pregunta1seccion1']['comentarioGeneral'], 'contenedorComentariosGeneralP1s1', 'txtComentarioGeneral')

                        // PREGUNTA 2 SECCION 1
                        tr = document.createElement('tr')
                        tr.append(crearTD(idInstitucion, '1', '5%'))
                        tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                        tr.append(crearTD(reporte['pregunta2seccion1']['respuesta'], '1', 'auto'))
                        document.getElementById('identifierQuestionP2S1').innerHTML = ''
                        document.getElementById('identifierQuestionP2S1').append(tr)
                        displayComentarios(reporte['pregunta2seccion1']['comentarioGeneral'], 'contenedorComentariosGeneralP2s1', 'txtComentarioGeneralP2')

                        // PREGUNTA 3 SECCION 1
                        tr = document.createElement('tr')
                        tr.append(crearTD(idInstitucion, '1', '5%'))
                        tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                        tr.append(crearTD(reporte['pregunta3seccion1']['sexo'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta3seccion1']['edad'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta3seccion1']['ingresosMensual'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta3seccion1']['nivelEscolaridad'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta3seccion1']['estatusEscolaridad'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta3seccion1']['empleoAnterior'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta3seccion1']['antiguedadServicio'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta3seccion1']['antiguedadCargo'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta3seccion1']['pertinenciaIndigena'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta3seccion1']['condicionDiscapacidad'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta3seccion1']['formaDesignacion'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta3seccion1']['afiliacionPartidista'] != '' ? reporte['pregunta3seccion1']['afiliacionPartidista'] : 'NA', 'auto'))
                        tr.append(crearTD(reporte['pregunta3seccion1']['idInstitular'] != '' ? reporte['pregunta3seccion1']['idInstitular'] : 'NA', 'auto'))
                        document.getElementById('identifierQuestionP3S1').innerHTML = ''
                        document.getElementById('identifierQuestionP3S1').append(tr)
                        displayComentarios(reporte['pregunta3seccion1']['conceptosEspecificos'], 'contenedorComentariosEspecificosP3s1', 'txtDatosEspecificosP3s1')
                        displayComentarios(reporte['pregunta3seccion1']['comentarioGeneral'], 'contenedorComentariosGeneralP3s1', 'txtComentarioGeneralP3')

                        // PREGUNTA 4 SECCION 1
                        tr = document.createElement('tr')
                        tr.append(crearTD(idInstitucion, '1', '5%'))
                        tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                        tr.append(crearTD(reporte['pregunta4seccion1']['totalPersonal'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta4seccion1']['totalHombres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta4seccion1']['totalMujeres'], '1', 'auto'))
                        document.getElementById('identifierQuestionP4S1').innerHTML = ''
                        document.getElementById('identifierQuestionP4S1').append(tr)
                        displayComentarios(reporte['pregunta4seccion1']['comentarioGeneral'], 'contenedorComentariosGeneralP4s1', 'txtComentarioGeneralP4')

                        // PREGUNTA 5 SECCION 1
                        tr = document.createElement('tr')
                        tr.append(crearTD(idInstitucion, '1', '5%'))
                        tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                        tr.append(crearTD(reporte['pregunta5seccion1']['totalPersonal'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta5seccion1']['totalHombres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta5seccion1']['totalMujeres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta5seccion1']['confianzaHombres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta5seccion1']['confianzaMujeres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta5seccion1']['baseHombres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta5seccion1']['baseMujeres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta5seccion1']['eventualHombres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta5seccion1']['eventualMujeres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta5seccion1']['honorariosHombres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta5seccion1']['honorariosMujeres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta5seccion1']['otrosHombres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta5seccion1']['otrosMujeres'], '1', 'auto'))
                        document.getElementById('identifierQuestionP5S1').innerHTML = ''
                        document.getElementById('identifierQuestionP5S1').append(tr)
                        displayComentarios(reporte['pregunta5seccion1']['datosEspecificos'], 'contenedorComentariosEspecificosP5s1', 'txtDatosEspecificosP5s1')
                        displayComentarios(reporte['pregunta5seccion1']['comentarioGeneral'], 'contenedorComentariosGeneralP5s1', 'txtComentarioGeneralP5')

                        // PREGUNTA 6 SECCION 1
                        tr = document.createElement('tr')
                        tr.append(crearTD(idInstitucion, '1', '5%'))
                        tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                        tr.append(crearTD(reporte['pregunta6seccion1']['totalPersonal'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta6seccion1']['totalHombres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta6seccion1']['totalMujeres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta6seccion1']['isssteHombres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta6seccion1']['issteMujeres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta6seccion1']['issfhHombres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta6seccion1']['issfhMujeres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta6seccion1']['imssHombres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta6seccion1']['imssMujeres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta6seccion1']['otroHombres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta6seccion1']['otroMujeres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta6seccion1']['sinSeguroHombre'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta6seccion1']['sinSeguroMujeres'], '1', 'auto'))
                        document.getElementById('identifierQuestionP6S1').innerHTML = ''
                        document.getElementById('identifierQuestionP6S1').append(tr)
                        displayComentarios(reporte['pregunta6seccion1']['datosEspecificos'], 'contenedorComentariosEspecificosP6s1', 'txtDatosEspecificosP6s1')
                        displayComentarios(reporte['pregunta6seccion1']['comentarioGeneral'], 'contenedorComentariosGeneralP6s1', 'txtComentarioGeneralP6')

                        // PREGUNTA 7 SECCION 1
                        tr = document.createElement('tr')
                        tr.append(crearTD(idInstitucion, '1', '5%'))
                        tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                        tr.append(crearTD(reporte['pregunta7seccion1']['totalPersonal'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta7seccion1']['totalHombres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta7seccion1']['totalMujeres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta7seccion1']['1824Hombres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta7seccion1']['1824Mujeres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta7seccion1']['2529Hombres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta7seccion1']['2529Mujeres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta7seccion1']['3034Hombres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta7seccion1']['3034Mujeres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta7seccion1']['3539Hombres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta7seccion1']['3539Mujeres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta7seccion1']['4044Hombres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta7seccion1']['4044Mujeres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta7seccion1']['4549Hombres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta7seccion1']['4549Mujeres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta7seccion1']['5054Hombres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta7seccion1']['5054Mujeres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta7seccion1']['5559Hombres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta7seccion1']['5559Mujeres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta7seccion1']['60Hombres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta7seccion1']['60Mujeres'], '1', 'auto'))
                        document.getElementById('identifierQuestionP7S1').innerHTML = ''
                        document.getElementById('identifierQuestionP7S1').append(tr)
                        displayComentarios(reporte['pregunta7seccion1']['comentarioGeneral'], 'contenedorComentariosGeneralP7s1', 'txtComentarioGeneralP7')

                        // PREGUNTA 8 SECCION 1
                        tr = document.createElement('tr')
                        tr.append(crearTD(idInstitucion, '1', '5%'))
                        tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                        tr.append(crearTD(reporte['pregunta8seccion1']['totalPersonal'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta8seccion1']['totalHombres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta8seccion1']['totalMujeres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta8seccion1']['sinPagaHombres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta8seccion1']['sinPagaMujeres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta8seccion1']['1a1500Hombres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta8seccion1']['1a1500Mujeres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta8seccion1']['5001a10000Hombres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta8seccion1']['5001a10000Mujeres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta8seccion1']['10001a15000Hombres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta8seccion1']['10001a15000Mujeres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta8seccion1']['15001a20000Hombres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta8seccion1']['15001a20000Mujeres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta8seccion1']['20001a25000Hombres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta8seccion1']['20001a25000Mujeres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta8seccion1']['25001a30000Hombres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta8seccion1']['25001a30000Mujeres'], '1', 'auto'))
                        document.getElementById('identifierQuestionP8S1').innerHTML = ''
                        document.getElementById('identifierQuestionP8S1').append(tr)
                        tr = document.createElement('tr')
                        tr.append(crearTD(idInstitucion, '1', '5%'))
                        tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                        tr.append(crearTD(reporte['pregunta8seccion1']['30001a35000Hombres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta8seccion1']['30001a35000Mujeres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta8seccion1']['35001a40000Hombres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta8seccion1']['35001a40000Mujeres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta8seccion1']['40001a45000Hombres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta8seccion1']['40001a45000Mujeres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta8seccion1']['45001a50000Hombres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta8seccion1']['45001a50000Mujeres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta8seccion1']['50001a55000Hombres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta8seccion1']['50001a55000Mujeres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta8seccion1']['55001a60000Hombres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta8seccion1']['55001a60000Mujeres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta8seccion1']['60001a65000Hombres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta8seccion1']['60001a65000Mujeres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta8seccion1']['65001a70000Hombres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta8seccion1']['65001a70000Mujeres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta8seccion1']['mas70000Hombres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta8seccion1']['mas70000Mujeres'], '1', 'auto'))
                        document.getElementById('identifierQuestionP81S1').innerHTML = ''
                        document.getElementById('identifierQuestionP81S1').append(tr)
                        displayComentarios(reporte['pregunta8seccion1']['datosEspecificos'], 'contenedorComentariosEspecificosP8s1', 'txtDatosEspecificosP8s1')
                        displayComentarios(reporte['pregunta8seccion1']['comentarioGeneral'], 'contenedorComentariosGeneralP8s1', 'txtComentarioGeneralP8')

                        // PREGUNTA 9 SECCION 1
                        tr = document.createElement('tr')
                        tr.append(crearTD(idInstitucion, '1', '5%'))
                        tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                        tr.append(crearTD(reporte['pregunta9seccion1']['totalPersonal'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta9seccion1']['totalHombres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta9seccion1']['totalMujeres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta9seccion1']['ningunoHombres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta9seccion1']['ningunoMujeres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta9seccion1']['prePriHombres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta9seccion1']['prePriMujeres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta9seccion1']['secundariaHombres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta9seccion1']['secundariaMujeres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta9seccion1']['preparatoriaHombres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta9seccion1']['preparatoriaMujeres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta9seccion1']['carreraHombres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta9seccion1']['carreraMujeres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta9seccion1']['licenciaturaHombres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta9seccion1']['licenciaturaMujeres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta9seccion1']['maestriaHombres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta9seccion1']['maestriaMujeres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta9seccion1']['doctoradoHombres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta9seccion1']['doctoradoMujeres'], '1', 'auto'))
                        document.getElementById('identifierQuestionP9S1').innerHTML = ''
                        document.getElementById('identifierQuestionP9S1').append(tr)
                        displayComentarios(reporte['pregunta9seccion1']['datosEspecificod'], 'contenedorComentariosEspecificosP9s1', 'txtDatosEspecificosP9s1')
                        displayComentarios(reporte['pregunta9seccion1']['comentarioGeneral'], 'contenedorComentariosGeneralP9s1', 'txtComentarioGeneralP9')

                        // PREGUNTA 10 SECCION 1
                        tr = document.createElement('tr')
                        tr.append(crearTD(idInstitucion, '1', '5%'))
                        tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                        tr.append(crearTD(reporte['pregunta10seccion1']['totalPersonal'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta10seccion1']['totalHombres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta10seccion1']['totalMujeres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta10seccion1']['perteneceIndigenaH'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta10seccion1']['perteneceIndigenaM'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta10seccion1']['noPerteneceIndigenaH'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta10seccion1']['noPerteneneIndigenaM'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta10seccion1']['noIdentificadoH'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta10seccion1']['noIdentificadoM'], '1', 'auto'))
                        document.getElementById('identifierQuestionP10S1').innerHTML = ''
                        document.getElementById('identifierQuestionP10S1').append(tr)
                        displayComentarios(reporte['pregunta10seccion1']['datosEspecíficos'], 'contenedorComentariosEspecificosP10s1', 'txtDatosEspecificosP10s1')
                        displayComentarios(reporte['pregunta10seccion1']['comentariosPregunta'], 'contenedorComentariosGeneralP10s1', 'txtComentarioGeneralP10')

                        // PREGUNTA 11 SECCION 1
                        tr = document.createElement('tr')
                        tr.append(crearTD('', '1', '37%'))
                        td = document.createElement('td')
                        td.className = 'text-center align-middle px-5'
                        td.appendChild(document.createTextNode('Total: ' + reporte['pregunta11seccion1']['totalPersonal']))
                        tr.append(td)
                        td = document.createElement('td')
                        td.className = 'text-center align-middle px-5'
                        td.appendChild(document.createTextNode('Hombres: ' + reporte['pregunta11seccion1']['totalHombres']))
                        tr.append(td)
                        td = document.createElement('td')
                        td.className = 'text-center align-middle px-5'
                        td.appendChild(document.createTextNode('Mujeres: ' + reporte['pregunta11seccion1']['totalMujeres']))
                        tr.append(td)
                        document.getElementById('identifierQuestionSumaTotalIndigenaP11S1').innerHTML = ''
                        document.getElementById('identifierQuestionSumaTotalIndigenaP11S1').append(tr)
                        tr = document.createElement('tr')
                        tr.append(crearTD(idInstitucion, '1', '5%'))
                        tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                        tr.append(crearTD(reporte['pregunta11seccion1']['chinantecoTotal'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta11seccion1']['chinantecoHombres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta11seccion1']['chinantecoMujeres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta11seccion1']['cholTotal'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta11seccion1']['cholHombres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta11seccion1']['cholMujeres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta11seccion1']['coraTotal'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta11seccion1']['coraHombres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta11seccion1']['coraMujeres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta11seccion1']['huastecoTotal'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta11seccion1']['huastecoHombres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta11seccion1']['huastecoMujeres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta11seccion1']['huicholTotal'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta11seccion1']['huicholHombres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta11seccion1']['huicholMujeres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta11seccion1']['mayaTotal'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta11seccion1']['mayaHombres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta11seccion1']['mayaMujeres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta11seccion1']['mayoTotal'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta11seccion1']['mayoHombres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta11seccion1']['mayoMujeres'], '1', 'auto'))
                        document.getElementById('identifierQuestionIndigena17P11S1').innerHTML = ''
                        document.getElementById('identifierQuestionIndigena17P11S1').append(tr)
                        tr = document.createElement('tr')
                        tr.append(crearTD(idInstitucion, '1', '5%'))
                        tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                        tr.append(crearTD(reporte['pregunta11seccion1']['mazahuaTotal'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta11seccion1']['mazahuaHombres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta11seccion1']['mazahuaMujeres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta11seccion1']['mazatecoTotal'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta11seccion1']['mazatecoHombres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta11seccion1']['mazatecoMujeres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta11seccion1']['mixeTotal'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta11seccion1']['mixeHombres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta11seccion1']['mixeMujeres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta11seccion1']['mixtecoTotal'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta11seccion1']['mixtecoHombres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta11seccion1']['mixtecoMujeres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta11seccion1']['nahuatlTotal'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta11seccion1']['nahuatlHombres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta11seccion1']['nahuatlMujeres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta11seccion1']['otomiTotal'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta11seccion1']['otomiHombres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta11seccion1']['otomiMujeres'], '1', 'auto'))
                        document.getElementById('identifierQuestionIndigena813P11S1').innerHTML = ''
                        document.getElementById('identifierQuestionIndigena813P11S1').append(tr)
                        tr = document.createElement('tr')
                        tr.append(crearTD(idInstitucion, '1', '5%'))
                        tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                        tr.append(crearTD(reporte['pregunta11seccion1']['tarascoTotal'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta11seccion1']['tarascoHombres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta11seccion1']['tarascoMujeres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta11seccion1']['tarahumaraTotal'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta11seccion1']['tarahumaraHombres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta11seccion1']['tarahumaraMujeres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta11seccion1']['tepehuanoTotal'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta11seccion1']['tepehuanoHombres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta11seccion1']['tepehuanoMujeres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta11seccion1']['tlapanecoTotal'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta11seccion1']['tlapanecoHombres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta11seccion1']['tlapanecoMujeres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta11seccion1']['totonacoTotal'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta11seccion1']['totonacoHombres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta11seccion1']['totnacoMujeres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta11seccion1']['tseltalTotal'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta11seccion1']['tseltalHombres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta11seccion1']['tseltalMujeres'], '1', 'auto'))
                        document.getElementById('identifierQuestionIndigena1419P11S1').innerHTML = ''
                        document.getElementById('identifierQuestionIndigena1419P11S1').append(tr)
                        tr = document.createElement('tr')
                        tr.append(crearTD(idInstitucion, '1', '5%'))
                        tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                        tr.append(crearTD(reporte['pregunta11seccion1']['tsotsitTotal'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta11seccion1']['tsotsitHombres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta11seccion1']['tsotsitMujeres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta11seccion1']['yaquiTotal'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta11seccion1']['yaquiHombres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta11seccion1']['yaquiMujeres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta11seccion1']['zapotecoTotal'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta11seccion1']['zapotecoHombres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta11seccion1']['zapotecoMujeres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta11seccion1']['zoqueTotal'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta11seccion1']['zoqueHombres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta11seccion1']['zoqueMujeres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta11seccion1']['otroTotal'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta11seccion1']['otroHombres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta11seccion1']['otroMujeres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta11seccion1']['noidentificadoTotal'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta11seccion1']['noIdentificadoHombres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta11seccion1']['noIdentificadoMujeres'], '1', 'auto'))
                        document.getElementById('identifierQuestionIndigena2025P11S1').innerHTML = ''
                        document.getElementById('identifierQuestionIndigena2025P11S1').append(tr)
                        displayComentarios(reporte['pregunta11seccion1']['datosEspecificos'], 'contenedorComentariosEspecificosP11s1', 'txtDatosEspecificosP11s1')
                        displayComentarios(reporte['pregunta11seccion1']['comentarioGeneral'], 'contenedorComentariosGeneralP11s1', 'txtComentarioGeneralP11')

                        // PREGUNTA 12 SECCION 1
                        tr = document.createElement('tr')
                        tr.append(crearTD(idInstitucion, '1', '5%'))
                        tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                        tr.append(crearTD(reporte['pregunta12seccion1']['totalPersonal'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta12seccion1']['totalHombres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta12seccion1']['totalMujeres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta12seccion1']['conDiscapacidadHombres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta12seccion1']['conDiscapacidadMujeres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta12seccion1']['sinDiscapacidadHombres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta12seccion1']['sinDiscapacidadMujeres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta12seccion1']['noIdentificadoHombres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta12seccion1']['noIdentificadoMujeres'], '1', 'auto'))
                        document.getElementById('identifierQuestionP12S1').innerHTML = ''
                        document.getElementById('identifierQuestionP12S1').append(tr)
                        displayComentarios(reporte['pregunta12seccion1']['datosEspecificos'], 'contenedorComentariosEspecificosP12s1', 'txtDatosEspecificosP12s1')
                        displayComentarios(reporte['pregunta12seccion1']['comentarioGeneral'], 'contenedorComentariosGeneralP12s1', 'txtComentarioGeneralP12')

                        // PREGUNTA 13 SECCION 1
                        tr = document.createElement('tr')
                        tr.append(crearTD('', '1', '37%'))
                        td = document.createElement('td')
                        td.className = 'text-center align-middle px-5'
                        td.appendChild(document.createTextNode('Total: ' + reporte['pregunta13seccion1']['totalPersonal']))
                        tr.append(td)
                        td = document.createElement('td')
                        td.className = 'text-center align-middle px-5'
                        td.appendChild(document.createTextNode('Hombres: ' + reporte['pregunta13seccion1']['totalHombres']))
                        tr.append(td)
                        td = document.createElement('td')
                        td.className = 'text-center align-middle px-5'
                        td.appendChild(document.createTextNode('Mujeres: ' + reporte['pregunta13seccion1']['totalMujeres']))
                        tr.append(td)
                        document.getElementById('identifierQuestionSumaTotalDiscapacidadP13S1').innerHTML = ''
                        document.getElementById('identifierQuestionSumaTotalDiscapacidadP13S1').append(tr)
                        tr = document.createElement('tr')
                        tr.append(crearTD(idInstitucion, '1', '5%'))
                        tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                        tr.append(crearTD((parseInt(reporte['pregunta13seccion1']['discapacidadCaminarHombres']) + parseInt(reporte['pregunta13seccion1']['discapacidadCaminarMujeres'])), '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta13seccion1']['discapacidadCaminarHombres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta13seccion1']['discapacidadCaminarMujeres'], '1', 'auto'))
                        tr.append(crearTD((parseInt(reporte['pregunta13seccion1']['discapacidadVerHombres']) + parseInt(reporte['pregunta13seccion1']['discapacidadaVerMujeres'])), '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta13seccion1']['discapacidadVerHombres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta13seccion1']['discapacidadaVerMujeres'], '1', 'auto'))
                        tr.append(crearTD((parseInt(reporte['pregunta13seccion1']['discapacidadMoverHombres']) + parseInt(reporte['pregunta13seccion1']['discapacidadMoverMuejeres'])), '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta13seccion1']['discapacidadMoverHombres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta13seccion1']['discapacidadMoverMuejeres'], '1', 'auto'))
                        tr.append(crearTD((parseInt(reporte['pregunta13seccion1']['discapacidadAprenderHombres']) + parseInt(reporte['pregunta13seccion1']['discapacidadAprenderMujeres'])), '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta13seccion1']['discapacidadAprenderHombres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta13seccion1']['discapacidadAprenderMujeres'], '1', 'auto'))
                        tr.append(crearTD((parseInt(reporte['pregunta13seccion1']['discapacidadOirHombres']) + parseInt(reporte['pregunta13seccion1']['discapacidadOirMujeres'])), '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta13seccion1']['discapacidadOirHombres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta13seccion1']['discapacidadOirMujeres'], '1', 'auto'))
                        document.getElementById('identifierQuestionDiscapacidad15P13S1').innerHTML = ''
                        document.getElementById('identifierQuestionDiscapacidad15P13S1').append(tr)
                        tr = document.createElement('tr')
                        tr.append(crearTD(idInstitucion, '1', '5%'))
                        tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                        tr.append(crearTD((parseInt(reporte['pregunta13seccion1']['discapacidadHablarHombres']) + parseInt(reporte['pregunta13seccion1']['discapacidadHablarMujeres'])), '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta13seccion1']['discapacidadHablarHombres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta13seccion1']['discapacidadHablarMujeres'], '1', 'auto'))
                        tr.append(crearTD((parseInt(reporte['pregunta13seccion1']['discapacidadBaniarseHombres']) + parseInt(reporte['pregunta13seccion1']['discapacidadBaniarseMujeres'])), '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta13seccion1']['discapacidadBaniarseHombres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta13seccion1']['discapacidadBaniarseMujeres'], '1', 'auto'))
                        tr.append(crearTD((parseInt(reporte['pregunta13seccion1']['discapacidadDepresionHombres']) + parseInt(reporte['pregunta13seccion1']['discapacidadDepresionMujeres'])), '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta13seccion1']['discapacidadDepresionHombres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta13seccion1']['discapacidadDepresionMujeres'], '1', 'auto'))
                        tr.append(crearTD((parseInt(reporte['pregunta13seccion1']['otraDiscapacidadHombres']) + parseInt(reporte['pregunta13seccion1']['otraDiscapacidadMujeres'])), '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta13seccion1']['otraDiscapacidadHombres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta13seccion1']['otraDiscapacidadMujeres'], '1', 'auto'))
                        tr.append(crearTD((parseInt(reporte['pregunta13seccion1']['discapacidadNoIdentificadaHombres']) + parseInt(reporte['pregunta13seccion1']['discapacidadNoIdentificadaMujeres'])), '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta13seccion1']['discapacidadNoIdentificadaHombres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta13seccion1']['discapacidadNoIdentificadaMujeres'], '1', 'auto'))
                        document.getElementById('identifierQuestionDiscapacidad610P13S1').innerHTML = ''
                        document.getElementById('identifierQuestionDiscapacidad610P13S1').append(tr)
                        displayComentarios(reporte['pregunta13seccion1']['datosEspecificos'], 'contenedorComentariosEspecificosP13s1', 'txtDatosEspecificosP13s1')
                        displayComentarios(reporte['pregunta13seccion1']['comentarioGeneral'], 'contenedorComentariosGeneralP13s1', 'txtComentarioGeneralP13')

                        // PREGUNTA 14 SECCION 1
                        tr = document.createElement('tr')
                        tr.append(crearTD(idInstitucion, '1', '5%'))
                        tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                        tr.append(crearTD(reporte['pregunta14seccion1']['Respuesta'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta14seccion1']['TotalPersonal'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta14seccion1']['totalHombres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta14seccion1']['totalMujeres'], '1', 'auto'))
                        document.getElementById('identifierQuestionP14S1').innerHTML = ''
                        document.getElementById('identifierQuestionP14S1').append(tr)
                        displayComentarios(reporte['pregunta14seccion1']['ComentarioGeneral'], 'contenedorComentariosGeneralP14s1', 'txtComentarioGeneralP14')

                        // PREGUNTA 15 SECCION 1
                        tr = document.createElement('tr')
                        tr.append(crearTD(idInstitucion, '1', '5%'))
                        tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                        tr.append(crearTD(reporte['pregunta15seccion1']['Respuesta'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta15seccion1']['TotalPersonal'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta15seccion1']['Hombres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta15seccion1']['Mujeres'], '1', 'auto'))
                        document.getElementById('identifierQuestionP15S1').innerHTML = ''
                        document.getElementById('identifierQuestionP15S1').append(tr)
                        displayComentarios(reporte['pregunta15seccion1']['comentarioGeneral'], 'contenedorComentariosGeneralP15s1', 'txtComentarioGeneralP15')

                        // PREGUNTA 16 SECCION 1
                        tr = document.createElement('tr')
                        tr.append(crearTD(idInstitucion, '1', '5%'))
                        tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                        tr.append(crearTD(reporte['pregunta16seccion1']['Respuesta'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta16seccion1']['disposicionNormativa'], '1', 'auto'))
                        document.getElementById('identifierQuestionP16S1').innerHTML = ''
                        document.getElementById('identifierQuestionP16S1').append(tr)
                        displayComentarios(reporte['pregunta16seccion1']['comentarioGenera'], 'contenedorComentariosGeneralP16s1', 'txtComentarioGeneralP16')

                        // PREGUNTA 17 SECCION 1
                        tr = document.createElement('tr')
                        tr.append(crearTD(idInstitucion, '1', '5%'))
                        tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                        tr.append(crearTD(reporte['pregunta17seccion1']['servicioCivil'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta17seccion1']['Reclutamiento'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta17seccion1']['diseñoSeleccion'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta17seccion1']['diseñoCurricular'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta17seccion1']['actualizacionPerfil'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta17seccion1']['diseñoValidacion'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta17seccion1']['concursosPublicos'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta17seccion1']['Mecanismos'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta17seccion1']['programasCapacitacion'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta17seccion1']['evaluacionImpacto'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta17seccion1']['programasEstimulos'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta17seccion1']['separacionServicio'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta17seccion1']['Otro'], '1', 'auto'))
                        document.getElementById('identifierQuestionP17S1').innerHTML = ''
                        document.getElementById('identifierQuestionP17S1').append(tr)
                        displayComentarios(reporte['pregunta17seccion1']['datosEspecificos'], 'contenedorComentariosEspecificosP17s1', 'txtDatosEspecificosP17s1')
                        displayComentarios(reporte['pregunta17seccion1']['comentarioGeneral'], 'contenedorComentariosGeneralP17s1', 'txtComentarioGeneralP17')

                        // PREGUNTA 18 SECCION 1
                        tr = document.createElement('tr')
                        tr.append(crearTD(idInstitucion, '1', '5%'))
                        tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                        tr.append(crearTD(reporte['pregunta18seccion1']['Respuesta'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta18seccion1']['nombreUnidad'], '1', 'auto'))
                        document.getElementById('identifierQuestionP18S1').innerHTML = ''
                        document.getElementById('identifierQuestionP18S1').append(tr)
                        displayComentarios(reporte['pregunta18seccion1']['comentarioGeneral'], 'contenedorComentariosGeneralP18s1', 'txtComentarioGeneralP18')

                        // PREGUNTA 19 SECCION 1
                        tr = document.createElement('tr')
                        tr.append(crearTD(idInstitucion, '1', '5%'))
                        tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                        tr.append(crearTD(reporte['pregunta19seccion1']['Respuesta'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta19seccion1']['accionesFormativas'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta19seccion1']['accionesFormativasConcluidas'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta19seccion1']['TotalPersonal'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta19seccion1']['totalHombres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta19seccion1']['totalMujeres'], '1', 'auto'))
                        document.getElementById('identifierQuestionP19S1').innerHTML = ''
                        document.getElementById('identifierQuestionP19S1').append(tr)
                        displayComentarios(reporte['pregunta19seccion1']['comentarioGeneral'], 'contenedorComentariosGeneralP19s1', 'txtComentarioGeneralP19')

                        // PREGUNTA 24 SECCION 1
                        tr = document.createElement('tr')
                        tr.append(crearTD(idInstitucion, '1', '5%'))
                        tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                        tr.append(crearTD(reporte['pregunta24seccion1']['totalInmuebles'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta24seccion1']['inmueblesPropios'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta24seccion1']['inmueblesRentados'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta24seccion1']['inmueblesOtros'], '1', 'auto'))
                        document.getElementById('identifierQuestionP24S1').innerHTML = ''
                        document.getElementById('identifierQuestionP24S1').append(tr)
                        displayComentarios(reporte['pregunta24seccion1']['datosEspecíficos'], 'contenedorComentariosEspecificosP24s1', 'txtDatosEspecificosP24s1')
                        displayComentarios(reporte['pregunta24seccion1']['comentarioGeneral'], 'contenedorComentariosGeneralP24s1', 'txtComentarioGeneralP24')

                        // PREGUNTA 25 SECCION 1
                        tr = document.createElement('tr')
                        tr.append(crearTD(idInstitucion, '1', '5%'))
                        tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                        tr.append(crearTD(reporte['pregunta25seccion1']['Respuesta'], '1', 'auto'))
                        document.getElementById('identifierQuestionP25S1').innerHTML = ''
                        document.getElementById('identifierQuestionP25S1').append(tr)
                        displayComentarios(reporte['pregunta25seccion1']['comentarioGeneral'], 'contenedorComentariosGeneralP25s1', 'txtComentarioGeneralP25')

                        // PREGUNTA 26 SECCION 1
                        tr = document.createElement('tr')
                        tr.append(crearTD(idInstitucion, '1', '5%'))
                        tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                        tr.append(crearTD(reporte['pregunta26seccion1']['escuelas1'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta26seccion1']['funcionesEducativas1'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta26seccion1']['formaMixta1'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta26seccion1']['escuelas2'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta26seccion1']['funcionesEducativas2'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta26seccion1']['formaMixta2'], '1', 'auto'))
                        document.getElementById('txtTotalInmueblesP26').value = reporte['pregunta26seccion1']['totalInmueblesEducacion']
                        document.getElementById('txtTotalInmuebles1P26').value = reporte['pregunta26seccion1']['totalFuncionPrincipalEducacion']
                        document.getElementById('txtTotalInmuebles2P26').value = reporte['pregunta26seccion1']['totalOtroTIpoFuncion']
                        document.getElementById('identifierQuestionP26S1').innerHTML = ''
                        document.getElementById('identifierQuestionP26S1').append(tr)
                        displayComentarios(reporte['pregunta26seccion1']['datosEspecificos'], 'contenedorComentariosEspecificosP26s1', 'txtDatosEspecificosP26s1')
                        displayComentarios(reporte['pregunta26seccion1']['comentarioGeneral'], 'contenedorComentariosGeneralP26s1', 'txtComentarioGeneralP26')

                        // PREGUNTA 27 SECCION 1
                        tr = document.createElement('tr')
                        tr.append(crearTD(idInstitucion, '1', '5%'))
                        tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                        tr.append(crearTD(reporte['pregunta27seccion1']['Respuesta'], '1', 'auto'))
                        document.getElementById('identifierQuestionP27S1').innerHTML = ''
                        document.getElementById('identifierQuestionP27S1').append(tr)
                        displayComentarios(reporte['pregunta27seccion1']['comentarioGeneral'], 'contenedorComentariosGeneralP27s1', 'txtComentarioGeneralP27')

                        // PREGUNTA 28 SECCION 1
                        tr = document.createElement('tr')
                        tr.append(crearTD(idInstitucion, '1', '5%'))
                        tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                        tr.append(crearTD(reporte['pregunta28seccion1']['totalClinicas'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta28seccion1']['totalCentroSalud'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta28seccion1']['totalHospitales'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta28seccion1']['totalFuncionesSalud'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta28seccion1']['totalMixta'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta28seccion1']['totalOtraFuncionClinica'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta28seccion1']['totalOtraFuncionSalud'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta28seccion1']['totalOtraFuncionHospitales'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta28seccion1']['totalOtraFuncionesSalud'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta28seccion1']['totalOtraFuncionMixta'], '1', 'auto'))
                        document.getElementById('txtTotalInmueblesP28').innerHTML = reporte['pregunta28seccion1']['totalnmueblesSalud']
                        document.getElementById('txtTotalInmuebles1P28').innerHTML = reporte['pregunta28seccion1']['totalFuncionPrincipalSalud']
                        document.getElementById('txtTotalInmuebles2P28').innerHTML = reporte['pregunta28seccion1']['totalOtraFuncion']
                        document.getElementById('identifierQuestionP28S1').innerHTML = ''
                        document.getElementById('identifierQuestionP28S1').append(tr)
                        displayComentarios(reporte['pregunta28seccion1']['datosEspecificos'], 'contenedorComentariosEspecificosP28s1', 'txtDatosEspecificosP28s1')
                        displayComentarios(reporte['pregunta28seccion1']['comentarioGeneral'], 'contenedorComentariosGeneralP28s1', 'txtComentarioGeneralP28')

                        // PREGUNTA 29 SECCION 1
                        tr = document.createElement('tr')
                        tr.append(crearTD(idInstitucion, '1', '5%'))
                        tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                        tr.append(crearTD(reporte['pregunta29seccion1']['Respuesta'], '1', 'auto'))
                        document.getElementById('identifierQuestionP29S1').innerHTML = ''
                        document.getElementById('identifierQuestionP29S1').append(tr)
                        displayComentarios(reporte['pregunta29seccion1']['comentarioGeneral'], 'contenedorComentariosGeneralP29s1', 'txtComentarioGeneralP29')

                        // PREGUNTA 30 SECCION 1
                        tr = document.createElement('tr')
                        tr.append(crearTD(idInstitucion, '1', '5%'))
                        tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                        document.getElementById('txtTotalInmueblesP30').innerHTML = reporte['pregunta30seccion1']['totalInmueblesDeporte']
                        document.getElementById('txtTotalInmuebles1P30').innerHTML = reporte['pregunta30seccion1']['totalFuncionPrincipal']
                        document.getElementById('txtTotal1x1P30').innerHTML = reporte['pregunta30seccion1']['funcionPrincipalActivacionFisica']
                        document.getElementById('txtTotal1x2P30').innerHTML = reporte['pregunta30seccion1']['funcionPrincipalRecreacionFisica']
                        document.getElementById('txtTotal1x3P30').innerHTML = reporte['pregunta30seccion1']['funcionPrincipalDeporteSocial']
                        document.getElementById('txtTotal1x4P30').innerHTML = reporte['pregunta30seccion1']['funcionPrincipalAltoRendimiento']
                        document.getElementById('txtTotal1x5P30').innerHTML = reporte['pregunta30seccion1']['funcionPrincipalEventosDeportivos']
                        document.getElementById('txtTotal1x6P30').innerHTML = reporte['pregunta30seccion1']['funcionPrincipalOtros']
                        document.getElementById('txtTotal1x7P30').innerHTML = reporte['pregunta30seccion1']['funcionPrincipalIndistinciones']
                        document.getElementById('txtTotalInmuebles2P30').innerHTML = reporte['pregunta30seccion1']['totalOtraFuncion']
                        document.getElementById('txtTotal2x1P30').innerHTML = reporte['pregunta30seccion1']['otraFuncionActivacionFisica']
                        document.getElementById('txtTotal2x2P30').innerHTML = reporte['pregunta30seccion1']['otraFuncionRecreacionFisica']
                        document.getElementById('txtTotal2x3P30').innerHTML = reporte['pregunta30seccion1']['otrafuncionDeporteSocial']
                        document.getElementById('txtTotal2x4P30').innerHTML = reporte['pregunta30seccion1']['otraFuncionAltoRendimiento']
                        document.getElementById('txtTotal2x5P30').innerHTML = reporte['pregunta30seccion1']['otraFuncionEventosDeportivos']
                        document.getElementById('txtTotal2x6P30').innerHTML = reporte['pregunta30seccion1']['otraFuncionOtros']
                        document.getElementById('txtTotal2x7P30').innerHTML = reporte['pregunta30seccion1']['otraFuncionIndistionciones']
                        displayComentarios(reporte['pregunta30seccion1']['datosEspecificos'], 'contenedorComentariosEspecificosP30s1', 'txtDatosEspecificosP30s1')
                        displayComentarios(reporte['pregunta30seccion1']['comentarioGeneral'], 'contenedorComentariosGeneralP30s1', 'txtComentarioGeneralP30')

                        // PREGUNTA 31 SECCION 1
                        tr = document.createElement('tr')
                        tr.append(crearTD(idInstitucion, '1', '5%'))
                        tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                        tr.append(crearTD(reporte['pregunta31seccion1']['totalVehiculos'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta31seccion1']['Automoviles'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta31seccion1']['Camionetas'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta31seccion1']['motocicletas'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta31seccion1']['bicicletas'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta31seccion1']['helicopteros'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta31seccion1']['drones'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta31seccion1']['otros'], '1', 'auto'))
                        document.getElementById('identifierQuestionP31S1').innerHTML = ''
                        document.getElementById('identifierQuestionP31S1').append(tr)
                        displayComentarios(reporte['pregunta31seccion1']['datosEspecificos'], 'contenedorComentariosEspecificosP31s1', 'txtDatosEspecificosP31s1')
                        displayComentarios(reporte['pregunta31seccion1']['comentarioGeneral'], 'contenedorComentariosGeneralP31s1', 'txtComentarioGeneralP31')

                        //PREGUNTA 32 SECCION 1
                        tr = document.createElement('tr')
                        tr.append(crearTD(idInstitucion, '1', '5%'))
                        tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                        tr.append(crearTD(reporte['pregunta32seccion1']['totalLineas'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta32seccion1']['lineasFijas'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta32seccion1']['lineasMoviles'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta32seccion1']['totalAparatos'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta32seccion1']['aparatosFijos'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta32seccion1']['aparatosMoviles'], '1', 'auto'))
                        document.getElementById('identifierQuestionP32S1').innerHTML = ''
                        document.getElementById('identifierQuestionP32S1').append(tr)
                        displayComentarios(reporte['pregunta32seccion1']['comentarioGeneral'], 'contenedorComentariosGeneralP32s1', 'txtComentarioGeneralP32')

                        //PREGUNTA 33 SECCION 1
                        tr = document.createElement('tr')
                        tr.append(crearTD(idInstitucion, '1', '5%'))
                        tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                        tr.append(crearTD(reporte['pregunta33seccion1']['totalComputadoras'], '2', 'auto'))
                        tr.append(crearTD(reporte['pregunta33seccion1']['computadorasEscritorio'], '2', 'auto'))
                        tr.append(crearTD(reporte['pregunta33seccion1']['computadorasPersonales'], '2', 'auto'))
                        tr.append(crearTD(reporte['pregunta33seccion1']['totalImpresoras'], '2', 'auto'))
                        tr.append(crearTD(reporte['pregunta33seccion1']['impresorasPersonal'], '2', 'auto'))
                        tr.append(crearTD(reporte['pregunta33seccion1']['impresoraCompartida'], '2', 'auto'))
                        tr.append(crearTD(reporte['pregunta33seccion1']['multifuncionales'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta33seccion1']['servidores'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta33seccion1']['tabletas'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta33seccion1']['conexionRemota'], '1', 'auto'))
                        document.getElementById('identifierQuestionP33S1').innerHTML = ''
                        document.getElementById('identifierQuestionP33S1').append(tr)
                        displayComentarios(reporte['pregunta33seccion1']['datosEspecificos'], 'contenedorComentariosEspecificosP33s1', 'txtDatosEspecificosP33s1')
                        displayComentarios(reporte['pregunta33seccion1']['comentarioGeneral'], 'contenedorComentariosGeneralP33s1', 'txtComentarioGeneralP33')

                        //PREGUNTA 34 SECCION 1
                        tr = document.createElement('tr')
                        tr.append(crearTD(idInstitucion, '1', '5%'))
                        tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                        tr.append(crearTD(reporte['pregunta34seccion1']['Respuesta'], '1', 'auto'))
                        document.getElementById('identifierQuestionP34S1').innerHTML = ''
                        document.getElementById('identifierQuestionP34S1').append(tr)
                        displayComentarios(reporte['pregunta34seccion1']['comentarioGeneral'], 'contenedorComentariosGeneralP34s1', 'txtComentarioGeneralP34')

                        // PREGUNTA 35 SECCION 1
                        document.getElementById('txtnombreInstitucion').innerHTML = nombreInstitucion
                        document.getElementById('txtTotal1P35').innerHTML = reporte['pregunta35seccion1']['totalComputadoras']
                        document.getElementById('txtTotal2P35').innerHTML = reporte['pregunta35seccion1']['totalImpresoras']
                        document.getElementById('txtTotal3P35').innerHTML = reporte['pregunta35seccion1']['totalMultifuncionales']
                        document.getElementById('txtTotal4P35').innerHTML = reporte['pregunta35seccion1']['totalServidores']
                        document.getElementById('txtTotal5P35').innerHTML = reporte['pregunta35seccion1']['totalTablets']
                        document.getElementById('txtTotal1x1P35').innerHTML = reporte['pregunta35seccion1']['funcionPrincipalComputadorasEducacion']
                        document.getElementById('txtTotal1x2P35').innerHTML = reporte['pregunta35seccion1']['otraFuncionComputadorasEducacion']
                        document.getElementById('txtTotal2x1P35').innerHTML = reporte['pregunta35seccion1']['funcionPrincipalImpresorasEducacion']
                        document.getElementById('txtTotal2x2P35').innerHTML = reporte['pregunta35seccion1']['otraFuncionImpresorasEducacion']
                        document.getElementById('txtTotal3x1P35').innerHTML = reporte['pregunta35seccion1']['funcionPrincipalMultifuncionalesEducacion']
                        document.getElementById('txtTotal3x2P35').innerHTML = reporte['pregunta35seccion1']['otraFuncionMultifuncionalesEducacion']
                        document.getElementById('txtTotal4x1P35').innerHTML = reporte['pregunta35seccion1']['funcionPrincipalServidoresEducacion']
                        document.getElementById('txtTotal4x2P35').innerHTML = reporte['pregunta35seccion1']['otraFuncionServidoresEducacion']
                        document.getElementById('txtTotal5x1P35').innerHTML = reporte['pregunta35seccion1']['funcionPrincipalTabletsEducacion']
                        document.getElementById('txtTotal5x2P35').innerHTML = reporte['pregunta35seccion1']['otraFuncionTabletsEducacion']
                        displayComentarios(reporte['pregunta35seccion1']['datosEspecificos'], 'contenedorComentariosEspecificosP35s1', 'txtDatosEspecificosP35s1')
                        displayComentarios(reporte['pregunta35seccion1']['comentarioGeneral'], 'contenedorComentariosGeneralP35s1', 'txtComentarioGeneralP35')

                        // PREGUNTA COMPLEMENTO SECCION 1
                        tr = document.createElement('tr')
                        tr.append(crearTD(idInstitucion, '1', '5%'))
                        tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                        tr.append(crearTD(reporte['preguntacomplementoseccion1']['TotalPersonal'], '1', 'auto'))
                        tr.append(crearTD(reporte['preguntacomplementoseccion1']['totalHombres'], '1', 'auto'))
                        tr.append(crearTD(reporte['preguntacomplementoseccion1']['totalMujeres'], '1', 'auto'))
                        document.getElementById('identifierQuestionPComplementS1').innerHTML = ''
                        document.getElementById('identifierQuestionPComplementS1').append(tr)
                        displayComentarios(reporte['preguntacomplementoseccion1']['comentarioGeneral'], 'contenedorComentariosGeneralComplementos1', 'txtComentarioGeneralComplementoS1')

                        // PREGUNTA 1 SECCION 12
                        tr = document.createElement('tr')
                        tr.append(crearTD(idInstitucion, '1', '5%'))
                        tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                        tr.append(crearTD(reporte['pregunta1seccion12']['RespuestaTipoMateria1'], '3', 'auto'))
                        tr.append(crearTD(reporte['pregunta1seccion12']['nombreDependenciaTipoMateria1'], '3', 'auto'))
                        tr.append(crearTD(reporte['pregunta1seccion12']['RespuestaTipoMateria2'], '3', 'auto'))
                        tr.append(crearTD(reporte['pregunta1seccion12']['nombreDependenciaTipoMateria2'], '3    ', 'auto'))
                        document.getElementById('identifierQuestionP1S12').innerHTML = ''
                        document.getElementById('identifierQuestionP1S12').append(tr)
                        displayComentarios(reporte['pregunta1seccion12']['comentarioGeneral'], 'contenedorComentariosGeneralP1s12', 'txtComentarioGeneralP1s12')

                        // PREGUNTA 2 SECCION 12
                        tr = document.createElement('tr')
                        tr.append(crearTD(idInstitucion, '1', '5%'))
                        tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                        tr.append(crearTD(reporte['pregunta2seccion12']['Respuesta'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta2seccion12']['AdjudicacionDirecta'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta2seccion12']['Invitacion'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta2seccion12']['licitacionPublicaNacional'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta2seccion12']['licitacionPublicaInternacional'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta2seccion12']['Otro'], '1', 'auto'))
                        document.getElementById('identifierQuestionMateria1P2S12').innerHTML = ''
                        document.getElementById('identifierQuestionMateria1P2S12').append(tr)
                        tr = document.createElement('tr')
                        tr.append(crearTD(idInstitucion, '1', '5%'))
                        tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                        tr.append(crearTD(reporte['pregunta2seccion12']['Respuesta2'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta2seccion12']['adjudicacionDirecta2'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta2seccion12']['Invitacion2'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta2seccion12']['licitacionPublicaNacional2'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta2seccion12']['licitacionPublicaInternacional2'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta2seccion12']['Otro2'], '1', 'auto'))
                        document.getElementById('identifierQuestionMateria2P2S12').innerHTML = ''
                        document.getElementById('identifierQuestionMateria2P2S12').append(tr)
                        displayComentarios(reporte['pregunta2seccion12']['datosEspecificos'], 'contenedorComentariosEspecificosP2s12', 'txtDatosEspecificosP2s12')
                        displayComentarios(reporte['pregunta2seccion12']['comentarioGeneral'], 'contenedorComentariosGeneralP2s12', 'txtComentarioGeneralP2s12')

                        // PREGUNTA 3 SECCION 12
                        tr = document.createElement('tr')
                        tr.append(crearTD(idInstitucion, '1', '5%'))
                        tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                        tr.append(crearTD(reporte['pregunta3seccion12']['noAplica1'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta3seccion12']['contabaConMecanismos1'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta3seccion12']['Uno'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta3seccion12']['Dos'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta3seccion12']['Tres'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta3seccion12']['Cuatro'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta3seccion12']['Cinco'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta3seccion12']['Seis'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta3seccion12']['Siete'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta3seccion12']['Ocho'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta3seccion12']['Nueve'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta3seccion12']['Diez'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta3seccion12']['Once'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta3seccion12']['Doce'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta3seccion12']['Trece'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta3seccion12']['Catorce'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta3seccion12']['Quince'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta3seccion12']['DiezSeis'], '1', 'auto'))
                        document.getElementById('identifierQuestionMateria1P3S12').innerHTML = ''
                        document.getElementById('identifierQuestionMateria1P3S12').append(tr)
                        tr = document.createElement('tr')
                        tr.append(crearTD(idInstitucion, '1', '5%'))
                        tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                        tr.append(crearTD(reporte['pregunta3seccion12']['noAplica2'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta3seccion12']['contabaConMecanismos2'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta3seccion12']['Uno1'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta3seccion12']['Dos2'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta3seccion12']['Tres3'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta3seccion12']['Cuatro4'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta3seccion12']['Cinco5'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta3seccion12']['Seis6'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta3seccion12']['Siete7'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta3seccion12']['Ocho8'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta3seccion12']['Nueve9'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta3seccion12']['Diez10'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta3seccion12']['Once11'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta3seccion12']['Doce12'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta3seccion12']['Trece13'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta3seccion12']['Catorce14'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta3seccion12']['Quince15'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta3seccion12']['DiezSeis16'], '1', 'auto'))
                        document.getElementById('identifierQuestionMateria2P3S12').innerHTML = ''
                        document.getElementById('identifierQuestionMateria2P3S12').append(tr)
                        displayComentarios(reporte['pregunta3seccion12']['datosEspecificos'], 'contenedorComentariosEspecificosP3s12', 'txtDatosEspecificosP3s12')
                        displayComentarios(reporte['pregunta3seccion12']['comentarioGeneral'], 'contenedorComentariosGeneralP3s12', 'txtComentarioGeneralP3s12')

                        // PREGUNTA 4 SECCION 12
                        tr = document.createElement('tr')
                        tr.append(crearTD(idInstitucion, '1', '5%'))
                        tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                        tr.append(crearTD(reporte['pregunta4seccion12']['Respuesta'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta4seccion12']['Sitio'], '1', 'auto'))
                        document.getElementById('identifierQuestionP4S12').innerHTML = ''
                        document.getElementById('identifierQuestionP4S12').append(tr)
                        displayComentarios(reporte['pregunta4seccion12']['comentarioGeneral'], 'contenedorComentariosGeneralP4s12', 'txtComentarioGeneralP4s12')

                        // PREGUNTA 5 SECCION 12
                        tr = document.createElement('tr')
                        tr.append(crearTD(idInstitucion, '1', '5%'))
                        tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                        tr.append(crearTD(reporte['pregunta5seccion12']['Convocatoria'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta5seccion12']['Junta'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta5seccion12']['actoPresentacion'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta5seccion12']['declaracionLicitacion'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta5seccion12']['Cancelacion'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta5seccion12']['emisionFallo'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta5seccion12']['Contratacion'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta5seccion12']['otraEtapa'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta5seccion12']['noSeSabe'], '1', 'auto'))
                        document.getElementById('identifierQuestionP5S12').innerHTML = ''
                        document.getElementById('identifierQuestionP5S12').append(tr)
                        displayComentarios(reporte['pregunta5seccion12']['datosEspecificos'], 'contenedorComentariosEspecificosP5s12', 'txtDatosEspecificosP5s12')
                        displayComentarios(reporte['pregunta5seccion12']['comentarioGeneral'], 'contenedorComentariosGeneralP5s12', 'txtComentarioGeneralP5s12')

                        // PREGUNTA 6 SECCION 12
                        tr = document.createElement('tr')
                        tr.append(crearTD(idInstitucion, '1', '5%'))
                        tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                        tr.append(crearTD(reporte['pregunta6seccion12']['Respuesta'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta6seccion12']['tipoFormato'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta6seccion12']['Frecuencia'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta6seccion12']['cantidadRegistrada'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta6seccion12']['Respuesta2'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta6seccion12']['tipoFormato2'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta6seccion12']['Frecuencia2'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta6seccion12']['cantidadRegistrada2'], '1', 'auto'))
                        document.getElementById('identifierQuestionTipoSistema12P6S12').innerHTML = ''
                        document.getElementById('identifierQuestionTipoSistema12P6S12').append(tr)
                        tr = document.createElement('tr')
                        tr.append(crearTD(idInstitucion, '1', '5%'))
                        tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                        tr.append(crearTD(reporte['pregunta6seccion12']['Respuesta3'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta6seccion12']['tipoFormato3'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta6seccion12']['Frecuencia3'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta6seccion12']['cantidadRegistrada3'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta6seccion12']['Respuesta4'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta6seccion12']['tipoFormato4'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta6seccion12']['Frecuencia4'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta6seccion12']['cantidadRegistrada4'], '1', 'auto'))
                        document.getElementById('identifierQuestionTipoSistema34P6S12').innerHTML = ''
                        document.getElementById('identifierQuestionTipoSistema34P6S12').append(tr)
                        tr = document.createElement('tr')
                        tr.append(crearTD(idInstitucion, '1', '5%'))
                        tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                        tr.append(crearTD(reporte['pregunta6seccion12']['Respuesta5'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta6seccion12']['tipoFormato5'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta6seccion12']['Frecuencia5'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta6seccion12']['cantidadRegistrada5'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta6seccion12']['Respuesta6'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta6seccion12']['tipoFormato6'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta6seccion12']['Frecuencia6'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta6seccion12']['cantidadRegistrada6'], '1', 'auto'))
                        document.getElementById('identifierQuestionTipoSistema56P6S12').innerHTML = ''
                        document.getElementById('identifierQuestionTipoSistema56P6S12').append(tr)
                        displayComentarios(reporte['pregunta6seccion12']['datosEspecificos'], 'contenedorComentariosEspecificosP6s12', 'txtDatosEspecificosP6s12')
                        displayComentarios(reporte['pregunta6seccion12']['comentariosGeneral'], 'contenedorComentariosGeneralP6s12', 'txtComentarioGeneralP6s12')

                        // PREGUNTA 7 SECCION 12
                        tr = document.createElement('tr')
                        tr.append(crearTD(idInstitucion, '1', '5%'))
                        tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                        tr.append(crearTD(reporte['pregunta7seccion12']['Respuesta'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta7seccion12']['contratosRealizados'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta7seccion12']['Respuesta2'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta7seccion12']['contratosRealizados2'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta7seccion12']['Respuesta3'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta7seccion12']['contratosRealizados3'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta7seccion12']['Respuesta4'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta7seccion12']['contratosRealizados4'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta7seccion12']['Respuesta5'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta7seccion12']['contratosRealizados5'], '1', 'auto'))
                        document.getElementById('identifierQuestionP7S12').innerHTML = ''
                        document.getElementById('identifierQuestionP7S12').append(tr)
                        document.getElementById('identifierQuestionSumaTotalContratosP7S12').innerHTML = reporte['pregunta7seccion12']['totalContratos']
                        document.getElementById('identifierQuestionSumaContratosP7S12').classList.add('d-none')
                        displayComentarios(reporte['pregunta7seccion12']['comentarioGeneral'], 'contenedorComentariosGeneralP7s12', 'txtComentarioGeneralP7s12')

                        // PREGUNTA 8 SECCION 12
                        tr = document.createElement('tr')
                        tr.append(crearTD(idInstitucion, '1', '5%'))
                        tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                        tr.append(crearTD(reporte['pregunta8seccion12']['Respuesta'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta8seccion12']['Total'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta8seccion12']['Adquisiciones'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta8seccion12']['otraPublica'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta8seccion12']['Respuesta2'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta8seccion12']['Total2'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta8seccion12']['Adquisiciones2'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta8seccion12']['otraPublica2'], '1', 'auto'))
                        document.getElementById('identifierQuestionTipoProcedimiento12P8S12').innerHTML = ''
                        document.getElementById('identifierQuestionTipoProcedimiento12P8S12').append(tr)
                        document.getElementById('identifierQuestionSumaContratos12P8S12').classList.add('d-none')
                        tr = document.createElement('tr')
                        tr.append(crearTD(idInstitucion, '1', '5%'))
                        tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                        tr.append(crearTD(reporte['pregunta8seccion12']['Respuesta3'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta8seccion12']['Total3'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta8seccion12']['Adquisiciones3'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta8seccion12']['otraPublica3'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta8seccion12']['Respuesta4'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta8seccion12']['Total4'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta8seccion12']['Adquisiciones4'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta8seccion12']['otraPublica4'], '1', 'auto'))
                        document.getElementById('identifierQuestionTipoProcedimiento34P8S12').innerHTML = ''
                        document.getElementById('identifierQuestionTipoProcedimiento34P8S12').append(tr)
                        document.getElementById('identifierQuestionSumaContratos34P8S12').classList.add('d-none')
                        tr = document.createElement('tr')
                        tr.append(crearTD(idInstitucion, '1', '5%'))
                        tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                        tr.append(crearTD(reporte['pregunta8seccion12']['Respuesta5'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta8seccion12']['Total5'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta8seccion12']['Adquisiciones5'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta8seccion12']['otraPublica5'], '1', 'auto'))
                        document.getElementById('identifierQuestionTipoProcedimiento5P8S12').innerHTML = ''
                        document.getElementById('identifierQuestionTipoProcedimiento5P8S12').append(tr)
                        document.getElementById('totalContratosP8S12').innerHTML = reporte['pregunta8seccion12']['totalGeneral']
                        document.getElementById('totalContratos1P8S12').innerHTML = reporte['pregunta8seccion12']['totalGeneralAdquisiciones']
                        document.getElementById('totalContratos2P8S12').innerHTML = reporte['pregunta8seccion12']['totalGeneralObras']
                        document.getElementById('identifierQuestionSumaContratos5P8S12').classList.add('d-none')
                        displayComentarios(reporte['pregunta8seccion12']['comentarioGeneral'], 'contenedorComentariosGeneralP8s12', 'txtComentarioGeneralP8s12')

                        // PREGUNTA 9 SECCION 12
                        tr = document.createElement('tr')
                        tr.append(crearTD(idInstitucion, '1', '5%'))
                        tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                        tr.append(crearTD(reporte['pregunta9seccion12']['Respuesta'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta9seccion12']['monAsociado'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta9seccion12']['Respuesta2'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta9seccion12']['monAsociado2'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta9seccion12']['Respuesta3'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta9seccion12']['monAsociado3'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta9seccion12']['Respuesta4'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta9seccion12']['monAsociado4'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta9seccion12']['Respuesta5'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta9seccion12']['monAsociado5'], '1', 'auto'))
                        document.getElementById('identifierQuestionP9S12').innerHTML = ''
                        document.getElementById('identifierQuestionP9S12').append(tr)
                        document.getElementById('totalMontoP9S12').innerHTML = reporte['pregunta9seccion12']['totalMonto']
                        document.getElementById('identifierQuestionMontoAsociadoP9S12').classList.add('d-none')
                        displayComentarios(reporte['pregunta9seccion12']['comentarioGeneral'], 'contenedorComentariosGeneralP9s12', 'txtComentarioGeneralP9s12')

                        // PREGUNTA 10 SECCION 12
                        tr = document.createElement('tr')
                        tr.append(crearTD(idInstitucion, '1', '5%'))
                        tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                        tr.append(crearTD(reporte['pregunta10seccion12']['Respuesta'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta10seccion12']['TotalMonto'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta10seccion12']['totalMontoAdquisiciones'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta10seccion12']['totalMontoObra1'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta10seccion12']['Respuesta2'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta10seccion12']['TotalMonto2'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta10seccion12']['totalMontoAdquisiciones2'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta10seccion12']['totalMontoObra12'], '1', 'auto'))
                        document.getElementById('identifierQuestionTipoProcedimiento12P10S12').innerHTML = ''
                        document.getElementById('identifierQuestionTipoProcedimiento12P10S12').append(tr)
                        tr = document.createElement('tr')
                        tr.append(crearTD(idInstitucion, '1', '5%'))
                        tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                        tr.append(crearTD(reporte['pregunta10seccion12']['Respuesta3'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta10seccion12']['TotalMonto3'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta10seccion12']['totalMontoAdquisiciones3'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta10seccion12']['totalMontoObra3'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta10seccion12']['Respuesta4'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta10seccion12']['TotalMonto4'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta10seccion12']['totalMontoAdquisiciones4'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta10seccion12']['totalMontoObra14'], '1', 'auto'))
                        document.getElementById('identifierQuestionTipoProcedimiento34P10S12').innerHTML = ''
                        document.getElementById('identifierQuestionTipoProcedimiento34P10S12').append(tr)
                        tr = document.createElement('tr')
                        tr.append(crearTD(idInstitucion, '1', '5%'))
                        tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                        tr.append(crearTD(reporte['pregunta10seccion12']['Respuesta5'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta10seccion12']['TotalMonto5'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta10seccion12']['totalMontoAdquisiciones5'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta10seccion12']['totalMontoObra15'], '1', 'auto'))
                        document.getElementById('identifierQuestionTipoProcedimiento5P10S12').innerHTML = ''
                        document.getElementById('identifierQuestionTipoProcedimiento5P10S12').append(tr)
                        document.getElementById('totalMontoP10S12').innerHTML = reporte['pregunta10seccion12']['totalGeneralMaximo']
                        document.getElementById('totalMonto1P10S12').innerHTML = reporte['pregunta10seccion12']['totalMontoAdquisicionesGeneral']
                        document.getElementById('totalMonto2P10S12').innerHTML = reporte['pregunta10seccion12']['totalMontoObrasGeneral']
                        displayComentarios(reporte['pregunta10seccion12']['comentarioGeneral'], 'contenedorComentariosGeneralP10s12', 'txtComentarioGeneralP10s12')

                        // PREGUNTA 11 SECCION 12
                        tr = document.createElement('tr')
                        tr.append(crearTD(idInstitucion, '1', '5%'))
                        tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                        tr.append(crearTD(reporte['pregunta11seccion12']['Respuesta'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta11seccion12']['totalContratos'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta11seccion12']['Monto'], '1', 'auto'))
                        document.getElementById('identifierQuestionP11S12').innerHTML = ''
                        document.getElementById('identifierQuestionP11S12').append(tr)
                        displayComentarios(reporte['pregunta11seccion12']['comentarioGeneral'], 'contenedorComentariosGeneralP11s12', 'txtComentarioGeneralP11s12')

                        // PREGUNTA 12 SECCION 12
                        tr = document.createElement('tr')
                        tr.append(crearTD(idInstitucion, '1', '5%'))
                        tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                        tr.append(crearTD(reporte['pregunta12seccion12']['Respuesta'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta12seccion12']['totalContratos'], '1', 'auto'))
                        tr.append(crearTD(reporte['pregunta12seccion12']['Monto'], '1', 'auto'))
                        document.getElementById('identifierQuestionP12S12').innerHTML = ''
                        document.getElementById('identifierQuestionP12S12').append(tr)
                        displayComentarios(reporte['pregunta12seccion12']['comentarioGeneral'], 'contenedorComentariosGeneralP12s12', 'txtComentarioGeneralP12s12')

                        // PREGUNTA 13 SECCION 12
                        tr = document.createElement('tr')
                        tr.append(crearTD(idInstitucion, '1', '5%'))
                        tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                        tr.append(crearTD(reporte['pregunta13seccion12']['Total'], '1', 'auto'))
                        document.getElementById('identifierQuestionP13S12').innerHTML = ''
                        document.getElementById('identifierQuestionP13S12').append(tr)
                        displayComentarios(reporte['pregunta13seccion12']['comentarioGeneral'], 'contenedorComentariosGeneralP13s12', 'txtComentarioGeneralP13s12')

                        // PREGUNTA 14 SECCION 12
                        tr = document.createElement('tr')
                        tr.append(crearTD(idInstitucion, '1', '5%'))
                        tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                        tr.append(crearTD(reporte['pregunta14seccion12']['Total'], '1', 'auto'))
                        document.getElementById('identifierQuestionP14S12').innerHTML = ''
                        document.getElementById('identifierQuestionP14S12').append(tr)
                        displayComentarios(reporte['pregunta14seccion12']['comentarioGeneral'], 'contenedorComentariosGeneralP14s12', 'txtComentarioGeneralP14s12')

                        // OCULTAR PREGUNTAS CONTESTADAS
                        ocultarPreguntasNoContestadas()

                        // IMPRMIR REPORTE
                        window.print()
                    })
                } else {
                    window.close()
                }
            })
        })
    } else {
        let contenedoresDeComentarios = document.getElementsByClassName('contenedorDeComentarios'),
            numerosConcentrados = {
                'general': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 100],
                'centralizadas': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
                'paraestatales': [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85]
            }

        // OCULTAR TODOS LOS CONTENEDORES DE COMENTARIOS
        for (let i = 0; i < contenedoresDeComentarios.length; i++) {
            contenedoresDeComentarios[i].classList.add('d-none')
        }

        numerosConcentrados[idInstitucion].forEach(idDependencia => {
            recuperarNombreDependencia(idDependencia, anioInstitucion).then((res) => {
                let nombreInstitucion = res[0]
                let clasificacionInstitucion = res[1]
                obtenerReporte(idDependencia, nombreInstitucion, clasificacionInstitucion, anioInstitucion).then(() => {
                    // PREGUNTA 1 SECCION 1
                    tr = document.createElement('tr')
                    tr.append(crearTD(idDependencia, '1', '5%'))
                    tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                    tr.append(crearTD(clasificacionInstitucion, '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta1seccion1']['tipoInstitucion'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta1seccion1']['funcionPrincipal'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta1seccion1']['funcionSecundaria1'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta1seccion1']['funcionSecundaria2'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta1seccion1']['funcionSecundaria3'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta1seccion1']['funcionSecundaria4'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta1seccion1']['funcionSecundaria5'], '1', 'auto'))
                    document.getElementById('identifierQuestionP1S1').append(tr)

                    // PREGUNTA 2 SECCION 1
                    tr = document.createElement('tr')
                    tr.append(crearTD(idDependencia, '1', '5%'))
                    tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                    tr.append(crearTD(reporte['pregunta2seccion1']['respuesta'], '1', 'auto'))
                    document.getElementById('identifierQuestionP2S1').append(tr)

                    // PREGUNTA 3 SECCION 1
                    tr = document.createElement('tr')
                    tr.append(crearTD(idDependencia, '1', '5%'))
                    tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                    tr.append(crearTD(reporte['pregunta3seccion1']['sexo'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta3seccion1']['edad'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta3seccion1']['ingresosMensual'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta3seccion1']['nivelEscolaridad'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta3seccion1']['estatusEscolaridad'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta3seccion1']['empleoAnterior'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta3seccion1']['antiguedadServicio'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta3seccion1']['antiguedadCargo'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta3seccion1']['pertinenciaIndigena'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta3seccion1']['condicionDiscapacidad'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta3seccion1']['formaDesignacion'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta3seccion1']['afiliacionPartidista'] != '' ? reporte['pregunta3seccion1']['afiliacionPartidista'] : 'NA', 'auto'))
                    tr.append(crearTD(reporte['pregunta3seccion1']['idInstitular'] != '' ? reporte['pregunta3seccion1']['idInstitular'] : 'NA', 'auto'))
                    document.getElementById('identifierQuestionP3S1').append(tr)

                    // PREGUNTA 4 SECCION 1
                    tr = document.createElement('tr')
                    tr.append(crearTD(idDependencia, '1', '5%'))
                    tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                    tr.append(crearTD(reporte['pregunta4seccion1']['totalPersonal'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta4seccion1']['totalHombres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta4seccion1']['totalMujeres'], '1', 'auto'))
                    document.getElementById('identifierQuestionP4S1').append(tr)

                    // PREGUNTA 5 SECCION 1
                    tr = document.createElement('tr')
                    tr.append(crearTD(idDependencia, '1', '5%'))
                    tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                    tr.append(crearTD(reporte['pregunta5seccion1']['totalPersonal'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta5seccion1']['totalHombres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta5seccion1']['totalMujeres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta5seccion1']['confianzaHombres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta5seccion1']['confianzaMujeres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta5seccion1']['baseHombres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta5seccion1']['baseMujeres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta5seccion1']['eventualHombres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta5seccion1']['eventualMujeres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta5seccion1']['honorariosHombres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta5seccion1']['honorariosMujeres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta5seccion1']['otrosHombres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta5seccion1']['otrosMujeres'], '1', 'auto'))
                    document.getElementById('identifierQuestionP5S1').append(tr)

                    // PREGUNTA 6 SECCION 1
                    tr = document.createElement('tr')
                    tr.append(crearTD(idDependencia, '1', '5%'))
                    tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                    tr.append(crearTD(reporte['pregunta6seccion1']['totalPersonal'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta6seccion1']['totalHombres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta6seccion1']['totalMujeres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta6seccion1']['isssteHombres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta6seccion1']['issteMujeres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta6seccion1']['issfhHombres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta6seccion1']['issfhMujeres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta6seccion1']['imssHombres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta6seccion1']['imssMujeres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta6seccion1']['otroHombres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta6seccion1']['otroMujeres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta6seccion1']['sinSeguroHombre'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta6seccion1']['sinSeguroMujeres'], '1', 'auto'))
                    document.getElementById('identifierQuestionP6S1').append(tr)

                    // PREGUNTA 7 SECCION 1
                    tr = document.createElement('tr')
                    tr.append(crearTD(idDependencia, '1', '5%'))
                    tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                    tr.append(crearTD(reporte['pregunta7seccion1']['totalPersonal'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta7seccion1']['totalHombres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta7seccion1']['totalMujeres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta7seccion1']['1824Hombres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta7seccion1']['1824Mujeres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta7seccion1']['2529Hombres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta7seccion1']['2529Mujeres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta7seccion1']['3034Hombres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta7seccion1']['3034Mujeres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta7seccion1']['3539Hombres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta7seccion1']['3539Mujeres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta7seccion1']['4044Hombres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta7seccion1']['4044Mujeres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta7seccion1']['4549Hombres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta7seccion1']['4549Mujeres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta7seccion1']['5054Hombres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta7seccion1']['5054Mujeres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta7seccion1']['5559Hombres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta7seccion1']['5559Mujeres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta7seccion1']['60Hombres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta7seccion1']['60Mujeres'], '1', 'auto'))
                    document.getElementById('identifierQuestionP7S1').append(tr)

                    // PREGUNTA 8 SECCION 1
                    tr = document.createElement('tr')
                    tr.append(crearTD(idDependencia, '1', '5%'))
                    tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                    tr.append(crearTD(reporte['pregunta8seccion1']['totalPersonal'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta8seccion1']['totalHombres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta8seccion1']['totalMujeres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta8seccion1']['sinPagaHombres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta8seccion1']['sinPagaMujeres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta8seccion1']['1a1500Hombres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta8seccion1']['1a1500Mujeres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta8seccion1']['5001a10000Hombres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta8seccion1']['5001a10000Mujeres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta8seccion1']['10001a15000Hombres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta8seccion1']['10001a15000Mujeres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta8seccion1']['15001a20000Hombres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta8seccion1']['15001a20000Mujeres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta8seccion1']['20001a25000Hombres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta8seccion1']['20001a25000Mujeres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta8seccion1']['25001a30000Hombres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta8seccion1']['25001a30000Mujeres'], '1', 'auto'))
                    document.getElementById('identifierQuestionP8S1').append(tr)
                    tr = document.createElement('tr')
                    tr.append(crearTD(idDependencia, '1', '5%'))
                    tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                    tr.append(crearTD(reporte['pregunta8seccion1']['30001a35000Hombres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta8seccion1']['30001a35000Mujeres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta8seccion1']['35001a40000Hombres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta8seccion1']['35001a40000Mujeres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta8seccion1']['40001a45000Hombres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta8seccion1']['40001a45000Mujeres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta8seccion1']['45001a50000Hombres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta8seccion1']['45001a50000Mujeres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta8seccion1']['50001a55000Hombres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta8seccion1']['50001a55000Mujeres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta8seccion1']['55001a60000Hombres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta8seccion1']['55001a60000Mujeres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta8seccion1']['60001a65000Hombres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta8seccion1']['60001a65000Mujeres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta8seccion1']['65001a70000Hombres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta8seccion1']['65001a70000Mujeres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta8seccion1']['mas70000Hombres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta8seccion1']['mas70000Mujeres'], '1', 'auto'))
                    document.getElementById('identifierQuestionP81S1').append(tr)

                    // PREGUNTA 9 SECCION 1
                    tr = document.createElement('tr')
                    tr.append(crearTD(idDependencia, '1', '5%'))
                    tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                    tr.append(crearTD(reporte['pregunta9seccion1']['totalPersonal'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta9seccion1']['totalHombres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta9seccion1']['totalMujeres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta9seccion1']['ningunoHombres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta9seccion1']['ningunoMujeres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta9seccion1']['prePriHombres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta9seccion1']['prePriMujeres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta9seccion1']['secundariaHombres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta9seccion1']['secundariaMujeres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta9seccion1']['preparatoriaHombres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta9seccion1']['preparatoriaMujeres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta9seccion1']['carreraHombres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta9seccion1']['carreraMujeres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta9seccion1']['licenciaturaHombres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta9seccion1']['licenciaturaMujeres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta9seccion1']['maestriaHombres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta9seccion1']['maestriaMujeres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta9seccion1']['doctoradoHombres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta9seccion1']['doctoradoMujeres'], '1', 'auto'))
                    document.getElementById('identifierQuestionP9S1').append(tr)

                    // PREGUNTA 10 SECCION 1
                    tr = document.createElement('tr')
                    tr.append(crearTD(idDependencia, '1', '5%'))
                    tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                    tr.append(crearTD(reporte['pregunta10seccion1']['totalPersonal'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta10seccion1']['totalHombres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta10seccion1']['totalMujeres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta10seccion1']['perteneceIndigenaH'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta10seccion1']['perteneceIndigenaM'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta10seccion1']['noPerteneceIndigenaH'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta10seccion1']['noPerteneneIndigenaM'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta10seccion1']['noIdentificadoH'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta10seccion1']['noIdentificadoM'], '1', 'auto'))
                    document.getElementById('identifierQuestionP10S1').append(tr)

                    // PREGUNTA 11 SECCION 1
                    tr = document.createElement('tr')
                    tr.append(crearTD('', '1', '37%'))
                    td = document.createElement('td')
                    td.className = 'text-center align-middle px-5'
                    td.appendChild(document.createTextNode('Total: ' + reporte['pregunta11seccion1']['totalPersonal']))
                    tr.append(td)
                    td = document.createElement('td')
                    td.className = 'text-center align-middle px-5'
                    td.appendChild(document.createTextNode('Hombres: ' + reporte['pregunta11seccion1']['totalHombres']))
                    tr.append(td)
                    td = document.createElement('td')
                    td.className = 'text-center align-middle px-5'
                    td.appendChild(document.createTextNode('Mujeres: ' + reporte['pregunta11seccion1']['totalMujeres']))
                    tr.append(td)
                    document.getElementById('identifierQuestionSumaTotalIndigenaP11S1').innerHTML = ''
                    document.getElementById('identifierQuestionSumaTotalIndigenaP11S1').append(tr)
                    tr = document.createElement('tr')
                    tr.append(crearTD(idDependencia, '1', '5%'))
                    tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                    tr.append(crearTD(reporte['pregunta11seccion1']['chinantecoTotal'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta11seccion1']['chinantecoHombres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta11seccion1']['chinantecoMujeres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta11seccion1']['cholTotal'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta11seccion1']['cholHombres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta11seccion1']['cholMujeres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta11seccion1']['coraTotal'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta11seccion1']['coraHombres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta11seccion1']['coraMujeres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta11seccion1']['huastecoTotal'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta11seccion1']['huastecoHombres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta11seccion1']['huastecoMujeres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta11seccion1']['huicholTotal'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta11seccion1']['huicholHombres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta11seccion1']['huicholMujeres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta11seccion1']['mayaTotal'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta11seccion1']['mayaHombres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta11seccion1']['mayaMujeres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta11seccion1']['mayoTotal'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta11seccion1']['mayoHombres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta11seccion1']['mayoMujeres'], '1', 'auto'))
                    document.getElementById('identifierQuestionIndigena17P11S1').append(tr)
                    tr = document.createElement('tr')
                    tr.append(crearTD(idDependencia, '1', '5%'))
                    tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                    tr.append(crearTD(reporte['pregunta11seccion1']['mazahuaTotal'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta11seccion1']['mazahuaHombres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta11seccion1']['mazahuaMujeres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta11seccion1']['mazatecoTotal'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta11seccion1']['mazatecoHombres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta11seccion1']['mazatecoMujeres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta11seccion1']['mixeTotal'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta11seccion1']['mixeHombres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta11seccion1']['mixeMujeres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta11seccion1']['mixtecoTotal'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta11seccion1']['mixtecoHombres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta11seccion1']['mixtecoMujeres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta11seccion1']['nahuatlTotal'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta11seccion1']['nahuatlHombres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta11seccion1']['nahuatlMujeres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta11seccion1']['otomiTotal'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta11seccion1']['otomiHombres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta11seccion1']['otomiMujeres'], '1', 'auto'))
                    document.getElementById('identifierQuestionIndigena813P11S1').append(tr)
                    tr = document.createElement('tr')
                    tr.append(crearTD(idDependencia, '1', '5%'))
                    tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                    tr.append(crearTD(reporte['pregunta11seccion1']['tarascoTotal'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta11seccion1']['tarascoHombres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta11seccion1']['tarascoMujeres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta11seccion1']['tarahumaraTotal'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta11seccion1']['tarahumaraHombres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta11seccion1']['tarahumaraMujeres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta11seccion1']['tepehuanoTotal'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta11seccion1']['tepehuanoHombres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta11seccion1']['tepehuanoMujeres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta11seccion1']['tlapanecoTotal'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta11seccion1']['tlapanecoHombres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta11seccion1']['tlapanecoMujeres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta11seccion1']['totonacoTotal'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta11seccion1']['totonacoHombres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta11seccion1']['totnacoMujeres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta11seccion1']['tseltalTotal'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta11seccion1']['tseltalHombres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta11seccion1']['tseltalMujeres'], '1', 'auto'))
                    document.getElementById('identifierQuestionIndigena1419P11S1').append(tr)
                    tr = document.createElement('tr')
                    tr.append(crearTD(idDependencia, '1', '5%'))
                    tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                    tr.append(crearTD(reporte['pregunta11seccion1']['tsotsitTotal'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta11seccion1']['tsotsitHombres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta11seccion1']['tsotsitMujeres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta11seccion1']['yaquiTotal'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta11seccion1']['yaquiHombres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta11seccion1']['yaquiMujeres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta11seccion1']['zapotecoTotal'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta11seccion1']['zapotecoHombres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta11seccion1']['zapotecoMujeres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta11seccion1']['zoqueTotal'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta11seccion1']['zoqueHombres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta11seccion1']['zoqueMujeres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta11seccion1']['otroTotal'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta11seccion1']['otroHombres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta11seccion1']['otroMujeres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta11seccion1']['noidentificadoTotal'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta11seccion1']['noIdentificadoHombres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta11seccion1']['noIdentificadoMujeres'], '1', 'auto'))
                    document.getElementById('identifierQuestionIndigena2025P11S1').append(tr)

                    // PREGUNTA 12 SECCION 1
                    tr = document.createElement('tr')
                    tr.append(crearTD(idDependencia, '1', '5%'))
                    tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                    tr.append(crearTD(reporte['pregunta12seccion1']['totalPersonal'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta12seccion1']['totalHombres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta12seccion1']['totalMujeres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta12seccion1']['conDiscapacidadHombres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta12seccion1']['conDiscapacidadMujeres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta12seccion1']['sinDiscapacidadHombres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta12seccion1']['sinDiscapacidadMujeres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta12seccion1']['noIdentificadoHombres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta12seccion1']['noIdentificadoMujeres'], '1', 'auto'))
                    document.getElementById('identifierQuestionP12S1').append(tr)

                    // PREGUNTA 13 SECCION 1
                    tr = document.createElement('tr')
                    tr.append(crearTD('', '1', '37%'))
                    td = document.createElement('td')
                    td.className = 'text-center align-middle px-5'
                    td.appendChild(document.createTextNode('Total: ' + reporte['pregunta13seccion1']['totalPersonal']))
                    tr.append(td)
                    td = document.createElement('td')
                    td.className = 'text-center align-middle px-5'
                    td.appendChild(document.createTextNode('Hombres: ' + reporte['pregunta13seccion1']['totalHombres']))
                    tr.append(td)
                    td = document.createElement('td')
                    td.className = 'text-center align-middle px-5'
                    td.appendChild(document.createTextNode('Mujeres: ' + reporte['pregunta13seccion1']['totalMujeres']))
                    tr.append(td)
                    document.getElementById('identifierQuestionSumaTotalDiscapacidadP13S1').innerHTML = ''
                    document.getElementById('identifierQuestionSumaTotalDiscapacidadP13S1').append(tr)
                    tr = document.createElement('tr')
                    tr.append(crearTD(idDependencia, '1', '5%'))
                    tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                    tr.append(crearTD((parseInt(reporte['pregunta13seccion1']['discapacidadCaminarHombres']) + parseInt(reporte['pregunta13seccion1']['discapacidadCaminarMujeres'])), '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta13seccion1']['discapacidadCaminarHombres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta13seccion1']['discapacidadCaminarMujeres'], '1', 'auto'))
                    tr.append(crearTD((parseInt(reporte['pregunta13seccion1']['discapacidadVerHombres']) + parseInt(reporte['pregunta13seccion1']['discapacidadaVerMujeres'])), '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta13seccion1']['discapacidadVerHombres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta13seccion1']['discapacidadaVerMujeres'], '1', 'auto'))
                    tr.append(crearTD((parseInt(reporte['pregunta13seccion1']['discapacidadMoverHombres']) + parseInt(reporte['pregunta13seccion1']['discapacidadMoverMuejeres'])), '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta13seccion1']['discapacidadMoverHombres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta13seccion1']['discapacidadMoverMuejeres'], '1', 'auto'))
                    tr.append(crearTD((parseInt(reporte['pregunta13seccion1']['discapacidadAprenderHombres']) + parseInt(reporte['pregunta13seccion1']['discapacidadAprenderMujeres'])), '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta13seccion1']['discapacidadAprenderHombres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta13seccion1']['discapacidadAprenderMujeres'], '1', 'auto'))
                    tr.append(crearTD((parseInt(reporte['pregunta13seccion1']['discapacidadOirHombres']) + parseInt(reporte['pregunta13seccion1']['discapacidadOirMujeres'])), '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta13seccion1']['discapacidadOirHombres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta13seccion1']['discapacidadOirMujeres'], '1', 'auto'))
                    document.getElementById('identifierQuestionDiscapacidad15P13S1').append(tr)
                    tr = document.createElement('tr')
                    tr.append(crearTD(idDependencia, '1', '5%'))
                    tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                    tr.append(crearTD((parseInt(reporte['pregunta13seccion1']['discapacidadHablarHombres']) + parseInt(reporte['pregunta13seccion1']['discapacidadHablarMujeres'])), '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta13seccion1']['discapacidadHablarHombres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta13seccion1']['discapacidadHablarMujeres'], '1', 'auto'))
                    tr.append(crearTD((parseInt(reporte['pregunta13seccion1']['discapacidadBaniarseHombres']) + parseInt(reporte['pregunta13seccion1']['discapacidadBaniarseMujeres'])), '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta13seccion1']['discapacidadBaniarseHombres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta13seccion1']['discapacidadBaniarseMujeres'], '1', 'auto'))
                    tr.append(crearTD((parseInt(reporte['pregunta13seccion1']['discapacidadDepresionHombres']) + parseInt(reporte['pregunta13seccion1']['discapacidadDepresionMujeres'])), '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta13seccion1']['discapacidadDepresionHombres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta13seccion1']['discapacidadDepresionMujeres'], '1', 'auto'))
                    tr.append(crearTD((parseInt(reporte['pregunta13seccion1']['otraDiscapacidadHombres']) + parseInt(reporte['pregunta13seccion1']['otraDiscapacidadMujeres'])), '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta13seccion1']['otraDiscapacidadHombres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta13seccion1']['otraDiscapacidadMujeres'], '1', 'auto'))
                    tr.append(crearTD((parseInt(reporte['pregunta13seccion1']['discapacidadNoIdentificadaHombres']) + parseInt(reporte['pregunta13seccion1']['discapacidadNoIdentificadaMujeres'])), '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta13seccion1']['discapacidadNoIdentificadaHombres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta13seccion1']['discapacidadNoIdentificadaMujeres'], '1', 'auto'))
                    document.getElementById('identifierQuestionDiscapacidad610P13S1').append(tr)

                    // PREGUNTA 14 SECCION 1
                    tr = document.createElement('tr')
                    tr.append(crearTD(idDependencia, '1', '5%'))
                    tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                    tr.append(crearTD(reporte['pregunta14seccion1']['Respuesta'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta14seccion1']['TotalPersonal'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta14seccion1']['totalHombres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta14seccion1']['totalMujeres'], '1', 'auto'))
                    document.getElementById('identifierQuestionP14S1').append(tr)

                    // PREGUNTA 15 SECCION 1
                    tr = document.createElement('tr')
                    tr.append(crearTD(idDependencia, '1', '5%'))
                    tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                    tr.append(crearTD(reporte['pregunta15seccion1']['Respuesta'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta15seccion1']['TotalPersonal'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta15seccion1']['Hombres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta15seccion1']['Mujeres'], '1', 'auto'))
                    document.getElementById('identifierQuestionP15S1').append(tr)

                    // PREGUNTA 16 SECCION 1
                    tr = document.createElement('tr')
                    tr.append(crearTD(idDependencia, '1', '5%'))
                    tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                    tr.append(crearTD(reporte['pregunta16seccion1']['Respuesta'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta16seccion1']['disposicionNormativa'], '1', 'auto'))
                    document.getElementById('identifierQuestionP16S1').append(tr)

                    // PREGUNTA 17 SECCION 1
                    tr = document.createElement('tr')
                    tr.append(crearTD(idDependencia, '1', '5%'))
                    tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                    tr.append(crearTD(reporte['pregunta17seccion1']['servicioCivil'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta17seccion1']['Reclutamiento'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta17seccion1']['diseñoSeleccion'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta17seccion1']['diseñoCurricular'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta17seccion1']['actualizacionPerfil'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta17seccion1']['diseñoValidacion'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta17seccion1']['concursosPublicos'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta17seccion1']['Mecanismos'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta17seccion1']['programasCapacitacion'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta17seccion1']['evaluacionImpacto'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta17seccion1']['programasEstimulos'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta17seccion1']['separacionServicio'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta17seccion1']['Otro'], '1', 'auto'))
                    document.getElementById('identifierQuestionP17S1').append(tr)

                    // PREGUNTA 18 SECCION 1
                    tr = document.createElement('tr')
                    tr.append(crearTD(idDependencia, '1', '5%'))
                    tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                    tr.append(crearTD(reporte['pregunta18seccion1']['Respuesta'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta18seccion1']['nombreUnidad'], '1', 'auto'))
                    document.getElementById('identifierQuestionP18S1').append(tr)

                    // PREGUNTA 19 SECCION 1
                    tr = document.createElement('tr')
                    tr.append(crearTD(idDependencia, '1', '5%'))
                    tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                    tr.append(crearTD(reporte['pregunta19seccion1']['Respuesta'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta19seccion1']['accionesFormativas'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta19seccion1']['accionesFormativasConcluidas'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta19seccion1']['TotalPersonal'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta19seccion1']['totalHombres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta19seccion1']['totalMujeres'], '1', 'auto'))
                    document.getElementById('identifierQuestionP19S1').append(tr)

                    // PREGUNTA 24 SECCION 1
                    tr = document.createElement('tr')
                    tr.append(crearTD(idDependencia, '1', '5%'))
                    tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                    tr.append(crearTD(reporte['pregunta24seccion1']['totalInmuebles'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta24seccion1']['inmueblesPropios'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta24seccion1']['inmueblesRentados'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta24seccion1']['inmueblesOtros'], '1', 'auto'))
                    document.getElementById('identifierQuestionP24S1').append(tr)

                    // PREGUNTA 25 SECCION 1
                    tr = document.createElement('tr')
                    tr.append(crearTD(idDependencia, '1', '5%'))
                    tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                    tr.append(crearTD(reporte['pregunta25seccion1']['Respuesta'], '1', 'auto'))
                    document.getElementById('identifierQuestionP25S1').append(tr)

                    // PREGUNTA 26 SECCION 1
                    tr = document.createElement('tr')
                    tr.append(crearTD(idDependencia, '1', '5%'))
                    tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                    tr.append(crearTD(reporte['pregunta26seccion1']['escuelas1'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta26seccion1']['funcionesEducativas1'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta26seccion1']['formaMixta1'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta26seccion1']['escuelas2'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta26seccion1']['funcionesEducativas2'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta26seccion1']['formaMixta2'], '1', 'auto'))
                    document.getElementById('txtTotalInmueblesP26').value = reporte['pregunta26seccion1']['totalInmueblesEducacion']
                    document.getElementById('txtTotalInmuebles1P26').value = reporte['pregunta26seccion1']['totalFuncionPrincipalEducacion']
                    document.getElementById('txtTotalInmuebles2P26').value = reporte['pregunta26seccion1']['totalOtroTIpoFuncion']
                    document.getElementById('identifierQuestionP26S1').append(tr)

                    // PREGUNTA 27 SECCION 1
                    tr = document.createElement('tr')
                    tr.append(crearTD(idDependencia, '1', '5%'))
                    tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                    tr.append(crearTD(reporte['pregunta27seccion1']['Respuesta'], '1', 'auto'))
                    document.getElementById('identifierQuestionP27S1').append(tr)

                    // PREGUNTA 28 SECCION 1
                    tr = document.createElement('tr')
                    tr.append(crearTD(idDependencia, '1', '5%'))
                    tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                    tr.append(crearTD(reporte['pregunta28seccion1']['totalClinicas'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta28seccion1']['totalCentroSalud'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta28seccion1']['totalHospitales'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta28seccion1']['totalFuncionesSalud'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta28seccion1']['totalMixta'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta28seccion1']['totalOtraFuncionClinica'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta28seccion1']['totalOtraFuncionSalud'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta28seccion1']['totalOtraFuncionHospitales'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta28seccion1']['totalOtraFuncionesSalud'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta28seccion1']['totalOtraFuncionMixta'], '1', 'auto'))
                    document.getElementById('txtTotalInmueblesP28').innerHTML = reporte['pregunta28seccion1']['totalnmueblesSalud']
                    document.getElementById('txtTotalInmuebles1P28').innerHTML = reporte['pregunta28seccion1']['totalFuncionPrincipalSalud']
                    document.getElementById('txtTotalInmuebles2P28').innerHTML = reporte['pregunta28seccion1']['totalOtraFuncion']
                    document.getElementById('identifierQuestionP28S1').append(tr)

                    // PREGUNTA 29 SECCION 1
                    tr = document.createElement('tr')
                    tr.append(crearTD(idDependencia, '1', '5%'))
                    tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                    tr.append(crearTD(reporte['pregunta29seccion1']['Respuesta'], '1', 'auto'))
                    document.getElementById('identifierQuestionP29S1').append(tr)

                    // PREGUNTA 30 SECCION 1
                    tr = document.createElement('tr')
                    tr.append(crearTD(idDependencia, '1', '5%'))
                    tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                    document.getElementById('txtTotalInmueblesP30').innerHTML = reporte['pregunta30seccion1']['totalInmueblesDeporte']
                    document.getElementById('txtTotalInmuebles1P30').innerHTML = reporte['pregunta30seccion1']['totalFuncionPrincipal']
                    document.getElementById('txtTotal1x1P30').innerHTML = reporte['pregunta30seccion1']['funcionPrincipalActivacionFisica']
                    document.getElementById('txtTotal1x2P30').innerHTML = reporte['pregunta30seccion1']['funcionPrincipalRecreacionFisica']
                    document.getElementById('txtTotal1x3P30').innerHTML = reporte['pregunta30seccion1']['funcionPrincipalDeporteSocial']
                    document.getElementById('txtTotal1x4P30').innerHTML = reporte['pregunta30seccion1']['funcionPrincipalAltoRendimiento']
                    document.getElementById('txtTotal1x5P30').innerHTML = reporte['pregunta30seccion1']['funcionPrincipalEventosDeportivos']
                    document.getElementById('txtTotal1x6P30').innerHTML = reporte['pregunta30seccion1']['funcionPrincipalOtros']
                    document.getElementById('txtTotal1x7P30').innerHTML = reporte['pregunta30seccion1']['funcionPrincipalIndistinciones']
                    document.getElementById('txtTotalInmuebles2P30').innerHTML = reporte['pregunta30seccion1']['totalOtraFuncion']
                    document.getElementById('txtTotal2x1P30').innerHTML = reporte['pregunta30seccion1']['otraFuncionActivacionFisica']
                    document.getElementById('txtTotal2x2P30').innerHTML = reporte['pregunta30seccion1']['otraFuncionRecreacionFisica']
                    document.getElementById('txtTotal2x3P30').innerHTML = reporte['pregunta30seccion1']['otrafuncionDeporteSocial']
                    document.getElementById('txtTotal2x4P30').innerHTML = reporte['pregunta30seccion1']['otraFuncionAltoRendimiento']
                    document.getElementById('txtTotal2x5P30').innerHTML = reporte['pregunta30seccion1']['otraFuncionEventosDeportivos']
                    document.getElementById('txtTotal2x6P30').innerHTML = reporte['pregunta30seccion1']['otraFuncionOtros']
                    document.getElementById('txtTotal2x7P30').innerHTML = reporte['pregunta30seccion1']['otraFuncionIndistionciones']

                    // PREGUNTA 31 SECCION 1
                    tr = document.createElement('tr')
                    tr.append(crearTD(idDependencia, '1', '5%'))
                    tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                    tr.append(crearTD(reporte['pregunta31seccion1']['totalVehiculos'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta31seccion1']['Automoviles'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta31seccion1']['Camionetas'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta31seccion1']['motocicletas'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta31seccion1']['bicicletas'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta31seccion1']['helicopteros'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta31seccion1']['drones'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta31seccion1']['otros'], '1', 'auto'))
                    document.getElementById('identifierQuestionP31S1').append(tr)

                    //PREGUNTA 32 SECCION 1
                    tr = document.createElement('tr')
                    tr.append(crearTD(idDependencia, '1', '5%'))
                    tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                    tr.append(crearTD(reporte['pregunta32seccion1']['totalLineas'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta32seccion1']['lineasFijas'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta32seccion1']['lineasMoviles'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta32seccion1']['totalAparatos'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta32seccion1']['aparatosFijos'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta32seccion1']['aparatosMoviles'], '1', 'auto'))
                    document.getElementById('identifierQuestionP32S1').append(tr)

                    //PREGUNTA 33 SECCION 1
                    tr = document.createElement('tr')
                    tr.append(crearTD(idDependencia, '1', '5%'))
                    tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                    tr.append(crearTD(reporte['pregunta33seccion1']['totalComputadoras'], '2', 'auto'))
                    tr.append(crearTD(reporte['pregunta33seccion1']['computadorasEscritorio'], '2', 'auto'))
                    tr.append(crearTD(reporte['pregunta33seccion1']['computadorasPersonales'], '2', 'auto'))
                    tr.append(crearTD(reporte['pregunta33seccion1']['totalImpresoras'], '2', 'auto'))
                    tr.append(crearTD(reporte['pregunta33seccion1']['impresorasPersonal'], '2', 'auto'))
                    tr.append(crearTD(reporte['pregunta33seccion1']['impresoraCompartida'], '2', 'auto'))
                    tr.append(crearTD(reporte['pregunta33seccion1']['multifuncionales'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta33seccion1']['servidores'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta33seccion1']['tabletas'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta33seccion1']['conexionRemota'], '1', 'auto'))
                    document.getElementById('identifierQuestionP33S1').append(tr)

                    //PREGUNTA 34 SECCION 1
                    tr = document.createElement('tr')
                    tr.append(crearTD(idDependencia, '1', '5%'))
                    tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                    tr.append(crearTD(reporte['pregunta34seccion1']['Respuesta'], '1', 'auto'))
                    document.getElementById('identifierQuestionP34S1').append(tr)

                    // PREGUNTA 35 SECCION 1
                    document.getElementById('txtnombreInstitucion').innerHTML = nombreInstitucion
                    document.getElementById('txtTotal1P35').innerHTML = reporte['pregunta35seccion1']['totalComputadoras']
                    document.getElementById('txtTotal2P35').innerHTML = reporte['pregunta35seccion1']['totalImpresoras']
                    document.getElementById('txtTotal3P35').innerHTML = reporte['pregunta35seccion1']['totalMultifuncionales']
                    document.getElementById('txtTotal4P35').innerHTML = reporte['pregunta35seccion1']['totalServidores']
                    document.getElementById('txtTotal5P35').innerHTML = reporte['pregunta35seccion1']['totalTablets']
                    document.getElementById('txtTotal1x1P35').innerHTML = reporte['pregunta35seccion1']['funcionPrincipalComputadorasEducacion']
                    document.getElementById('txtTotal1x2P35').innerHTML = reporte['pregunta35seccion1']['otraFuncionComputadorasEducacion']
                    document.getElementById('txtTotal2x1P35').innerHTML = reporte['pregunta35seccion1']['funcionPrincipalImpresorasEducacion']
                    document.getElementById('txtTotal2x2P35').innerHTML = reporte['pregunta35seccion1']['otraFuncionImpresorasEducacion']
                    document.getElementById('txtTotal3x1P35').innerHTML = reporte['pregunta35seccion1']['funcionPrincipalMultifuncionalesEducacion']
                    document.getElementById('txtTotal3x2P35').innerHTML = reporte['pregunta35seccion1']['otraFuncionMultifuncionalesEducacion']
                    document.getElementById('txtTotal4x1P35').innerHTML = reporte['pregunta35seccion1']['funcionPrincipalServidoresEducacion']
                    document.getElementById('txtTotal4x2P35').innerHTML = reporte['pregunta35seccion1']['otraFuncionServidoresEducacion']
                    document.getElementById('txtTotal5x1P35').innerHTML = reporte['pregunta35seccion1']['funcionPrincipalTabletsEducacion']
                    document.getElementById('txtTotal5x2P35').innerHTML = reporte['pregunta35seccion1']['otraFuncionTabletsEducacion']

                    // PREGUNTA COMPLEMENTO SECCION 1
                    tr = document.createElement('tr')
                    tr.append(crearTD(idDependencia, '1', '5%'))
                    tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                    tr.append(crearTD(reporte['preguntacomplementoseccion1']['TotalPersonal'], '1', 'auto'))
                    tr.append(crearTD(reporte['preguntacomplementoseccion1']['totalHombres'], '1', 'auto'))
                    tr.append(crearTD(reporte['preguntacomplementoseccion1']['totalMujeres'], '1', 'auto'))
                    document.getElementById('identifierQuestionPComplementS1').append(tr)

                    // PREGUNTA 1 SECCION 12
                    tr = document.createElement('tr')
                    tr.append(crearTD(idDependencia, '1', '5%'))
                    tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                    tr.append(crearTD(reporte['pregunta1seccion12']['RespuestaTipoMateria1'], '3', 'auto'))
                    tr.append(crearTD(reporte['pregunta1seccion12']['nombreDependenciaTipoMateria1'], '3', 'auto'))
                    tr.append(crearTD(reporte['pregunta1seccion12']['RespuestaTipoMateria2'], '3', 'auto'))
                    tr.append(crearTD(reporte['pregunta1seccion12']['nombreDependenciaTipoMateria2'], '3    ', 'auto'))
                    document.getElementById('identifierQuestionP1S12').append(tr)

                    // PREGUNTA 2 SECCION 12
                    tr = document.createElement('tr')
                    tr.append(crearTD(idDependencia, '1', '5%'))
                    tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                    tr.append(crearTD(reporte['pregunta2seccion12']['Respuesta'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta2seccion12']['AdjudicacionDirecta'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta2seccion12']['Invitacion'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta2seccion12']['licitacionPublicaNacional'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta2seccion12']['licitacionPublicaInternacional'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta2seccion12']['Otro'], '1', 'auto'))
                    document.getElementById('identifierQuestionMateria1P2S12').append(tr)
                    tr = document.createElement('tr')
                    tr.append(crearTD(idDependencia, '1', '5%'))
                    tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                    tr.append(crearTD(reporte['pregunta2seccion12']['Respuesta2'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta2seccion12']['adjudicacionDirecta2'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta2seccion12']['Invitacion2'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta2seccion12']['licitacionPublicaNacional2'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta2seccion12']['licitacionPublicaInternacional2'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta2seccion12']['Otro2'], '1', 'auto'))
                    document.getElementById('identifierQuestionMateria2P2S12').append(tr)

                    // PREGUNTA 3 SECCION 12
                    tr = document.createElement('tr')
                    tr.append(crearTD(idDependencia, '1', '5%'))
                    tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                    tr.append(crearTD(reporte['pregunta3seccion12']['noAplica1'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta3seccion12']['contabaConMecanismos1'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta3seccion12']['Uno'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta3seccion12']['Dos'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta3seccion12']['Tres'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta3seccion12']['Cuatro'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta3seccion12']['Cinco'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta3seccion12']['Seis'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta3seccion12']['Siete'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta3seccion12']['Ocho'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta3seccion12']['Nueve'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta3seccion12']['Diez'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta3seccion12']['Once'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta3seccion12']['Doce'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta3seccion12']['Trece'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta3seccion12']['Catorce'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta3seccion12']['Quince'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta3seccion12']['DiezSeis'], '1', 'auto'))
                    document.getElementById('identifierQuestionMateria1P3S12').append(tr)
                    tr = document.createElement('tr')
                    tr.append(crearTD(idDependencia, '1', '5%'))
                    tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                    tr.append(crearTD(reporte['pregunta3seccion12']['noAplica2'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta3seccion12']['contabaConMecanismos2'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta3seccion12']['Uno1'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta3seccion12']['Dos2'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta3seccion12']['Tres3'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta3seccion12']['Cuatro4'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta3seccion12']['Cinco5'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta3seccion12']['Seis6'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta3seccion12']['Siete7'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta3seccion12']['Ocho8'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta3seccion12']['Nueve9'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta3seccion12']['Diez10'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta3seccion12']['Once11'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta3seccion12']['Doce12'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta3seccion12']['Trece13'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta3seccion12']['Catorce14'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta3seccion12']['Quince15'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta3seccion12']['DiezSeis16'], '1', 'auto'))
                    document.getElementById('identifierQuestionMateria2P3S12').append(tr)

                    // PREGUNTA 4 SECCION 12
                    tr = document.createElement('tr')
                    tr.append(crearTD(idDependencia, '1', '5%'))
                    tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                    tr.append(crearTD(reporte['pregunta4seccion12']['Respuesta'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta4seccion12']['Sitio'], '1', 'auto'))
                    document.getElementById('identifierQuestionP4S12').append(tr)

                    // PREGUNTA 5 SECCION 12
                    tr = document.createElement('tr')
                    tr.append(crearTD(idDependencia, '1', '5%'))
                    tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                    tr.append(crearTD(reporte['pregunta5seccion12']['Convocatoria'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta5seccion12']['Junta'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta5seccion12']['actoPresentacion'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta5seccion12']['declaracionLicitacion'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta5seccion12']['Cancelacion'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta5seccion12']['emisionFallo'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta5seccion12']['Contratacion'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta5seccion12']['otraEtapa'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta5seccion12']['noSeSabe'], '1', 'auto'))
                    document.getElementById('identifierQuestionP5S12').append(tr)

                    // PREGUNTA 6 SECCION 12
                    tr = document.createElement('tr')
                    tr.append(crearTD(idDependencia, '1', '5%'))
                    tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                    tr.append(crearTD(reporte['pregunta6seccion12']['Respuesta'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta6seccion12']['tipoFormato'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta6seccion12']['Frecuencia'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta6seccion12']['cantidadRegistrada'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta6seccion12']['Respuesta2'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta6seccion12']['tipoFormato2'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta6seccion12']['Frecuencia2'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta6seccion12']['cantidadRegistrada2'], '1', 'auto'))
                    document.getElementById('identifierQuestionTipoSistema12P6S12').append(tr)
                    tr = document.createElement('tr')
                    tr.append(crearTD(idDependencia, '1', '5%'))
                    tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                    tr.append(crearTD(reporte['pregunta6seccion12']['Respuesta3'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta6seccion12']['tipoFormato3'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta6seccion12']['Frecuencia3'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta6seccion12']['cantidadRegistrada3'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta6seccion12']['Respuesta4'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta6seccion12']['tipoFormato4'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta6seccion12']['Frecuencia4'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta6seccion12']['cantidadRegistrada4'], '1', 'auto'))
                    document.getElementById('identifierQuestionTipoSistema34P6S12').append(tr)
                    tr = document.createElement('tr')
                    tr.append(crearTD(idDependencia, '1', '5%'))
                    tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                    tr.append(crearTD(reporte['pregunta6seccion12']['Respuesta5'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta6seccion12']['tipoFormato5'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta6seccion12']['Frecuencia5'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta6seccion12']['cantidadRegistrada5'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta6seccion12']['Respuesta6'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta6seccion12']['tipoFormato6'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta6seccion12']['Frecuencia6'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta6seccion12']['cantidadRegistrada6'], '1', 'auto'))
                    document.getElementById('identifierQuestionTipoSistema56P6S12').append(tr)

                    // PREGUNTA 7 SECCION 12
                    tr = document.createElement('tr')
                    tr.append(crearTD(idDependencia, '1', '5%'))
                    tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                    tr.append(crearTD(reporte['pregunta7seccion12']['Respuesta'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta7seccion12']['contratosRealizados'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta7seccion12']['Respuesta2'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta7seccion12']['contratosRealizados2'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta7seccion12']['Respuesta3'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta7seccion12']['contratosRealizados3'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta7seccion12']['Respuesta4'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta7seccion12']['contratosRealizados4'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta7seccion12']['Respuesta5'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta7seccion12']['contratosRealizados5'], '1', 'auto'))
                    document.getElementById('identifierQuestionP7S12').append(tr)
                    document.getElementById('identifierQuestionSumaTotalContratosP7S12').innerHTML = reporte['pregunta7seccion12']['totalContratos']
                    document.getElementById('identifierQuestionSumaContratosP7S12').classList.add('d-none')

                    // PREGUNTA 8 SECCION 12
                    tr = document.createElement('tr')
                    tr.append(crearTD(idDependencia, '1', '5%'))
                    tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                    tr.append(crearTD(reporte['pregunta8seccion12']['Respuesta'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta8seccion12']['Total'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta8seccion12']['Adquisiciones'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta8seccion12']['otraPublica'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta8seccion12']['Respuesta2'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta8seccion12']['Total2'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta8seccion12']['Adquisiciones2'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta8seccion12']['otraPublica2'], '1', 'auto'))
                    document.getElementById('identifierQuestionTipoProcedimiento12P8S12').append(tr)
                    document.getElementById('identifierQuestionSumaContratos12P8S12').classList.add('d-none')
                    tr = document.createElement('tr')
                    tr.append(crearTD(idDependencia, '1', '5%'))
                    tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                    tr.append(crearTD(reporte['pregunta8seccion12']['Respuesta3'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta8seccion12']['Total3'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta8seccion12']['Adquisiciones3'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta8seccion12']['otraPublica3'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta8seccion12']['Respuesta4'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta8seccion12']['Total4'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta8seccion12']['Adquisiciones4'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta8seccion12']['otraPublica4'], '1', 'auto'))
                    document.getElementById('identifierQuestionTipoProcedimiento34P8S12').append(tr)
                    document.getElementById('identifierQuestionSumaContratos34P8S12').classList.add('d-none')
                    tr = document.createElement('tr')
                    tr.append(crearTD(idDependencia, '1', '5%'))
                    tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                    tr.append(crearTD(reporte['pregunta8seccion12']['Respuesta5'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta8seccion12']['Total5'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta8seccion12']['Adquisiciones5'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta8seccion12']['otraPublica5'], '1', 'auto'))
                    document.getElementById('identifierQuestionTipoProcedimiento5P8S12').append(tr)
                    document.getElementById('totalContratosP8S12').innerHTML = reporte['pregunta8seccion12']['totalGeneral']
                    document.getElementById('totalContratos1P8S12').innerHTML = reporte['pregunta8seccion12']['totalGeneralAdquisiciones']
                    document.getElementById('totalContratos2P8S12').innerHTML = reporte['pregunta8seccion12']['totalGeneralObras']
                    document.getElementById('identifierQuestionSumaContratos5P8S12').classList.add('d-none')

                    // PREGUNTA 9 SECCION 12
                    tr = document.createElement('tr')
                    tr.append(crearTD(idDependencia, '1', '5%'))
                    tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                    tr.append(crearTD(reporte['pregunta9seccion12']['Respuesta'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta9seccion12']['monAsociado'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta9seccion12']['Respuesta2'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta9seccion12']['monAsociado2'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta9seccion12']['Respuesta3'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta9seccion12']['monAsociado3'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta9seccion12']['Respuesta4'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta9seccion12']['monAsociado4'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta9seccion12']['Respuesta5'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta9seccion12']['monAsociado5'], '1', 'auto'))
                    document.getElementById('identifierQuestionP9S12').append(tr)
                    document.getElementById('totalMontoP9S12').innerHTML = reporte['pregunta9seccion12']['totalMonto']
                    document.getElementById('identifierQuestionMontoAsociadoP9S12').classList.add('d-none')

                    // PREGUNTA 10 SECCION 12
                    tr = document.createElement('tr')
                    tr.append(crearTD(idDependencia, '1', '5%'))
                    tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                    tr.append(crearTD(reporte['pregunta10seccion12']['Respuesta'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta10seccion12']['TotalMonto'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta10seccion12']['totalMontoAdquisiciones'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta10seccion12']['totalMontoObra1'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta10seccion12']['Respuesta2'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta10seccion12']['TotalMonto2'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta10seccion12']['totalMontoAdquisiciones2'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta10seccion12']['totalMontoObra12'], '1', 'auto'))
                    document.getElementById('identifierQuestionTipoProcedimiento12P10S12').append(tr)
                    tr = document.createElement('tr')
                    tr.append(crearTD(idDependencia, '1', '5%'))
                    tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                    tr.append(crearTD(reporte['pregunta10seccion12']['Respuesta3'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta10seccion12']['TotalMonto3'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta10seccion12']['totalMontoAdquisiciones3'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta10seccion12']['totalMontoObra3'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta10seccion12']['Respuesta4'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta10seccion12']['TotalMonto4'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta10seccion12']['totalMontoAdquisiciones4'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta10seccion12']['totalMontoObra14'], '1', 'auto'))
                    document.getElementById('identifierQuestionTipoProcedimiento34P10S12').append(tr)
                    tr = document.createElement('tr')
                    tr.append(crearTD(idDependencia, '1', '5%'))
                    tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                    tr.append(crearTD(reporte['pregunta10seccion12']['Respuesta5'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta10seccion12']['TotalMonto5'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta10seccion12']['totalMontoAdquisiciones5'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta10seccion12']['totalMontoObra15'], '1', 'auto'))
                    document.getElementById('identifierQuestionTipoProcedimiento5P10S12').append(tr)
                    document.getElementById('totalMontoP10S12').innerHTML = reporte['pregunta10seccion12']['totalGeneralMaximo']
                    document.getElementById('totalMonto1P10S12').innerHTML = reporte['pregunta10seccion12']['totalMontoAdquisicionesGeneral']
                    document.getElementById('totalMonto2P10S12').innerHTML = reporte['pregunta10seccion12']['totalMontoObrasGeneral']

                    // PREGUNTA 11 SECCION 12
                    tr = document.createElement('tr')
                    tr.append(crearTD(idDependencia, '1', '5%'))
                    tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                    tr.append(crearTD(reporte['pregunta11seccion12']['Respuesta'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta11seccion12']['totalContratos'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta11seccion12']['Monto'], '1', 'auto'))
                    document.getElementById('identifierQuestionP11S12').append(tr)

                    // PREGUNTA 12 SECCION 12
                    tr = document.createElement('tr')
                    tr.append(crearTD(idDependencia, '1', '5%'))
                    tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                    tr.append(crearTD(reporte['pregunta12seccion12']['Respuesta'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta12seccion12']['totalContratos'], '1', 'auto'))
                    tr.append(crearTD(reporte['pregunta12seccion12']['Monto'], '1', 'auto'))
                    document.getElementById('identifierQuestionP12S12').append(tr)

                    // PREGUNTA 13 SECCION 12
                    tr = document.createElement('tr')
                    tr.append(crearTD(idDependencia, '1', '5%'))
                    tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                    tr.append(crearTD(reporte['pregunta13seccion12']['Total'], '1', 'auto'))
                    document.getElementById('identifierQuestionP13S12').append(tr)

                    // PREGUNTA 14 SECCION 12
                    tr = document.createElement('tr')
                    tr.append(crearTD(idDependencia, '1', '5%'))
                    tr.append(crearTD(nombreInstitucion, '2', 'auto'))
                    tr.append(crearTD(reporte['pregunta14seccion12']['Total'], '1', 'auto'))
                    document.getElementById('identifierQuestionP14S12').append(tr)

                    // IMPRMIR REPORTE
                    if (idDependencia == numerosConcentrados[idInstitucion].length) {
                        alertify.success('Carga terminada !')
                        // window.print()
                    }
                })
            })
        })
    }
})

async function recuperarNombreDependencia(idInstitucion, anioInstitucion) {
    try {
        let res = await axios('controllers/adminController.php', {
            method: 'POST',
            data: {
                tipoPeticion: 'nombreInstitucion',
                idInstitucion,
                anioInstitucion
            }
        })

        let resultado = res.data

        if (resultado[0] != undefined && resultado[0] == 'success') {
            nombreInstitucion = resultado[1]
            clasificacionInstitucion = resultado[2]

            return [nombreInstitucion, clasificacionInstitucion]
        } else if (resultado[0] != undefined && resultado[0] == 'error') {
            console.warn(resultado[1])
        } else {
            console.error(resultado)
        }
    } catch (error) {
        console.log(error)
    }
}

async function verificarCuestionarioFinalizado() {
    try {
        let res = await axios('controllers/questionaryController.php', {
            method: 'POST',
            data: {
                tipoPeticion: 'verificarCuestionarioFinalizado',
                idInstitucion,
                nombreInstitucion,
                clasificacionInstitucion,
                anioInstitucion,
            }
        })
        resultado = res.data
        if (resultado[0] == 'success') {
            return resultado[1]
        } else if (resultado[0] == 'error') {
            alertify.error(resultado[1])
        } else {
            console.warn('Tipo de respuesta no definido. ' + resultado)
        }
    } catch (error) {
        console.error(error);
    }
};

async function obtenerReporte(idInstitucion, nombreInstitucion, clasificacionInstitucion, anioInstitucion) {
    try {
        let res = await axios('controllers/questionaryController.php', {
            method: 'POST',
            data: {
                tipoPeticion: 'obtenerReporte',
                idInstitucion,
                nombreInstitucion,
                clasificacionInstitucion,
                anioInstitucion,
            }
        })
        reporte = res.data
    } catch (error) {
        console.error(error);
    }
}

crearTD = (textNode, colspan, width) => {
    td = document.createElement('td')
    td.setAttribute('colspan', colspan)
    td.style.width = width
    td.className = 'text-center align-middle'
    td.appendChild(document.createTextNode(textNode))
    return td
}

displayComentarios = (comentario, contenedor, textarea) => {
    if (comentario == '' || comentario == null || comentario == undefined || comentario == '.') {
        document.getElementById(contenedor).classList.add('d-none')
    } else {
        document.getElementById(textarea).value = comentario
    }
}

ocultarPreguntasNoContestadas = () => {
    if (reporte['pregunta16seccion1']['Respuesta'] != '1') {
        document.getElementById('contenedorP17S1').classList.add('d-none')
        document.getElementById('contenedorP18S1').classList.add('d-none')
    }
    if (reporte['pregunta25seccion1']['Respuesta'] != '1') {
        document.getElementById('contenedorHideP26s1').classList.add('d-none')
    }
    if (reporte['pregunta27seccion1']['Respuesta'] != '1') {
        document.getElementById('contenedorHideP28s1').classList.add('d-none')
    }
    if (reporte['pregunta29seccion1']['Respuesta'] != '1') {
        document.getElementById('contenedorHide30s1').classList.add('d-none')
    }
    if (reporte['pregunta34seccion1']['Respuesta'] != '1') {
        document.getElementById('contenedorP30S1').classList.add('d-none')
    }
    if (reporte['pregunta4seccion12']['Respuesta'] != '1') {
        document.getElementById('contenedorP5S12').classList.add('d-none')
    }
}