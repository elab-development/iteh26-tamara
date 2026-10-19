"use client"
import { mockSubjects } from "@/mock/data";
import DeckBrowser from "../components/DeckBrowser"

export default function Home() {
  const subjects = mockSubjects;
  return (
   <DeckBrowser subjects={subjects} />
  );
}
