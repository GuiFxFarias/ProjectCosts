function ProjectForm() {
  return (
    <form action="">
      <div>
        <input type="text" placeholder="Insira o nome do projeto" />{" "}
      </div>
      <div>
        <input type="number" placeholder="Insira o Orçamento total" />
      </div>
      <div>
        <select name="categorId" id="category">
          <option disabled selected>Selecione a Categoria</option>
        </select>
      </div>
      <div>
        <input type="submit" value="Criar Projeto" />
      </div>
    </form>
  );
}

export default ProjectForm;
