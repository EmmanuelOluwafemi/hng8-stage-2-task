import About from "./components/About";
import Connect from "./components/Connect";
import Header from "./components/Header";
import MobileWhat from "./components/MobileWhat";
import Timeline from "./components/Timeline";
// import Truth from "./components/Truth";
import What from "./components/What";

function App() {
  return (
    <>
      <Header />
      <About />
      {/* <Truth /> */}
      <Timeline />
      <What />
      <MobileWhat />
      <Connect />
    </>
  );
}

export default App;
