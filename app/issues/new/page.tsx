"use client";

import { Metadata } from "next";
import dynamic from "next/dynamic";
import IssueFormSkeleton from "../_components/IssueFormSkeleton";

const IssueForm = dynamic(() => import("@/app/issues/_components/IssueForm"), {
  ssr: false,
  loading: () => <IssueFormSkeleton />,
});

const CreateIssuePage = () => {
  return <IssueForm />;
};

export default CreateIssuePage;

export const metadata: Metadata = {
  title: "Issue Tracker - Create New Issue",
  description: "Create an issue",
  openGraph: {
    title: "Issue Tracker - Create New Issue",
    description: "Create an issue",
  },
  twitter: {
    title: "Issue Tracker - Create New Issue",
    description: "Create an issue",
  },
};
