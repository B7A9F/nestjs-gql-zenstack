import { faker } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const menuCategoriesList = [
  {
    category: 'Appetizers and Snacks',
    description:
      'Start your meal with delicious appetizers and snacks, perfect for sharing with friends or to whet your appetite.',
  },
  {
    category: 'Soups and Broths',
    description:
      'Enjoy a variety of fresh soups and broths, prepared with authentic flavors, perfect for warming your soul in any season.',
  },
  {
    category: 'Salads',
    description:
      'Discover our fresh and nourishing salads, prepared with the finest ingredients and seasoned with delicious dressings.',
  },
  {
    category: 'Pasta and Risotto',
    description:
      'Delight your taste buds with our fresh pasta and creamy risotto, prepared with love and authentic ingredients.',
  },
  {
    category: 'Pizza and Focaccia',
    description:
      'Savor the most delicious pizzas and focaccias, prepared with fresh dough and tasty toppings, ready to transport you to Italy.',
  },
  {
    category: 'Main Course - Meat',
    description:
      'Indulge in our main courses featuring meat, cooked to perfection and accompanied by refined side dishes, for an unforgettable culinary experience.',
  },
  {
    category: 'Main Course - Fish and Seafood',
    description:
      'Enjoy the fresh flavors of our fish and seafood dishes, expertly cooked and served with passion.',
  },
  {
    category: 'Vegetarian and Vegan',
    description:
      'Explore our vegetarian and vegan options, full of flavor and nutrition, perfect for satisfying any dietary preference.',
  },
  {
    category: 'Burgers and Sandwiches',
    description:
      'Delight your senses with our delicious burgers and sandwiches, prepared with fresh ingredients and served between fluffy buns or crispy bread.',
  },
  {
    category: 'Tacos and Burritos',
    description:
      'Taste our Mexican-inspired dishes such as tacos and burritos, full of intense flavors and exotic spices.',
  },
  {
    category: 'Sushi and Rolls',
    description:
      'Explore the fascinating world of our sushi and rolls, prepared with the freshest ingredients and arranged in artistic forms.',
  },
  {
    category: 'Grill and Oven Specialties',
    description:
      'Satisfy your taste buds with our grill and oven specialties, expertly cooked and served with delicious side dishes.',
  },
  {
    category: 'International Dishes',
    description:
      'Travel through the flavors of the world with our international dishes, prepared authentically and full of exotic flavors.',
  },
  {
    category: 'Desserts',
    description:
      'End your culinary experience with our decadent desserts, such as cheesecake, tiramisu, or artisanal ice cream, for a sweet and memorable note.',
  },
  {
    category: 'Beverages',
    description:
      'Complete your meal with our selection of beverages, including fine wines, refreshing cocktails, and a variety of beers, to cool off and relax in our company.',
  },
];

const productsByCategory = {
  'Appetizers and Snacks': [
    'Bruschetta with Tomato and Basil',
    'Loaded Potato Skins',
    'Mozzarella Sticks with Marinara Sauce',
    'Garlic Bread with Cheese',
    'Stuffed Mushrooms',
  ],
  'Soups and Broths': [
    'Chicken Noodle Soup',
    'Tomato Basil Soup',
    'Minestrone Soup',
    'Clam Chowder',
    'French Onion Soup',
  ],
  Salads: [
    'Caesar Salad with Grilled Chicken',
    'Greek Salad with Feta and Olives',
    'Caprese Salad with Fresh Mozzarella',
    'Cobb Salad with Avocado',
    'Asian Salad with Sesame Ginger Dressing',
  ],
  'Pasta and Risotto': [
    'Spaghetti Carbonara',
    'Fettuccine Alfredo',
    'Penne Arrabiata',
    'Shrimp Scampi Linguine',
    'Mushroom Risotto',
  ],
  'Pizza and Focaccia': [
    'Margherita Pizza',
    'Pepperoni Pizza',
    'Vegetarian Pizza with Roasted Veggies',
    'Four Cheese Pizza',
    'Prosciutto and Arugula Pizza',
  ],
  'Main Course - Meat': [
    'Grilled Ribeye Steak',
    'Roast Chicken with Herbs',
    'Beef Tenderloin with Red Wine Sauce',
    'Pork Schnitzel with Lemon Butter',
    'Lamb Chops with Mint Sauce',
  ],
  'Main Course - Fish and Seafood': [
    'Grilled Salmon with Dill Sauce',
    'Shrimp Scampi',
    'Seared Tuna with Wasabi Mayo',
    'Lobster Tail with Garlic Butter',
    'Fish and Chips with Tartar Sauce',
  ],
  'Vegetarian and Vegan': [
    'Vegetable Stir-Fry with Tofu',
    'Eggplant Parmesan',
    'Quinoa Stuffed Peppers',
    'Chickpea Curry',
    'Vegan Buddha Bowl',
  ],
  'Burgers and Sandwiches': [
    'Classic Cheeseburger with Fries',
    'BBQ Bacon Burger with Onion Rings',
    'Grilled Chicken Sandwich with Avocado',
    'Vegetarian Portobello Burger',
    'Turkey Club Sandwich',
  ],
  'Tacos and Burritos': [
    'Beef Tacos with Pico de Gallo',
    'Chicken Burrito with Guacamole',
    'Vegetarian Quesadilla with Salsa',
    'Shrimp Tacos with Chipotle Mayo',
    'Fish Burrito with Cilantro Lime Rice',
  ],
  'Sushi and Rolls': [
    'California Roll',
    'Spicy Tuna Roll',
    'Salmon Nigiri',
    'Dragon Roll',
    'Rainbow Roll',
  ],
  'Grill and Oven Specialties': [
    'BBQ Ribs with Coleslaw',
    'Rotisserie Chicken with Mashed Potatoes',
    'Grilled Swordfish with Lemon Butter',
    'Baked Stuffed Eggplant',
    'Mixed Grill Platter',
  ],
  'International Dishes': [
    'Chicken Tikka Masala with Basmati Rice',
    'Beef Wellington with Red Wine Sauce',
    'Pad Thai with Shrimp',
    'Moussaka with Greek Salad',
    'Sushi Boat Assortment',
  ],
  Desserts: [
    'New York Cheesecake',
    'Tiramisu with Espresso',
    'Chocolate Lava Cake with Vanilla Ice Cream',
    'Apple Pie with Cinnamon Sauce',
    'Crème Brûlée with Fresh Berries',
  ],
  Beverages: [
    'Red Wine - Merlot',
    'White Wine - Chardonnay',
    'Mojito Cocktail',
    'Craft Beer - IPA',
    'Iced Tea with Lemon',
  ],
};

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

async function clearDatabase() {
  // Clear or truncate tables
  await prisma.product.deleteMany({});
  await prisma.category.deleteMany({});
  await prisma.menu.deleteMany({});
  await prisma.restaurant.deleteMany({});

  console.log('CLEARED--------');
}
async function main() {
  await clearDatabase();

  //Add resto
  const restaurants = await Promise.all(
    Array.from({ length: 50 }).map(() =>
      prisma.restaurant.create({
        data: {
          name: faker.company.name(),
          description: faker.lorem.text(),
        },
      }),
    ),
  );
  console.log('restaurants', restaurants);

  //Add menus
  const menus = await Promise.all(
    restaurants.map(async (r) =>
      prisma.menu.create({
        data: {
          restaurantId: r.id,
          name: 'Default menu',
        },
      }),
    ),
  );
  console.log('menus', menus);

  //Add categories
  const categories = await Promise.all(
    menus.map(async (m) =>
      Promise.all(
        Array.from({ length: getRandomInt(13) + 1 }).map(() => {
          const index = getRandomInt(14);
          return prisma.category.create({
            data: {
              restaurantId: m.restaurantId,
              menuId: m.id,
              name: menuCategoriesList[index].category,
            },
          });
        }),
      ),
    ),
  );
  console.log('categories', categories);

  //Seed products
  restaurants.forEach(async (restaurant) => {
    // console.log('RESTAURANT:', restaurant);
    const categories = await prisma.category.findMany({
      where: {
        restaurantId: restaurant.id,
      },
    });
    // console.log('prodArea:', prodArea);
    const menuItems = await Promise.all(
      categories.map(async (cat) => {
        return await Promise.all(
          Array.from({ length: 3 }).map(() => {
            const index = getRandomInt(5);
            return prisma.product.create({
              data: {
                name: productsByCategory[cat.name][index],
                restaurantId: cat.restaurantId,
                price: getRandomInt(250),
                type: 'Product',
                categoryId: cat.id,
                menuId: cat.menuId,
              },
            });
          }),
        );
      }),
    );
    console.log('menuItems', menuItems);
  });
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
