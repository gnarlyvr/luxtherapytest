"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { faqs } from "@/data/faq";

export function FaqAccordion() {
  const [openId, setOpenId] = useState<number | null>(0);

  return (
    <div className="divide-y divide-lux-border rounded-lg border border-lux-border bg-white">
      {faqs.map((faq, index) => {
        const open = openId === index;
        return (
          <div key={faq.question}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-lux-foam/60"
              aria-expanded={open}
              onClick={() => setOpenId(open ? null : index)}
            >
              <span className="font-semibold text-lux-ink">{faq.question}</span>
              <ChevronDown
                className={`shrink-0 text-lux-sage transition-transform duration-200 ${
                  open ? "rotate-180" : ""
                }`}
                size={20}
              />
            </button>
            {open && (
              <div className="px-5 pb-5 text-sm leading-relaxed text-lux-ink-muted">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
