import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import EditIssue from "./EditIssue";

interface Props {
  params: Promise<{ id: string }>;
}

const EditIssuePage = async ({ params }: Props) => {
  const { id } = await params;

  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(id) },
  });

  if (!issue) notFound();

  return <EditIssue issue={issue} />;
};

export default EditIssuePage;

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(id) },
  });

  return {
    title: issue?.title ? `Edit Issue: ${issue.title}` : "Edit Issue",
    description: "Edit issue" + issue?.id,
    openGraph: {
      title: issue?.title ? `Edit Issue: ${issue.title}` : "Edit Issue",
      description: "Edit issue" + issue?.id,
    },
    twitter: {
      card: "summary_large_image",
      title: issue?.title ? `Edit Issue: ${issue.title}` : "Edit Issue",
      description: "Edit issue" + issue?.id,
    },
  };
}
