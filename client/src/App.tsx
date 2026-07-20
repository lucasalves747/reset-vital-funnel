import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import CapturePage from "./pages/CapturePage";
import SalesPage from "./pages/SalesPage";
import ThankYouCapture from "./pages/ThankYouCapture";
import ThankYouPurchase from "./pages/ThankYouPurchase";
import NotFound from "./pages/NotFound";

function Router() {
  return (
    <Switch>
      <Route path="/" component={CapturePage} />
      <Route path="/vendas" component={SalesPage} />
      <Route path="/obrigado-ebook" component={ThankYouCapture} />
      <Route path="/obrigado-compra" component={ThankYouPurchase} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
