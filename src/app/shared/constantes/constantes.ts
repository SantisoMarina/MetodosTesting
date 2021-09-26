import { IEstadoAccion } from "../interfaces/IEstadoAccion";
import { IRutaAcr } from "../interfaces/IRutaAcr";

export const rutas_tecnicas_acr: IRutaAcr[] = [
    {
        ruta: 'particion-equivalente',
        acr: 'part_equiv'
    },
    {
        ruta: 'valores-limites',
        acr: 'analisis_val_lim'
    },
    {
        ruta: 'transicion-estados',
        acr: 'trans_est'
    },
    {
        ruta: 'tabla-decision',
        acr: 'tabla_dec'
    },
    {
        ruta: 'casos-uso',
        acr: 'casos_uso'
    }
]

export const acciones_desenchufado: IEstadoAccion[] = [
    {
        accion: 'enchufar',
        estado: 'enchufado',
        color: 'success'
    }
]
export const acciones_enchufado: IEstadoAccion[] = [
    {
        accion: 'desenchufar',
        estado: 'desenchufado',
        color: 'danger'
    },
    {
        accion: 'prender',
        estado: 'prendido',
        color: 'primary'
    }
]
export const acciones_prendido: IEstadoAccion[] = [
    {
        accion: 'desenchufar',
        estado: 'desenchufado',
        color: 'danger'
    }, {
        accion: 'apagar',
        estado: 'apagado',
        color: 'warning'
    },
]
export const acciones_apagado: IEstadoAccion[] = [
    {
        accion: 'desenchufar',
        estado: 'desenchufado',
        color: 'danger'
    },
    {
        accion: 'prender',
        estado: 'prendido',
        color: 'primary'
    }
]
