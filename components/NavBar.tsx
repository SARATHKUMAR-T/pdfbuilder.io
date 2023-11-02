"use client";

import Link from "next/link";
import { Menu, Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { UserNav } from "./UserNav";
import { useTheme } from "next-themes";

export default function NavBar() {
  const [authenticated, isAuthenticated] = useState(false);
  const { setTheme, theme } = useTheme();
  const router = useRouter();
  useEffect(() => {
    function getToken() {
      const token = localStorage.getItem("token");
      token ? isAuthenticated(true) : isAuthenticated(false);
    }
    getToken();
  }, [authenticated]);

  const routes = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/#about",
      label: "About",
    },
    {
      href: "/#features",
      label: "Features",
    },
    {
      href: "/#contact",
      label: "Contact",
    },
  ];
  const routes2 = [
    {
      href: "/files",
      label: "File Editor",
    },
  ];

  return (
    <header className="fixed  h-16 items-center  bg-opacity-50 bg-transparent backdrop-blur-sm   z-50 w-full sm:flex sm:justify-between  px-4 ">
      <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full">
        <div className="flex items-center">
          <Sheet>
            <SheetTrigger>
              <Menu className="h-6 md:hidden w-6" />
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4">
                {!authenticated
                  ? routes.map((route, i) => (
                      <Link
                        key={i}
                        href={route.href}
                        className="block px-2 py-1 text-lg"
                      >
                        {route.label}
                      </Link>
                    ))
                  : routes2.map((route, i) => (
                      <Link
                        key={i}
                        href={route.href}
                        className="block px-2 py-1 text-lg"
                      >
                        {route.label}
                      </Link>
                    ))}
              </nav>
            </SheetContent>
          </Sheet>
          <Button
            variant="ghost"
            onClick={() => {
              localStorage.removeItem("token"),
                isAuthenticated(false),
                router.push("/");
            }}
            className="ml-4 lg:ml-0"
          >
            <h1 className="text-lg font-semibold text-green-500">
              PDFBuilder.io
            </h1>
          </Button>
        </div>
        <nav className="mx-6  items-center space-x-4 lg:space-x-6 hidden  md:flex">
          {!authenticated
            ? routes.map((route, i) => (
                <Button asChild key={i} variant="ghost">
                  <Link
                    href={route.href}
                    className="text-sm font-medium transition-colors"
                  >
                    {route.label}
                  </Link>
                </Button>
              ))
            : routes2.map((route, i) => (
                <Button asChild key={i} variant="ghost">
                  <Link
                    href={route.href}
                    className="text-sm font-medium transition-colors"
                  >
                    {route.label}
                  </Link>
                </Button>
              ))}
        </nav>
        <div className="flex items-center">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle Theme"
            className="mr-6 hover:dark:text-white"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-6 w-6 rotate-0 scale-100 duration-500 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-6 w-6 rotate-90 scale-0 duration-500 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle Theme</span>
          </Button>
          {authenticated ? (
            <UserNav />
          ) : (
            <Button variant="default" asChild>
              <Link href="/login">LogIn</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
