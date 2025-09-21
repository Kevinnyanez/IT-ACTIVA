import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ServicesPage from "./pages/ServicesPage";
import GestionPublica from "./pages/GestionPublica";
import ComunicacionGobiernos from "./pages/ComunicacionGobiernos";
import ComunicacionPolitica from "./pages/ComunicacionPolitica";
import DiscursoImagen from "./pages/DiscursoImagen";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
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
          <Route path="/servicios" element={<ServicesPage />} />
          <Route path="/servicios/gestion-publica" element={<GestionPublica />} />
          <Route path="/servicios/comunicacion-gobiernos" element={<ComunicacionGobiernos />} />
          <Route path="/servicios/comunicacion-politica" element={<ComunicacionPolitica />} />
          <Route path="/servicios/discurso-imagen" element={<DiscursoImagen />} />
          <Route path="/nosotros" element={<AboutPage />} />
          <Route path="/contacto" element={<ContactPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
