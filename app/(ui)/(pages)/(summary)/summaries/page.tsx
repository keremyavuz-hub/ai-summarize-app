import { SummaryRepository } from "@/app/(backend)/repository/summary.repository";
import ErrorBoundary from "@/app/(ui)/components/error-boundary";
import SummaryList from "@/app/(ui)/components/summary/summary-list";

export default async function SummariesPage(props: { searchParams: Promise<any> }) {
  const params = await props.searchParams;
  const page = Number(params.page ?? 1);
  const pageSize = 10;

  const { items, totalPages } = await SummaryRepository.list(page, pageSize);

  if (items.length === 0) {
    return (
      <div className="summaries h-full">
        <h1>Summaries</h1>
        <p>No summaries found</p>
      </div>
    )
  }

  return (
    <ErrorBoundary>
      <div className="summaries">
        <h1>Summaries</h1>
        <SummaryList datas={items} page={page} totalPages={totalPages} />
      </div>
    </ErrorBoundary>
  )
}