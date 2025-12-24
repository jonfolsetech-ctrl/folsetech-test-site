"use client";

interface PhoneLinkProps {
  label?: string;
  className?: string;
}

export default function PhoneLink({ label = "Header Phone CTA", className = "font-bold text-cyan-400" }: PhoneLinkProps) {
  const handlePhoneClick = () => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "phone_call", {
        event_category: "Lead",
        event_label: label,
      });
    }
  };

  return (
    <a
      href="tel:2253131914"
      onClick={handlePhoneClick}
      className={className}
    >
      Call 225-313-1914
    </a>
  );
}
