import { getDBCnnection } from "@/lib/db";
import categories from "@/lib/data/categories.json";

async function seedCategories() {
  const db = await getDBCnnection();

  await db.exec(`
    CREATE TABLE IF NOT EXISTS categories (
    slug TEXT PRIMARY KEY,
    name TEXT NOT NULL
    );`);

  const insertCategory = await db.prepare(`
        INSERT OR REPLACE INTO categories (
        slug,
        name
        ) VALUES (?,?)`);

  for (const category of categories) {
    await insertCategory.run(category.slug, category.name);
  }

  await insertCategory.finalize();
  await db.close();

  console.log("Categories table seeded successfully");
}

seedCategories().catch((err) => {
  console.error("Seeding failed: ", err);
});
