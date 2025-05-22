import { Helmet } from "react-helmet-async";
import ForgotPassCard from "../../components/ForgotPassCard";


function ForgotPass() {
    return (
        <main role="main">
            <Helmet>
                <title>Moovox | Esqueci minha senha</title>
                <meta name="description" content="Esqueci minha senha" />
            </Helmet>
            <ForgotPassCard />
        </main>
    )
}

export default ForgotPass;