import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import DataCenter from "./pages/DataCenter";
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
import NetworkArchitectureConnectivity from "./pages/NetworkArchitectureConnectivity";
import ServerStorageSolutions from "./pages/ServerStorageSolutions";
import CloudIntegrationHybridSystems from "./pages/CloudIntegrationHybridSystems";
import CybersecurityMeasures from "./pages/CybersecurityMeasures";
import MultiAvailabilityDisasterRecovery from "./pages/MultiAvailabilityDisasterRecovery";
import EquipmentMaintenanceProtocols from "./pages/EquipmentMaintenanceProtocols";
import DataStorageManagement from "./pages/DataStorageManagement";
import DatabaseOptimizationPerformance from "./pages/DatabaseOptimizationPerformance";
import EncryptionComplianceSolutions from "./pages/EncryptionComplianceSolutions";
import APIInteroperabilitySupport from "./pages/APIInteroperabilitySupport";
import DataConnectivityInterconnectivity from "./pages/DataConnectivityInterconnectivity";
import NetZeroCommitment from "./pages/NetZeroCommitment";
import CarbonFootprintReduction from "./pages/CarbonFootprintReduction";
import SolarEnergyUtilization from "./pages/SolarEnergyUtilization";
import AdvancedCoolingWaterRecycling from "./pages/AdvancedCoolingWaterRecycling";
import SustainableInfrastructureCompliance from "./pages/SustainableInfrastructureCompliance";
import Contact from "./pages/Contact";
import BusinessRevenueModel from "./pages/BusinessRevenueModel";
import MaintenanceFutureInnovations from "./pages/MaintenanceFutureInnovations";
import ExpansionPlansNewTechnologies from "./pages/ExpansionPlansNewTechnologies";
import EmergingTrendsDataCenter from "./pages/EmergingTrendsDataCenter";
import AIEdgeComputingIntegration from "./pages/AIEdgeComputingIntegration";
import AboutUs from "./pages/AboutUs";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ColocationServices from "./pages/ColocationServices";
import CloudOperations from "./pages/CloudOperations";
import HostingServices from "./pages/HostingServices";
import ManagedSolutions from "./pages/ManagedSolutions";
import InformationServices from "./pages/InformationServices";

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
          <Route path="/data-center" element={<DataCenter />} />
          <Route path="/building-infrastructure" element={<BuildingInfrastructure />} />
          <Route path="/location-accessibility" element={<LocationAccessibility />} />
          <Route path="/structural-design" element={<StructuralDesign />} />
          <Route path="/power-redundancy" element={<PowerRedundancy />} />
          <Route path="/cooling-climate-control" element={<CoolingClimateControl />} />
          <Route path="/sustainability-energy-efficiency" element={<SustainabilityEnergyEfficiency />} />
          <Route path="/compliance-certification" element={<ComplianceCertification />} />
          <Route path="/it-hardware-infrastructure" element={<ITHardwareInfrastructure />} />
          <Route path="/network-architecture-connectivity" element={<NetworkArchitectureConnectivity />} />
          <Route path="/server-storage-solutions" element={<ServerStorageSolutions />} />
          <Route path="/cloud-integration-hybrid-systems" element={<CloudIntegrationHybridSystems />} />
          <Route path="/cybersecurity-measures" element={<CybersecurityMeasures />} />
          <Route path="/multi-availability-disaster-recovery" element={<MultiAvailabilityDisasterRecovery />} />
          <Route path="/equipment-maintenance-protocols" element={<EquipmentMaintenanceProtocols />} />
          <Route path="/digital-data-infrastructure" element={<DigitalDataInfrastructure />} />
          <Route path="/data-storage-management" element={<DataStorageManagement />} />
          <Route path="/database-optimization-performance" element={<DatabaseOptimizationPerformance />} />
          <Route path="/encryption-compliance-solutions" element={<EncryptionComplianceSolutions />} />
          <Route path="/api-interoperability-support" element={<APIInteroperabilitySupport />} />
          <Route path="/data-connectivity-interconnectivity" element={<DataConnectivityInterconnectivity />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/net-zero-commitment" element={<NetZeroCommitment />} />
          <Route path="/carbon-footprint-reduction" element={<CarbonFootprintReduction />} />
          <Route path="/solar-energy-utilization" element={<SolarEnergyUtilization />} />
          <Route path="/advanced-cooling-water-recycling" element={<AdvancedCoolingWaterRecycling />} />
          <Route path="/sustainable-infrastructure-compliance" element={<SustainableInfrastructureCompliance />} />
          <Route path="/business-revenue-model" element={<BusinessRevenueModel />} />
          <Route path="/maintenance-future-innovations" element={<MaintenanceFutureInnovations />} />
          <Route path="/expansion-plans-new-technologies" element={<ExpansionPlansNewTechnologies />} />
          <Route path="/emerging-trends-data-center-infrastructure" element={<EmergingTrendsDataCenter />} />
          <Route path="/ai-edge-computing-integration" element={<AIEdgeComputingIntegration />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/colocation-services" element={<ColocationServices />} />
          <Route path="/cloud-operations" element={<CloudOperations />} />
          <Route path="/hosting-services" element={<HostingServices />} />
          <Route path="/managed-solutions" element={<ManagedSolutions />} />
          <Route path="/information-services" element={<InformationServices />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
