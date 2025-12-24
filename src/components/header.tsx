import { api } from "@/lib/api";
import { Button } from "./ui/button";

export default function Header() {
	return (
		<header className="relative w-full bg-white border-b border-gray-200 z-50">
			<Button
				variant={"default"}
				className="m-3"
				onClick={async () => await api.get("/health")}
			>
				Big Button
			</Button>
		</header>
	);
}
