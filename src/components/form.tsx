import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send } from "lucide-react"

export default function Component() {
  return (
    <div className="min-h-screen md:py-0 py-9 flex items-center justify-center w-screen bg-black text-gray-100 p-4 sm:p-8">
      <div className="max-w-6xl w-full mx-auto flex flex-col items-center">
        <div className="w-full text-center">
          <h1 className="text-4xl sm:text-5xl md:text-[4vw] lg:text-[3.5vw] xl:text-[3vw] font-bold mb-2">Join our Academy</h1>
          <h2 className="text-2xl sm:text-3xl md:text-[2.5vw] lg:text-[2vw] xl:text-[1.8vw] text-orange-500 mb-8">Ready to elevate your skills?</h2>
        </div>
        
        <form className="space-y-6 w-full max-w-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input placeholder="Your full name" className="bg-transparent border-gray-600 text-gray-300" />
            <Input placeholder="Your email" type="email" className="bg-transparent border-gray-600 text-gray-300" />
          </div>
          
          <Input placeholder="Phone number" type="tel" className="bg-transparent border-gray-600 text-gray-300" />
          
          <Textarea 
            placeholder="Tell us about your background and what you hope to achieve" 
            className="bg-transparent border-gray-600 text-gray-300 h-32"
          />
          
          <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end gap-4">
            <Button className="bg-transparent text-orange-500 border border-orange-500 rounded-full px-6 hover:bg-orange-500 hover:text-white transition-colors w-full sm:w-auto">
              Submit Application
              <Send className="ml-2 h-4 w-4" />
            </Button>
            
            
          </div>
        </form>
        
        
      </div>
    </div>
  )
}