import { useEffect, useState } from "react";

import "./ProjectFormStyle.css";
import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";

function ProjectForm({ btnText }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Pegando direto do 'Banco de dados'
    fetch("https://localhost:5000/categories", {
      method: "GET",
      headres: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setCategories = data;
      })
      .catch((erro) => console.log(erro));
    // Pegando direto do 'Banco de dados'
  }, []);

  return (
    <form className="form">
      <div>
        <Input
          type="text"
          txt="Nome do projeto"
          name="name"
          placeholder="Insira o nome do projeto"
        ></Input>
      </div>
      <div>
        <Input
          type="number"
          txt="Orçamento do projeto"
          name="budget"
          placeholder="Insira o orçamento total"
        ></Input>
      </div>
      <div>
        <Select
          name="categoryId"
          txt="Selecione uma categoria"
          options={categories}
        ></Select>
      </div>
      <div>
        <SubmitButton text={btnText}></SubmitButton>
      </div>
    </form>
  );
}

export default ProjectForm;
