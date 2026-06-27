"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", mobile: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // Save to database
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to submit");

      setStatus("success");
      setForm({ name: "", mobile: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 max-w-lg mx-auto">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-1.5">
          Name <span style={{ color: "#ff9202" }}>*</span>
        </label>
        <input
          type="text"
          id="name"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full px-4 py-3 rounded-xl text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#ff9202] focus:border-transparent transition-all"
          style={{ backgroundColor: "#1a0f52", border: "1px solid #2d1e80" }}
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="mobile" className="block text-sm font-medium text-white/70 mb-1.5">
          Mobile Number <span style={{ color: "#ff9202" }}>*</span>
        </label>
        <input
          type="tel"
          id="mobile"
          required
          pattern="[0-9]{10}"
          maxLength={10}
          value={form.mobile}
          onChange={(e) => setForm({ ...form, mobile: e.target.value.replace(/\D/g, "") })}
          className="w-full px-4 py-3 rounded-xl text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#ff9202] focus:border-transparent transition-all"
          style={{ backgroundColor: "#1a0f52", border: "1px solid #2d1e80" }}
          placeholder="10-digit mobile number"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-1.5">
          Email <span className="text-white/30">(optional)</span>
        </label>
        <input
          type="email"
          id="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full px-4 py-3 rounded-xl text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#ff9202] focus:border-transparent transition-all"
          style={{ backgroundColor: "#1a0f52", border: "1px solid #2d1e80" }}
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-1.5">
          Message <span className="text-white/30">(optional)</span>
        </label>
        <textarea
          id="message"
          rows={3}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full px-4 py-3 rounded-xl text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#ff9202] focus:border-transparent transition-all resize-none"
          style={{ backgroundColor: "#1a0f52", border: "1px solid #2d1e80" }}
          placeholder="Tell us about your goals..."
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full disabled:opacity-50 text-white py-3.5 rounded-xl font-semibold text-lg transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-[#ff9202]/20"
        style={{ backgroundColor: "#ff9202", color: "#10044a" }}
      >
        {status === "loading" ? "Sending..." : "Book a Free Demo Session"}
      </button>

      {status === "success" && (
        <p className="text-green-400 text-sm text-center">Thanks! We&apos;ll get back to you soon.</p>
      )}
      {status === "error" && (
        <p className="text-red-400 text-sm text-center">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}
