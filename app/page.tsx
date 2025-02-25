import Pagination from "./components/Pagination";

interface Props {
  searchParams: Promise<{ page: string }>;
}

export default async function Home(params: Props) {
  const searchParams = await params.searchParams;

  return (
    <Pagination
      itemCount={100}
      pageSize={10}
      currentPage={parseInt(searchParams.page)}
    />
  );
}
