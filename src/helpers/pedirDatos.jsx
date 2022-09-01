/* Traemos los archivos de la base de datos local. */
import { stock } from "../data/data";

export const pedirDatos = (param) => {

  /*Hacemos una promesa y establecemos condiciones para ejecutar lo que corresponda  */

  return new Promise( (resolve, reject) =>{

      setTimeout(() => {
        if(param){
           resolve(stock)
        } else{
          reject("Promesa rechazada")
        }
      }, 1000)
    })
  }
