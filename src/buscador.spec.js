describe("Buscador", () =>{
    it("doesn´t finds any project match when having an empty array",() => {
        let proyectos = [];
        expect(buscarProyecto("exercise1",proyectos)).toEqual("");
        
    })

    it("finds project when it exists in the array of projects", () => {
        let proyectos = [];
        proyectos.push("my_Unique_Project");
        expect(buscarProyecto("my_Unique_Project",proyectos)).toEqual("my_Unique_Project");
    })

    it("finds a project when it exists in an array with many other projects", () => {
        let proyectos = [];
        proyectos.push("my_Project_1");
        proyectos.push("my_Project_2");
        proyectos.push("my_Project_3");
        expect(buscarProyecto("my_Project_2",proyectos)).toEqual("my_Project_2");
    })

    // buscar y enceontrar mas de una coindencia de proyectos
    it("finds multiple projects when there are multiple matches", () => {
        let proyectos = ["my_Project_1", "my_Project_2", "my_Special_Project_2", "my_Project_3"];
        expect(buscarProyecto("Project_2", proyectos)).toEqual(["my_Project_2", "my_Special_Project_2"]);
    });

    // 2.-buscar y enceontrar proyectos cuyo nombre empieza con el criterio de busqueda
         // por ejm: "ejerc" y en mi lista tengo "ejercio1", "ejercicio2" -> devuelve ambos
    it("finds projects that start with the search criteria", () => {
        let proyectos = ["ejercicio1", "ejercicio2", "proyectoFinal"];
        expect(buscarProyecto("ejerc", proyectos)).toEqual(["ejercicio1", "ejercicio2"]);
    });
    
})
function buscarProyecto(name, proyectos){
    if (proyectos.length === 0){
        return "";
    }
    let coincidencias = [];
    for(const project of proyectos){
        if(project.includes(name)) { 
            coincidencias.push(project);
        }
    }
    if (coincidencias.length === 0) return "";
    if (coincidencias.length === 1) return coincidencias[0]; 
    return coincidencias; 
}
