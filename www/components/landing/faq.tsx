"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is JSSON a replacement for JSON?",
    answer:
      "No. JSSON doesn’t try to replace JSON — it replaces the pain of writing JSON. You write JSSON, and it compiles into standard JSON, YAML, TOML, or TS. Your existing tools still work exactly the same.",
  },
  {
    question: "How is it different from YAML or TOML?",
    answer:
      "JSSON is a meta-format. It adds logic, templates, and ranges to your configuration source. It generates those formats, rather than competing with them.",
  },
  {
    question: "Does JSSON support loops and dynamic data?",
    answer:
      "Yes. Ranges, arithmetic, template blocks, and nested maps are all built-in. JSSON can generate thousands of records from a few lines of logic.",
  },
  {
    question: "Is JSSON whitespace-dependent?",
    answer:
      "No. JSSON has clear delimiters and is not indentation-sensitive. You can minify or inline it however you want.",
  },
  {
    question: "Why does JSSON exist?",
    answer:
      "Because writing large configs by hand is painful. JSSON adds logic and reusability without sacrificing compatibility.",
  },
];

export function FAQ() {
  return (
    <section className="py-32">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="mb-16">
          <h2 className="text-xs font-black uppercase tracking-[0.4em] text-muted-foreground mb-4">FAQ</h2>
          <p className="text-4xl font-bold tracking-tighter uppercase">
            Questions. Answered.
          </p>
        </div>

        <Accordion className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-border/10">
              <AccordionTrigger className="text-left text-lg font-black uppercase tracking-tight py-6 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-light text-base pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
