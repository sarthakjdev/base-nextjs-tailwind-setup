import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section className='flex flex-col gap-12'>
        <h1>It is a base setup for nextjs with tailwind CSS web application. Do use it by cloning it from <Link href="https://github.com/sarthakjdev/base-nextjs-tailwind-setup"><a className='text-blue-400 'target="_blank">here</a></Link></h1>
        <div className='flex flex-col gap-10'>
        <h2 className='text-center text-2xl font-extrabold'>Do check out</h2>
         <div className='flex w-full items-center justify-evenly'>
         <Link href="https://twitter.com/sarthakjdev"><a className='text-blue-400'target="_blank">Twitter</a></Link>
          <Link href="https://github.com/sarthakjdev"><a className='text-blue-400'target="_blank">Github</a></Link>
          <Link href="https://www.linkedin.com/in/sarthakjdev"><a className='text-blue-400'target="_blank">Linkedin</a></Link>
         </div>
        </div>
        </section>
      </main>
    </div>
  )
}
