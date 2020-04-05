import Link from "next/link";
import { useState, FC } from "react";
import Layout from "@components/Layout";
import styled from "styled-components";

import dbData from "../db/db.json";

interface TJob {
  index?: number;
  open: boolean;
  title: string;
  company: string;
  url: string;
  country: string;
  tags: string[];
}
// rgba(225, 192, 132)// yellow
// rgb(182, 212, 103)// green

const JobListing: FC<TJob> = (props) => {
  const { open, title, company, url, country, tags, index } = props;
  return (
    <Listing style={{ marginBottom: "0.5em" }}>
      <Link href={url}>
        <a target="_blank">
          {" "}
          {index}. {title} | {company} | {country}
        </a>
      </Link>
      {/* <span>{tags[0]}</span> */}
    </Listing>
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
      {db.map(
        (job: TJob, i: number) =>
          job.open && <JobListing {...job} index={i + 1} key={i} />
      )}
    </Layout>
  );
};

const Listing = styled.div`
  a {
    color: inherit;
    text-decoration: none;
    &:hover {
      color: rgb(234, 140, 98);
      cursor: pointer;
    }
  }
`;

export default IndexPage;
