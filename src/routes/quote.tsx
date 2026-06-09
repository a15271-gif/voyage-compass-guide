// @ts-nocheck
import { createFileRoute } from "@tanstack/react-router";
import Quote from "../pages/Quote";

export const Route = createFileRoute("/quote")({
  component: Quote,
});
