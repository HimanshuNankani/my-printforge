import ModelsGrid from "@/components/ModelsGrid";
import { getCategoryBySlug } from "@/lib/categories";
import { getModelsByCategorySLug } from "@/lib/models";
import { Category, CategoryPageProp, Model } from "@/lib/types";

export default async function CategoryPage({ params }: CategoryPageProp) {
  const { categorySlug } = await params;
  const models: Model[] = await getModelsByCategorySLug(categorySlug);
  const category: Category = await getCategoryBySlug(categorySlug);

  return <ModelsGrid models={models} title={category.name} />;
}
