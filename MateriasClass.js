function Materia(nombre, codigo, esPrelada, prela, prelacionCreditos=0)
{
	//Defino la materia
	this.nombre = nombre;
	this.codigo = codigo;
	this.semestre = codigo[3]+codigo[4];
	this.creditos = codigo[5];
	this.esPrelada = esPrelada;
	this.prela = prela;
	this.prelacionCreditos;

	//Funcion para cuando se presione la materia
	this.presionaMateria = function()
	{
		//Limpio los colores
		var todas = document.getElementsByClassName("MateriaDiv");
		for (var i = 0; i<todas.length; i++)
		{
			todas[i].style.backgroundColor = "#D5D5D5";
		}

		//Pinto la materia presionada
		document.getElementById(codigo).style.backgroundColor = "green";

		//Ciclo que recorre la materias que es prelada
		for (var i = 0; i<esPrelada.length; i++)
		{
			document.getElementById(esPrelada[i]).style.backgroundColor = "red";
		}

		//Ciclo que recorre la materias que prela
		for (var i = 0; i<prela.length; i++)
		{
			document.getElementById(prela[i]).style.backgroundColor = "blue";
		}
	}
}