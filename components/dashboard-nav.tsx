"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import { NavItem } from "@/types";
import { Dispatch, SetStateAction } from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/layout/subnav-accordion"; // Adjust import path as necessary

interface DashboardNavProps {
  items: NavItem[];
  setOpen?: Dispatch<SetStateAction<boolean>>;
}

export function DashboardNav({ items, setOpen }: DashboardNavProps) {
  const path = usePathname();
  return (
    <nav className="grid items-start gap-2">
      {items.map((item, index) => {
        if (item.children && item.children.length > 0) {
          return (
            <Accordion key={index} type="single" collapsible>
              <AccordionItem value={item.title}>
                <AccordionTrigger className="group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground">
                  {item.icon}
                  <Icon className="mr-2 h-4 w-4" />
                  {item.title}
                </AccordionTrigger>
                <AccordionContent>
                  {item.children.map((child, childIndex) => (
                    <Link
                      key={childIndex}
                      href={child.href || '/'}
                      onClick={() => setOpen && setOpen(false)}
                    >
                      <span className="group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground">
                        {child.title}
                      </span>
                    </Link>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          );
        } else {
          const Icon = Icons[item.icon || "arrowRight"];

          return (
            <Link
              key={index}
              href={item.href || '/'}
              onClick={() => {
                if (setOpen) setOpen(false);
              }}
            >
              <span
                className="group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
              >
                <Icon className="mr-2 h-4 w-4" />
                {item.title}
              </span>
            </Link>
          );
        }
      })}
    </nav>
  );
}
