"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Send } from "lucide-react";

export default function Component() {
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    phone: "",
    course: "",
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (value: any) => {
    setFormData({ ...formData, course: value });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
  
    const response = await fetch("/api/sendMail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
  
    if (response.ok) {
      alert("Application submitted successfully!");
      setFormData({ name: "", city: "", phone: "", course: "" });
    } else {
      alert("Failed to send application. Try again.");
    }
  };
  

  return (
    <div className="min-h-screen flex items-center justify-center w-screen bg-black text-gray-100 p-4 sm:p-8">
      <div className="max-w-6xl w-full mx-auto flex flex-col items-center">
        <div className="w-full text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-2">Join our Academy</h1>
          <h2 className="text-2xl sm:text-3xl text-orange-500 mb-8">Ready to elevate your skills?</h2>
        </div>

        <form className="space-y-6 w-full max-w-2xl" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input name="name" placeholder="Your full name" value={formData.name} onChange={handleChange} required />
            <Input name="city" placeholder="City" value={formData.city} onChange={handleChange} required />
          </div>
          
          <Input name="phone" placeholder="Phone number" type="tel" value={formData.phone} onChange={handleChange} required />

          <Select onValueChange={handleSelectChange}>
            <SelectTrigger>
              <SelectValue placeholder="Select a Course" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="basic-to-advance">Basic To Advance Full Makeup Course</SelectItem>
              <SelectItem value="hairstyling">Hairstyling Course</SelectItem>
              <SelectItem value="hair-dressing">Hair Dressing Course</SelectItem>
              <SelectItem value="nail-artistry">Nail Artistry Course</SelectItem>
              <SelectItem value="skin-therapist">Skin Therapist</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>

          <Button type="submit" className="bg-transparent text-orange-500 border border-orange-500 rounded-full px-6 hover:bg-orange-500 hover:text-white transition-colors">
            Submit Application
            <Send className="ml-2 h-4 w-4" />
          </Button>
        </form>
      </div>
    </div>
  );
}
