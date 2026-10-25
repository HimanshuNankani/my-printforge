import Link from "next/link";
import NavLink from "./NavLink";
import { getCategories } from "@/lib/categories";
import { Category } from "@/lib/types";

export default async function CategoriesNav() {
  const categories: Category[] = await getCategories();

  return (
    <aside className="sticky top-0 z-10 w-full bg-white border-b border-gray-200 md:fixed md:w-64 md:top-1/2 md:-translate-y-1/2 md:border-none">
      <div className="relative">
        <nav className="w-full overflow-x-auto md:overflow-visible scrollbar-hide">
          <ul className="flex px-4 py-3 whitespace-nowrap md:flex-col md:p-0 md:space-x-0 md:space-y-3">
            <NavLink href="/3d-models" exact={true}>
              All
            </NavLink>
            {categories.map((category: Category) => {
              return (
                <NavLink
                  key={category.slug}
                  href={`/3d-models/categories/${category.slug}`}
                >
                  {category.name}
                </NavLink>
              );
            })}
            {/* <li className="text-sm uppercase">
              <a
                className="px-4 py-2 transition-colors rounded-md cursor-pointer hover:text-orange-400 text-gray-700"
                href="/3d-models/categories/category"
              >
                3D Printer
              </a>
            </li>

            <li className="text-sm uppercase">
              <a
                className="px-4 py-2 transition-colors rounded-md cursor-pointer hover:text-orange-400 text-gray-700"
                href="/3d-models/categories/category"
              >
                Art
              </a>
            </li>

            <li className="text-sm uppercase">
              <a
                className="px-4 py-2 transition-colors rounded-md cursor-pointer hover:text-orange-400 text-gray-700"
                href="/3d-models/categories/category"
              >
                Education
              </a>
            </li>

            <li className="text-sm uppercase">
              <a
                className="px-4 py-2 transition-colors rounded-md cursor-pointer hover:text-orange-400 text-gray-700"
                href="/3d-models/categories/category"
              >
                Fashion
              </a>
            </li>

            <li className="text-sm uppercase">
              <a
                className="px-4 py-2 transition-colors rounded-md cursor-pointer hover:text-orange-400 text-gray-700"
                href="/3d-models/categories/category"
              >
                Hobby & DIY
              </a>
            </li>

            <li className="text-sm uppercase">
              <a
                className="px-4 py-2 transition-colors rounded-md cursor-pointer hover:text-orange-400 text-gray-700"
                href="/3d-models/categories/category"
              >
                Household
              </a>
            </li>

            <li className="text-sm uppercase">
              <a
                className="px-4 py-2 transition-colors rounded-md cursor-pointer hover:text-orange-400 text-gray-700"
                href="/3d-models/categories/category"
              >
                Miniatures
              </a>
            </li>

            <li className="text-sm uppercase">
              <a
                className="px-4 py-2 transition-colors rounded-md cursor-pointer hover:text-orange-400 text-gray-700"
                href="/3d-models/categories/category"
              >
                Props & Cosplay
              </a>
            </li>

            <li className="text-sm uppercase">
              <a
                className="px-4 py-2 transition-colors rounded-md cursor-pointer hover:text-orange-400 text-gray-700"
                href="/3d-models/categories/category"
              >
                Tools
              </a>
            </li>

            <li className="text-sm uppercase">
              <a
                className="px-4 py-2 transition-colors rounded-md cursor-pointer hover:text-orange-400 text-gray-700"
                href="/3d-models/categories/category"
              >
                Toys & Games
              </a>
            </li> */}
          </ul>
        </nav>
        <div className="absolute top-0 right-0 w-8 h-full pointer-events-none bg-gradient-to-l from-white to-transparent md:hidden" />
      </div>
    </aside>
  );
}
