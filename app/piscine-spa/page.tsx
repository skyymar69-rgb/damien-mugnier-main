import { ServicePage, serviceMetadata } from "@/components/ServicePage";

export const metadata = serviceMetadata("piscine-spa");

export default function Page() {
  return <ServicePage slug="piscine-spa" />;
}
