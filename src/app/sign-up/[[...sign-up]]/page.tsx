import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="w-screen min-h-screen bg-gradient-to-br from-rose-400 via-fuchsia-500 to-indigo-500">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <SignUp />
      </div>
    </div>
  );
}
