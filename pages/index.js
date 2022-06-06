import Head from 'next/head'
import Layout from '../Components/Layout'
import { GetCategoryList } from '../Crud'


export default function Home({ categoryList }) {

  return (
    <Layout categoryList={categoryList}>
      <div>Deneme 123</div>
    </Layout>

  )
}

export const getStaticProps = async () => {
  const categoryList = await GetCategoryList();


  return {
    props: {
      categoryList
    }
  }
}
