import SayHello from "./SayHello";

const App = () => {
    return (
    <>
      <h1 className="nawarajClass">Hello World</h1>
      <SayHello name="Nawaraj" />
      <SayHello name="Mina" />
      <SayHello name="Swoman" />
    </>
  );
};

export default App;