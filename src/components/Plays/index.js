import { FaHandPaper, FaHandScissors, FaHandRock } from "react-icons/fa";
import { PlaysDiv } from "./styles";

const Plays = (props) => {
  const { name, play } = props;

  const renderPlay = (play) => {
    switch (play) {
      case 1:
        return <FaHandRock />;
      case 2:
        return <FaHandPaper />;
      case 3:
        return <FaHandScissors />;
      default:
    }
  };
  return (
    <PlaysDiv>
      <span>{name}</span>
      <span>{renderPlay(play)}</span>
    </PlaysDiv>
  );
};

export default Plays;
