import { Helmet } from "react-helmet-async";
import ForgotPasswordCard from "../../components/auth/ForgotPasswordCard";

function ForgotPass() {
  return (
    <main role="main">
      <Helmet>
        <title>Moovox | Forgot Password</title>
        <meta name="description" content="Forgot Password" />
      </Helmet>
      <ForgotPasswordCard />
    </main>
  );
}

export default ForgotPass;
