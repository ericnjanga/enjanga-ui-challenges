import React, { useRef, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";


const Comp = ({ id, indicator, prop }: { id: number, indicator: string,  prop?: string }) => {
  console.log(`Rendering Comp${id} ----`);
  return (
    <p><b>Comp{id} - [{indicator}]:</b> {prop ?? ''}</p>
  )
}

const CompMemo = React.memo(Comp);


const App = () => {
  let textPointer = 0;
  const texts: string[] = [
    'Cupcake ipsum dolor sit amet.', 
    'Lemon drops croissant sesame snaps cookie jelly beans tootsie roll muffin.', 
    'Liquorice liquorice fruitcake tiramisu sesame snaps sugar plum lollipop gummi bears cookie.',
    'Sugar plum sugar plum pie I love gummi bears sweet roll bear claw.', 
    'Jelly-o dessert cookie powder I love dessert wafer jelly-o candy.', 
    'Danish ice cream dragée wafer topping topping icing chocolate chupa chups.', 
    'Soufflé shortbread chupa chups lollipop carrot cake lollipop gingerbread.', 
    'Chocolate cake topping caramels cupcake chocolate bar apple pie. Cotton candy pastry fruitcake shortbread jelly-o gummi bears.', 
    'Icing fruitcake dragée pie cheesecake pastry.', 
    'Apple pie apple pie candy canes cookie I love tart.', 
    'Candy canes muffin sweet roll jujubes tootsie roll.', 
    'I love pudding jujubes bear claw pastry cupcake.', 
    'Danish soufflé marshmallow chupa chups I love cookie apple pie.', 
    'Soufflé marshmallow I love cheesecake bonbon.', 
    'Toffee macaroon croissant macaroon sweet roll.', 
    'Jelly brownie ice cream wafer sugar plum macaroon.', 
    'Marzipan cake I love shortbread lollipop.'
  ];
  const [text, setText] = useState<string>(texts[textPointer]);

  
  useEffect(() => {
    const time = 3000;
    const intervalId = setInterval(() => {
      setText(prev => {
        if (textPointer >= texts.length) textPointer = 0;
        const newText = texts[textPointer ++];

        return newText;
      });
    }, time);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h1>{text}</h1>
      <Comp indicator="Depends on state variable" id={1}  prop={text} />
      <Comp indicator="Doesn't depends on state variable" id={2} />
      <CompMemo indicator="*Memoized* - Depends on state variable" id={3} prop={text} />
      <CompMemo indicator="*Memoized* - Doesn't depends on state variable" id={4} />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
