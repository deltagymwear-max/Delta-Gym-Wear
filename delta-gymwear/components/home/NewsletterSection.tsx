"use client";

import { FormEvent } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterSection() {
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.currentTarget.reset();
    toast.success("You're on the list.", { description: "No noise. Just the next Delta drop." });
  }

  return (
    <section className="bg-white px-5 py-24 text-center sm:px-8 lg:py-32">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs font-black uppercase tracking-[0.3em] text-brand-muted">Stay in the loop</p>
        <h2 className="mt-5 text-6xl font-black uppercase leading-[0.85] tracking-[-0.06em] sm:text-8xl">No fluff.<br />Just drops.</h2>
        <p className="mx-auto mt-7 max-w-xl leading-7 text-brand-muted">New product launches, training content, and brand updates. That&apos;s it. We don&apos;t do noise.</p>
        <form onSubmit={submit} className="mx-auto mt-9 flex max-w-xl flex-col gap-3 sm:flex-row">
          <Input required type="email" aria-label="Email address" placeholder="EMAIL ADDRESS" className="h-14 flex-1 font-bold" />
          <Button type="submit" variant="yellow" size="lg">Subscribe</Button>
        </form>
      </div>
    </section>
  );
}
