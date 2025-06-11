import { Helmet } from "react-helmet-async";
import LoginCard from "../../components/auth/LoginCard";

function Login() {
  return (
    <main
      className="flex min-h-screen w-full items-center justify-center"
      role="main"
    >
      <Helmet>
        <title>Moovox | Login</title>
        <meta name="description" content="Moovox Login Page" />
      </Helmet>
      <LoginCard />
    </main>
  );
}

export default Login;
