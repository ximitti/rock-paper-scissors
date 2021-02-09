const Player = (props) => {
  return (
    <div>
      <span>{props.name}</span>
      <span>{props.score}</span>
    </div>
  );
};

export default Player;
