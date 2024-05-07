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
})
function buscarProyecto(name, proyectos){
    if (proyectos.length === 0){
        return "";
    }
    
    if (proyectos.includes(name)) {
        return name;
    }
}
