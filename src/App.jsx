import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Dictionary from './Dictionary/Dictionary'
import './App.css'

function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Dictionary/>
    </QueryClientProvider>
  )
}

export default App
