export class VideoJuego {
        
    _id?: Number;
    Nombre: String;
    Url: String;
    Descripcion: String;
    year: number;
    productora: String;
    UrlDescarga: String;

    constructor(Nombre: String, Url: String, Descripcion: String, year:number, productora:string, UrlDescarga: String )
    {

        this.Nombre = Nombre;
        this.Url = Url;
        this.Descripcion = Descripcion;
        this.year = year;
        this.productora = productora;
        this.UrlDescarga = UrlDescarga

    }
}