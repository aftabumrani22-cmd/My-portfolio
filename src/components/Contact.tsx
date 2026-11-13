import React, { useState } from 'react';
import {
  Mail,
  MapPin,
  Send,
  AlertCircle,
  CheckCircle2,
  ExternalLink,
  MessageCircle,
  Copy,
  Check,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons/SocialIcons';
import { siteConfig } from '../config/site';
import { SectionHeading } from './ui/SectionHeading';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionFeedback, setSubmissionFeedback] = useState<{
    status: 'idle' | 'validated_local' | 'sent_backend' | 'error';
    message: string;
    mailtoUrl?: string;
  }>({
    status: 'idle',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!formData.name.trim()) {
      errs.name = 'Please provide your name.';
    } else if (formData.name.trim().length < 2) {
      errs.name = 'Name must be at least 2 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!emailRegex.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }

    if (!formData.subject.trim()) {
      errs.subject = 'Please provide a subject.';
    } else if (formData.subject.trim().length < 3) {
      errs.subject = 'Subject must be at least 3 characters.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please provide your message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters so I can understand your inquiry.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear specific field error as user types
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const hasFormspree = Boolean(siteConfig.contact.formspreeId?.trim());

    if (hasFormspree) {
      try {
        const response = await fetch(
          `https://formspree.io/f/${siteConfig.contact.formspreeId}`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
            body: JSON.stringify(formData),
          }
        );

        if (response.ok) {
          setSubmissionFeedback({
            status: 'sent_backend',
            message: 'Thank you! Your message has been sent directly to my inbox.',
          });
          setFormData({ name: '', email: '', subject: '', message: '' });
        } else {
          throw new Error('Backend service returned an error response.');
        }
      } catch {
        setSubmissionFeedback({
          status: 'error',
          message:
            'Unable to send through Formspree. Please click below to send via your email client.',
          mailtoUrl: createMailtoUrl(),
        });
      } finally {
        setIsSubmitting(false);
      }
    } else {
      // Honest Static Fallback: No pretend sending
      setTimeout(() => {
        setIsSubmitting(false);
        const mailto = createMailtoUrl();
        setSubmissionFeedback({
          status: 'validated_local',
          message: siteConfig.socials.email || siteConfig.contact.mailtoFallbackEmail
            ? 'Your message is ready to send from your email client.'
            : 'This form is not connected yet. Please reach out through LinkedIn.',
          mailtoUrl: mailto || undefined,
        });
      }, 500);
    }
  };

  const createMailtoUrl = () => {
    const targetEmail = siteConfig.socials.email || siteConfig.contact.mailtoFallbackEmail;
    const subjectParam = encodeURIComponent(
      `[Portfolio Inquiry] ${formData.subject || 'Opportunity / Question'}`
    );
    const bodyParam = encodeURIComponent(
      `Hi Aftab,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
    );
    return targetEmail ? `mailto:${targetEmail}?subject=${subjectParam}&body=${bodyParam}` : '';
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(siteConfig.socials.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 lg:py-28 relative bg-[#0B0F19] text-white border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          theme="dark"
          eyebrow="Get In Touch"
          title="Let's Start a Conversation"
          subtitle="Share what you are working on, or reach out directly through email or WhatsApp."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact Details & Socials */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="rounded-2xl bg-[#111726] border border-slate-800 p-5 sm:p-8 shadow-sm">
              <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                Contact Information
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
                Share your requirements below, or use one of these direct contact options.
              </p>

              {/* Channel list */}
              <div className="space-y-4">
                {/* Email Box */}
                {siteConfig.socials.email && <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/[0.06] flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="truncate">
                      <span className="block text-[11px] font-mono uppercase tracking-wider text-slate-400">
                        Direct Email
                      </span>
                      <a
                        href={`mailto:${siteConfig.socials.email}`}
                        className="text-xs sm:text-sm font-semibold text-white hover:text-sky-400 transition-colors truncate block"
                      >
                        {siteConfig.socials.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={copyEmailToClipboard}
                    className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors shrink-0"
                    title="Copy email to clipboard"
                    aria-label="Copy email"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>}

                {/* WhatsApp Box */}
                {siteConfig.socials.whatsapp && (
                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/[0.06] flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0">
                        <MessageCircle className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="block text-[11px] font-mono uppercase tracking-wider text-slate-400">
                          Instant Messaging
                        </span>
                        <span className="text-xs sm:text-sm font-semibold text-white">
                          Direct WhatsApp Chat
                        </span>
                      </div>
                    </div>
                    <a
                      href={siteConfig.socials.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Message Aftab on WhatsApp"
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 transition-colors"
                    >
                      Message <span aria-hidden="true">→</span>
                    </a>
                  </div>
                )}

                {/* Location Box */}
                <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/[0.06] flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-mono uppercase tracking-wider text-slate-400">
                      Location &amp; Timezone
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-white">
                      {siteConfig.location} (UTC+5)
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Link Badges */}
              <div className="mt-8 pt-6 border-t border-white/[0.06]">
                <span className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                  Professional Profiles
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {siteConfig.socials.github && <a
                    href={siteConfig.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-white/[0.08] transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>}

                  <a
                    href={siteConfig.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-white/[0.08] transition-colors"
                  >
                    <LinkedinIcon className="w-4 h-4 text-sky-400" />
                    <span>LinkedIn</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#111726] border border-slate-800 p-5 sm:p-8 shadow-sm">
              <h3 className="text-xl font-bold text-white tracking-tight mb-1">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Fill in the form below. Inputs are strictly validated client-side.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5"
                    >
                      Your Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Sarah Khan"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 text-sm text-white placeholder-slate-500 border ${
                        errors.name
                          ? 'border-rose-500 focus:border-rose-400'
                          : 'border-slate-800 focus:border-sky-400'
                      } transition-colors`}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5"
                    >
                      Your Email <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. sarah@example.com"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 text-sm text-white placeholder-slate-500 border ${
                        errors.email
                          ? 'border-rose-500 focus:border-rose-400'
                          : 'border-slate-800 focus:border-sky-400'
                      } transition-colors`}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5"
                  >
                    Subject / Topic <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Frontend Internship / Project Inquiry"
                    className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 text-sm text-white placeholder-slate-500 border ${
                      errors.subject
                        ? 'border-rose-500 focus:border-rose-400'
                        : 'border-slate-800 focus:border-sky-400'
                    } transition-colors`}
                    aria-invalid={Boolean(errors.subject)}
                    aria-describedby={errors.subject ? 'subject-error' : undefined}
                  />
                  {errors.subject && (
                    <p id="subject-error" className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5"
                  >
                    Your Message <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, timeline, or requirements..."
                    className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 text-sm text-white placeholder-slate-500 border ${
                      errors.message
                        ? 'border-rose-500 focus:border-rose-400'
                        : 'border-slate-800 focus:border-sky-400'
                    } transition-colors resize-y`}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold bg-sky-500 hover:bg-sky-400 text-slate-950 shadow-sm hover:shadow transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span>Verifying...</span>
                    ) : (
                      <>
                        <span>Submit Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>

              {/* Submission State Banner */}
              {submissionFeedback.status !== 'idle' && (
                <div
                  className={`mt-6 p-4 rounded-2xl border text-xs sm:text-sm leading-relaxed ${
                    submissionFeedback.status === 'sent_backend'
                      ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                      : submissionFeedback.status === 'validated_local'
                      ? 'bg-sky-500/10 border-sky-500/30 text-sky-200'
                      : 'bg-rose-500/10 border-rose-500/30 text-rose-300'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-sky-400" />
                    <div>
                      <p className="font-medium">{submissionFeedback.message}</p>
                      {submissionFeedback.mailtoUrl ? (
                        <div className="mt-3">
                          <a
                            href={submissionFeedback.mailtoUrl}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-sky-500 text-slate-950 hover:bg-sky-400 transition-colors"
                          >
                            <span>Launch Email Client (Pre-filled)</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      ) : (
                        <a
                          href={siteConfig.socials.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-3 inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-sky-500 text-slate-950 hover:bg-sky-400 transition-colors"
                        >
                          <span>Message me on LinkedIn</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

