import { MenubarDemo } from "./index";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="w-full max-w-4xl p-8">
        <h1 className="mb-8 text-3xl font-bold text-center">Menubar Component Demo</h1>
        <MenubarDemo />
      </div>
    </div>
  );
}
