import './App.css'
import { useEffect, Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { SupportPage } from './pages/SupportPage'
import { MoldTestingTampa } from './pages/MoldTestingTampa'
import { MoldRemovalTampa } from './pages/MoldRemovalTampa'
import { EmergencyMoldRemediationTampa } from './pages/EmergencyMoldRemediationTampa'
import { MoldTestingAppointment } from './pages/MoldTestingAppointment'
// Lazy load non-critical pages to reduce initial bundle size
import { MoldTestingClearwater } from './pages/MoldTestingClearwater'
import { MoldRemovalClearwater } from './pages/MoldRemovalClearwater'
import { MoldTestingStPetersburg } from './pages/MoldTestingStPetersburg'
import { MoldRemovalStPetersburg } from './pages/MoldRemovalStPetersburg'
import { MoldTestingBrandon } from './pages/MoldTestingBrandon'
import { MoldRemovalBrandon } from './pages/MoldRemovalBrandon'
import { MoldTestingRiverview } from './pages/MoldTestingRiverview'
import { MoldRemovalRiverview } from './pages/MoldRemovalRiverview'
const MoldTypes = lazy(() => import('./pages/MoldTypes'))
const MoldTypePage = lazy(() => import('./pages/MoldTypePage'))
const ServicePage = lazy(() => import('./pages/ServicePage'))
const NotFound = lazy(() => import('./pages/NotFound'))
const Blog = lazy(() => import('./pages/Blog'))
const PricePackages = lazy(() => import('./pages/PricePackages'))
const Certifications = lazy(() => import('./pages/Certifications'))
const Terms = lazy(() => import('./pages/Terms'))
const Privacy = lazy(() => import('./pages/Privacy'))
const SmsCompliance = lazy(() => import('./pages/SmsCompliance'))
const Accessibility = lazy(() => import('./pages/Accessibility'))
import { SchemaMarkup } from './components/SchemaMarkup'

// Simple loading fallback for lazy routes
const PageLoading = () => (
  <div style={{ padding: '2rem', textAlign: 'center' }}>Loading...</div>
)

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
          {/* Mold types - lazy loaded */}
          <Route
            path="/mold-types"
            element={
              <Suspense fallback={<PageLoading />}>
                <MoldTypes />
              </Suspense>
            }
          />
          <Route
            path="/mold-types/:type"
            element={
              <Suspense fallback={<PageLoading />}>
                <MoldTypePage />
              </Suspense>
            }
          />
          {/* Service pages - lazy loaded, must be before dynamic route */}
          <Route
            path="/residential-mold-inspection-tampa"
            element={
              <Suspense fallback={<PageLoading />}>
                <ServicePage />
              </Suspense>
            }
          />
          <Route
            path="/commercial-mold-inspection-tampa"
            element={
              <Suspense fallback={<PageLoading />}>
                <ServicePage />
              </Suspense>
            }
          />
          <Route
            path="/indoor-air-quality-testing-tampa"
            element={
              <Suspense fallback={<PageLoading />}>
                <ServicePage />
              </Suspense>
            }
          />
          <Route
            path="/black-mold-detection-tampa"
            element={
              <Suspense fallback={<PageLoading />}>
                <ServicePage />
              </Suspense>
            }
          />
          <Route
            path="/water-damage-mold-assessment-tampa"
            element={
              <Suspense fallback={<PageLoading />}>
                <ServicePage />
              </Suspense>
            }
          />
          {/* Additional pages - lazy loaded */}
          <Route
            path="/blog"
            element={
              <Suspense fallback={<PageLoading />}>
                <Blog />
              </Suspense>
            }
          />
          <Route
            path="/price-packages"
            element={
              <Suspense fallback={<PageLoading />}>
                <PricePackages />
              </Suspense>
            }
          />
          <Route
            path="/certifications"
            element={
              <Suspense fallback={<PageLoading />}>
                <Certifications />
              </Suspense>
            }
          />
          <Route
            path="/terms"
            element={
              <Suspense fallback={<PageLoading />}>
                <Terms />
              </Suspense>
            }
          />
          <Route
            path="/privacy-policy"
            element={
              <Suspense fallback={<PageLoading />}>
                <Privacy />
              </Suspense>
            }
          />
          <Route
            path="/sms-terms"
            element={
              <Suspense fallback={<PageLoading />}>
                <SmsCompliance />
              </Suspense>
            }
          />
          <Route
            path="/accessibility"
            element={
              <Suspense fallback={<PageLoading />}>
                <Accessibility />
              </Suspense>
            }
          />
          <Route path="/mold-testing-appointment" element={<MoldTestingAppointment />} />
          {/* Support pages - dynamic route (must be last) */}
          <Route path="/:slug" element={<SupportPage />} />
          {/* 404 - catch all - lazy loaded */}
          <Route
            path="*"
            element={
              <Suspense fallback={<PageLoading />}>
                <NotFound />
              </Suspense>
            }
          />
        </Routes>
      </Layout>
    </>
  )
}

export default App
