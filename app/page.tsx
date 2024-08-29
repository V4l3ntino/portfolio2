import Description from "@/components/Description";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12 max-w-screen-2xl mx-auto ">
      <Description />
    </main>
  );
}
