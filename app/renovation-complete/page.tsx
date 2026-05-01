import { ServicePage, serviceMetadata } from "@/components/ServicePage";

export const metadata = serviceMetadata("renovation-complete");

export default function Page() {
  return <ServicePage slug="renovation-complete" />;
}
