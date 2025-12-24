export default function ServicesGrid() {
  return (
    <section className="px-6 py-16 grid md:grid-cols-2 gap-10">
      <div>
        <h3 className="text-2xl font-semibold">AI Web Design</h3>
        <p className="mt-3 text-slate-300">
          AI-driven layouts, conversion-focused UX, and
          lightning-fast load times engineered to rank first.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-semibold">SQL Optimization</h3>
        <pre className="bg-black p-4 mt-4 rounded text-green-400 text-sm">
{`EXPLAIN ANALYZE
SELECT * FROM leads
WHERE email='client@example.com';`}
        </pre>
        <p className="mt-2 text-slate-400">
          Index tuning, slow query logs, and performance audits.
        </p>
      </div>
    </section>
  );
}
