const { PrismaClient, Role } = require('@prisma/client')
const prisma = new PrismaClient()
async function main() {
     const _adminUser = await prisma.user.upsert({
       where: { email: 'mugiwara@luffy.com' },
       update: {},
       create: {
         email: 'mugiwara@luffy.com',
         password:
           '$argon2id$v=19$m=4096,t=3,p=1$GVvD4ki+HryewjEsRp3Rvg$9Nb2c69CBxTgpUyS4IEaSJ/NheP+KdjRuD8IdKugyG8', //admin
         role: 'ADMIN',
         name: 'Admin',
       },
     });
}

//await prisma.$disconnect(); is used to disconnect from the database
//process.exit(1); is used to exit the process
main()
.then(async () => {
  await prisma.$disconnect();
})
.catch(async (e) => {
  console.error(e);
  await prisma.$disconnect();
  process.exit(1);
});
