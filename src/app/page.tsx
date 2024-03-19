import { Button } from "@/components/ui/button";
import { UserButton, auth } from "@clerk/nextjs";

import { LogIn } from "lucide-react";
import Link from "next/link";

export default async function Home() {
  const { userId } = await auth();
  const isAuth = userId || false;
  return (
    <div className="w-screen min-h-screen bg-gradient-to-b from-rose-400 via-fuchsia-500 to-indigo-500">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center">
            <h1 className="mr-3 text-5xl font-semibold">Chat with any PDF</h1>
            <UserButton afterSignOutUrl="/" />
          </div>

          <div className="flex mt-2">
            {isAuth && <Button>Go to inkChatter</Button>}
          </div>

          <p className="max-w-xl mt-1 text-lg text-white">
            Join a diverse community of students, researchers, and professionals
            using AI to quickly answer questions and understand research
            effortlessly.
          </p>
          <div className="w-full mt-4">
            {isAuth ? (
              <h1>fileupload</h1>
            ) : (
              <Link href="/sign-in">
                <Button>
                  Login to get Started
                  <LogIn className="m-4 h-4 ml-2" />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
// import { Button } from "@/components/ui/button";
// import { UserButton, auth } from "@clerk/nextjs";

// import { LogIn } from "lucide-react";
// import Link from "next/link";

// export default async function Home() {
//   let userId;
//   try {
//     const result = await auth();
//     userId = Array.isArray(result) ? result[0] : result;
//   } catch (error) {
//     console.error("Error fetching user ID:", error);
//     // Handle the error gracefully, such as redirecting to an error page or displaying a message to the user
//     // For now, we'll set userId to null
//     userId = null;
//   }

//   const isAuth = userId || false;

//   return (
//     <div className="w-screen min-h-screen bg-gradient-to-b from-rose-400 via-fuchsia-500 to-indigo-500">
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
//         <div className="flex flex-col items-center text-center">
//           <div className="flex items-center">
//             <h1 className="mr-3 text-5xl font-semibold">Chat with any PDF</h1>
//             <UserButton afterSignOutUrl="/" />
//           </div>

//           <div className="flex mt-2">
//             {isAuth && <Button>Go to inkChatter</Button>}
//           </div>

//           <p className="max-w-xl mt-1 text-lg text-white">
//             Join a diverse community of students, researchers, and professionals
//             using AI to quickly answer questions and understand research
//             effortlessly.
//           </p>
//           <div className="w-full mt-4">
//             {isAuth ? (
//               <h1>fileupload</h1>
//             ) : (
//               <Link href="/sign-in">
//                 <Button>
//                   Login to get Started
//                   <LogIn className="m-4 h-4 ml-2" />
//                 </Button>
//               </Link>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
