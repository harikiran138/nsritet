import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-corporate-background px-4">
      <div className="max-w-lg w-full text-center bg-white dark:bg-gray-900 shadow-xl rounded-2xl p-8 space-y-4">
        <p className="text-sm font-semibold tracking-widest text-corporate-blue uppercase">Page Missing</p>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">We can’t find that page</h1>
        <p className="text-gray-600 dark:text-gray-300">
          The link you followed may be broken or the page may have been removed. Please return home and try again.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 rounded-full bg-corporate-blue text-white font-semibold shadow-md hover:bg-corporate-navy transition"
        >
          Back to homepage
        </Link>
      </div>
    </div>
  );
}
