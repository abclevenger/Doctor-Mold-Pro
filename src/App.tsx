import './App.css'
import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { SupportPage } from './pages/SupportPage'
import { MoldTestingTampa } from './pages/MoldTestingTampa'
import { MoldRemovalTampa } from './pages/MoldRemovalTampa'
import { EmergencyMoldRemediationTampa } from './pages/EmergencyMoldRemediationTampa'
import { MoldTestingClearwater } from './pages/MoldTestingClearwater'
import { MoldRemovalClearwater } from './pages/MoldRemovalClearwater'
import { MoldTestingStPetersburg } from './pages/MoldTestingStPetersburg'
import { MoldRemovalStPetersburg } from './pages/MoldRemovalStPetersburg'
import { MoldTestingBrandon } from './pages/MoldTestingBrandon'
import { MoldRemovalBrandon } from './pages/MoldRemovalBrandon'
import { MoldTestingRiverview } from './pages/MoldTestingRiverview'
import { MoldRemovalRiverview } from './pages/MoldRemovalRiverview'
import { MoldTypes } from './pages/MoldTypes'
import { MoldTypePage } from './pages/MoldTypePage'
import { ServicePage } from './pages/ServicePage'
import { NotFound } from './pages/NotFound'
import { Blog } from './pages/Blog'
import { PricePackages } from './pages/PricePackages'
import { Certifications } from './pages/Certifications'
import { Terms } from './pages/Terms'
import { SchemaMarkup } from './components/SchemaMarkup'

function App() {
  useEffect(() => {
    const chatScript = document.createElement('script')
    chatScript.src = 'https://beta.leadconnectorhq.com/loader.js'
    chatScript.async = true
    chatScript.setAttribute(
      'data-resources-url',
      'https://beta.leadconnectorhq.com/chat-widget/loader.js',
    )
    chatScript.setAttribute('data-widget-id', '679a55802d48d55434daf340')
    document.body.appendChild(chatScript)

    return () => {
      const script = document.body.querySelector(
        'script[data-widget-id="679a55802d48d55434daf340"]',
      )
      if (script) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return (
    <>
      <SchemaMarkup />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Money pages */}
          <Route path="/mold-testing-tampa" element={<MoldTestingTampa />} />
          <Route path="/mold-removal-tampa" element={<MoldRemovalTampa />} />
          <Route path="/emergency-mold-remediation-tampa" element={<EmergencyMoldRemediationTampa />} />
          {/* Location pages */}
          <Route path="/mold-testing-clearwater" element={<MoldTestingClearwater />} />
          <Route path="/mold-removal-clearwater" element={<MoldRemovalClearwater />} />
          <Route path="/mold-testing-st-petersburg" element={<MoldTestingStPetersburg />} />
          <Route path="/mold-removal-st-petersburg" element={<MoldRemovalStPetersburg />} />
          <Route path="/mold-testing-brandon" element={<MoldTestingBrandon />} />
          <Route path="/mold-removal-brandon" element={<MoldRemovalBrandon />} />
          <Route path="/mold-testing-riverview" element={<MoldTestingRiverview />} />
          <Route path="/mold-removal-riverview" element={<MoldRemovalRiverview />} />
          {/* Mold types */}
          <Route path="/mold-types" element={<MoldTypes />} />
          <Route path="/mold-types/:type" element={<MoldTypePage />} />
          {/* Service pages - must be before dynamic route */}
          <Route path="/residential-mold-inspection-tampa" element={<ServicePage />} />
          <Route path="/commercial-mold-inspection-tampa" element={<ServicePage />} />
          <Route path="/indoor-air-quality-testing-tampa" element={<ServicePage />} />
          <Route path="/black-mold-detection-tampa" element={<ServicePage />} />
          <Route path="/water-damage-mold-assessment-tampa" element={<ServicePage />} />
          {/* Additional pages */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/price-packages" element={<PricePackages />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/terms" element={<Terms />} />
          {/* Support pages - dynamic route (must be last) */}
          <Route path="/:slug" element={<SupportPage />} />
          {/* 404 - catch all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
