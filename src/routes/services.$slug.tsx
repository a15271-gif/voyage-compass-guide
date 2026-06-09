// @ts-nocheck
import { createFileRoute } from "@tanstack/react-router";
import ServiceDetail from "../pages/ServiceDetail";

export const Route = createFileRoute("/services/$slug")({
  component: ServiceDetail,
});
