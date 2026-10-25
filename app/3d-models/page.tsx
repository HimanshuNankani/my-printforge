import ModelsGrid from "@/components/ModelsGrid";
import SearchForm from "@/components/SearchForm";
import { getModels } from "@/lib/models";
import { Model } from "@/lib/types";

export default async function Models() {
  const models: Model[] = await getModels();
  return (
    <>
      <SearchForm />

      <ModelsGrid models={models} />
    </>
  );
}
