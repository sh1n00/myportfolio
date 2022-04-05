import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { Box, chakra } from "@chakra-ui/react";

import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import utilStyle from "../styles/utils.module.css";
import { db } from "../Firebase/firebase";

const Home: NextPage = () => {
  useEffect(() => {
    // Add a new document in collection "cities"
    db.collection("users").add({
      name: "namekosiru",
      age: 100,
      comment: "Big Fan",
    });
  }, []);
  return (
    <Layout>
      <Box>aaa</Box>
      <section className={utilStyle.headingMd}>
        <p>私はエンジニア</p>
      </section>
      <section>
        <h2>エンジニアブログ</h2>
        <div className={styles.grid}>
          <article>
            <Link href="/">
              <Image
                src="/images/thumbnail01.jpg"
                width={400}
                height={400}
                alt=""
                className={styles.thumbnailImage}
              />
            </Link>
            <br></br>
            <Link href="/">
              <a className={utilStyle.boldText}>使い分け.com</a>
            </Link>
            <br />
            <small className={utilStyle.lightText}>2022 04 05</small>
          </article>
          <article>
            <Link href="/">
              <Image
                src="/images/thumbnail01.jpg"
                width={400}
                height={400}
                alt=""
                className={styles.thumbnailImage}
              />
            </Link>
            <br></br>
            <Link href="/">
              <a className={utilStyle.boldText}>使い分け.com</a>
            </Link>
            <br />
            <small className={utilStyle.lightText}>2022 04 05</small>
          </article>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
