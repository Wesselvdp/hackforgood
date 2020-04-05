import Link from "next/link";
import { useState, FC } from "react";
import Layout from "@components/Layout";

import dbData from "../db/db.json";

interface TJob {
  open: boolean;
  title: string;
  company: string;
  url: string;
  country: string;
  tags: string[];
}

const JobListing: FC<TJob> = (props) => {
  const { open, title, company, url, country, tags } = props;
  return (
    <div style={{ color: "blue" }}>
      <Link href={url}>
        <a>
          {" "}
          {title} - {company} | {country}
        </a>
      </Link>
      {/* <span>{tags[0]}</span> */}
    </div>
  );
};

const IndexPage = () => {
  const [db] = useState<TJob[]>(dbData);
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>
        You're a 👨‍💻 and want to contribute something to the 🌎 while earning a
        💸.
      </h1>
      {db.map((job) => job.open && <JobListing {...job} />)}
    </Layout>
  );
};

export default IndexPage;
