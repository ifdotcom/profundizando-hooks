import { useState } from "react";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "ifdotcom",
    email: "if@mail.com",
  });

  // se destrucutra el objeto del estado para usarlos en los values de los inputs
  const { username, email } = formState;

// onInputChange recibe el event, pero se  puede desestrucutrar para sacar solo el target {target};
//  del target solo nos interesa el value y también que elemento es el que está cambiando, entonces: podemos destructurar el name y el value const {name, value} = target;
  const onInputChange = ({target}) => {
    const {name, value} = target;

  // cambio del estado
    setFormState({
      // se destructura para mantener todos los valores del formulario
      // solo modicar el input (name) que está siendo modificando
      ...formState,

      // name = username : "value"
      // name = email : "value"
      [name]:value
    })
  };
  return (
    <>
      <h1>Formulario</h1>

      <hr />

      <input
        type="text"
        className="form-control mt-4"
        placeholder="Usuario"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      <input
        type="mail"
        className="form-control mt-4"
        placeholder="example@example.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />
    </>
  );
};
