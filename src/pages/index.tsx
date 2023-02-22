import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Link from 'next/link'
import UploadImg from '../../components/UploadImg'
import NavBar from 'components/Navbar'
import MainLayaout from 'components/layaouts/MainLayout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <MainLayaout>

      <h1>Home Page</h1>


      
    </MainLayaout>
  )
}
