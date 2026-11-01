import { getDBCnnection } from "@/lib/db";

export async function getModels(search?: string) {
  const db = await getDBCnnection();

  let sql = "SELECT * FROM models";
  const placeholder: any = [];

  if (search) {
    sql += " WHERE (name LIKE ? OR description LIKE ?)";
    placeholder.push(`%${search}%`);
    placeholder.push(`%${search}%`);
  }
  try {
    return await db.all(sql, placeholder);
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
