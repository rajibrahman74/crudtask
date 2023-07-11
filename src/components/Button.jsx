const Button = ({ onClick, name }) => {
  return (
    <button
      className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2.5 px-3.5 mt-3"
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Button;