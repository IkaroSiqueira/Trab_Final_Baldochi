enum status{
    "iniciado",
    "avisado",
    "anulado"
}
export class Reserva {
    codigo: number;
    ISBN: string = '';
    codigo_assoc: number;
    data: Date;
    status: status.iniciado;
}
