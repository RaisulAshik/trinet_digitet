import Head from 'next/head';
import Layout from '../components/layout';
import Banner from '../components/banner';
import AboutUs from '../components/about';
import ServicesSlider from '../components/ServicesSlider';
import Faq from '../components/faq';
import Review from '../components/review';
import Award from '../components/award';
import Blog from '../components/blog';
import CallInAction from '../components/callInAction';
import CallAction from '../components/callAction';

// import styles from '../styles/Home.module.css';
import { homeApi } from '../lib/api/homeApi';
export default function Home(data) {

  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="A Results-Driven Marketing Agency Designed To Provide You Sustainable Growth Through Innovative Strategies, Creative Concepts, And Comprehensive Solutions." />
        <meta name="keywords" content="digital marketing services" />
      </Head>

      <Layout>
        {/* <!-- Hero Banner --> */}
        <Banner data={data.data[0]} />

        <CallAction />

        {/* <!-- About --> */}
        <AboutUs aboutData={data.aboutData[0]} />

        {/* <!-- Services --> */}
        {/* <Service serviceListData={data.serviceListData}/> */}
        <ServicesSlider serviceListData={data.serviceListData} />

        {/* <!-- Faq Accordion --> */}
        <Faq faqData={data.faq} />

        {/* <!-- Call to Action --> */}
        <CallInAction />

        {/* <!-- Review --> */}
        <Review />

        {/* <!-- Blog --> */}
        <Blog allBlogs={data.allBlogs} />

        {/* <!-- Awards Certifications --> */}
        <Award />

        {/* <!-- Call to Action --> */}
        {/* <CallInAction /> */}

      </Layout>
    </div>
  )
}

export async function getStaticProps() {
  const data = await homeApi.banner().then(res =>
    res.data
  );
  const aboutData = await homeApi.about().then(res =>
    res.data
  );
  const serviceListData = await homeApi.service().then(res =>
    res.data
  );
  const faq = await homeApi.faq().then(res =>
    res.data
  );
  const allBlogs = await homeApi.allBlogs().then(res => res.data);
  return {
    props: {
      data,
      aboutData,
      serviceListData,
      faq,
      allBlogs,
    }
    // revalidate: 10,
  };
}

