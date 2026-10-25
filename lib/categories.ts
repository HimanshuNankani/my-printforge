import { getDBCnnection } from "@/lib/db";

export async function getCategories() {
  const db = await getDBCnnection();

  try {
    return await db.all("SELECT * FROM categories");
  } finally {
    db.close();
  }
}

export async function getCategoryBySlug(categorySlug: string) {
  const db = await getDBCnnection();
  try {
    return await db.get("SELECT * FROM categories WHERE slug=?", [
      categorySlug,
    ]);
  } finally {
    db.close();
  }
}
