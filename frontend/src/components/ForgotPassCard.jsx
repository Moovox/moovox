import { Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

function ForgotPassCard() {
    return (
        <div className="w-full px-4">
            <div className="bg-white w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl flex flex-col justify-between shadow-[inset_0px_0px_4px_1px_#b3ffcf] bg-opacity-90 rounded-xl p-8 text-center items-center backdrop-blur-md mx-auto">
                <img
                    src="imgs/moovox.svg"
                    alt="Moovox Logo"
                    className="mx-auto w-32"
                    draggable="false"
                />
                <span className="text-3xl text-amber-950 font-bold mb-4">Moovox</span>
                <h2 className="font-poppins text-2xl text-green-700 mb-1">
                    Esqueceu sua senha?
                </h2>
                <p className="text-sm text-gray-600 mb-6 font-poppins">
                    Informe seu e-mail e enviaremos instruções para recuperação.
                </p>

                <form className="space-y-4 text-left w-full">
                    <div>
                        <label htmlFor="email" className="block font-poppins text-base text-gray-700 mb-1">E-mail</label>
                        <div className="flex bg-green-100 items-center border border-gray-300 rounded-xl pl-3">
                            <Mail className="w-4 h-4 text-gray-700 mr-2" />
                            <input
                                id="email"
                                type="email"
                                autoComplete="email"
                                placeholder="Digite seu e-mail"
                                className="w-full font-poppins py-2 text-sm outline-none bg-transparent focus:ring-2 focus:ring-blue-400 focus:border-blue-400 rounded-e-xl"
                            />
                        </div>
                    </div>

                    <Button
                        type="submit"
                        className="w-full font-poppins font-bold bg-green-600 text-white p-[5px] rounded-xl hover:bg-green-700 transition"
                    >
                        Enviar instruções
                    </Button>
                </form>

                <Link
                    to="/"
                    className="block text-sm text-green-600 mt-4 hover:underline font-poppins"
                >
                    Voltar para o login
                </Link>
            </div>
        </div>
    );
}

export default ForgotPassCard;