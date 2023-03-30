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