import { Metadata } from "next";
import Link from "next/link";
import UserAuthForm from "@/components/forms/user-auth-form";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
};

export default function AuthenticationPage() {
  return (
    <div className="relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <Link
        href="/examples/authentication"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute right-4 hidden top-4 md:right-8 md:top-8",
        )}
      >
        Login
      </Link>
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
        <div className="absolute inset-0 bg-zinc-900 bg-[url('/images/bg-1.jpg')] bg-cover"/>
        <div className="relative z-20 flex items-center text-lg font-medium">
          
        </div>
      </div>
      <div className="p-4 lg:p-8 h-full flex items-center space-y-12">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col text-center mb-6">
            <img src="/images/distribuzon_logo_dark.svg" alt="Logo" className="h-8 w-auto hidden dark:block" />
            <img src="/images/distribuzon_logo_light.svg" alt="Logo" className="h-8 w-auto block dark:hidden" />
          </div>
          <UserAuthForm />
      
        </div>
      </div>
    </div>
  );
}
