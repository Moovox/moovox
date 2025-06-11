import { Lock, Mail } from "lucide-react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { authService } from "../../services/authService";
import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";

function LoginCard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(""); // Limpar erro anterior

    try {
      const { token, user } = await authService.login({ email, password });
      login(token, user);

      // Redirecionar para onde o usuário estava tentando ir, ou dashboard como padrão
      const from = location.state?.from || "/dashboard";
      navigate(from, { replace: true });
    } catch (error) {
      console.error("Erro ao fazer login:", error);

      // Tratamento específico de diferentes tipos de erro
      let errorMessage = "Erro interno do servidor. Tente novamente.";

      if (error.response) {
        // Erro de resposta do servidor
        const status = error.response.status;
        const serverMessage = error.response.data?.message;

        switch (status) {
          case 400:
            errorMessage =
              serverMessage || "Dados inválidos. Verifique email e senha.";
            break;
          case 401:
            errorMessage = "Email ou senha incorretos. Tente novamente.";
            break;
          case 404:
            errorMessage = "Usuário não encontrado. Verifique seu email.";
            break;
          case 429:
            errorMessage =
              "Muitas tentativas de login. Aguarde alguns minutos.";
            break;
          case 500:
            errorMessage =
              "Erro no servidor. Tente novamente em alguns instantes.";
            break;
          default:
            errorMessage = serverMessage || `Erro ${status}. Tente novamente.`;
        }
      } else if (error.code === "ERR_NETWORK") {
        errorMessage =
          "Erro de conexão. Verifique sua internet e tente novamente.";
      } else if (error.message) {
        errorMessage = error.message;
      }

      setError(errorMessage);

      // Também exibir toast para feedback visual
      toast({
        variant: "destructive",
        title: "Erro ao fazer login",
        description: errorMessage,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full px-4">
      <div className="mx-auto flex w-full max-w-sm flex-col items-center justify-between rounded-xl bg-white bg-opacity-90 p-8 text-center shadow-[inset_0px_0px_4px_1px_#b3ffcf] backdrop-blur-md sm:max-w-md md:max-w-md lg:max-w-lg">
        <img
          src="/imgs/moovox.svg"
          alt="Moovox Logo"
          className="mx-auto mb-4 w-32"
          draggable="false"
        />
        <h2 className="mb-1 font-poppins text-2xl text-green-700">
          Bem-vindo ao{" "}
          <span className="text-3xl font-bold text-amber-950">Moovox</span>
        </h2>
        <p className="mb-6 font-poppins text-sm text-gray-600">
          Gestão inteligente de animais no campo
        </p>

        <form onSubmit={handleSubmit} className="w-full space-y-4">
          {/* Exibir mensagem de erro se houver */}
          {error && (
            <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
              {error}
            </div>
          )}

          <div className="relative">
            <Mail
              className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-400"
              size={20}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError(""); // Limpar erro ao digitar
              }}
              required
              disabled={loading}
              className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-4 focus:border-green-500 focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-100"
            />
          </div>

          <div className="relative">
            <Lock
              className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-400"
              size={20}
            />
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(""); // Limpar erro ao digitar
              }}
              required
              disabled={loading}
              className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-4 focus:border-green-500 focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-100"
            />
          </div>

          <Button
            type="submit"
            disabled={loading || !email || !password}
            className="w-full bg-[#4e2e13] text-white hover:bg-[#4e2e13]/90 disabled:cursor-not-allowed disabled:bg-gray-400"
          >
            {loading ? "Entrando..." : "Entrar"}
          </Button>
        </form>

        <Link
          to="/forgot-password"
          className="mt-4 text-sm text-gray-600 transition-colors hover:text-[#4e2e13]"
        >
          Esqueceu sua senha?
        </Link>
      </div>
    </div>
  );
}

export default LoginCard;
