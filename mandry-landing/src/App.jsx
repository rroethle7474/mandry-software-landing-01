import Header from './components/layout/Header'
import Hero from './components/sections/Hero'
import Footer from './components/layout/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
      </main>
      <Footer />
    </div>
  )
}

export default App