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
})
function buscarProyecto(name, proyectos){
    if (proyectos.length === 0){
        return "";
    }
    for(const project of proyectos){
        if(project === name)
        {
            return project;
        }
    }
}
