import { capitalize } from "@/lib/capitalize";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  const title = capitalize(pathname);

  return (
    <aside className="w-44">
      <div className="">{title} Sidebar</div>
    </aside>
  );
}
