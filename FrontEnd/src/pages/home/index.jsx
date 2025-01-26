import { useRef, useState } from "react";
import "./style.css";
import api from "../../services/api";

function Home() {
  const inputName = useRef();
  const inputEmail = useRef();
  const inputPassword = useRef();
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function createUsers() {
    if (
      !inputName.current.value ||
      !inputEmail.current.value ||
      !inputPassword.current.value
    ) {
      setErrorMessage("Todos os campos são obrigatórios!");
      setSuccessMessage("");
      return;
    }

    try {
      await api.post("/usuarios", {
        name: inputName.current.value,
        email: inputEmail.current.value,
        password: inputPassword.current.value,
      });

      inputName.current.value = "";
      inputEmail.current.value = "";
      inputPassword.current.value = "";

      setSuccessMessage("Cadastrado com sucesso!");
      setErrorMessage("");
    } catch (error) {
      setErrorMessage("Erro ao cadastrar usuário. Tente novamente.");
      setSuccessMessage("");
    }
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
        <input
          placeholder="Senha"
          name="password"
          type="password"
          ref={inputPassword}
        />
        <button type="button" onClick={createUsers}>
          Cadastrar
        </button>
      </form>

      {}
      {successMessage && (
        <div className="success-message">{successMessage}</div>
      )}
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </div>
  );
}

export default Home;
