import Image from "next/image";
import Counter from "./components/Counter";
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Counter />
      <h1>Home pages</h1>
    </div>
  );
}
