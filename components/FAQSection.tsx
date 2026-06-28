import { Plus } from "lucide-react";
import Reveal from "@/components/Reveal";

type FAQ = { question: string; answer: string };

/**
 * Accessible, SSR-friendly FAQ accordion built on native <details>/<summary>.
 * No client JS required, so the full question + answer text ships in the
 * initial HTML — exactly what search and answer engines index.
 */
export default function FAQSection({
  faqs,
  heading = "Frequently Asked Questions",
  eyebrow = "FAQ",
}: {
  faqs: FAQ[];
  heading?: string;
  eyebrow?: string;
}) {
  return (
    <Reveal>
      <section className="py-14 sm:py-20 px-4 bg-white" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-4 mb-2">
              <div className="h-px w-12 bg-accent" />
              <span className="text-accent font-bold uppercase tracking-wider text-sm">{eyebrow}</span>
              <div className="h-px w-12 bg-accent" />
            </div>
            <h2 id="faq-heading" className="text-3xl md:text-4xl font-serif font-bold text-primary">
              {heading}
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group bg-cream rounded-2xl border border-gray-100 px-6 py-4 transition-colors hover:border-accent/40"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 list-none font-semibold text-primary">
                  <span>{faq.question}</span>
                  <Plus className="w-5 h-5 flex-shrink-0 text-accent transition-transform duration-300 group-open:rotate-45" />
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
