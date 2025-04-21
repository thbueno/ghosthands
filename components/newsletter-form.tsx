"use client";

import { ArrowUpRight } from "lucide-react";
import { type FormEvent, useState } from "react";

interface NewsletterFormProps {
  className?: string;
}

export function NewsletterForm({
  className = "max-w-md",
}: NewsletterFormProps) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle email subscription logic here
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <div className={className}>
      <p className="text-text mb-6">Stay connected w/ me.</p>
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full bg-transparent border-b border-background py-2 pr-12 focus:outline-none focus:border-white transition-colors text-background placeholder:text-text"
          required
        />
        <button
          type="submit"
          className="absolute right-0 top-1/2 -translate-y-1/2"
          aria-label="Subscribe"
        >
          <ArrowUpRight size={20} />
        </button>
      </form>
    </div>
  );
}
