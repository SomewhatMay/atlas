import BusinessDetails from "@/components/business-details/business-details";
import Dashboard from "@/components/businesses/businesses";

export default function Home() {
  return (
    <div className="">
      <main className="">
        {/* <BusinessDetails visible image="" name="" type="" address="" /> */}
        <Dashboard />
      </main>
      <footer className=""></footer>
    </div>
  );
}
