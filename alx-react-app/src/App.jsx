import "./App.css";
import WelcomeMessage from "./components/WelcomeMessage";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import Header from "./components/header";

function App() {
  return (
    <>
      <WelcomeMessage />

      <Header />

      <MainContent />

      <Footer />
    </>
  );
}

export default App;
