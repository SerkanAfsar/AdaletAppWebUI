import Head from 'next/head'
import Image from 'next/image'
import { signIn } from 'next-auth/react'


export default function Home() {
  return (
    <div className='container'>
      <h1>Deneme 123</h1>
      <button onClick={() => signIn()}>Giriş</button>
    </div>
  )
}
