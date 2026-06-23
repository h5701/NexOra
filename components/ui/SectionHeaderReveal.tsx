"use client";

import type { ComponentProps } from "react";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";

type SectionHeaderRevealProps = ComponentProps<typeof SectionHeader> & {
  /** Stagger delay in seconds. */
  delay?: number;
};

export default function SectionHeaderReveal({
  delay = 0,
  ...props
}: SectionHeaderRevealProps) {
  return (
    <Reveal delay={delay}>
      <SectionHeader {...props} />
    </Reveal>
  );
}
