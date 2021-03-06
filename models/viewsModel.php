<?php
class viewsModel
{
    static protected function obtenerVistasModelo($vistas)
    {
        $listaBlanca = [
            "admin",
            "questionary",
            "questionaryReport",
            "oldIndividualReport",
            "oldCentralizedReport",
            "oldParastatalReport",
            "oldGeneralReport"
        ];

        if (in_array($vistas, $listaBlanca)) {
            if (is_file("./views/templates/" . $vistas . ".php")) {
                $contenido = "./views/templates/" . $vistas . ".php";
            } else {
                $contenido = "";
            }
        } else {
            $contenido = "";
        }

        return $contenido;
    }
}

# by Alejandro Ríos - RiversHIRSCH