
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

    setFormData({
      ...formData,
      [name]: value,
    });

    setSubmitted(false);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
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
      className="bg-[#F5EFE6] px-6 py-20"
    >
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-4 text-center font-mono text-3xl font-bold text-[#3E2B23]">
          Contact Me
        </h2>

        <p className="mb-10 text-center font-mono text-[#795548]">
          Feel free to reach out to me using the information below.
        </p>

        <div className="mb-8 rounded-xl border border-[#D8C4AD] bg-[#E8D8C4] p-6 text-center font-mono">
          <p className="text-[#5C4033]">
            Email: Julius.pansoy17@gmail.com
          </p>

          <p className="mt-2 text-[#5C4033]">
            GitHub: github.com/JulyoGit
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-xl border border-[#D8C4AD] bg-[#FFFDF9] p-6 font-mono shadow-sm"
        >
          <div className="mb-5">
            <label
              htmlFor="name"
              className="mb-2 block font-medium text-[#3E2B23]"
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
              className="w-full rounded-lg border border-[#C5A582] bg-[#F5EFE6] px-4 py-3 text-[#3E2B23] outline-none transition placeholder:text-[#9A806B] focus:border-[#795548] focus:ring-2 focus:ring-[#795548]/20"
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="email"
              className="mb-2 block font-medium text-[#3E2B23]"
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
              className="w-full rounded-lg border border-[#C5A582] bg-[#F5EFE6] px-4 py-3 text-[#3E2B23] outline-none transition placeholder:text-[#9A806B] focus:border-[#795548] focus:ring-2 focus:ring-[#795548]/20"
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="message"
              className="mb-2 block font-medium text-[#3E2B23]"
            >
              Message
            </label>

            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message"
              rows="5"
              required
              className="w-full rounded-lg border border-[#C5A582] bg-[#F5EFE6] px-4 py-3 text-[#3E2B23] outline-none transition placeholder:text-[#9A806B] focus:border-[#795548] focus:ring-2 focus:ring-[#795548]/20"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg border border-[#5C4033] bg-[#5C4033] px-6 py-3 font-medium text-white transition hover:-translate-y-1 hover:bg-[#795548]"
          >
            Send Message
          </button>

          {submitted && (
            <p className="mt-4 text-center font-medium text-[#5C6B45]">
              Thank you! Your message has been submitted.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
