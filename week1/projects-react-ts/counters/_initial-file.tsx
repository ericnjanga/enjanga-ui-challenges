import React from "react";
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
};

type CounterProps = { 
};


/**
 * HERO COMPONENT:
 * (Modify the following component to fulfill the directives described in "projects-react-ts/README.md")
 * ------------------------------------
 */
const Dashboard = () => (
  <section className="text-center"> 
    <div className="row py-lg-5"> 
      <div className="col-lg-6 col-md-8 mx-auto"> 
        <h1 className="fw-light">Dashboard</h1>
         
        <p className="lead" style={{ fontWeight: 'bold', fontSize: '2.5rem', color: 'orange' }}>0</p>{" "}
        <p> 
          <Btn 
            className="btn-danger my-2"
          >
            Delete a counter
          </Btn> 
          <span> </span>
          <Btn 
            className="btn-primary my-2"
          >
            Add a new counter
          </Btn> 
        </p>
      </div>
    </div>
  </section>
);




/**
 * BTN COMPONENT:
 * (Modify the following component to fulfill the directives described in "projects-react-ts/README.md")
 * ------------------------------------
 */
const Btn = ({ children, styles, className }: BtnType) => (
  <button style={styles} type="button" className={`btn ${className ?? ''}`}>
    {children}
  </button>
);




/**
 * CHALLENGE:
 * (Modify the following component to fulfill the directives described in "projects-react-ts/README.md")
 * ------------------------------------
 */
const Counter = ({}: CounterProps) => (
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
        >
          X
        </Btn>
        
        

        <p className="card-text lead text-center" style={{ fontWeight: 'bold' }}>0</p> 

        <div className="d-flex justify-content-between align-items-center">
          <Btn
            styles={{
              width: "3rem",
            }}
            className="btn-sm btn-outline-secondary"
          >
            -
          </Btn>
        

          <Btn
            styles={{
              width: "3rem",
            }}
            className="btn-sm btn-outline-secondary"
          >
            +
          </Btn>
        </div>
      </div>
    </div>
  </div>
);





/**
 * MAIN APPLICATION:
 * (Modify the following component to fulfill the directives described in "projects-react-ts/README.md")
 * ------------------------------------
 */
const App = () => (
  <>
    <Dashboard />
    <div className="album py-5 bg-body-tertiary">
      <div className="container">
        <h2 className="text-center">Counter list</h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5 g-5">
          <Counter />
        </div>
      </div>
    </div>
  </>
);

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
