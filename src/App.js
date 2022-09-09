import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TransactionDetails from "./pages/TransactionDetails";

function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/transaction-details" element={<TransactionDetails />} />
            </Routes>
        </Layout>
    );
}

export default App;
