import Link from "next/link";

export default function Home() {
  return (
    <div className="home min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-semibold mb-4 text-white">
        Welcome to TheShop!
      </h1>
      <p className="text-lg text-white mb-8">
        Your one-stop online store for all your shopping needs.
      </p>
      <Link href="/products">
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
          Explore Now
        </button>
      </Link>
    </div>
  );
}
