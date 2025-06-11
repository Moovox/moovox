import { Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

function ForgotPassCard() {
  return (
    <div className="w-full px-4">
      <div className="mx-auto flex w-full max-w-sm flex-col items-center justify-between rounded-xl bg-white bg-opacity-90 p-8 text-center shadow-[inset_0px_0px_4px_1px_#b3ffcf] backdrop-blur-md sm:max-w-md md:max-w-lg lg:max-w-xl">
        <img
          src="imgs/moovox.svg"
          alt="Moovox Logo"
          className="mx-auto w-32"
          draggable="false"
        />
        <span className="mb-4 text-3xl font-bold text-amber-950">Moovox</span>
        <h2 className="mb-1 font-poppins text-2xl text-green-700">
          Esqueceu sua senha?
        </h2>
        <p className="mb-6 font-poppins text-sm text-gray-600">
          Informe seu e-mail e enviaremos instruções para recuperação.
        </p>

        <form className="w-full space-y-4 text-left">
          <div>
            <label
              htmlFor="email"
              className="mb-1 block font-poppins text-base text-gray-700"
            >
              E-mail
            </label>
            <div className="flex items-center rounded-xl border border-gray-300 bg-green-100 pl-3">
              <Mail className="mr-2 h-4 w-4 text-gray-700" />
              <input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="Digite seu e-mail"
                className="w-full rounded-e-xl bg-transparent py-2 font-poppins text-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          <Button
            type="submit"
            className="w-full rounded-xl bg-green-600 p-[5px] font-poppins font-bold text-white transition hover:bg-green-700"
          >
            Enviar instruções
          </Button>
        </form>

        <Link
          to="/"
          className="mt-4 block font-poppins text-sm text-green-600 hover:underline"
        >
          Voltar para o login
        </Link>
      </div>
    </div>
  );
}

export default ForgotPassCard;
