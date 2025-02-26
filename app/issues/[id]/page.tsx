import prisma from "@/prisma/client";
import { Box, Flex, Grid } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import AssigneeSelect from "./AssigneeSelect";
import DeleteIssueButton from "./DeleteIssueButton";
import EditIssueButton from "./EditIssueButton";
import IssueDetails from "./IssueDetails";
import { getServerSession } from "next-auth";
import authOptions from "@/app/auth/authOptions";
import { cache } from "react";

interface Props {
  params: Promise<{ id: string }>;
}

const fetchUser = cache((issueId: number) =>
  prisma.issue.findUnique({
    where: { id: issueId },
  }),
);

const IssueDetailPage = async (props: Props) => {
  const session = await getServerSession(authOptions);
  const { id } = await props.params;

  const issue = await fetchUser(parseInt(id));

  if (!issue) {
    notFound();
  }

  return (
    <Grid columns={{ initial: "1", sm: "5" }} gap="5">
      <Box className="md:col-span-4">
        <IssueDetails issue={issue} />
      </Box>
      {session && (
        <Box>
          <Flex direction="column" gap="4">
            <AssigneeSelect issue={issue} />
            <EditIssueButton issueId={issue.id} />
            <DeleteIssueButton issueId={issue.id} />
          </Flex>
        </Box>
      )}
    </Grid>
  );
};

export default IssueDetailPage;

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const issue = await fetchUser(parseInt(id));

  return {
    title: issue?.title,
    description: "Details of issue" + issue?.id,
    openGraph: {
      title: issue?.title,
      description: "Details of issue " + issue?.id,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: issue?.title,
      description: "Details of issue " + issue?.id,
    },
  };
}
