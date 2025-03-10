"use client";


import { Icons } from "@/components/Other/icons";
import { Button } from "@/components/ui/button";
import { ClientSafeProvider, getProviders, signIn } from "next-auth/react";
import { useEffect, useState } from "react";



export function AuthForm() {

  const [providers, setProviders] = useState<
  Record<string, ClientSafeProvider>
>({});

useEffect(() => {
  async function getProvidersValue() {
    const p = await getProviders();
    setProviders(p as Record<string, ClientSafeProvider>);
  }
  getProvidersValue();
}, []);

  return (
    <div className="grid gap-6">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
  <span className="bg-white px-2 text-gray-600">
    Continue with
  </span>
</div>
      </div>

      {providers &&
        !!Object.keys(providers).length &&
        Object.values(providers!).map((provider) => (
          <Button
            key={provider.name}
            variant="outline"
            type="button"
            onClick={() =>
              signIn(provider.id, {
                callbackUrl: "/portal",
                //   redirect: false
              })
            }
            className="w-full text-white bg-gradient-to-r from-black to-blue-600 
            hover:bg-white hover:text-white 
            transition-all duration-300 ease-in-out shadow-lg"
>
            <Icons.google className="mr-2 h-4 w-4" />
            Google
          </Button>
        ))}
    </div>
  );
}
