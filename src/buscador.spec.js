describe("Buscador", () =>{
    it("doesn´t finds any project match when having an empty array",() => {
        let proyectos = [];
        expect(buscarProyecto("exercise1",proyectos)).toEqual("");
        
    })
})
function buscarProyecto(name, project){
    return "";
}
