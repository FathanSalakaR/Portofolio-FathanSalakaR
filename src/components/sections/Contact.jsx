import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle2 } from "lucide-react";
import { Github, Linkedin } from "@/components/SocialIcons";
import SectionHeading from "@/components/ui/SectionHeading";
import { profile } from "@/data/portfolioData";
import { fadeUp, staggerContainer } from "@/lib/utils";

export default function Contact() {
  const [status, setStatus] = useState("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 2500);
    }, 1200);
  };

  const contactLinks = [
    { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: Github, label: "GitHub", value: "@FathanSalakaR", href: profile.github },
    { icon: Linkedin, label: "LinkedIn", value: "Fathan Salaka R", href: profile.linkedin },
  ];

  return (
    <section id="contact" className="section-padding relative">
      <div className="section-container">
        <SectionHeading
          eyebrow="Let's connect"
          title="Contact Me"
          description="Punya project, ide riset AI/IoT, pertanyaan, atau tawaran kolaborasi? Silakan kirimkan pesan di bawah ini."
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-16">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer(0.12)}
            className="flex flex-col gap-4 lg:col-span-2"
          >
            {contactLinks.map(({ icon: Icon, label, value, href }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                variants={fadeUp}
                whileHover={{ y: -4, x: 2 }}
                className="rounded-2xl border border-sky-100 bg-white p-5 shadow-sm transition-all duration-300 hover:border-sky-300 hover:shadow-md hover:shadow-sky-100/60 flex items-center gap-4"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-50 border border-sky-100 text-sky-600">
                  <Icon size={18} />
                </span>
                <span>
                  <span className="block text-xs font-semibold text-slate-400">{label}</span>
                  <span className="block text-sm font-bold text-slate-900">{value}</span>
                </span>
              </motion.a>
            ))}
          </motion.div>

          <motion.form
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer(0.1)}
            onSubmit={handleSubmit}
            className="rounded-2xl border border-sky-100 bg-white p-6 sm:p-8 lg:col-span-3 shadow-sm flex flex-col gap-5"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <motion.div variants={fadeUp} className="relative">
                <label
                  htmlFor="visitor-name"
                  className="mb-2 block text-xs font-bold text-slate-700"
                >
                  Name
                </label>
                <input
                  id="visitor-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Nama lengkap kamu"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:bg-white focus:outline-none transition-colors"
                />
              </motion.div>

              <motion.div variants={fadeUp} className="relative">
                <label
                  htmlFor="visitor-email"
                  className="mb-2 block text-xs font-bold text-slate-700"
                >
                  Email
                </label>
                <input
                  id="visitor-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="email@contoh.com"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:bg-white focus:outline-none transition-colors"
                />
              </motion.div>
            </div>

            <motion.div variants={fadeUp}>
              <label
                htmlFor="visitor-message"
                className="mb-2 block text-xs font-bold text-slate-700"
              >
                Message
              </label>
              <textarea
                id="visitor-message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tulis pesan atau tawaran kolaborasi di sini..."
                className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:bg-white focus:outline-none transition-colors"
              />
            </motion.div>

            <motion.button
              variants={fadeUp}
              type="submit"
              disabled={status !== "idle"}
              className="btn-primary mt-2 self-start cursor-pointer"
            >
              {status === "loading" ? (
                <span>Mengirim...</span>
              ) : status === "success" ? (
                <>
                  <CheckCircle2 size={16} />
                  <span>Terkirim!</span>
                </>
              ) : (
                <>
                  <Send size={16} />
                  <span>Kirim Pesan</span>
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
