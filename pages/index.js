import HomeHeader from '@/Components/HomePage/HomeHeader'
import HomeStatusBar from '@/Components/HomePage/HomeStatusBar'
import Head from 'next/head'
import Layout from '../Components/Layout'
import { GetCategoryList, GetLastFourNews } from '../Crud'


export default function Home({ categoryList, headerNews }) {

  return (
    <Layout categoryList={categoryList}>
      <HomeStatusBar />
      <HomeHeader headerNews={headerNews} />
    </Layout>

  )
}

export const getStaticProps = async () => {
  const categoryList = await GetCategoryList();
  const headerNews = await GetLastFourNews();

  return {
    props: {
      categoryList,
      headerNews
    }
  }
}
