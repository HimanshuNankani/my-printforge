import { getDBCnnection } from "@/lib/db";
import models from "@/lib/data/models.json";

async function seedModels() {
  const db = await getDBCnnection();

  await db.exec(`
    CREATE TABLE IF NOT EXISTS models (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    likes INTEGER NOT NULL DEFAULT 0,
    image TEXT NOT NULL,
    category TEXT NOT NULL,
    dateAdded TEXT NOT NULL
    );`);

  const insertModel = await db.prepare(`
        INSERT OR REPLACE INTO models (
        id,
        name,
        description,
        likes,
        image,
        category,
        dateAdded
        ) VALUES (?,?,?,?,?,?,?)`);

  for (const model of models) {
    await insertModel.run(
      model.id,
      model.name,
      model.description,
      model.likes,
      model.image,
      model.category,
      model.dateAdded,
    );
  }

  await insertModel.finalize();
  await db.close();

  console.log("Models table seeded successfully");
}

seedModels().catch((err) => {
  console.error("Seeding failed: ", err);
});
