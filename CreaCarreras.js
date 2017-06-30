//Creacion de materias
// Materia(nombre, codigo, semestre, creditos, esPrelada, prela)
//------------------PRIMER SEMESTRE---------------------------------------
var log01404 = new Materia("Lógica", "LOG01404", [], ["CIN02303"]);
var mat01506 = new Materia("Matemática I", "MAT01506", [], ["MAT02405"]);
var tem01204 = new Materia("Tecnología I (Materiales)", "TEM01204", [], ["TEE02204"]);
var dis01608 = new Materia("Diseño I", "DIS01608", [], ["DIS02608"]);
var tex01304 = new Materia("Taller de Expresión I", "TEX01304", [], ["TEX02204"]);
var gan01404 = new Materia("Geometría Analítica", "GAN01404", [], ["FIS02406", "ALI02304"]);
var efs01202 = new Materia("Educación Física y Salud", "EFS01202", [], []);
var vec01202 = new Materia("Venezuela Contemporánea", "VEC01202", [], []);
var les01303 = new Materia("Lengua Española", "LES01303", [], ["LIN02303"]);
var iai01303 = new Materia("Introducción a la Investigación", "IAI01303", [], []);
var vci01303 = new Materia("Valores Ciudadanos", "VCI01303", [], []);
var and01203 = new Materia("Anatomía Dental", "AND01203", [], ["BIO02203", "NEU02304"]);
var anh01304 = new Materia("Anatomía Humana", "ANH01304", [], ["NEU02304", "HIG02304"]);
var bio01304 = new Materia("Bioquímica", "BIO01304", [], ["BIO02304"]);
var mei01303 = new Materia("Metodología de la Investigación", "MEI01303", [], ["BIO02202"]);
var ind01506 = new Materia("Introducción al Derecho", "IND01506", [], ["DCI02506", "PDP02506"]);
var dro01506 = new Materia("Derecho Romano I", "DRO01506", [], []);
var sju01506 = new Materia("Sociología Jurídica", "SJU01506", [], []);
var epo01304 = new Materia("Economía Política", "EPO01304", [], []);
var ina01102 = new Materia("Informática para Abogados", "INA01102", [], []);

//------------------- SEGUNDO SEMESTRE --------------------------
var cin02303 = new Materia("Creatividad e Inventiva", "CIN02303", ["LOG01404"], []);
var mat02405 = new Materia("Matemática II", "MAT02405", ["MAT01506"], ["TEC03303"]);
var tee02204 = new Materia("Tecnología II (Intro. Estructura)", "TEE02204", ["TEM01204"], ["TEC03303"]);
var dis02608 = new Materia("Diseño II", "DIS02608", ["DIS01608"], ["DIS03608"]);
var tex02204 = new Materia("Taller de Expresión II", "TEX02204", ["TEX01304"], ["GED03304"]);
var ged02304 = new Materia("Geometría Descriptiva I", "GED02304", [], ["GED03304"], 10);

//------------------TERCER SEMESTRE---------------------------------------
var efs03202 = new Materia("Educación Física y Salud", "EFS03202", [], [], 30);
var vec03202 = new Materia("Venezuela Contemporánea", "VEC03202", [], ["HIS04202"], 30);
var tec03303 = new Materia("Tecnología III (Estructuras)", "TEC03303", ["MAT02405", "TEE02204"], ["TEC04303"]);
var dis03608 = new Materia("Diseño III", "DIS03608", ["DIS02608"], ["DIS04608"]);
var epd03204 = new Materia("Estrategias para el Diseño", "EPD03204", [], ["DIS04608"], 30);
var ged03304 = new Materia("Geometría Descriptiva II", "GED03304", ["TEX02204", "GED02304"], ["TOP04204"]);

//------------------CUARTO SEMESTRE---------------------------------------
var ing04303 = new Materia("Ingles", "ING04303", [], [], 49);
var his04202 = new Materia("Historia", "HIS04202", ["VEC03202"], ["TAR05202", "HIS05202"]);
var tec04303 = new Materia("Tecnologia IV (Instalaciones)", "TEC04303", ["TEC03303"], ["TEC05304"]);
var dis04608 = new Materia("Diseño IV", "DIS04608", ["DIS03608", "EPD03204"], ["DIS05608"]);
var aye04303 = new Materia("Ambiente y edificacion", "AYE04303", [], ["AAM05303"], 49);
var top04204 = new Materia("Topografica", "TOP04204", ["GED03304"], ["DPC05304"]);

//------------------QUINTO SEMESTRE---------------------------------------
var tar05202 = new Materia("Teoría de la Arquitectura I", "TAR05202", ["HIS04202"], ["TAR06202"]);
var his05202 = new Materia("Historia II", "HIS05202", ["HIS04202"], ["HIS06202"]);
var tec05304 = new Materia("Tecnología V (Construcción)", "TEC05304", ["TEC04303"], ["SDO06304"]);
var dis05608 = new Materia("Diseño V", "DIS05608", ["DIS04608"], ["DIS06608"]);
var aam05303 = new Materia("Acondicionamiento Ambiental", "AAM05303", ["AYE04303"], ["DIS06608"]);
var dpc05304 = new Materia("Diseño por Computadora CAD I", "DPC05304", ["TOP04204"], ["DPC06304"]);

//------------------SEXTO SEMESTRE---------------------------------------
var tar06202 = new Materia("Teoría de la Arquitectura II", "TAR06202", ["TAR05202"], []);
var his06202 = new Materia("Historia III","HIS06202", ["HIS05202"], ["HIS07202"]);
var sdo06304 = new Materia("Supervisión de Obras","SDO06304", ["TEC05304"], ["TEC07304"]);
var dis06608 = new Materia("Diseño VI","DIS06608", ["DIS05608", "AAM05303"], ["DIS07608"]);
var ela06202 = new Materia("Electiva I","ELA06202", [], [], 105);
var dpc06304 = new Materia("Diseño por Computadora CAD II","DPC06304", ["DPC05304"], ["ELC07304"]);

//------------------SEPTIMO SEMESTRE---------------------------------------
var urb07202 = new Materia("Urbanismo", "URB07202", [], ["EUR08303"], 105);
var his07202 = new Materia("Historia IV", "HIS07202", ["HIS06202"], []);
var tec07304 = new Materia("Taller de Tecnología I", "TEC07304", ["SDO06304"], ["TEC08304"]);
var dis07608 = new Materia("Diseño VII", "DIS07608", ["DIS06608"], ["DIS08608"]);
var ela07202 = new Materia("Electiva II", "ELA07202", [], [], 105);
var elc07304 = new Materia("Electiva CAD", "ELC07304", ["DPC06304"], []);

//------------------OCTAVO SEMESTRE---------------------------------------
var eur08303 = new Materia("Estructura Urbana", "EUR08303", ["URB07202"], []);
var eha08202 = new Materia("El Hombre y su Ambiente", "EHA08202", [], [], 114);
var tec08304 = new Materia("Taller de Tecnología II", "TEC08304", ["TEC07304"], ["DIS09914"]);
var dis08608 = new Materia("Diseño VIII", "DIS08608", ["DIS07608"], ["DIS09914"]);
var ela08303 = new Materia("Electiva III", "ELA08303", [], [], 123);
var min08303 = new Materia("Metodología de la Investigación", "MIN08303", [], [], 123);

//------------------NOVENO SEMESTRE---------------------------------------
var cut09202 = new Materia("Cultura", "CUT09202", [], [], 132);
var dep08202 = new Materia("Deontología y Ética Profesional", "DEP09202", [], [], 142);
var dis09914 = new Materia("Diseño X: Trabajo de Grado I", "DIS09914", ["TEC08304", "DIS08608", "MIN08303"], ["DIS10914"]);
var ela09404 = new Materia("Electiva IV", "ELA09404", [], [],142);

//------------------DECIMO SEMESTRE---------------------------------------
var dis10914 = new Materia("Diseño X: Trabajo de Grado II", "DIS10914", ["DIS09914"], []);
var ela10404 = new Materia("Electiva V", "ELA10404", [], [], 161);

//Creacion de carreras
// Carrera(nombre, materias)
//Arquitectura
var materiasArquitectura = [
	log01404, 
	mat01506, 
	tem01204, 
	dis01608, 
	tex01304,

	cin02303,
	mat02405,
	tee02204,
	dis02608,
	tex02204,
	ged02304,

	efs03202,
	vec03202,
	tec03303,
	dis03608,
	epd03204,
	ged03304,

	ing04303,
	his04202,
	tec04303,
	dis04608,
	aye04303,
	top04204,

	tar05202,
	his05202,
	tec05304,
	dis05608,
	aam05303,
	dpc05304,

	tar06202,
	his06202,
	sdo06304,
	dis06608,
	ela06202,
	dpc06304,

	urb07202,
	his07202,
	tec07304,
	dis07608,
	ela07202,
	elc07304,

	eur08303,
	eha08202,
	tec08304,
	dis08608,
	ela08303,
	min08303,

	cut09202,
	dep08202,
	dis09914,
	ela09404,

	dis10914,
	ela10404
];
var arquitectura = new Carrera("Arquitectura", materiasArquitectura);

//Ingenieria en computacion
var materiasComputacion = [
	gan01404,
	mat01506,
	efs01202,
	log01404,
	vec01202
];
var computacion = new Carrera("Ingeniería de Computación", materiasComputacion);

//Ingenieria industrial
var materiasIndustrial = [
	gan01404,
	mat01506,
	efs01202,
	log01404,
	vec01202
];
var industrial = new Carrera("Ingeniería Industrial", materiasIndustrial);

//Ingenieria de telecomunicaciones
var materiasTelecom = [
	gan01404,
	mat01506,
	efs01202,
	log01404,
	vec01202
];
var telecom = new Carrera("Ingeniería de Telecomunicaciones", materiasTelecom);

//Administracion de empresas
var materiasAdministracionEmpresas = [
	vec01202,
	mat01506,
	log01404,
	efs01202
];
var administracionEmpresas = new Carrera("Administración de Empresas", materiasAdministracionEmpresas);

//Contaduria publica
var materiasContaduria = [
	vec01202,
	mat01506,
	log01404,
	efs01202
];
var contaduria = new Carrera("Contaduría Pública", materiasContaduria);

//Mercadeo
var materiasMercadeo = [
	vec01202,
	mat01506,
	log01404,
	efs01202
];
var mercadeo = new Carrera("Mercadeo", materiasMercadeo);

//Relaciones industriales
var materiasRelacionesIndustriales = [
	vec01202,
	mat01506,
	log01404,
	efs01202
];
var relacionesIndustriales = new Carrera("Relaciones Industriales", materiasRelacionesIndustriales);

//Educacion preescolar
var materiasPreescolar = [
	vec01202,
	les01303,
	iai01303,
	efs01202,
	vci01303
];
var preescolar = new Carrera("Educación Preescolar", materiasPreescolar);

//Odontologia
var materiasOdontologia = [
	and01203,
	anh01304,
	log01404,
	efs01202,
	bio01304,
	mei01303,
	vec01202
];
var odontologia = new Carrera("Odontología", materiasOdontologia);

//Derecho
var materiasDerecho = [
	ind01506,
	dro01506,
	sju01506,
	epo01304,
	ina01102
];
var derecho = new Carrera("Derecho", materiasDerecho);