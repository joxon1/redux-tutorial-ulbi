import React from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
const App = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.cash.cash);
  const clients = useSelector((state) => state.clients.clients);

  const addBtn = () => {
    dispatch({ type: "ADD_CASH", payload: 5 });
  };

  const removeBtn = () => {
    dispatch({ type: "GET_CASH", payload: 5 });
  };

  const addClients = (name) => {
    const clients = {
      id: Date.now(),
      name,
    };
    dispatch({ type: "ADD_CLIENTS", payload: clients });
  };

  const removeClients = (clients) => {
    dispatch({ type: "REMOVE_CLIENTS", payload: clients.id });
  };

  return (
    <div className="app">
      <div style={{ fontSize: "3rem" }}>{state}</div>
      <div style={{ display: "flex" }}>
        <button onClick={() => addBtn()}>Toldrish</button>
        <button onClick={() => removeBtn()}>Ayirish</button>
        <button onClick={() => addClients(prompt())}>Odam qoshish</button>
      </div>
      {clients.length > 0 ? (
        <div>
          {clients.map((client) => (
            <div onClick={() => removeClients(client)}>{client.name}</div>
          ))}
        </div>
      ) : (
        <div>Odam yoq</div>
      )}
    </div>
  );
};

export default App;
