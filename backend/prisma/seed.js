const { PrismaClient } = require("@prisma/client")
const { faker } = require("@faker-js/faker")
const {parse} = require('csv-parse');
const fs = require('fs');


const prisma = new PrismaClient()
const seedData = async () => {
  try {
    // Read CSV file
    const csvData = fs.readFileSync('spendsmart-database2.csv', 'utf-8');

    // Create parser object
    const parser = parse(csvData, { columns: true });

    // Handle parsing events
    parser.on('readable', async () => {
      let record;
      while ((record = parser.read())) {
        // Seed data into Product model
        await prisma.product.create({
          data: {
            name: record.name,
            productLink: record.productLink,
            isIphone: record.isIphone === 1,
            description: record.description,
            price: parseInt(record.price),
            category: record.category,
            imageUrl: record.imageUrl,
            tags: record.tags,
          },
        });
      }
    });

    // Handle error event
    parser.on('error', (err) => {
      console.error('Error parsing CSV:', err);
    });

    // Handle end event
    parser.on('end', () => {
      console.log('Data seeded successfully!');
      prisma.$disconnect();
    });
  } catch (error) {
    console.error('Error seeding data:', error);
    prisma.$disconnect();
  }
};



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

seedData()
  .catch((e) => console.error(e))
  .finally()
