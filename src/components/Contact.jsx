
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
      className="bg-white px-6 py-20"
    >
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-4 text-center text-3xl font-bold text-black font-mono">
          Contact Me
        </h2>

        <p className="mb-10 text-center text-black font-mono">
          Feel free to reach out to me using the information below.
        </p>

        <div className="mb-8 rounded-xl border border-black bg-slate-50 p-6 text-center font-mono">
          <p className="text-black">
            Email: Julius.pansoy17@gmail.com
          </p>

          <p className="mt-2 text-black">
            GitHub: github.com/JulyoGit
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-xl border border-black font-mono bg-white p-6 shadow-sm"
        >
          <div className="mb-5">
            <label
              htmlFor="name"
              className="mb-2 block font-medium text-black"
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
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-gray-200 focus:ring-2 focus:ring-gray-500/20"
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="email"
              className="mb-2 block font-medium text-black"
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
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-gray-200 focus:ring-2 focus:ring-gray-500/20"
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="message"
              className="mb-2 block font-medium text-black"
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
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-gray-200 focus:ring-2 focus:ring-gray-500/20"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-black px-6 py-3 font-medium text-white transition hover:bg-white hover:text-black border border-black"
          >
            Send Message
          </button>

          {submitted && (
            <p className="mt-4 text-center font-medium text-green-600">
              Thank you! Your message has been submitted.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;