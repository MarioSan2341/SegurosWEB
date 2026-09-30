import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { Layout } from "./components/Layout"
import { About } from "./pages/About"
import { Contact } from "./pages/Contact"
import { Home } from "./pages/Home"
import { NotFound } from "./pages/NotFound"
import { Privacy } from "./pages/Privacy"
import { Quote } from "./pages/Quote"
import { Seguros } from "./pages/Seguros"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/seguros" element={<Seguros />} />
          <Route path="/coberturas" element={<Navigate to="/seguros" replace />} />
          <Route path="/cotizar" element={<Quote />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/aviso-de-privacidad" element={<Privacy />} />
          <Route path="/privacidad" element={<Navigate to="/aviso-de-privacidad" replace />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
