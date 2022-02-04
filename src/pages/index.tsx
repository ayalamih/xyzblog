
import { NextPage } from 'next'
import Layout, { siteTitle } from '../components/layout'
import { Box, Container } from '@mui/material'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { GetStaticProps } from 'next'

import { Typography } from '@mui/material'

import Countdown from '../components/coutdown';

export const getStaticProps: GetStaticProps = async () => {
    const posts = getSortedPostsData()
    return {
        props: {
            posts
        }
    }
}

interface Post {
    id: number;
    date: string;
    title: string;
}
interface IProps {
    posts: Post[];
}

const Home: NextPage<IProps> = ({ posts }) => {
    return (
        <Layout home>
          <Container>
            <Typography className={utilStyles.sectionPopur}>
                Happy New Year
            </Typography>
            <Box>
                <Countdown />
            </Box>
            <Box className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${utilStyles.sectionContainer}`}>
                <Typography className={utilStyles.headingLg} variant='h1'>Blog</Typography>
                <ul className={utilStyles.list}>
                {posts.map(({ id, date, title }) => (
                    <li className={utilStyles.listItem} key={id}>
                        <Link href={`/posts/${id}`}>
                            <a>{title}</a>
                        </Link>
                        <br />
                        <small className={utilStyles.lightText}>
                            <Date dateString={date} />
                        </small>
                    </li>
                ))}
                </ul>
            </Box>
          </Container>
        </Layout>
      )
}

export default Home;

// export default function Home({
//   allPostsData
// }: {
//   allPostsData: {
//     date: string
//     title: string
//     id: string
//   }[]
// }) {
//   return (
//     <Layout home>
//       <Head>
//         <title>Erica Wall</title>
//       </Head>
//       <section className={utilStyles.sectionPopur}>
//         Happy New Year
//       </section>
//       <section>
//         <Countdown />
//       </section>
//       {/* <Link href="/SignIn">
//         <a>SignIn</a>
//       </Link> */}
//       <section className={utilStyles.headingMd}>
//         <p></p>
//         <p>
//           {/* (This is a sample website - you’ll be building a site like this in{' '}
//           <a href="https://nextjs.org/learn">our Next.js tutorial</a>.) */}
//         </p>
//       </section>
//       <section className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${utilStyles.sectionContainer}`}>
//         <h2 className={utilStyles.headingLg}>Blog</h2>
//         <ul className={utilStyles.list}>
//           {allPostsData.map(({ id, date, title }) => (
//             <li className={utilStyles.listItem} key={id}>
//               <Link href={`/posts/${id}`}>
//                 <a>{title}</a>
//               </Link>
//               <br />
//               <small className={utilStyles.lightText}>
//                 <Date dateString={date} />
//               </small>
//             </li>
//           ))}
//         </ul>
//       </section>
//     </Layout>
//   )
// }