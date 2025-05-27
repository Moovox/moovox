const prisma = require('../../../src/config/database')
const { fakerPT_BR } = require("@faker-js/faker");
const bcrypt = require('bcryptjs'); 

const faker = fakerPT_BR;

const hashPassword = (password) => bcrypt.hashSync(password,10); 

const logError = (context, error) => {
  console.error(`❌ [${context}]`, error.message);
};

const logSuccess = (context) => {
  console.log(`✅ [${context}] concluído`);
};

async function getFirstFarm() {
  return await prisma.farms.findFirst({
    select: {id: true}
  })
}

async function findTypeOfVaccineByName(name){
  return await prisma.types_of_Vaccines.findFirst({
    where: { name }, 
    select: {id: true}
  })
}

async function findManufacturerByName(name){
  return await prisma.manufacturers.findFirst({
    where: {name}, 
    select: {id: true},
  })
}
module.exports = {
  findManufacturerByName,
  findTypeOfVaccineByName,
  getFirstFarm,
  faker,
  hashPassword,
  logError,
  logSuccess,
};
