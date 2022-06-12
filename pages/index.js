import HomeCategories from '@/Components/HomePage/HomeCategories'
import HomeHeader from '@/Components/HomePage/HomeHeader'
import HomeStatusBar from '@/Components/HomePage/HomeStatusBar'
import Head from 'next/head'
import Layout from '../Components/Layout'
import { GetCategoryList, GetLastFourNews, GetMainPageCategories } from '../Crud'


export default function Home({ categoryList, headerNews, MainPageCategories }) {

  return (
    <Layout categoryList={categoryList} headerNews={headerNews} >
      <HomeStatusBar />
      <HomeHeader headerNews={headerNews} />
      <HomeCategories MainPageCategories={MainPageCategories} />
    </Layout>

  )
}

export const getStaticProps = async () => {
  const categoryList = await GetCategoryList();
  const headerNews = await GetLastFourNews();
  const MainPageCategories = await GetMainPageCategories();

  return {
    props: {
      categoryList,
      headerNews,
      MainPageCategories
    }
  }
}
