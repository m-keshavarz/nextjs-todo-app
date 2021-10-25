import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";

export default function CreatedAt() {
  const router = useRouter();
  const { createdAt } = router.query;

  return (
    <div className="pl-60 mt-20">
      <Head>
        <title>created at</title>
      </Head>
      <p className="text-4xl">created at: {createdAt}</p>

      <p
        className="text-blue-400 cursor-pointer mt-20"
        onClick={() => router.push("/todo")}
      >
        tasks page
      </p>
      <p className='text-blue-400 cursor-pointer' onClick={() => router.back()}>Go back</p>
      <Link href="/">
        <a className="text-blue-400">Back to Home</a>
      </Link>
    </div>
  );
}
