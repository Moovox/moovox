const prisma = require("../../config/database");
const { hashPassword } = require("../../utils/helpers/auth");

// Function to get user role in English
const getUserRole = (role) => {
  // Return role as is (in English)
  return role;
};

const userService = {
  async getAllUsers() {
    try {
      const users = await prisma.users.findMany({
        include: {
          farm: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      }); // Retornar array vazio se não houver usuários
      if (!users || users.length === 0) {
        return [];
      }

      return users.map((user) => ({
        id: user.id,
        name: user.name,
        email: user.email,
        type: getUserRole(user.role),
        farm: user.farm.name,
      }));
    } catch (error) {
      console.error("Erro ao buscar usuários", error);
      throw error;
    }
  },

  async getUserByID(id) {
    try {
      const userId = parseInt(id, 10);
      if (isNaN(userId)) {
        throw new Error("ID de usuário inválido.");
      }

      const user = await prisma.users.findUnique({
        where: { id: userId },
        include: {
          farm: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      });
      if (!user) {
        throw new Error("Usuário não encontrado.");
      }

      return {
        id: user.id,
        name: user.name,
        email: user.email,
        type: getUserRole(user.role),
        farm: user.farm.name,
      };
    } catch (error) {
      console.error("Erro ao buscar usuário por ID:", error);
      throw error;
    }
  },

  async createUser(userData) {
    try {
      const { name, email, password, role, farmId } = userData;

      // Validações básicas
      if (!name) throw new Error("Nome é obrigatório");
      if (!email) throw new Error("Email é obrigatório");
      if (!password) throw new Error("Senha é obrigatória");
      if (!role) throw new Error("Função do usuário é obrigatória");
      if (!farmId) throw new Error("ID da fazenda é obrigatório");

      const farmIdNum = parseInt(farmId, 10);
      if (isNaN(farmIdNum)) {
        throw new Error("ID de fazenda inválido");
      }

      // Verifica se o email já existe
      const existingUser = await prisma.users.findUnique({
        where: { email },
      });

      if (existingUser) {
        throw new Error("Já existe um usuário com este email.");
      }

      // Verifica se a fazenda existe
      const farm = await prisma.farms.findUnique({
        where: { id: farmIdNum },
      });

      if (!farm) {
        throw new Error("Fazenda não encontrada.");
      }

      const hashedPassword = await hashPassword(password);

      const user = await prisma.users.create({
        data: {
          name,
          email,
          password: hashedPassword,
          role,
          farm: {
            connect: { id: farmIdNum },
          },
        },
        include: {
          farm: {
            select: {
              name: true,
            },
          },
        },
      });
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        type: getUserRole(user.role),
        farm: user.farm.name,
      };
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
      throw error;
    }
  },

  async updateUser(id, userData) {
    try {
      const userId = parseInt(id, 10);
      if (isNaN(userId)) {
        throw new Error("ID de usuário inválido.");
      }

      const { name, email, password, role, farmId } = userData;

      // Verifica se o usuário existe
      const existingUser = await prisma.users.findUnique({
        where: { id: userId },
      });

      if (!existingUser) {
        throw new Error("Usuário não encontrado.");
      }

      // Se estiver atualizando o email, verifica se já não existe
      if (email && email !== existingUser.email) {
        const emailExists = await prisma.users.findUnique({
          where: { email },
        });

        if (emailExists) {
          throw new Error("Este email já está em uso.");
        }
      }

      // Prepara os dados para atualização
      const updateData = {};

      if (name) updateData.name = name;
      if (email) updateData.email = email;
      if (role) updateData.role = role;

      // Se houver ID da fazenda, converte para número e verifica se existe
      if (farmId) {
        const farmIdNum = parseInt(farmId, 10);
        if (isNaN(farmIdNum)) {
          throw new Error("ID de fazenda inválido");
        }

        const farm = await prisma.farms.findUnique({
          where: { id: farmIdNum },
        });

        if (!farm) {
          throw new Error("Fazenda não encontrada.");
        }

        updateData.farm = { connect: { id: farmIdNum } };
      }

      // Se houver nova senha, faz o hash
      if (password) {
        updateData.password = await hashPassword(password);
      }

      const updatedUser = await prisma.users.update({
        where: { id: userId },
        data: updateData,
        include: {
          farm: {
            select: {
              name: true,
            },
          },
        },
      });
      return {
        id: updatedUser.id,
        name: updatedUser.name,
        email: updatedUser.email,
        type: getUserRole(updatedUser.role),
        farm: updatedUser.farm.name,
      };
    } catch (error) {
      console.error("Erro ao atualizar usuário:", error);
      throw error;
    }
  },

  async deleteUser(id) {
    try {
      const userId = parseInt(id, 10);
      if (isNaN(userId)) {
        throw new Error("ID de usuário inválido.");
      }

      // Verifica se o usuário existe
      const user = await prisma.users.findUnique({
        where: { id: userId },
        include: {
          farmhand: true,
          veterinary: {
            include: {
              application: true,
            },
          },
        },
      });

      if (!user) {
        throw new Error("Usuário não encontrado.");
      }

      // Não permite deletar o último administrador
      if (user.role === "ADMIN") {
        const adminCount = await prisma.users.count({
          where: { role: "ADMIN" },
        });

        if (adminCount <= 1) {
          throw new Error(
            "Não é possível excluir o último administrador do sistema."
          );
        }
      }

      // Usar uma transação para garantir que todas as operações sejam bem-sucedidas
      await prisma.$transaction(async (tx) => {
        // Exclui registros relacionados em Farmhands, se existir
        if (user.farmhand) {
          await tx.farmhands.delete({
            where: { user_id: userId },
          });
        }

        // Exclui registros relacionados em Veterinarians, se existir
        if (user.veterinary) {
          // Verificar se há Applications vinculadas ao veterinário
          if (
            user.veterinary.application &&
            user.veterinary.application.length > 0
          ) {
            // Opção 1: Impedir a exclusão quando há aplicações vinculadas
            throw new Error(
              `Não é possível excluir o usuário pois existem ${user.veterinary.application.length} aplicações de vacinas registradas para este veterinário. Transfira estas aplicações para outro veterinário antes de excluir.`
            );

            // Opção 2: Definir veterinary_id como nulo nas aplicações (comentada pois pode causar problemas de integridade de dados)
            // await tx.applications.updateMany({
            //     where: { veterinary_id: user.veterinary.id },
            //     data: { veterinary_id: null }
            // });
          }

          await tx.veterinarians.delete({
            where: { user_id: userId },
          });
        }

        // Por fim, exclui o usuário
        await tx.users.delete({
          where: { id: userId },
        });
      });

      return true;
    } catch (error) {
      console.error("Erro ao excluir usuário:", error);
      // Se for um erro de restrição de chave estrangeira, enviar mensagem mais amigável
      if (error.code === "P2003") {
        if (error.meta?.constraint?.includes("Farmhands_user_id_fkey")) {
          throw new Error(
            `Não é possível excluir o usuário pois ele está registrado como trabalhador rural (Farmhand). Remova este vínculo primeiro.`
          );
        } else if (
          error.meta?.constraint?.includes("Veterinarians_user_id_fkey")
        ) {
          throw new Error(
            `Não é possível excluir o usuário pois ele está registrado como veterinário. Remova este vínculo primeiro.`
          );
        } else {
          throw new Error(
            `Não é possível excluir o usuário pois existem outros registros vinculados a ele (${error.meta?.constraint}).`
          );
        }
      }
      throw error;
    }
  },

  async getUsersByFarm(farmId) {
    try {
      // Verifica se o ID da fazenda é válido
      if (!farmId || isNaN(farmId)) {
        throw new Error("ID de fazenda inválido");
      }

      // Busca os usuários da fazenda
      const users = await prisma.users.findMany({
        where: { farm_id: farmId },
        include: {
          farm: {
            select: {
              name: true,
            },
          },
        },
      });

      // Retornar array vazio se não houver usuários, em vez de lançar erro
      if (!users || users.length === 0) {
        return [];
      }
      return users.map((user) => ({
        id: user.id,
        name: user.name,
        email: user.email,
        type: getUserRole(user.role),
        farm: user.farm.name,
      }));
    } catch (error) {
      console.error(`Erro ao buscar usuários da fazenda ${farmId}:`, error);
      throw error;
    }
  },

  // Remover o vínculo de trabalhador rural (Farmhand) de um usuário
  async removeFarmhandRole(userId) {
    try {
      const parsedUserId = parseInt(userId, 10);
      if (isNaN(parsedUserId)) {
        throw new Error("ID de usuário inválido.");
      }

      // Verifica se o usuário existe e tem a função de Farmhand
      const user = await prisma.users.findUnique({
        where: { id: parsedUserId },
        include: { farmhand: true },
      });

      if (!user) {
        throw new Error("Usuário não encontrado.");
      }

      if (!user.farmhand) {
        throw new Error(
          "Este usuário não está vinculado como trabalhador rural."
        );
      }

      // Remove o vínculo
      await prisma.farmhands.delete({
        where: { user_id: parsedUserId },
      });

      return true;
    } catch (error) {
      console.error("Erro ao remover vínculo de trabalhador rural:", error);
      throw error;
    }
  },

  // Remover o vínculo de veterinário de um usuário
  async removeVeterinarianRole(userId) {
    try {
      const parsedUserId = parseInt(userId, 10);
      if (isNaN(parsedUserId)) {
        throw new Error("ID de usuário inválido.");
      }

      // Verifica se o usuário existe e tem a função de Veterinarian
      const user = await prisma.users.findUnique({
        where: { id: parsedUserId },
        include: {
          veterinary: {
            include: {
              application: true,
            },
          },
        },
      });

      if (!user) {
        throw new Error("Usuário não encontrado.");
      }

      if (!user.veterinary) {
        throw new Error("Este usuário não está vinculado como veterinário.");
      }

      // Verifica se há aplicações vinculadas
      if (
        user.veterinary.application &&
        user.veterinary.application.length > 0
      ) {
        throw new Error(
          `Não é possível remover o vínculo pois existem ${user.veterinary.application.length} aplicações de vacinas registradas para este veterinário. Transfira estas aplicações para outro veterinário primeiro.`
        );
      }

      // Remove o vínculo
      await prisma.veterinarians.delete({
        where: { user_id: parsedUserId },
      });

      return true;
    } catch (error) {
      console.error("Erro ao remover vínculo de veterinário:", error);
      throw error;
    }
  },

  // Transferir aplicações de um veterinário para outro
  async transferVeterinarianApplications(sourceUserId, targetUserId) {
    try {
      const sourceId = parseInt(sourceUserId, 10);
      const targetId = parseInt(targetUserId, 10);

      if (isNaN(sourceId) || isNaN(targetId)) {
        throw new Error("IDs de usuário inválidos.");
      }

      // Verifica se ambos os usuários existem e têm vínculos como veterinários
      const sourceUser = await prisma.users.findUnique({
        where: { id: sourceId },
        include: { veterinary: true },
      });

      const targetUser = await prisma.users.findUnique({
        where: { id: targetId },
        include: { veterinary: true },
      });

      if (!sourceUser || !sourceUser.veterinary) {
        throw new Error("Veterinário de origem não encontrado.");
      }

      if (!targetUser || !targetUser.veterinary) {
        throw new Error("Veterinário de destino não encontrado.");
      }

      // Transfere todas as aplicações
      const result = await prisma.applications.updateMany({
        where: { veterinary_id: sourceUser.veterinary.id },
        data: { veterinary_id: targetUser.veterinary.id },
      });

      return {
        success: true,
        transferredCount: result.count,
        message: `${result.count} aplicações foram transferidas com sucesso.`,
      };
    } catch (error) {
      console.error("Erro ao transferir aplicações:", error);
      throw error;
    }
  },
};

module.exports = userService;
