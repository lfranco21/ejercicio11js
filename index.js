

class Estudiante {
    _nombre
    _asignaturas

    constructor(nom, asig ){
        this._nombre = nom
        this._asignaturas =  asig
    } 

    obtenDatos (){
        return (this.nom, this.asig)
    }
}

const nuevoEst = new Estudiante ("Luis", "css")
console.log(nuevoEst);
nuevoEst.obtenDatos()
