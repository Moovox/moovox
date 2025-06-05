import { Helmet } from "react-helmet-async";
import ForgotPasswordCard from "../components/auth/ForgotPasswordCard";

function ForgotPass() {
  return (
    <main role="main">
      <Helmet>
        <title>Moovox | Esqueci minha senha</title>
        <meta name="description" content="Esqueci minha senha" />
      </Helmet>
      <ForgotPasswordCard />
    </main>
  );
}

export default ForgotPass;
