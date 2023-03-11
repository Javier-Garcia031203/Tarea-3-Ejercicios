
/*3. Se desea crear un programa para el control de registro de entrada y salida de personal de un centro educativo
los datos del personal son: identificador, nombre completo, grado académico (Bachillerato, licenciatura, maestría o doctorado), 
curp, fecha de ingreso,genero y clave presupuestal. El personal tiene asignado previamente un horario de trabajo y en función a ello se va
a determinar según el registro de entrada si tiene retardo o en su caso sino registró entrada podría ser una falta o permiso justificado 
El sistema cada quincena debe generar el total de inasistencias, retardos o permisos justificados de cada personal; 
se considera retardo si el registro se realizó en un intervalo entre 11 a 20 minutos después del horario establecido. También se 
considera inasistencia si la salida se registró antes del horario de salida establecida 

Los horarios previamente establecidos debe tener el personal, dia, hora entrada y hora salida y desde luego la fecha inicial 
y final que aplica ese horario (Se asume que solo habrá un horario por día). 

Si la antigüedad es menor a 10 años cada 3 retardos a la quincena serán contabilizados como 1 falta.*/

export default class person{
    identified
    fullName
    academicDegree
    curp
    admissionDate
    gender
    budgetKey

    constructor( identified, fullName, academicDegree, curp, admissionDate, gender,budgetKey) {
       this.identified=identified;
       this.fullName=fullName;
       this.academicDegree=academicDegree;
       this.curp=curp;
       this.admissionDate=admissionDate;
       this.gender=gender;
       this.budgetKey=budgetKey;
    }

}

