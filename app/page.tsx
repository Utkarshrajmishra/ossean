import SessionPoviderWrapper from "@/components/common/session-provider";
import Header from "@/components/landing/header";

export default function Home() {
  return (
    <SessionPoviderWrapper>
    <div className="bg-white  overflow-hidden">
        <Header />
     
    </div>
    </SessionPoviderWrapper>
  );
}
