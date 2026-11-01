import ModelsGrid from "@/components/ModelsGrid";
import SearchForm from "@/components/SearchForm";
import { getModels } from "@/lib/models";
import { Model, ModelsProp } from "@/lib/types";

export default async function Models({ searchParams }: ModelsProp) {
  const search = (await searchParams)?.search?.toLowerCase() || "";
  const models: Model[] = await getModels(search);
  const title = search ? `Search results for '${search}'` : search;
  return (
    <>
      <SearchForm searchValue={search} />

      <ModelsGrid models={models} title={title} />
    </>
  );
}
