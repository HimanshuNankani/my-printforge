import { getDBCnnection } from "@/lib/db";

export async function getModels() {
  const db = await getDBCnnection();

  try {
    return await db.all("SELECT * FROM models");
  } finally {
    db.close();
  }
}

export async function getModelsByCategorySLug(categorySlug: string) {
  const db = await getDBCnnection();

  try {
    return await db.all("SELECT * FROM models WHERE category=?", [
      categorySlug,
    ]);
  } finally {
    db.close();
  }
}

export async function getModelById(modelId: number) {
  const db = await getDBCnnection();

  try {
    return db.get("SELECT * FROM models WHERE id=?", [modelId]);
  } finally {
    db.close();
  }
}
