import SayHello from "./sayHello";

const App = () => {

  let persons = [
    { firstName: "Nawaraj", lastName: "Magar", id: 150},
    { firstName: "Mina", lastName: "Rana", id: 175},    
  ];

    return (
    <>
      <h1 className="nawarajClass">Hello World</h1>
      {persons.length > 0 ? (
        persons.filter(element => element.id > 150).map((person) => 
          <SayHello person={person} key={person.id} />
      )
      ):(
       <p>There are no People</p> 
      )}      
    </>
  );
};

export default App;