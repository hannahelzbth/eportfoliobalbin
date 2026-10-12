
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    setSubmitted(false);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      alert("Please complete all fields.");
      return;
    }

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#FFF8EE] px-6 py-24 text-[#25231F]"
    >
      <div className="pointer-events-none absolute -left-20 top-16 h-64 w-64 rounded-full bg-[#D7F36A] opacity-60 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-64 w-64 rounded-full bg-[#FFC6A8] opacity-60 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-12 grid items-end gap-6 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="mb-4 font-mono text-sm font-bold uppercase tracking-[0.3em] text-[#7652D4]">
              04 / Let's connect
            </p>

            <h2 className="text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl md:text-7xl">
              GET IN
              <br />
              <span className="text-[#7652D4]">TOUCH.</span>
            </h2>
          </div>

          <p className="max-w-md border-l-4 border-[#FF916B] pl-5 font-mono text-sm leading-7 text-[#5D554C] md:justify-self-end">
            Have a question, project idea, or opportunity to collaborate?
            Feel free to reach out. I'd love to hear from you!
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-5">
          <div className="flex flex-col gap-5 md:col-span-2">
            <div className="rounded-[2rem] bg-[#D7F36A] p-7 sm:p-8">
              <span className="text-3xl">✳</span>

              <h3 className="mt-5 text-2xl font-black">
                Hannah Elizabeth Balbin
              </h3>

              <p className="mt-3 font-mono text-sm leading-7 text-[#5D554C]">
                BS Information Technology Student
              </p>

              <div className="mt-6 border-t border-[#25231F]/20 pt-5">
                <p className="font-mono text-xs font-bold uppercase tracking-widest">
                  Open to learning & collaboration
                </p>
              </div>
            </div>

            <div className="rounded-[2rem] border-2 border-[#25231F] bg-[#7652D4] p-7 text-white sm:p-8">
              <h3 className="text-xl font-black">Contact Information</h3>

              <div className="mt-5 space-y-5 font-mono text-sm">
                <div>
                  <p className="mb-1 text-xs font-bold uppercase tracking-widest text-[#D7F36A]">
                    Email
                  </p>
                  <p className="break-words text-white/90">
                    Add Hannah's email address
                  </p>
                </div>

                <div>
                  <p className="mb-1 text-xs font-bold uppercase tracking-widest text-[#D7F36A]">
                    GitHub
                  </p>
                  <p className="break-words text-white/90">
                    Add Hannah's GitHub username
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border-2 border-[#25231F] bg-white p-7 shadow-[8px_8px_0px_#D7F36A] sm:p-9 md:col-span-3">
            <h3 className="text-2xl font-black tracking-tight">
              Send Me a Message<span className="text-[#7652D4]">.</span>
            </h3>

            <p className="mb-8 mt-2 font-mono text-sm leading-6 text-[#5D554C]">
              Fill out the form below to get started.
            </p>

            <form onSubmit={handleSubmit} className="font-mono">
              <div className="mb-5">
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-bold"
                >
                  Name
                </label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full rounded-xl border-2 border-[#25231F]/20 bg-[#FFF8EE] px-4 py-3 text-sm outline-none transition placeholder:text-[#9B9286] focus:border-[#7652D4] focus:ring-2 focus:ring-[#7652D4]/15"
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-bold"
                >
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full rounded-xl border-2 border-[#25231F]/20 bg-[#FFF8EE] px-4 py-3 text-sm outline-none transition placeholder:text-[#9B9286] focus:border-[#7652D4] focus:ring-2 focus:ring-[#7652D4]/15"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-bold"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  rows={5}
                  required
                  className="w-full resize-y rounded-xl border-2 border-[#25231F]/20 bg-[#FFF8EE] px-4 py-3 text-sm outline-none transition placeholder:text-[#9B9286] focus:border-[#7652D4] focus:ring-2 focus:ring-[#7652D4]/15"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-between rounded-full bg-[#25231F] px-6 py-4 text-sm font-bold text-white transition duration-200 hover:-translate-y-1 hover:bg-[#7652D4]"
              >
                Send Message
                <span aria-hidden="true" className="text-lg">
                  ↗
                </span>
              </button>

              {submitted && (
                <p
                  role="status"
                  className="mt-4 rounded-xl bg-[#D7F36A] p-4 text-center text-sm font-bold text-[#25231F]"
                >
                  Thank you! The form was submitted successfully.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
