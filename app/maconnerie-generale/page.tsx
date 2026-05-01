import { ServicePage, serviceMetadata } from "@/components/ServicePage";

export const metadata = serviceMetadata("maconnerie-generale");

export default function Page() {
  return <ServicePage slug="maconnerie-generale" />;
}
