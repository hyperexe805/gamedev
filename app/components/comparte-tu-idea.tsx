'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"

export function ShareYourIdea() {
  const [title, setTitle] = useState('')
  const [genre, setGenre] = useState('')
  const [description, setDescription] = useState('')
  const [targetAudience, setTargetAudience] = useState('')
  const [platforms, setPlatforms] = useState<string[]>([])
  const [artStyle, setArtStyle] = useState('')
  const [otherArtStyle, setOtherArtStyle] = useState('')
  const [developmentTime, setDevelopmentTime] = useState(6)
  const [features, setFeatures] = useState<string[]>([])
  const [otherFeature, setOtherFeature] = useState('')

  const handleIdeaSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const finalArtStyle = artStyle === 'other' ? otherArtStyle : artStyle
    const finalFeatures = features.includes('Other') ? [...features.filter(f => f !== 'Other'), otherFeature] : features
    console.log({ title, genre, description, targetAudience, platforms, artStyle: finalArtStyle, developmentTime, features: finalFeatures })
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Share Your Game Idea</h2>
      <p className="text-gray-600 mb-6">
        Have a great game idea? Share it here! If your idea catches our attention and aligns with our development goals, we might turn it into reality. Don't worry, you'll receive full credit for your original concept if we decide to develop it.
      </p>
      <form onSubmit={handleIdeaSubmit} className="space-y-6">
        <div>
          <Label htmlFor="title" className="text-gray-700">Game Title</Label>
          <Input 
            id="title"
            placeholder="Enter your game title" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border-gray-300 mt-1"
          />
        </div>
        <div>
          <Label htmlFor="genre" className="text-gray-700">Genre</Label>
          <Select onValueChange={setGenre} value={genre}>
            <SelectTrigger id="genre" className="w-full border-gray-300 mt-1">
              <SelectValue placeholder="Select a genre" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="action">Action</SelectItem>
              <SelectItem value="adventure">Adventure</SelectItem>
              <SelectItem value="rpg">RPG</SelectItem>
              <SelectItem value="strategy">Strategy</SelectItem>
              <SelectItem value="simulation">Simulation</SelectItem>
              <SelectItem value="sports">Sports</SelectItem>
              <SelectItem value="puzzle">Puzzle</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="description" className="text-gray-700">Game Description</Label>
          <Textarea 
            id="description"
            placeholder="Describe your game idea..." 
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            className="w-full border-gray-300 mt-1"
          />
        </div>
        <div>
          <Label htmlFor="targetAudience" className="text-gray-700">Target Audience</Label>
          <Select onValueChange={setTargetAudience} value={targetAudience}>
            <SelectTrigger id="targetAudience" className="w-full border-gray-300 mt-1">
              <SelectValue placeholder="Select target audience" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="children">Children</SelectItem>
              <SelectItem value="teens">Teenagers</SelectItem>
              <SelectItem value="adults">Adults</SelectItem>
              <SelectItem value="all">All Ages</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label className="text-gray-700">Platforms</Label>
          <div className="grid grid-cols-2 gap-2 mt-1">
            {['PC', 'Mobile'].map((platform) => (
              <div key={platform} className="flex items-center space-x-2">
                <Checkbox
                  id={platform}
                  checked={platforms.includes(platform)}
                  onCheckedChange={(checked) => 
                    setPlatforms(prev => 
                      checked 
                        ? [...prev, platform]
                        : prev.filter(p => p !== platform)
                    )
                  }
                />
                <label
                  htmlFor={platform}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {platform}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div>
          <Label htmlFor="artStyle" className="text-gray-700">Art Style</Label>
          <Select onValueChange={setArtStyle} value={artStyle}>
            <SelectTrigger id="artStyle" className="w-full border-gray-300 mt-1">
              <SelectValue placeholder="Select art style" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2d-pixel">2D Pixel Art</SelectItem>
              <SelectItem value="2d-cartoon">2D Cartoon</SelectItem>
              <SelectItem value="3d-lowpoly">3D Low Poly</SelectItem>
              <SelectItem value="3d-realistic">3D Realistic</SelectItem>
              <SelectItem value="hand-drawn">Hand Drawn</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
          {artStyle === 'other' && (
            <Input 
              placeholder="Specify your art style"
              value={otherArtStyle}
              onChange={(e) => setOtherArtStyle(e.target.value)}
              className="w-full border-gray-300 mt-2"
            />
          )}
        </div>
        <div>
          <Label className="text-gray-700">Estimated Development Time (months)</Label>
          <Slider
            min={1}
            max={24}
            step={1}
            value={[developmentTime]}
            onValueChange={(value) => setDevelopmentTime(value[0])}
            className="mt-2"
          />
          <p className="text-sm text-gray-600 mt-1">{developmentTime} months</p>
        </div>
        <div>
          <Label className="text-gray-700">Key Features</Label>
          <div className="grid grid-cols-2 gap-2 mt-1">
            {[
              'Multiplayer',
              'Open World',
              'Crafting System',
              'Character Customization',
              'Procedural Generation',
              'Skill Tree',
              'Achievements',
              'Leaderboards',
              'Other'
            ].map((feature) => (
              <div key={feature} className="flex items-center space-x-2">
                <Checkbox
                  id={feature}
                  checked={features.includes(feature)}
                  onCheckedChange={(checked) => 
                    setFeatures(prev => 
                      checked 
                        ? [...prev, feature]
                        : prev.filter(f => f !== feature)
                    )
                  }
                />
                <label
                  htmlFor={feature}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {feature}
                </label>
              </div>
            ))}
          </div>
          {features.includes('Other') && (
            <Input 
              placeholder="Specify your custom feature"
              value={otherFeature}
              onChange={(e) => setOtherFeature(e.target.value)}
              className="w-full border-gray-300 mt-2"
            />
          )}
        </div>
        <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white">
          Submit Game Idea
        </Button>
      </form>
    </div>
  )
}