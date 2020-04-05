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
    <div style={{ marginBottom: "0.5em" }}>
      <Link href={url}>
        <Anchor target="_blank">
          {" "}
          {index}. {title} | {company} | {country}
        </Anchor>
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
      {db.map(
        (job: TJob, i: number) =>
          job.open && <JobListing {...job} index={i + 1} key={i} />
      )}
    </Layout>
  );
};

const Anchor = styled.a`
  text-decoration: none;

  &:hover {
    color: rgb(234, 140, 98);
    cursor: pointer;
  }
`;

export default IndexPage;
