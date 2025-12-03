"use client";
import React, { useState, FormEvent } from "react";

const Contact = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [telephoneNumber, setTelephoneNumber] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const phoneNumber = "+252618404215";

  const handleMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSuccess(false);

    // Validation
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Vennligst fyll ut alle felt.");
      setIsSubmitting(false);
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Vennligst skriv en gyldig e-postadresse.");
      setIsSubmitting(false);
      return;
    }

    if (telephoneNumber && !/^[\d\s+()-]+$/.test(telephoneNumber)) {
      setError("Vennligst skriv et gyldig telefonnummer.");
      setIsSubmitting(false);
      return;
    }

    setError("");

    // Simulate processing delay for better UX
    await new Promise((resolve) => setTimeout(resolve, 800));

    const url =
      `https://wa.me/${phoneNumber.replace(/\D/g, "")}?text=` +
      `👤 *Navn:* ${encodeURIComponent(name)}%0A%0A` +
      `📧 *E-post:* ${encodeURIComponent(email)}%0A%0A` +
      (telephoneNumber
        ? `📱 *Telefon:* ${encodeURIComponent(telephoneNumber)}%0A%0A`
        : "") +
      `💬 *Melding:* ${encodeURIComponent(message)}`;

    // Open WhatsApp in new tab
    const newWindow = window.open(url, "_blank");

    if (newWindow) {
      setIsSuccess(true);
      newWindow.focus();

      // Optional: Clear form after successful submission
      setName("");
      setEmail("");
      setTelephoneNumber("");
      setMessage("");

      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }

    setIsSubmitting(false);
  };

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      {/* Header Section */}
      <div className="text-center mb-12 sm:mb-16">
        <div className="flex justify-center items-center mb-6">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-50 to-green-50 rounded-full px-6 py-3 border border-blue-100 shadow-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-green-600 uppercase tracking-wider text-sm font-semibold">
              Kontakt oss via WhatsApp
            </span>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          La oss snakke sammen
        </h1>

        <p className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
          Send oss en melding på WhatsApp, og vi svarer så fort vi kan. Vi er
          her for å hjelpe!
        </p>
      </div>

      {/* Form Section */}
      <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 border border-gray-100">
        {error && (
          <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-lg">
            <div className="flex items-center">
              <svg
                className="w-5 h-5 text-red-500 mr-3"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-red-800 font-medium">{error}</span>
            </div>
          </div>
        )}

        {isSuccess && (
          <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 rounded-lg">
            <div className="flex items-center">
              <svg
                className="w-5 h-5 text-green-500 mr-3"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <span className="text-green-800 font-medium">
                  WhatsApp åpnes nå!
                </span>
                <p className="text-green-700 text-sm mt-1">
                  Vinduet åpnes automatisk. Hvis det ikke åpnes, sjekk
                  popup-blokkeringen.
                </p>
              </div>
            </div>
          </div>
        )}

        <form onSubmit={handleMessage} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="flex items-center text-sm font-semibold text-gray-700"
              >
                <svg
                  className="w-4 h-4 mr-2 text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
                Ditt navn
                <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                id="name"
                type="text"
                placeholder="F.eks. Abdirahman Kooshin"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-3 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 bg-white hover:border-gray-400 text-base placeholder-gray-400"
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="flex items-center text-sm font-semibold text-gray-700"
              >
                <svg
                  className="w-4 h-4 mr-2 text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Din e-postadresse
                <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="kooshin@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-3 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 bg-white hover:border-gray-400 text-base placeholder-gray-400"
                required
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="telephone"
              className="flex items-center text-sm font-semibold text-gray-700"
            >
              <svg
                className="w-4 h-4 mr-2 text-blue-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Ditt telefonnummer (valgfritt)
            </label>
            <input
              id="telephone"
              type="tel"
              placeholder="F.eks. 48 46 08 86"
              value={telephoneNumber}
              onChange={(e) => setTelephoneNumber(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-3 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 bg-white hover:border-gray-400 text-base placeholder-gray-400"
              disabled={isSubmitting}
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="message"
              className="flex items-center text-sm font-semibold text-gray-700"
            >
              <svg
                className="w-4 h-4 mr-2 text-blue-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                  clipRule="evenodd"
                />
              </svg>
              Din melding
              <span className="text-red-500 ml-1">*</span>
            </label>
            <textarea
              id="message"
              rows={6}
              placeholder="Fortell oss om ditt prosjekt, tidsramme, og eventuelle spesifikke ønsker..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-3 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 bg-white hover:border-gray-400 resize-none text-base placeholder-gray-400"
              required
              disabled={isSubmitting}
            ></textarea>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-offset-2 ${
                isSubmitting
                  ? "bg-green-600 cursor-not-allowed"
                  : "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 focus:ring-green-200"
              } text-white shadow-lg hover:shadow-xl`}
            >
              {isSubmitting ? (
                <>
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Åpner WhatsApp...</span>
                </>
              ) : (
                <>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893-.001-3.189-1.262-6.187-3.55-8.444" />
                  </svg>
                  <span>Send på WhatsApp</span>
                </>
              )}
            </button>

            <div className="mt-4 text-center">
              <p className="text-gray-500 text-sm flex items-center justify-center">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
                Vi svarer vanligvis innen 24 timer
              </p>
            </div>
          </div>
        </form>
      </div>

      {/* WhatsApp Info Card */}
      <div className="mt-8 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 border border-green-100">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="flex-shrink-0">
            <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893-.001-3.189-1.262-6.187-3.55-8.444" />
              </svg>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">
              Direkte kontakt på WhatsApp
            </h3>
            <p className="text-gray-600 text-sm">
              Meldingen din sendes direkte til vår WhatsApp. Vi foretrekker
              denne metoden for raskere og mer personlig kommunikasjon.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
