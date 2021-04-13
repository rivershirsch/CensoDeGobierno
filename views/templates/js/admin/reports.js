let reportes = null

document.addEventListener('DOMContentLoaded', () => {
    llenarSelectDeAnios('selectAnioReportes')
    listarReportes(document.getElementById('selectAnioReportes').value).then(() => { generarTablaReportes() })

    document.getElementById('selectAnioReportes').addEventListener('change', function () {
        listarReportes(this.value).then(() => { generarTablaReportes() })
    })
})

// LISTAR REPORTES
async function listarReportes(anioDependencia) {
    try {
        let res = await axios('controllers/adminController.php', {
            method: 'POST',
            data: {
                tipoPeticion: 'listarReportes',
                anioDependencia: anioDependencia
            }
        })

        let resultado = res.data

        if (resultado[0] == 'success') {
            reportes = resultado[1]
        } else if (resultado[0] == 'error') {
            alertify.error(resultado[1])
        } else if (resultado[0] == 'warn') {
            console.warn(resultado[1])
        } else {
            console.error('Tipo de respuesta no definido. ' + resultado)
        }
    } catch (error) {
        console.error(error)
    }
}

// GENERAR TABLA REPORTES
generarTablaReportes = () => {
    let table = document.createElement('table'),
        head = document.createElement('thead'),
        body = document.createElement('tbody'),
        tr = document.createElement('tr'),
        th = document.createElement('th')

    table.id = 'tablaReportes'
    table.className += 'table table-hover table-sm'
    table.style.width = '100%'
    head.style.backgroundColor = '#F7F7F9'

    th.scope = 'col'
    th.appendChild(document.createTextNode('Clave'))
    tr.append(th)
    th = document.createElement('th')
    th.scope = 'col'
    th.appendChild(document.createTextNode('Año'))
    tr.append(th)
    th = document.createElement('th')
    th.scope = 'col'
    th.appendChild(document.createTextNode('Dependencia'))
    tr.append(th)
    th = document.createElement('th')
    th.scope = 'col'
    th.appendChild(document.createTextNode('Clasificación'))
    tr.append(th)
    th = document.createElement('th')
    th.scope = 'col'
    th.className = 'text-center'
    th.appendChild(document.createTextNode('Acciones'))
    tr.append(th)
    head.append(tr)

    reportes.forEach(dependencia => {
        tr = document.createElement('tr')
        th = document.createElement('th')
        th.scope = 'row'
        th.append(document.createTextNode(dependencia['idInstitucion']))
        tr.append(th)
        td = document.createElement('td')
        td.append(document.createTextNode(dependencia['anioInstitucion']))
        tr.append(td)
        td = document.createElement('td')
        td.append(document.createTextNode(dependencia['nombreInstitucion']))
        td.className = 'text-truncate'
        tr.append(td)
        td = document.createElement('td')
        td.append(dependencia['clasificacion'] == 1 ? document.createTextNode('Centralizada') : document.createTextNode('Paraestatal'))
        tr.append(td)
        td = document.createElement('td')
        td.className = 'text-center align-middle'
        td.style.width = '15%'

        a = document.createElement('a')
        a.className = 'btnReporteIndividual'
        a.id = 'btnReporteIndividual-' + dependencia['idInstitucion'] + '-' + dependencia['anioInstitucion']
        a.title = 'Generar reporte'
        i = document.createElement('i')
        i.className = 'fas fa-lg fa-address-book text-info mx-0 w-25'
        a.append(i)
        td.append(a)

        a = document.createElement('a')
        a.className = 'btnTituloReporte'
        a.id = 'btnTituloReporte-' + dependencia['idInstitucion'] + '-' + dependencia['anioInstitucion']
        a.title = 'Título del titular'
        i = document.createElement('i')
        i.className = 'fas fa-lg fa-file-image text-warning mx-0 w-25'
        a.append(i)
        td.append(a)

        a = document.createElement('a')
        a.className = 'btnCedulaReporte'
        a.id = 'btnCedulaReporte-' + dependencia['idInstitucion'] + '-' + dependencia['anioInstitucion']
        a.title = 'Cédula del titular'
        i = document.createElement('i')
        i.className = 'fas fa-lg fa-file-pdf text-warning mx-0 w-25'
        a.append(i)
        td.append(a)

        tr.append(td)
        body.append(tr)
    })

    table.append(head)
    table.append(body)
    document.getElementById('contenedorTablaReportesIndividuales').innerHTML = ''
    document.getElementById('contenedorTablaReportesIndividuales').append(table)

    listenersDeAccionesResultados()
    aplicarDataTable('tablaReportes')
}

listenersDeAccionesResultados = () => {
    let elementosReporteIndivudual = document.getElementsByClassName('btnReporteIndividual'),
        elementosTituloReporte = document.getElementsByClassName('btnTituloReporte'),
        elementosCedulaReporte = document.getElementsByClassName('btnCedulaReporte')

    for (let i = 0; i < elementosReporteIndivudual.length; i++) {
        document.getElementById(elementosReporteIndivudual[i].id).addEventListener('click', function () {
            let idDependencia = this.id.split('-')[1],
                anioDependencia = this.id.split('-')[2]

            alertify.success('Reporte de ' + idDependencia + '(' + anioDependencia + ')')
        })
    }
}