import { PlayButton } from "./styles";
const ButtonPlay = (props) => {
  return (
    <PlayButton
      disabled={props.disabled}
      onClick={() => props.func(props.number)}
    >
      {props.children}
    </PlayButton>
  );
};

export default ButtonPlay;
