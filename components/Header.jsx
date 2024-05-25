// eslint-disable-next-line react/prop-types
export const Header = ({ onAdd, count }) => {
  return (
    <section className="header w-auto flex flex-shrink-0 justify-between items-center px-0 py-5 m-0 rounded-t-xl">
      <div>
        <h1 className="text-3xl font-bold">Do zrobienia</h1>
        <h2 className="my-2 text-lg">{`${count} zadania`}</h2>
      </div>
      <div>
        <button className="w-16 h-16 leading-3 text-4xl font-bold text-white rounded-full bg-blue-500 mr-3" onClick={onAdd}>
          +
        </button>
      </div>
    </section>
  );
};
