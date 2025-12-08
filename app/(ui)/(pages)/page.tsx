import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[linear-gradient(176deg,#3f3f52,#ac3333)] text-white px-4">
      <div className="my-5">
        <Image
          src="/ai-summarize-logo-v2.png"
          alt="AI Summarizer Logo"
          width={140}
          height={140}
          style={{ aspectRatio: 691 / 757 }}
        />
      </div>

      <p className="text-white text-center max-w-md mb-10">
        A simple and practical AI application that quickly summarizes text.
      </p>

      <div className="flex gap-4">
        <Link
          href="/summarize"
          className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition"
        >
          Summarize Text
        </Link>

        <Link
          href="/summaries"
          className="px-6 py-3 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-600 transition"
        >
          View Summaries
        </Link>
      </div>

      <div className="mt-12 text-sm text-white">
        Copyright &copy; {new Date().getFullYear()} Polinity.com / AI Summarizer
      </div>
    </div>
  )
}