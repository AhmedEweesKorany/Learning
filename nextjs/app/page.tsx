import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (

<div>
<h1>Hello From index page </h1>
<Link href="/dashboard" className="bg-red-500 p-4 mt-20 block w-fit mx-auto">go to dashboard</Link>
</div>
  );
}
