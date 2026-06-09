// @ts-nocheck
import { createFileRoute } from "@tanstack/react-router";
import TermsConditions from "../pages/TermsConditions";

export const Route = createFileRoute("/terms")({
  component: TermsConditions,
});
