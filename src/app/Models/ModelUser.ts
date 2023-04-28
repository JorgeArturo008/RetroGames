export interface UserModel{

    Nombre: string    ,
    Edad: number,
    Telefono: number,
    Email: string,
    password: string,
    repetirPassword:string,
    videojuegoFav:string,
    uid: string,
    perfil: "Visitante"|"Admin",
    urlfotoperfil: string

}

export class ModeloPerfil{

    Nombre: string;
     Edad: number; 
     Telefono: number; 
     Email: string; 
     password: string;
    repetirPassword:string; 
    videojuegoFav:string; 
    uid: string;
     perfil: "Visitante"|"Admin";
    urlfotoperfil: string

    constructor(Nombre: string,Edad: number,Telefono: number,Email: string,password: string,
                 repetirPassword:string, videojuegoFav:string, uid: string, perfil: "Visitante"|"Admin",
                 urlfotoperfil: string){

        this.Nombre = Nombre;
       this.Edad = Edad;
       this.Telefono = Telefono;
       this.Email = Email;
       this.password = password;
       this.repetirPassword = repetirPassword;
       this.videojuegoFav = videojuegoFav;
       this.uid = uid;
       this.perfil = perfil;
       this.urlfotoperfil = urlfotoperfil;



    }
}