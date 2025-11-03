import Link from "next/link";

export default function HomePage() {
  return (
    <div>
        <Link href="/about">Learn more about us</Link>
      <h1>Welcome to My Portfolio</h1>
      <p>This is the home page content.</p>
    </div>
  );
}
