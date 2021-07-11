import { useEffect, useState } from "react";
import "./styles.css";
import styled from "styled-components";

var BoxComingSoon = styled.div`
  display: inline-block;
  text-align: center;
  padding: 25px 0;
  width: 33.3333%;
  font-weight: 800;
  font-family: "Noto Sans JP", sans-serif;
  text-transform: uppercase;
`;

const generateBackground = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return "#" + randomColor;
};

function getComplementaryColor(color) {
  var c = color.slice(1),
    i = parseInt(c, 16),
    v = ((1 << (4 * c.length)) - 1 - i).toString(16);

  while (v.length < c.length) {
    v = "0" + v;
  }
  return "#" + v;
}

function TextMessage(props) {
  const colorBg = generateBackground();
  return (
    <BoxComingSoon
      style={{ background: colorBg, color: getComplementaryColor(colorBg) }}
    >
      Coming soon....
    </BoxComingSoon>
  );
}

export default function App() {
  const [random, setRandom] = useState(() => {
    let g = Math.ceil(Math.random() * 20);
    return [...Array(g).keys()];
  });
  useEffect(() => {
    const x = setTimeout(() => {
      let g = Math.ceil(Math.random() * 20);
      setRandom([...Array(g).keys()]);
    }, 500);
    return () => {
      clearInterval(x);
    };
  }, [random]);
  return (
    <>
      {random.map((item) => (
        <TextMessage key={item} />
      ))}
    </>
  );
}
