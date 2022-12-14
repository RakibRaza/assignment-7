import { Link } from "react-router-dom";
import Balance from "../components/Balance";
import Form from "../components/Form";
import Transactions from "../components/Transactions/Transactions";

const Home = () => {
  return (
    <>
      <Balance />
      <Form />
      <Transactions filter={false} />
      <Link to="/transaction-details" className="btn">View All</Link>
    </>
  )
}

export default Home;