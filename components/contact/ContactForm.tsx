"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import DepthCard from "@/components/ui/DepthCard";
import { CONTACT_EMAIL } from "@/lib/constants";
import { CARD_BODY_PADDING_CLASS } from "@/lib/styles";

type ContactFormValues = {
  name: string;
  email: string;
  company?: string;
  projectType: string;
  description: string;
};

const projectTypes = [
  "Web Platform",
  "Mobile App",
  "Website",
  "AI Integration",
  "Other",
];

const fieldClassName =
  "w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 font-[family-name:var(--font-body)] text-sm text-[var(--color-text-primary)] transition-[border-color] duration-150 outline-none focus:border-[var(--color-cyan)]";

const labelClassName =
  "mb-1.5 block text-xs font-medium text-[var(--color-text-muted)]";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    defaultValues: {
      name: "",
      email: "",
      company: "",
      projectType: "Web Platform",
      description: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setSubmitError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as {
          error?: string;
        } | null;
        throw new Error(payload?.error ?? "Something went wrong. Please try again.");
      }

      setSubmitted(true);
      reset();
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    }
  };

  return (
    <div>
      <DepthCard className={CARD_BODY_PADDING_CLASS} interactive={false}>
        {submitted ? (
          <div className="py-6 text-center">
            <p className="font-[family-name:var(--font-display)] text-[22px] font-semibold text-[var(--color-text-primary)]">
              Project received.
            </p>
            <p className="mt-3 text-sm font-light leading-[1.68] text-[var(--color-text-secondary)]">
              We&apos;ll respond within 2 business days with clarity on scope,
              direction, and next steps.
            </p>
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="mt-6 border-0 bg-transparent text-sm font-medium text-[var(--color-cyan)]"
            >
              Submit another project
            </button>
          </div>
        ) : (
          <form className="space-y-5" onSubmit={handleSubmit(onSubmit)} noValidate>
            <div>
              <label htmlFor="name" className={labelClassName}>
                Name
              </label>
              <input
                id="name"
                type="text"
                className={fieldClassName}
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <p className="mt-1.5 text-xs text-[var(--color-cyan)]">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className={labelClassName}>
                Email
              </label>
              <input
                id="email"
                type="email"
                className={fieldClassName}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="mt-1.5 text-xs text-[var(--color-cyan)]">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="company" className={labelClassName}>
                Company <span className="font-normal">(optional)</span>
              </label>
              <input
                id="company"
                type="text"
                className={fieldClassName}
                {...register("company")}
              />
            </div>

            <div>
              <label htmlFor="projectType" className={labelClassName}>
                Project type
              </label>
              <select
                id="projectType"
                className={fieldClassName}
                {...register("projectType", {
                  required: "Project type is required",
                })}
              >
                {projectTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="description" className={labelClassName}>
                Project description
              </label>
              <textarea
                id="description"
                rows={5}
                placeholder="What are you building, who's it for, and what does success look like?"
                className={`${fieldClassName} resize-y`}
                {...register("description", {
                  required: "Project description is required",
                  minLength: {
                    value: 50,
                    message: "Please provide at least 50 characters",
                  },
                })}
              />
              {errors.description && (
                <p className="mt-1.5 text-xs text-[var(--color-cyan)]">
                  {errors.description.message}
                </p>
              )}
            </div>

            {submitError && (
              <p className="text-sm text-[var(--color-cyan)]">{submitError}</p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary inline-flex items-center border-0 transition-[opacity,transform] duration-150 hover:opacity-[0.88] hover:-translate-y-px active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Submitting..." : "Submit project →"}
            </button>
          </form>
        )}
      </DepthCard>

      <p className="mt-6 text-sm font-light leading-[1.68] text-[var(--color-text-secondary)]">
        Projects typically start from £750. We&apos;ll confirm scope and budget
        in our first response.
      </p>

      <p className="mt-4 text-sm font-light text-[var(--color-text-secondary)]">
        Or email us directly at{" "}
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="text-[var(--color-cyan)] no-underline transition-colors duration-150 hover:opacity-80"
        >
          {CONTACT_EMAIL}
        </a>
      </p>
    </div>
  );
}
