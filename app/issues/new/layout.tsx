import { Metadata } from "next";

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

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
