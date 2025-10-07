import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import ServicesPage from "./pages/ServicesPage";
import GestionPublica from "./pages/GestionPublica";
import ComunicacionGobiernos from "./pages/ComunicacionGobiernos";
import ComunicacionPoliticaCampanas from "./pages/ComunicacionPoliticaCampanas";
import EmpresasPage from "./pages/EmpresasPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/servicios" element={<ServicesPage />} />
            <Route path="/servicios/gestion-publica" element={<GestionPublica />} />
            <Route path="/servicios/comunicacion-gobiernos" element={<ComunicacionGobiernos />} />
            <Route path="/servicios/comunicacion-politica-campanas" element={<ComunicacionPoliticaCampanas />} />
            <Route path="/servicios/empresas" element={<EmpresasPage />} />
            <Route path="/nosotros" element={<AboutPage />} />
            <Route path="/contacto" element={<ContactPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
