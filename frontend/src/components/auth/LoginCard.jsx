import { Mail, Lock } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth } from "./AuthContext";
import { useState } from "react";
import { authService } from "../services/authService";
import { useToast } from "./ui/use-toast";

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
            console.error('Erro ao fazer login:', error);
            toast({
                variant: "destructive",
                title: "Erro ao fazer login",
                description: error.response?.data?.message || "Credenciais inválidas"
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full px-4">
            <div className="bg-white w-full max-w-sm sm:max-w-md md:max-w-md lg:max-w-lg flex flex-col justify-between shadow-[inset_0px_0px_4px_1px_#b3ffcf] bg-opacity-90 rounded-xl p-8 text-center items-center backdrop-blur-md mx-auto">
                <img
                    src="/imgs/moovox.svg"
                    alt="Moovox Logo"
                    className="mx-auto mb-4 w-32"
                    draggable="false"
                />
                <h2 className="font-poppins text-2xl text-green-700 mb-1">
                    Bem-vindo ao <span className="text-3xl text-amber-950 font-bold">Moovox</span>
                </h2>
                <p className="text-sm text-gray-600 mb-6 font-poppins">
                    Gestão inteligente de animais no campo
                </p>

                <form onSubmit={handleSubmit} className="w-full space-y-4">
                    <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                        />
                    </div>

                    <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="password"
                            placeholder="Senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                        />
                    </div>

                    <Button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-[#4e2e13] hover:bg-[#4e2e13]/90 text-white"
                    >
                        {loading ? "Entrando..." : "Entrar"}
                    </Button>
                </form>

                <Link
                    to="/forgot-pass"
                    className="mt-4 text-sm text-gray-600 hover:text-[#4e2e13] transition-colors"
                >
                    Esqueceu sua senha?
                </Link>
            </div>
        </div>
    );
}

export default LoginCard;