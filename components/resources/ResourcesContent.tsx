"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FileText, Download, Search, Filter, Tag } from "lucide-react"
import AnimateInView from "@/components/AnimateInView"

// Resource type definition
interface Resource {
  id: string
  title: string
  description: string
  type: "guide" | "template" | "case-study" | "whitepaper"
  category: string
  downloadUrl: string
  thumbnail: string
  featured?: boolean
}

export default function ResourcesContent() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [activeType, setActiveType] = useState<string | null>(null)

  // Sample resources data
  const resources: Resource[] = [
    {
      id: "1",
      title: "Web Performance Optimization Guide",
      description: "Learn how to improve your website's loading speed and overall performance.",
      type: "guide",
      category: "Development",
      downloadUrl: "/resources/web-performance-guide.pdf",
      thumbnail: "/website-speed-boost.png",
      featured: true,
    },
    {
      id: "2",
      title: "Project Requirements Template",
      description: "A comprehensive template for gathering and documenting project requirements.",
      type: "template",
      category: "Project Management",
      downloadUrl: "/resources/project-requirements-template.docx",
      thumbnail: "/blueprint-startup.png",
    },
    {
      id: "3",
      title: "E-commerce Migration Case Study",
      description: "How we helped a retail client migrate to a modern e-commerce platform.",
      type: "case-study",
      category: "E-commerce",
      downloadUrl: "/resources/ecommerce-migration-case-study.pdf",
      thumbnail: "/modern-ecommerce-interface.png",
    },
    {
      id: "4",
      title: "API Integration Best Practices",
      description: "A guide to seamlessly integrating third-party APIs into your applications.",
      type: "guide",
      category: "Development",
      downloadUrl: "/resources/api-integration-guide.pdf",
      thumbnail: "/connected-systems.png",
    },
    {
      id: "5",
      title: "Digital Transformation Whitepaper",
      description: "Strategic insights on navigating digital transformation in your organization.",
      type: "whitepaper",
      category: "Strategy",
      downloadUrl: "/resources/digital-transformation-whitepaper.pdf",
      thumbnail: "/interconnected-future.png",
      featured: true,
    },
    {
      id: "6",
      title: "Website Launch Checklist",
      description: "A comprehensive checklist to ensure your website launch goes smoothly.",
      type: "template",
      category: "Project Management",
      downloadUrl: "/resources/website-launch-checklist.pdf",
      thumbnail: "/website-launch-celebration.png",
    },
    {
      id: "7",
      title: "Legacy System Modernization Case Study",
      description: "How we helped a client modernize their legacy systems without disruption.",
      type: "case-study",
      category: "Development",
      downloadUrl: "/resources/legacy-modernization-case-study.pdf",
      thumbnail: "/bridging-the-past-future.png",
    },
    {
      id: "8",
      title: "UX Research Template Kit",
      description: "Templates and tools for conducting effective user experience research.",
      type: "template",
      category: "Design",
      downloadUrl: "/resources/ux-research-templates.zip",
      thumbnail: "/user-centered-insights.png",
    },
  ]

  // Get unique categories and types for filters
  const categories = Array.from(new Set(resources.map((r) => r.category)))
  const types = Array.from(new Set(resources.map((r) => r.type)))

  // Filter resources based on search query and active filters
  const filteredResources = resources.filter((resource) => {
    const matchesSearch =
      searchQuery === "" ||
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCategory = activeCategory === null || resource.category === activeCategory
    const matchesType = activeType === null || resource.type === activeType

    return matchesSearch && matchesCategory && matchesType
  })

  // Function to reset all filters
  const resetFilters = () => {
    setSearchQuery("")
    setActiveCategory(null)
    setActiveType(null)
  }

  // Function to handle resource download
  const handleDownload = (resource: Resource) => {
    // In a real implementation, you might want to track downloads
    // or handle gated content differently
    console.log(`Downloading: ${resource.title}`)

    // For now, we'll just simulate a download by opening the URL
    window.open(resource.downloadUrl, "_blank")
  }

  return (
    <div>
      {/* Featured Resources */}
      <AnimateInView variant="fade-up" duration={800} threshold={0.3}>
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-white mb-6">Featured Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resources
              .filter((r) => r.featured)
              .map((resource) => (
                <div
                  key={resource.id}
                  className="bg-brand-gray-dark bg-opacity-30 border border-gray-800 rounded-lg overflow-hidden flex flex-col md:flex-row"
                >
                  <div className="md:w-1/3 relative h-48 md:h-auto">
                    <img
                      src={resource.thumbnail || "/placeholder.svg"}
                      alt={resource.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:w-2/3 flex flex-col">
                    <div className="mb-2">
                      <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-brand-teal/20 text-brand-teal">
                        {resource.type.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{resource.title}</h3>
                    <p className="text-gray-400 mb-4 flex-grow">{resource.description}</p>
                    <Button
                      onClick={() => handleDownload(resource)}
                      className="bg-brand-teal hover:bg-brand-teal/90 text-black font-medium inline-flex items-center self-start"
                    >
                      <Download className="mr-2 h-4 w-4" /> Download
                    </Button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </AnimateInView>

      {/* Search and Filters */}
      <AnimateInView variant="fade-up" duration={800} threshold={0.3}>
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
              <Input
                type="search"
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-gray-900 border border-gray-700 text-white pl-10"
              />
            </div>

            <div className="flex gap-2">
              <div className="relative group">
                <Button
                  variant="outline"
                  className="border-gray-700 text-gray-300 hover:bg-gray-800 flex items-center gap-2"
                >
                  <Filter className="h-4 w-4" /> Category
                </Button>
                <div className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-gray-900 border border-gray-800 hidden group-hover:block">
                  <div className="py-1">
                    <button
                      onClick={() => setActiveCategory(null)}
                      className={`block px-4 py-2 text-sm w-full text-left ${activeCategory === null ? "text-brand-teal" : "text-gray-300 hover:bg-gray-800"}`}
                    >
                      All Categories
                    </button>
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`block px-4 py-2 text-sm w-full text-left ${activeCategory === category ? "text-brand-teal" : "text-gray-300 hover:bg-gray-800"}`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative group">
                <Button
                  variant="outline"
                  className="border-gray-700 text-gray-300 hover:bg-gray-800 flex items-center gap-2"
                >
                  <Tag className="h-4 w-4" /> Type
                </Button>
                <div className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-gray-900 border border-gray-800 hidden group-hover:block">
                  <div className="py-1">
                    <button
                      onClick={() => setActiveType(null)}
                      className={`block px-4 py-2 text-sm w-full text-left ${activeType === null ? "text-brand-teal" : "text-gray-300 hover:bg-gray-800"}`}
                    >
                      All Types
                    </button>
                    {types.map((type) => (
                      <button
                        key={type}
                        onClick={() => setActiveType(type)}
                        className={`block px-4 py-2 text-sm w-full text-left ${activeType === type ? "text-brand-teal" : "text-gray-300 hover:bg-gray-800"}`}
                      >
                        {type.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {(activeCategory || activeType || searchQuery) && (
                <Button variant="ghost" onClick={resetFilters} className="text-gray-400 hover:text-white">
                  Clear Filters
                </Button>
              )}
            </div>
          </div>

          {/* Active filters display */}
          {(activeCategory || activeType) && (
            <div className="flex flex-wrap gap-2 mt-4">
              {activeCategory && (
                <div className="bg-brand-teal/20 text-brand-teal px-3 py-1 rounded-full text-sm flex items-center">
                  Category: {activeCategory}
                  <button onClick={() => setActiveCategory(null)} className="ml-2 hover:text-white">
                    &times;
                  </button>
                </div>
              )}
              {activeType && (
                <div className="bg-brand-teal/20 text-brand-teal px-3 py-1 rounded-full text-sm flex items-center">
                  Type: {activeType.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                  <button onClick={() => setActiveType(null)} className="ml-2 hover:text-white">
                    &times;
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </AnimateInView>

      {/* All Resources Grid */}
      <AnimateInView variant="fade-up" duration={800} threshold={0.3}>
        <div>
          <h2 className="text-2xl font-semibold text-white mb-6">
            {filteredResources.length > 0
              ? `All Resources ${filteredResources.length !== resources.length ? `(${filteredResources.length})` : ""}`
              : "No resources found"}
          </h2>

          {filteredResources.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources.map((resource) => (
                <div
                  key={resource.id}
                  className="bg-brand-gray-dark bg-opacity-30 border border-gray-800 rounded-lg overflow-hidden flex flex-col group hover:border-brand-teal/50 transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={resource.thumbnail || "/placeholder.svg"}
                      alt={resource.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-0 right-0 m-3">
                      <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-brand-teal/20 text-brand-teal backdrop-blur-sm">
                        {resource.type.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="mb-2">
                      <span className="text-sm text-gray-400">{resource.category}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{resource.title}</h3>
                    <p className="text-gray-400 mb-4 flex-grow">{resource.description}</p>
                    <Button
                      onClick={() => handleDownload(resource)}
                      variant="outline"
                      className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-brand-teal inline-flex items-center self-start"
                    >
                      <Download className="mr-2 h-4 w-4" /> Download
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-brand-gray-dark bg-opacity-30 border border-gray-800 rounded-lg p-8 text-center">
              <FileText className="h-12 w-12 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No resources found</h3>
              <p className="text-gray-400 mb-4">
                Try adjusting your search or filters to find what you're looking for.
              </p>
              <Button onClick={resetFilters} className="bg-brand-teal hover:bg-brand-teal/90 text-black font-medium">
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </AnimateInView>
    </div>
  )
}
