import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BuildingInfrastructure from "./pages/BuildingInfrastructure";
import ITHardwareInfrastructure from "./pages/ITHardwareInfrastructure";
import DigitalDataInfrastructure from "./pages/DigitalDataInfrastructure";
import Sustainability from "./pages/Sustainability";
import LocationAccessibility from "./pages/LocationAccessibility";
import StructuralDesign from "./pages/StructuralDesign";
import PowerRedundancy from "./pages/PowerRedundancy";
import CoolingClimateControl from "./pages/CoolingClimateControl";
import SustainabilityEnergyEfficiency from "./pages/SustainabilityEnergyEfficiency";
import ComplianceCertification from "./pages/ComplianceCertification";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/building-infrastructure" element={<BuildingInfrastructure />} />
          <Route path="/location-accessibility" element={<LocationAccessibility />} />
          <Route path="/structural-design" element={<StructuralDesign />} />
          <Route path="/power-redundancy" element={<PowerRedundancy />} />
          <Route path="/cooling-climate-control" element={<CoolingClimateControl />} />
          <Route path="/sustainability-energy-efficiency" element={<SustainabilityEnergyEfficiency />} />
          <Route path="/compliance-certification" element={<ComplianceCertification />} />
          <Route path="/it-hardware-infrastructure" element={<ITHardwareInfrastructure />} />
          <Route path="/digital-data-infrastructure" element={<DigitalDataInfrastructure />} />
          <Route path="/sustainability" element={<Sustainability />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
