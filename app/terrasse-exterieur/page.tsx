import { ServicePage, serviceMetadata } from "@/components/ServicePage";

export const metadata = serviceMetadata("terrasse-exterieur");

export default function Page() {
  return <ServicePage slug="terrasse-exterieur" />;
}
