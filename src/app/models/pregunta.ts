import { Opcion } from "./opcion";

export interface Pregunta {
    validado: boolean,
    pregunta: string,
    opciones: Opcion[],
    respuesta?: number
}