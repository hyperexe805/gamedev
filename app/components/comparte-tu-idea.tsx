'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

const FEATURES = ["Multiplayer", "Single Player", "Online", "Story Mode", "Open World", "Others"]

interface ExtraField {
  id: number;
  value: string;
}

export function ComparteTuIdea() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([])
  const [inDevelopment, setInDevelopment] = useState(false)
  const [customFeature, setCustomFeature] = useState('')
  const [extraFields, setExtraFields] = useState<ExtraField[]>([])
  const [nextId, setNextId] = useState(1)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ 
      title, 
      description, 
      category, 
      selectedFeatures, 
      inDevelopment,
      extraFields 
    })
  }

  const addNewField = () => {
    setExtraFields([...extraFields, { id: nextId, value: '' }])
    setNextId(nextId + 1)
  }

  const updateExtraField = (id: number, value: string) => {
    setExtraFields(extraFields.map(field => 
      field.id === id ? { ...field, value } : field
    ))
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Share your idea</h1>
      <p className="mb-6">
        Share your game idea with us and we&apos;ll help you develop it.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="title">Game Title</Label>
          <Input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter your game title"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe your game idea"
          />
        </div>

        {extraFields.map(field => (
          <div key={field.id} className="space-y-2">
            <Label htmlFor={`extra-${field.id}`}>Additional Description</Label>
            <Textarea
              id={`extra-${field.id}`}
              value={field.value}
              onChange={(e) => updateExtraField(field.id, e.target.value)}
              placeholder="Add more details"
            />
          </div>
        ))}

        <Button 
          type="button" 
          variant="outline" 
          onClick={addNewField}
          className="w-full"
        >
          Add More Details +
        </Button>

        <div className="space-y-2">
          <Label htmlFor="category">Category</Label>
          <Input
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Ex: Action, Adventure, RPG"
          />
        </div>

        <div className="space-y-2">
          <Label>Features</Label>
          <div className="grid grid-cols-2 gap-4">
            {FEATURES.map(feature => (
              <div key={feature} className="flex items-center space-x-2">
                <Checkbox
                  id={feature}
                  checked={selectedFeatures.includes(feature)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setSelectedFeatures(prev => [...prev, feature])
                    } else {
                      setSelectedFeatures(prev => prev.filter(f => f !== feature))
                    }
                  }}
                />
                <Label htmlFor={feature}>{feature}</Label>
              </div>
            ))}
          </div>
          
        {selectedFeatures.includes('Others') && (
          <div className="mt-2">
            <Input
              placeholder="Enter custom feature"
              value={customFeature}
              onChange={(e) => setCustomFeature(e.target.value)}
              className="w-full"
            />
          </div>
        )}
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="inDevelopment"
            checked={inDevelopment}
            onCheckedChange={(checked) => setInDevelopment(checked as boolean)}
          />
          <Label htmlFor="inDevelopment">Already in development</Label>
        </div>

        <Button type="submit" className="w-full">
          Submit Idea
        </Button>
      </form>
    </div>
  )
}