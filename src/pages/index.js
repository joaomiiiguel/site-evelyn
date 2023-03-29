import Cover from '@/component/HomePage/Cover'
import AboutUs from '@/component/HomePage/About'
import Layout from '@/component/Layout'
import Service from '@/component/HomePage/Service'
import Dicas from '@/component/HomePage/Dicas'
import PostInsta from '@/component/HomePage/PostInsta'

export default function Home() {
  return (
    <Layout title={'Evelyn Pinheiro'}>
      <Cover />
      <AboutUs />
      <Service/>
      <Dicas/>
      <PostInsta/>
    </Layout>
  )
}
