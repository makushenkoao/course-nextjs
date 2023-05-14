import Head from "next/head";
import Button from "@/components/Button/Button";
import Ptag from "@/components/Ptag/Ptag";

export default function Home() {
  return (
    <>
      <Head>
        <title>Example</title>
      </Head>
      <Button appearance="primary" arrow='right'>Example</Button>
      <Button appearance="ghost">Example</Button>
        <Ptag size='s'>small</Ptag>
        <Ptag size='m'>medium</Ptag>
        <Ptag size='l'>large</Ptag>
    </>
  );
}
