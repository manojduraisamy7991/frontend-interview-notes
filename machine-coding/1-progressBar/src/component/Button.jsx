export default function Button(props) {
  const { handleClick, label } = props;
  return (
    <div className="button-container">
      <button
        type="button"
        onClick={(e) => {
          handleClick(e);
        }}
      >
        {label}
      </button>
    </div>
  );
}
