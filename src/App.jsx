import "./App.css";
import Layout from "./component/Layout/Layout";
import { CartProvider } from "./UseContext/UseContext";

function App() {
  return (
    <>
      <CartProvider>
        <Layout />
      </CartProvider>
    </>
  );
}

export default App;
