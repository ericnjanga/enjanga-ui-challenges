import React, { useRef, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";



/**
 * CHALLENGE:
 * Update this type so that the button component can accept all valid button props by default
 * Ex: You'll be able to pass event handler or ARIA attributes down without the need of defining them
 * ------------------------------------
 */
type BtnType = { 
  className?: string; 
  styles?: React.CSSProperties; 
  children: React.ReactNode 
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

type CounterItemProps = { 
  id: number;
  val: number;
};


/**
 * HERO COMPONENT:
 * (Modify the following component to fulfill the directives described in "projects-react-ts/README.md")
 * ------------------------------------
 */
const Dashboard = ({ plus, minus, value }: {
  plus: () => void,
  minus: () => void,
  value: number
}) => {

  console.log('--Dashboard render');

  return (
  <section className="text-center"> 
    <div className="row py-lg-5"> 
      <div className="col-lg-6 col-md-8 mx-auto"> 
        <h1 className="fw-light">Dashboard</h1>
         
        <p className="lead" style={{ fontWeight: 'bold', fontSize: '2.5rem', color: 'orange' }}>
          {value}
        </p>
        <p> 
          <Btn 
            className="btn-danger my-2"
            onClick={minus}
          >
            Delete a counter
          </Btn> 
          <span> </span>
          <Btn 
            className="btn-primary my-2"
            onClick={plus}
          >
            Add a new counter
          </Btn> 
        </p>
      </div>
    </div>
  </section>
)
};




/**
 * BTN COMPONENT:
 * (Modify the following component to fulfill the directives described in "projects-react-ts/README.md")
 * ------------------------------------
 */
const Btn = React.memo(({ children, styles, className, ...rest }: BtnType) => {

  console.log('--Btn render');

  return (
  <button style={styles} type="button" className={`btn ${className ?? ''}`} {...rest}>
    {children}
  </button>
)});




/**
 * CHALLENGE:
 * (Modify the following component to fulfill the directives described in "projects-react-ts/README.md")
 * ------------------------------------
 */
type CounterCompProps = { 
  plus: (id: number) => void;
  minus: (id: number) => void;
  remove: (id: number) => void;
}
;
const Counter = ({ plus, minus, remove, val, id }: CounterItemProps & CounterCompProps) => {

  console.log('--Counter render');

  return (
  <div className="col"> 
    <div className="card shadow-sm"> 
      <div className="card-body">  
        <Btn
          styles={{
            position: "absolute",
            top: "0",
            right: "0",
            width: "3rem",
          }}
          className="btn-sm btn-secondary"
          onClick={() => remove(id)}
        >
          X
        </Btn>
        
        

        <p className="card-text lead text-center" style={{ fontWeight: 'bold' }}>
          {val}  
        </p> 

        <div className="d-flex justify-content-between align-items-center">
          <Btn
            styles={{
              width: "3rem",
            }}
            className="btn-sm btn-outline-secondary"
            onClick={() => minus(id)}
          >
            -
          </Btn>
        

          <Btn
            styles={{
              width: "3rem",
            }}
            className="btn-sm btn-outline-secondary"
            onClick={() => plus(id)}
          >
            +
          </Btn>
        </div>
      </div>
    </div>
  </div>
)
};





/**
 * MAIN APPLICATION:
 * (Modify the following component to fulfill the directives described in "projects-react-ts/README.md")
 * ------------------------------------
 */
const App = () => {
  const nextId = useRef(0);
  const getNewCounterObj = (): CounterItemProps => {
    const newObj = {
      id: nextId.current,
      val: 0
    };

    nextId.current += 1;

    return newObj;
  };
  const [list, setList] = useState<CounterItemProps[]>([{ ...getNewCounterObj() }]); 

  const addCounter = () => {
    setList(prev => {
      const newCount = { ...getNewCounterObj() };
      return [...prev, {...newCount}]
    });
  };

  const removeCounter = (id: number) => {  console.log('...re.', list.length, id)
    if (list.length === 1) return;

    setList(prev => prev.filter(item => item.id !== id));
  };

  const increment = (id: number, delta: number) => {

    console.log('id----', id, list,  list[id]);
    if (id===undefined || Number.isNaN(id) || typeof id !== 'number' || id < 0) return;



    setList(prev => { 
      return prev.map(item => item.id===id ? {...item, val: (item.val + delta)} : item) 
    });

  };

  // Derived values don't need to live in the state
  const total = list.reduce((acc, item) => acc + item.val, 0);
 



  return (
    <>
      <Dashboard
        plus={addCounter}
        minus={() => removeCounter(list[list.length - 1].id) }
        value={total}
      />
      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <h2 className="text-center">Counter list</h2>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5 g-5">
            {list.map(item => (
              <Counter
                key={item.id}
                id={item.id}
                val={item.val}
                plus={(id) => increment(id, 1) }
                minus={(id) => increment(id, -1)}
                remove={(id) => removeCounter(id)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
};

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
