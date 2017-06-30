function MostrarPensum(carrera)
{
	//Creo un div para la carrera completa
	var carreraDiv = document.createElement("div");
	//Agrego el elemento del titulo
	var titulo = document.createElement("H1");
	//Creo el texto
	var nombreCarrera = document.createTextNode(carrera.nombre);
	//Coloco el texto en el titulo
	titulo.appendChild(nombreCarrera);
	//Coloco el titulo en el div
	carreraDiv.appendChild(titulo);

	var semestreTitulo;
	var semestreDiv;
	var materiaTitulo;
	var materiaCodigo;
	var materiaCreditos;
	var materiaDiv;
	var contadorSemestre = 1;
	var i = 0;
	//Ciclo para los semestres (se sabe que son 10 siempre)
	while (contadorSemestre<=10)
	{
		//Creo el div del semestre y coloco el titulo
		semestreDiv = document.createElement("div");
		semestreDiv.className = "SemestreDiv";
		semestreTitulo = document.createElement("H3");
		semestreTitulo.className = "SemestreTitulo";
		semestreTitulo.id = "Semestre"+contadorSemestre;
		semestreTitulo.appendChild(document.createTextNode("Semestre #"+contadorSemestre));
		semestreDiv.appendChild(semestreTitulo);
		//Ciclo para la creacion de cada materia del semestre
		while (i<carrera.materias.length && (carrera.materias[i].semestre == contadorSemestre))
		{
			//Creo el boton para la materia
			materiaDiv = document.createElement("button");
			materiaDiv.className = "MateriaDiv";
			//Coloco el Id que seria el codigo de la materia
			materiaDiv.id = carrera.materias[i].codigo;
			//Agrego el listener para cuando se presione la materia
			materiaDiv.addEventListener("click", carrera.materias[i].presionaMateria);
			materiaTitulo = document.createElement("H3");
			materiaTitulo.appendChild(document.createTextNode(carrera.materias[i].nombre));
			materiaCodigo = document.createElement("p");
			materiaCodigo.appendChild(document.createTextNode(carrera.materias[i].codigo));
			materiaCreditos = document.createElement("p");
			materiaCreditos.appendChild(document.createTextNode("Creditos: "+carrera.materias[i].creditos));
			materiaDiv.appendChild(materiaTitulo);
			materiaDiv.appendChild(materiaCodigo);
			materiaDiv.appendChild(materiaCreditos);
			//Agrego la materia el semestre
			semestreDiv.appendChild(materiaDiv);
			i++;
		}
		carreraDiv.appendChild(semestreDiv);
		contadorSemestre++;
	}
	//Agrego el semestre al documento
	document.body.appendChild(carreraDiv);
}