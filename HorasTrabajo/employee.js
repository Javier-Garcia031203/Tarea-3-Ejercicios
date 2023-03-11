/*Una empresa nos ha encargado un programa para calcular las nóminas de los trabajadores.
El sueldo base semanal sale aplicando la siguiente fórmula: 
horastrabajo * preciohora + horesextra*preciohoraextra

El preciohora es una constante=90. El preciohoraextra depende de las horas extras hechas: si son
menos de 10h extras semanales, el precio es un 50% mayor que el preciohora (* 1.5). Si se
hacen entre 10 y 20h extra, el precio es un 40% mayor. Si se hacen más de 20h, el precio es un
20% mayor. Si el trabajador es de categoría 3, el preciohora es constante. Si es de categoría 2;
el preciohora es un 25% mayor y si es de categoría 1 es un 45% más.*/

export default class Employee {
    constructor(id, name, category  ){
        this.id = id;
        this.name = name;
        this.category =  category
    }
}