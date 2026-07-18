import Providers from "@/shared/providers";
import AppRoutes from "@/shared/routes/app-routes";

export default function App() {
  return (
    <Providers>
      <AppRoutes />
    </Providers>
  );
}
