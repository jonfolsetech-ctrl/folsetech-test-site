interface GoogleMapEmbedProps {
  city: string;
  query: string;
}

export default function GoogleMapEmbed({ city, query }: GoogleMapEmbedProps) {
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-semibold mb-4">
        Serving {city}, Louisiana
      </h2>

      <div className="aspect-video w-full rounded-lg overflow-hidden border">
        <iframe
          title={`Google Map - ${city}`}
          src={`https://www.google.com/maps?q=${encodeURIComponent(
            query
          )}&output=embed`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full border-0"
        />
      </div>
    </section>
  );
}
