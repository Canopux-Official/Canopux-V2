import { SectionReveal } from "@/components/ui/SectionReveal";
import { techStack } from "@/content/techStack";

export function TechStackGrid() {
  return (
    <section className="bg-canopux-black py-24 sm:py-32">
      <div className="container-page">
        <SectionReveal>
          <h2 className="max-w-2xl font-display text-3xl font-semibold tracking-[-0.035em] text-canopux-white sm:text-4xl lg:text-5xl">
            Stacks we ship with
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-canopux-silver sm:text-lg">
            Modern foundations for web, mobile, AI, and infrastructure, chosen
            for speed, clarity, and long-term maintainability.
          </p>
        </SectionReveal>

        <div className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 sm:mt-16 sm:gap-x-10 sm:gap-y-12 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-14">
          {techStack.map((item) => (
            <SectionReveal key={item.id}>
              <div className="flex gap-4">
                <div className="mt-0.5">{item.icon}</div>
                <div className="min-w-0">
                  <h3 className="font-sans text-[15px] font-semibold text-canopux-white sm:text-base">
                    {item.name}
                  </h3>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-canopux-silver sm:text-[15px]">
                    {item.description}
                  </p>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
