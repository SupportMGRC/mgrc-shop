import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ReportCard from "@/components/ReportCard";
import CtaBand from "@/components/home/CtaBand";
import { sampleReports } from "@/lib/reports";

export const metadata: Metadata = {
  title: "Sample Reports | MGRC Shop",
  description: "See what an MGRC genetic test report looks like before you order.",
};

export default function SampleReportsPage() {
  return (
    <>
      <PageHeader
        title="Sample Reports"
        intro="See what your report will look like before you order. These are selected pages from real report layouts with example results, marked “Sample Report”."
      />

      <section className="py-20">
        <div className="mx-auto max-w-5xl space-y-8 px-4">
          {sampleReports.map((report) => (
            <ReportCard key={report.id} report={report} />
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
