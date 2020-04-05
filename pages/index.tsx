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

const JobListing: FC<TJob> = (props) => {
  const { open, title, company, url, country, tags, index } = props;
  return (
    <Listing>
      <a href={url} target="_blank">
        <div className="number">{index}.</div>
        <div className="info">
          {title} <br />{" "}
          <span className="sub">
            {company} | {country}
          </span>
        </div>
      </a>
    </Listing>
  );
};

const IndexPage = () => {
  const [db] = useState<TJob[]>(dbData);
  return (
    <Layout title="Hack For Good">
      <a
        style={{ color: "rgb(182, 217, 107)" }}
        href="https://github.com/Wesselvdp/hackforgood"
        target="_blank"
      >
        Contribute
      </a>

      <Intro>
        <h1>
          You're a 👨‍💻 and want to contribute something to the 🌎 while earning a
          💸.
        </h1>
        <p>
          All the jobs below are <Accent>tech jobs</Accent> for companies that
          are trying to make the world a better place. You're a hacker with a
          brilliant mind, <Accent>hack for good</Accent>.
        </p>
      </Intro>
      <List>
        {db.map(
          (job: TJob, i: number) =>
            job.open && <JobListing {...job} index={i + 1} key={i} />
        )}
      </List>
    </Layout>
  );
};

const Listing = styled.li`
  list-style: none;
  margin-bottom: 1em;

  .number {
    display: inline-block;
    padding-right: 0.75em;
  }
  .info {
    display: inline-block;
  }
  .sub {
    color: rgb(182, 217, 107);
    opacity: 0.6;
    font-size: 0.8em;
  }
  a {
    color: inherit;
    display: flex;
    text-decoration: none;
    &:hover {
      color: rgb(234, 140, 98);
      cursor: pointer;
    }
  }
`;

const List = styled.ul`
  padding-left: 0;
`;
const Intro = styled.div`
  max-width: 800px;
`;

const Accent = styled.span`
  color: rgb(234, 140, 98);
`;

export default IndexPage;
