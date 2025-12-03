"use client";
import React, { useState, FormEvent } from "react";

const Contact = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [telephoneNumber, setTelephoneNumber] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const phoneNumber = "+252618404215";

  const handleMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validation
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Please fill in all fields.");
      setIsSubmitting(false);
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      setIsSubmitting(false);
      return;
    }

    setError("");

    // Simulate processing delay for better UX
    await new Promise((resolve) => setTimeout(resolve, 500));

    const url =
      `https://wa.me/${phoneNumber.replace(/\D/g, "")}?text=` +
      `Name: ${encodeURIComponent(name)}%0A` +
      `Email: ${encodeURIComponent(email)}%0A` +
      `Message: ${encodeURIComponent(message)}`;

    window.open(url, "_blank")?.focus();
    setIsSubmitting(false);

    // Optional: Clear form after successful submission
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      {/* Enhanced Header Section */}
      <div className="text-center mb-12 sm:mb-16">
        <div className="flex justify-center items-center mb-4 sm:mb-6">
          <div className="inline-flex items-center gap-2 sm:gap-4 bg-blue-50 rounded-full px-4 sm:px-6 py-2 sm:py-3 border border-blue-100">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#007bff] rounded-full animate-pulse"></div>
            <span className="text-[#007bff] uppercase tracking-wider text-xs sm:text-sm font-semibold">
              Kontakt oss
            </span>
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#007bff] rounded-full animate-pulse"></div>
          </div>
        </div>
        <p className="text-gray-600 text-base sm:text-lg mx-auto max-w-xs sm:max-w-sm md:max-w-md leading-relaxed px-2 sm:px-0">
          Det er bare å sende oss en melding, så svarer vi så snart vi har et
          svar.
        </p>
      </div>

      {/* Form Section */}
      <div className="flex justify-center items-center">
        <form onSubmit={handleMessage} className="space-y-6 w-full max-w-2xl">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm sm:text-base">
              {error}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                ditt navn
              </label>
              <input
                id="name"
                type="text"
                placeholder="Abdirahman Kooshin"
                value={name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setName(e.target.value)
                }
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#007bff] focus:border-transparent transition-all duration-300 bg-white hover:border-gray-400 text-sm sm:text-base"
                required
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                din e-postadress
              </label>
              <input
                id="email"
                type="email"
                placeholder="kooshin@example.com"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#007bff] focus:border-transparent transition-all duration-300 bg-white hover:border-gray-400 text-sm sm:text-base"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <label
              htmlFor="number"
              className="block text-sm font-medium text-gray-700"
            >
              ditt telefonnummer
            </label>
            <input
              id="phone number"
              type="tel"
              placeholder="48460886"
              value={telephoneNumber}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setTelephoneNumber(e.target.value)
              }
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#007bff] focus:border-transparent transition-all duration-300 bg-white hover:border-gray-400 text-sm sm:text-base"
              required
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Your Message
            </label>
            <textarea
              id="message"
              rows={10}
              placeholder="Tell me about your project, timeline, and any specific requirements..."
              value={message}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                setMessage(e.target.value)
              }
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#007bff] focus:border-transparent transition-all duration-300 bg-white hover:border-gray-400 resize-none text-sm sm:text-base"
              required
            ></textarea>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto px-4 sm:px-8 md:px-12 lg:px-62 py-3 sm:py-4 bg-[#007bff] text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#007bff] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2 text-sm sm:text-base "
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span className="whitespace-nowrap">Opening WhatsApp...</span>
                </>
              ) : (
                <>
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893-.001-3.189-1.262-6.187-3.55-8.444" />
                  </svg>
                  <span className="whitespace-nowrap">Send via WhatsApp</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
