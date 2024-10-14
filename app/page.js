import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center min-h-[100vh]">
      <Image
        className="dark:invert"
        src="/logos/EDGE logo Black no background.png"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />
      <div className="flex flex-col gap-8 p-4 w-[600px] max-w-[100%] min-h-[50vh] border-[1px] rounded-lg border-[var(--foreground)]">
        <div>
          Email
          <input type="email"></input>
        </div>
        <div>
          Password
          <input type="password"></input>
        </div>
      </div>
    </main>
  );
}
