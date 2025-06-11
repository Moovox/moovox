import { Lock, Mail } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { authService } from "../../services/authService";
import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";

function LoginCard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { token, user } = await authService.login({ email, password });
      login(token, user);
      navigate("/dashboard");
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      toast({
        variant: "destructive",
        title: "Erro ao fazer login",
        description: error.response?.data?.message || "Credenciais inválidas",
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
          <div className="relative">
            <Mail
              className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-400"
              size={20}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-4 focus:border-green-500 focus:outline-none"
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
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-4 focus:border-green-500 focus:outline-none"
            />
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-[#4e2e13] text-white hover:bg-[#4e2e13]/90"
          >
            {loading ? "Entrando..." : "Entrar"}
          </Button>
        </form>

        <Link
          to="/forgot-pass"
          className="mt-4 text-sm text-gray-600 transition-colors hover:text-[#4e2e13]"
        >
          Esqueceu sua senha?
        </Link>
      </div>
    </div>
  );
}

export default LoginCard;
