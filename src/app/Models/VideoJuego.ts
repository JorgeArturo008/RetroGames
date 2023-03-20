export class VideoJuego {
        
    _id?: Number;
    Nombre: String;
    Url: String;
    Descripcion: String;
    year: number;
    productora: String;

    constructor(Nombre: String, Url: String, Descripcion: String, year:number, productora:string )
    {
        this.Nombre = Nombre;
        this.Url = Url;
        this.Descripcion = Descripcion;
        this.year = year;
        this.productora = productora;


    }
}