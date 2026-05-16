import Link from 'next/link';

export default function IntroPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-lavenderMist to-skyCandy p-6">
      <section className="w-full max-w-2xl rounded-3xl bg-white/80 p-8 text-center shadow-xl">
        <h1 className="mb-4 text-4xl font-extrabold text-fuchsia-700">Story Intro (Phase 2)</h1>
        <p className="mb-8 text-lg text-fuchsia-900">
          Welcome to the intro page! In Phase 2, this will become a narrated cutscene.
        </p>
        <Link
          href="/"
          className="inline-flex rounded-full bg-fuchsia-500 px-6 py-3 text-lg font-bold text-white transition hover:bg-fuchsia-600"
        >
          Back to Title
        </Link>
      </section>
    </main>
  );
}
