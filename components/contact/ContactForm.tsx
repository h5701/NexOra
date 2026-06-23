"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import DepthCard from "@/components/ui/DepthCard";
import { CONTACT_EMAIL, CONTACT_PROJECT_TYPES } from "@/lib/constants";
import { CARD_BODY_PADDING_CLASS, LINK_ACCENT_CLASS } from "@/lib/styles";

type ContactFormValues = {
  name: string;
  email: string;
  company?: string;
  projectType: string;
  description: string;
};

const fieldClassName =
  "w-full min-h-[48px] rounded-lg border border-[var(--color-border-bright)] bg-[var(--color-field)] px-4 py-3 font-[family-name:var(--font-body)] text-base text-[var(--color-text-primary)] transition-[border-color,box-shadow] duration-150 outline-none focus:border-[var(--color-accent)] focus:shadow-[0_0_0_3px_color-mix(in_srgb,var(--color-accent)_18%,transparent)]";

const labelClassName =
  "mb-1.5 block text-sm font-medium text-[var(--color-text-secondary)]";

export default function ContactForm({
  defaultProjectType = "Web Platform",
}: {
  defaultProjectType?: string;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const resolvedDefault =
    CONTACT_PROJECT_TYPES.find((type) => type === defaultProjectType) ??
    "Other";

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
      projectType: resolvedDefault,
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
            <p className="font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--color-text-primary)]">
              Project received.
            </p>
            <p className="mt-3 text-sm font-light leading-body text-[var(--color-text-secondary)]">
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
                <p className="mt-1.5 text-sm text-[var(--color-error)]">
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
                <p className="mt-1.5 text-sm text-[var(--color-error)]">
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
                {CONTACT_PROJECT_TYPES.map((type) => (
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
                <p className="mt-1.5 text-sm text-[var(--color-error)]">
                  {errors.description.message}
                </p>
              )}
            </div>

            {submitError && (
              <p className="text-sm text-[var(--color-error)]">{submitError}</p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary inline-flex w-full items-center justify-center border-0 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              {isSubmitting ? "Submitting..." : "Submit project →"}
            </button>
          </form>
        )}
      </DepthCard>

      <p className="mt-6 text-sm font-light leading-body text-[var(--color-text-secondary)]">
        Projects typically start from £750. We&apos;ll confirm scope and budget
        in our first response.
      </p>

      <p className="mt-4 text-sm font-light text-[var(--color-text-secondary)]">
        Or email us directly at{" "}
        <a href={`mailto:${CONTACT_EMAIL}`} className={LINK_ACCENT_CLASS}>
          {CONTACT_EMAIL}
        </a>
      </p>
    </div>
  );
}
