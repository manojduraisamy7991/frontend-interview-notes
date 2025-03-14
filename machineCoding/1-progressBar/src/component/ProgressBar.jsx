import "./styles.css";

export default function ProgressBar(props) {
  const { completedPercentage } = props;
  const style = { width: completedPercentage };
  return (
    <div className="Progress-main-container">
      <div className="Progress-bar" style={style}>
        {completedPercentage}
      </div>
    </div>
  );
}
