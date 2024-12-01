import { PatientIcon } from "@/icons/PatientIcon";
import Image from "next/image";
import { Button } from "@mui/material"
import Link from "next/link";
import { ClipboardPlus } from "lucide-react";

export default function Home() {
  return (
    <div className="home-page">
      <nav>
                <Link href="/"><Button className="patient-btn">
                    <ClipboardPlus />docnote</Button></Link>
            </nav>

      <section>
  <h1>docnote AI: Streamline Your Workflow</h1>
  <p>An efficient way to manage patient notes and organize your medical practice. Docnotes easily take notes and keep track of important patient information</p>
  <Link href="/diagnose"><Button className="try-btn" variant="contained" color="primary" target="_blank" href="/">
    Start
  </Button> </Link>
</section>


     
    </div>
  )
}
