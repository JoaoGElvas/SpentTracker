import { useRef } from "react";
import "./style.css";
import api from "../../services/api";

function Home() {
  const inputName = useRef();
  const inputEmail = useRef();

  async function createUsers() {
    await api.post("/usuarios", {
      name: inputName.current.value,
      email: inputEmail.current.value,
    });
  }

  return (
    <div className="container">
      <form>
        <h1>Cadastro de Usuário</h1>
        <input placeholder="Nome" name="name" type="text" ref={inputName} />
        <input
          placeholder="E-mail"
          name="email"
          type="email"
          ref={inputEmail}
        />
        <button type="button" onClick={createUsers}>
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default Home;
