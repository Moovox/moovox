import { motion } from "framer-motion";
import { Users } from "lucide-react";
import Card from "../../ui/card";

const RecentUsers = ({ ultimosUsuarios }) => {
  // Mostra todos os usuários para permitir scroll
  const recentUsers = ultimosUsuarios || [];
  const shouldScroll = recentUsers.length > 3; // Scroll ativa com mais de 3 usuários

  return (
    <div>
      <Card
        variant="rural"
        title="Últimos Usuários Cadastrados"
        icon={<Users className="h-5 w-5 text-black sm:h-6 sm:w-6" />}
        className="h-[240px] transform-gpu sm:h-[280px]"
      >
        <div className="flex h-full flex-col gap-3">
          {recentUsers.length > 0 ? (
            <>
              {/* Container de scroll com altura fixa */}
              <div
                className="custom-scrollbar flex-1 overflow-y-auto pr-1"
                style={{
                  maxHeight: "160px",
                }}
              >
                <div className="space-y-2 py-1">
                  {recentUsers.map((user, idx) => (
                    <motion.div
                      key={`${user.nome}-${idx}`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="rounded-lg border-b border-gray-100 p-2 transition-colors last:border-b-0 hover:bg-black/5"
                    >
                      <div className="flex flex-col gap-1">
                        <span className="block font-poppins text-xs text-black sm:text-sm">
                          <span className="font-semibold">{user.nome}</span>
                          <span className="text-gray-600"> - {user.papel}</span>
                        </span>
                        {user.fazenda && (
                          <span className="text-xs text-gray-500">
                            📍 {user.fazenda}
                          </span>
                        )}
                        <span className="text-xs text-gray-400">
                          📅{" "}
                          {new Date(user.dataCadastro).toLocaleDateString(
                            "pt-BR",
                          )}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Rodapé fixo na parte inferior */}
              <div className="flex-shrink-0 border-t border-gray-200 pt-2">
                <span className="block text-center text-xs text-gray-500">
                  {recentUsers.length} usuário
                  {recentUsers.length !== 1 ? "s" : ""} recente
                  {recentUsers.length !== 1 ? "s" : ""}
                  {shouldScroll && " • Role para ver mais"}
                </span>
              </div>
            </>
          ) : (
            <div className="flex h-full items-center justify-center">
              <div className="text-center">
                <Users className="mx-auto mb-2 h-8 w-8 text-gray-400" />
                <span className="text-sm text-gray-600">
                  Nenhum usuário cadastrado recentemente
                </span>
              </div>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default RecentUsers;
