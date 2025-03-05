import { Button, Card, Flex, Heading, Text } from "@radix-ui/themes";
import Link from "next/link";
import { FiPlusCircle } from "react-icons/fi";

const IssueEmptyState = () => {
  return (
    <Card className="w-full">
      <Flex direction="column" align="center" gap="5" py="9">
        <div className="rounded-full bg-gray-50 p-6">
          <FiPlusCircle className="h-12 w-12 text-gray-400" />
        </div>
        <Heading size="6" className="font-semibold text-gray-900">
          No issues found
        </Heading>
        <Text size="2" className="max-w-sm text-center text-gray-500">
          Get started by creating your first issue. Track bugs, manage tasks,
          and organize your work efficiently.
        </Text>
        <Link href="/issues/new">
          <Button size="3" className="bg-blue-600 hover:bg-blue-700">
            <FiPlusCircle />
            Create Your First Issue
          </Button>
        </Link>
      </Flex>
    </Card>
  );
};

export default IssueEmptyState;
