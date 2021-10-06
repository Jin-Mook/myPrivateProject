import rockImg from './assets/rock.svg';
import scissorImg from './assets/scissor.svg';
import paperImg from './assets/paper.svg';

const IMAGES = {
  rock: rockImg,
  scissor: scissorImg,
  paper: paperImg,
}

function HandIcon(props) {
  // let Img;
  // if (props.value === 'rock') {
  //   Img = rockImg;
  // } else if (props.value === 'scissor') {
  //   Img = scissorImg;
  // } else {
  //   Img = paperImg;
  // }

  const src = IMAGES[props.value];

  return <img src={src} alt={props.value} />
}

export default HandIcon;