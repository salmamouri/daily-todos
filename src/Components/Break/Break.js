import "./Break.css";

const Break = ({ setBreak }) => {
  return (
    <div className="break-container">
      <div onClick={() => setBreak(10)}>10s</div>
      <div onClick={() => setBreak(20)}>20s</div>
      <div onClick={() => setBreak(30)}>30s</div>
      <div onClick={() => setBreak(40)}>40s</div>
    </div>
  );
};

export default Break;
