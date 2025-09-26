"use client";

import { useState } from "react";
import { MapPin, Calendar, Info } from "lucide-react";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Sparkles, Eye, Save, Send, Users } from "lucide-react";
import { useRouter } from "next/navigation";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { X } from "lucide-react"

export default function AddEntryReplica() {
  const [step, setStep] = useState(1);
  const totalSteps = 3;
  const progress = (step / totalSteps) * 100;
  const router = useRouter();

  // form state
  const [formData, setFormData] = useState<any>({
    startupName: "",
    founderName: "",
    website: "",
    linkedin: "",
    foundedYear: "",
    shutdownYear: "",
    category: "",
    cofounders: "",
    anonymous: false,
    public: true,
    shortSummary: "",
    keyLearnings: "",
    failureReasons: [] as string[],
    tryAgain: "maybe",
    files: [] as File[],
  });

  const failureReasons = [
    "No Product–Market Fit",
    "Burnout",
    "Legal Issues",
    "Funding Gap",
    "Technical Failures",
    "Team Conflict",
    "Market Timing",
    "Competition",
    "Poor Marketing",
    "Regulatory Challenges",   
    "Lack of Focus",           
    "Bad Business Model",
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({ ...formData, files: Array.from(e.target.files) });
    }
  };

  return (
    <Card className="max-w-6xl w-full mx-auto rounded-xl shadow-lg overflow-hidden">
     {/* Header */}
<div className="w-full bg-[#fff7e6] border-b border-gray-200">
  <div className="flex items-center gap-3 p-5">
    <img
      src="https://cdn-icons-png.flaticon.com/256/11173/11173128.png"
      alt="logo"
      className="h-6 w-6"
    />
    <div>
      <h2 className="font-semibold text-lg">Add Entry to Graveyard</h2>
      <p className="text-sm text-muted-foreground">
        Share your startup journey and help others learn from your experience
      </p>
    </div>

    {/* Right side */}
    <div className="ml-auto flex items-center gap-4">
      <div className="text-xs text-muted-foreground min-w-[90px] text-right">
        {Math.round(progress)}% complete
      </div>
      <button
        onClick={() => router.back()}
        className="p-1 rounded hover:bg-gray-100"
        aria-label="Close"
      >
        <X className="h-5 w-5 text-gray-500" />
      </button>
    </div>
  </div>

  {/* Progress full width */}
  <Progress
    value={progress}
    className="h-1 rounded-none bg-gray-200 [&>div]:bg-black w-full"
  />
</div>
{/* Tabs */}
<div className="flex justify-center bg-white px-4 py-3 gap-0">
  <button
    className={`flex items-center justify-center gap-2 w-89 py-3 text-sm transition 
      ${step === 1
        ? "bg-white text-black font-semibold shadow-md"
        : "bg-gray-50 text-gray-600 hover:bg-gray-100"
      } rounded-l-lg`}
    onClick={() => setStep(1)}
  >
    <Sparkles className="h-4 w-4" />
    <span>Basic Info</span>
  </button>

  <button
    className={`flex items-center justify-center gap-2 w-89 py-3 text-sm transition 
      ${step === 2
        ? "bg-white text-black font-semibold shadow-md"
        : "bg-gray-50 text-gray-600 hover:bg-gray-100"
      }`}
    onClick={() => setStep(2)}
  >
    <Users className="h-4 w-4" />
    <span>Details & Learnings</span>
  </button>

  <button
    className={`flex items-center justify-center gap-2 w-89 py-3 text-sm transition 
      ${step === 3
        ? "bg-white text-black font-semibold shadow-md"
        : "bg-gray-50 text-gray-600 hover:bg-gray-100"
      } rounded-r-lg`}
    onClick={() => setStep(3)}
  >
    <Eye className="h-4 w-4" />
    <span>Preview & Publish</span>
  </button>
</div>



      {/* Step 1 */}
      {step === 1 && (
        <div className="grid grid-cols-2 gap-6 p-6">
          <div>
            <Label>
              Startup Name <span className="text-red-500">*</span>
            </Label>
            <Input
            className="mt-2"
              placeholder="e.g., TechFlow"
              value={formData.startupName}
              onChange={(e) =>
                setFormData({ ...formData, startupName: e.target.value })
              }
            />
          </div>
          <div>
            <Label>Founder Name</Label>
            <Input
             className="mt-2"
              placeholder="Your full name"
              value={formData.founderName}
              onChange={(e) =>
                setFormData({ ...formData, founderName: e.target.value })
              }
            />
          </div>
          <div>
            <Label>Website</Label>
            <Input
             className="mt-2"
              placeholder="https://example.com"
              value={formData.website}
              onChange={(e) =>
                setFormData({ ...formData, website: e.target.value })
              }
            />
          </div>
          <div>
            <Label>LinkedIn/Portfolio</Label>
            <Input
             className="mt-2"
              placeholder="https://linkedin.com/in/yourprofile"
              value={formData.linkedin}
              onChange={(e) =>
                setFormData({ ...formData, linkedin: e.target.value })
              }
            />
          </div>
          <div>
            <Label className="mb-2">Founded Year</Label>
            <Select
              onValueChange={(val) =>
                setFormData({ ...formData, foundedYear: val })
              }
            >
                <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Select year" />
              </SelectTrigger>
              <SelectContent className="bg-white shadow-lg rounded-md">
                {Array.from({ length: 20 }, (_, i) => (
                  <SelectItem key={i} value={(2005 + i).toString()}>
                    {2005 + i}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label className="mb-2">Shut Down Year</Label>
            <Select
              onValueChange={(val) =>
                setFormData({ ...formData, shutdownYear: val })
              }
            >
            <SelectTrigger className="w-[200px]">
  <SelectValue placeholder="Select year" />
</SelectTrigger>

<SelectContent className="bg-white shadow-lg border rounded-md">
  {Array.from({ length: 20 }, (_, i) => (
    <SelectItem
      key={i}
      value={(2005 + i).toString()}
      className="hover:bg-gray-100 cursor-pointer focus:outline-none focus:ring-0"
    >
      {2005 + i}
    </SelectItem>
  ))}
</SelectContent>

            </Select>
          </div>
          <div>
            <Label className="mb-2">Category</Label>
            <Select onValueChange={(val) => setFormData({ ...formData, category: val })}>
  <SelectTrigger className="w-[200px] border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-0">
    <SelectValue placeholder="Select category" />
  </SelectTrigger>

  <SelectContent className="bg-white shadow-md rounded-md border">
    <SelectItem
      value="tech"
      className="hover:bg-gray-100 cursor-pointer focus:outline-none focus:ring-0"
    >
      Tech
    </SelectItem>
    <SelectItem
      value="finance"
      className="hover:bg-gray-100 cursor-pointer focus:outline-none focus:ring-0"
    >
      Finance
    </SelectItem>
    <SelectItem
      value="health"
      className="hover:bg-gray-100 cursor-pointer focus:outline-none focus:ring-0"
    >
      Health
    </SelectItem>
  </SelectContent>
</Select>

          </div>
          <div>
            <Label>Co-founders</Label>
            <Input
             className="mt-2"
              placeholder="Comma separated names"
              value={formData.cofounders}
              onChange={(e) =>
                setFormData({ ...formData, cofounders: e.target.value })
              }
            />
          </div>
        </div>
      )}

     {/* Step 2 */}
{step === 2 && (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
    
    {/* Left Column */}
    <div className="space-y-6">
      <div>
        <Label>
          Short Summary <span className="text-red-500">*</span>
        </Label>
        <Textarea
        className="mt-2"
          placeholder="Briefly describe your startup..."
          value={formData.shortSummary}
          onChange={(e) =>
            setFormData({ ...formData, shortSummary: e.target.value })
          }
        />
        {/* Character counter + min requirement */}
  <div className="flex justify-between text-xs text-gray-500 mt-1">
    <span>{formData.shortSummary.length} characters</span>
    <span>Minimum 50 characters</span>
  </div>
      </div>

      <div>
        <Label>
          Key Learnings <span className="text-red-500">*</span>
        </Label>
        <Textarea
        className="mt-2"
          placeholder="What would you do differently? What insights can help other founders?"
          value={formData.keyLearnings}
          onChange={(e) =>
            setFormData({ ...formData, keyLearnings: e.target.value })
          }
        />
      </div>

      {/* Radio Group */}
      <div>
        <Label>Would you try again?</Label>
        <RadioGroup

          value={formData.tryAgain}
          onValueChange={(val) =>
            setFormData({ ...formData, tryAgain: val })
          }
          className="mt-5 space-y-1"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="yes" id="yes" />
            <Label htmlFor="yes">Yes, I would try again</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="no" id="no" />
            <Label htmlFor="no">No, I'm done with startups</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="maybe" id="maybe" />
            <Label htmlFor="maybe">Maybe, under different circumstances</Label>
          </div>
        </RadioGroup>
      </div>
    </div>

    {/* Right Column */}
    <div className="space-y-6">
      {/* Failure reasons */}
      <div>
        <Label>Failure Reasons (Select all that apply)</Label>
  <div className="mt-2 max-h-80 overflow-y-auto flex flex-col gap-2">
          {failureReasons.map((reason) => (
            <label key={reason} className="flex items-center gap-2">
              <Checkbox
                checked={formData.failureReasons.includes(reason)}
                onCheckedChange={(checked) => {
                  setFormData({
                    ...formData,
                    failureReasons: checked
                      ? [...formData.failureReasons, reason]
                      : formData.failureReasons.filter((r:String) => r !== reason),
                  });
                }}
              />
              {reason}
            </label>
          ))}
        </div>
      </div>

      {/* File Upload */}
      <div>
        <Label>Upload Artifacts (Optional)</Label>
        <div className="border-2 border-dashed rounded-lg p-6 text-center text-gray-500 mt-2">
          <input
            type="file"
            multiple
            className="hidden"
            id="fileUpload"
            onChange={handleFileChange}
          />
          <label
            htmlFor="fileUpload"
            className="cursor-pointer flex flex-col items-center gap-2"
          >
            <span>Upload pitch decks, screenshots, or other relevant files</span>
            <span className="text-xs">(PDF, PNG, JPG up to 10MB each)</span>
            <Button variant="outline" size="sm">
              Choose Files
            </Button>
          </label>
          {formData.files.length > 0 && (
            <ul className="mt-3 text-sm text-left">
              {formData.files.map((file:File, idx:number) => (
                <li key={idx}>{file.name}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  </div>
)}

     
{/* Step 3 */}
{step === 3 && (
  <div className="pl-6 ">
    {/* Heading with Eye Icon */}
    <div className="flex items-center gap-2 mb-4">
      <Eye className="h-5 w-5 text-gray-600" />
      <h2 className="text-xl font-semibold">Preview Your Entry</h2>
    </div>

    <div className="grid grid-cols-2 gap-6">
      {/* Left Preview Card */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 shadow-sm h-40">
        <div className="flex items-center gap-2 text-gray-600">
          <MapPin className="h-5 w-5 text-gray-500" />
          <span>{formData.startupName || "Not specified"}</span>
        </div>
        <div className="flex items-center gap-2 mt-2 text-gray-600">
          <Calendar className="h-5 w-5 text-gray-500" />
          <span>
            {formData.foundedYear || "20XX"} - {formData.shutdownYear || "20XX"}
          </span>
        </div>
        <div className="mt-6 flex justify-between items-center text-gray-500 text-sm">
          <img
            src="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg"
            alt="user"
            className="h-8 w-8 rounded-full"
          />
          <span>~2 min read</span>
        </div>
      </div>

      {/* Right Summary Card */}
      <div className="rounded-lg border border-gray-200 bg-gray-50 p-6 shadow-sm">
        <h3 className="font-bold text-lg mb-4">Entry Summary</h3>
        <div className="grid grid-cols-2 text-sm gap-y-2">
          <span className="text-gray-600">Startup:</span>
          <span className="text-right font-bold">
            {formData.startupName || "Not specified"}
          </span>

          <span className="text-gray-600">Category:</span>
          <span className="text-right font-bold">
            {formData.category || "Not specified"}
          </span>

          <span className="text-gray-600">Visibility:</span>
          <span className="text-right font-bold">Public</span>

          <span className="text-gray-600">Attribution:</span>
          <span className="text-right font-bold">
            {formData.founderName || "Not specified"}
          </span>

          <span className="text-gray-600">Failure Reasons:</span>
          <span className="text-right font-bold">
            {formData.failureReasons.length} selected
          </span>
        </div>
      </div>
    </div>

    {/* Bottom Info Box (Right Side) */}
    <div className="mt-6 flex justify-end">
      <div className="border-gray-50 rounded-lg p-4 bg-gray-50 text-sm w-1/2 shadow-sm">
        <p className="font-medium mb-2 flex items-center gap-2">
          <Info className="h-4 w-4 text-gray-500" />
          Before you publish:
        </p>
        <ul className="list-disc list-inside space-y-1 text-black font-bold">
          <li>Your story will help other founders learn from your experience</li>
          <li>All entries are reviewed for quality and authenticity</li>
          <li>You can edit or delete your entry anytime</li>
        </ul>
      </div>
    </div>
  </div>
)}

      {/* Footer */}
      <div className="flex justify-between items-center border-gray-500 p-5 bg-gray-100 h-10">
        <p className="text-sm text-gray-500">
          Your story matters. Help others learn from your journey.
        </p>
        <div className="flex gap-3 mt-5">
          <Button variant="outline" className="border-gray-200" onClick={() => router.back()}>
            Cancel
          </Button>
          <Button
            variant="outline" className="border-gray-200"
           onClick={() =>
        toast.success("✅ Draft saved successfully!", {
          description: "You can continue editing anytime.",
      duration: 2000, // auto close in 2s
        })
      }
          >
            <Save className="h-4 w-4 mr-1" /> Save Draft
          </Button>
          {step < 3 ? (
            <Button className="bg-black text-white" onClick={() => setStep(step + 1)}>
              Continue
            </Button>
          ) : (
            <Button
  className="bg-black text-white flex items-center gap-2"
  onClick={async () => {
    try {
      // 👇 Assume files ek File[] hai (browser File objects)
      const formattedFiles = (formData.files || []).map((file: File) => ({
        name: file.name,
        type: file.type,
        size: file.size,
        url: "" // abhi blank, baad me agar Cloudinary/S3 use karoge to yaha link aayega
      }));

      const res = await fetch("http://localhost:5000/api/entries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, files: formattedFiles }),
      });

      if (res.ok) {
        const data = await res.json();
       console.log("✅ Saved Entry:", data); // Debug
        toast.success("🚀 Entry published successfully!", {
          description: "Your entry is now live 🚀",
          duration: 2000,
      
        });

        // ✅ Redirect after 2s
        setTimeout(() => {
          router.push("/congratulations");
        }, 2000);



      } else {
        const errData = await res.json();
        console.error("❌ Server Error:", errData);
        toast.error("❌ Failed to publish entry", {
          description: "Something went wrong on server",
        });
      }
    } catch (err) {
      toast.error("⚠️ Network error", {
        description: "Check if backend is running",
      });
    }
  }}
>
  <Send className="h-4 w-4" /> Publish Entry
</Button>

          )}
        </div>
      </div>
    </Card>
  );
}












