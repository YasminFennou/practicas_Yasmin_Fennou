// Crea un objeto que tenga un método que permita concatenar los valores de todas sus propiedades (sin harcodear).
// esto es sin hardcodear y escalable quiere decir que se añadan los datos que se añadan no tengo que tocar la funcion
const myObject = {
     prop1 : "super",
     prop2 : "cali",
     prop3: "fragil",
     prop4 :"listicoespialidoso",
    concatenar: function (){
        //this
        //return this.prop1 + this.prop2+ this.prop3 + this.prop4;
    let all ="";
    
    Object.values(this).forEach((item)=>{
      if(typeof item === "string") all += item;
    })
      return all;
    }

}
console.log(myObject.concatenar())


