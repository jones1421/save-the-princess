"use client";

const helpers = ["Prince Leo", "Buttercup the Bunny", "Pip the Puppy"];

export default function HelperTray() {
  return (
    <aside className="rounded-2xl border-4 border-pink-200 bg-pink-50 p-4">
      <h3 className="text-2xl font-extrabold text-pink-700">Helper Friends</h3>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
        {helpers.map((name) => (
          <button
            key={name}
            type="button"
            className="rounded-2xl border-2 border-pink-300 bg-white p-4 text-left shadow-sm hover:bg-pink-100 transition"
          >
            <div className="h-16 w-16 rounded-full bg-pink-200 flex items-center justify-center text-2xl">🧡</div>
            <p className="mt-3 text-lg font-bold text-pink-700">{name}</p>
          </button>
        ))}
      </div>
    </aside>
  );
}
