const { PrismaClient } = require("@prisma/client")
const { faker } = require("@faker-js/faker")

// model Product {
//   id         Int @id @default(autoincrement())
//   name       String
//   productLink String
//   description String
//   price        Int
//   category   String
//   imageUrl String
//   createdAt DateTime @default(now())
//   updatedAt  DateTime @updatedAt
// }

const prisma = new PrismaClient()

async function main() {
  
  const numberOfProducts = 20

  for (let i = 0; i < numberOfProducts; i++) {
    console.log(i)
    const product = await prisma.product.create({
      data: {
        name: faker.commerce.productName(),
        isIphone: faker.datatype.boolean(),
        productLink: faker.internet.url(),
        description: faker.commerce.productDescription(),
        price: Math.floor(Math.random() * 100) + 1,
        category: faker.commerce.productMaterial(),
        imageUrl: faker.image.url(),
        tags: faker.lorem.words(8),
      },
    })
  }
}

main()
  .catch((e) => console.error(e))
  .finally()
