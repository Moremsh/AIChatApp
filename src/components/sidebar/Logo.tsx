import {Bot} from 'lucide-react'
const Logo = () => {
  return (
    <header className='flex items-center gap-2 border-b p-4'>
      <div className='flex justify-center items-center h-10 w-10 rounded-lg bg-primary text-primary-foreground'>
        <Bot className='h-6 w-6' />
      </div>
      <h1 className='text-lg font-semibold'>AI Chat</h1>
    </header>
    
  )
}

export default Logo
