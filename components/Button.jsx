// eslint-disable-next-line react/prop-types
export const Button = ({ name }) => {
  const btnStyle = "bg-slate-200 px-3 py-1 mx-2";
  const buttonAdd = name === "add" ? <button className={`${btnStyle}`}>Dodaj</button> : null;
  const buttonDel = name === "del" ? <button className={`${btnStyle}`}>Usuń</button> : null;
  const buttonDone = name === "done" ? <button className={`${btnStyle}`}>Zrobione</button> : null;
  return (
    <>
      {buttonAdd}
      {buttonDel}
      {buttonDone}
    </>
  );
};
