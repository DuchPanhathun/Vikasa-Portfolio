'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  articleTypeService, 
  articleService,
  type ArticleType, 
  type Article 
} from '@/lib/supabaseService'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export default function ArticleManager() {
  const [articleTypes, setArticleTypes] = useState<ArticleType[]>([])
  const [selectedType, setSelectedType] = useState<ArticleType | null>(null)
  const [articles, setArticles] = useState<Article[]>([])
  
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  
  // Article Type form state
  const [isTypeFormOpen, setIsTypeFormOpen] = useState(false)
  const [editingType, setEditingType] = useState<ArticleType | null>(null)
  const [typeFormData, setTypeFormData] = useState({ 
    name: ''
  })
  
  // Article form state
  const [isArticleFormOpen, setIsArticleFormOpen] = useState(false)
  const [editingArticle, setEditingArticle] = useState<Article | null>(null)
  const [articleFormData, setArticleFormData] = useState({ 
    title: '', 
    description: '',
    creator_name: '',
    creator_profile: '',
    date_published: '',
    image: ''
  })

  const loadArticleTypes = async () => {
    try {
      setIsLoading(true)
      const data = await articleTypeService.getAll()
      setArticleTypes(data)
      if (data.length > 0 && !selectedType) {
        setSelectedType(data[0])
        loadArticlesForType(data[0].id)
      }
    } catch (err) {
      setError('Failed to load article types')
      console.error('Load article types error:', err)
    } finally {
      setIsLoading(false)
    }
  }

  const loadArticlesForType = async (typeId: string) => {
    try {
      const allArticles = await articleService.getAll()
      const filteredArticles = allArticles.filter(article => article.article_type_id === typeId)
      setArticles(filteredArticles)
    } catch (err) {
      console.error('Load articles error:', err)
      setArticles([])
    }
  }

  useEffect(() => {
    loadArticleTypes()
  }, [])

  useEffect(() => {
    if (selectedType) {
      loadArticlesForType(selectedType.id)
    }
  }, [selectedType])

  // Article Type handlers
  const handleTypeSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      if (editingType) {
        const updated = await articleTypeService.update(editingType.id, typeFormData)
        setArticleTypes(articleTypes.map(t => t.id === updated.id ? updated : t))
        if (selectedType?.id === updated.id) {
          setSelectedType(updated)
        }
      } else {
        const newType = await articleTypeService.create(typeFormData)
        setArticleTypes([...articleTypes, newType])
        if (!selectedType) {
          setSelectedType(newType)
        }
      }
      
      setTypeFormData({ name: '' })
      setIsTypeFormOpen(false)
      setEditingType(null)
      setError(null)
    } catch (err) {
      setError('Failed to save article type')
      console.error('Save article type error:', err)
    }
  }

  const handleTypeEdit = (type: ArticleType) => {
    setEditingType(type)
    setTypeFormData({ 
      name: type.name
    })
    setIsTypeFormOpen(true)
  }

  const handleTypeDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this article type? This will also delete all associated articles.')) return
    
    try {
      await articleTypeService.delete(id)
      const updatedTypes = articleTypes.filter(t => t.id !== id)
      setArticleTypes(updatedTypes)
      if (selectedType?.id === id) {
        const newSelectedType = updatedTypes.length > 0 ? updatedTypes[0] : null
        setSelectedType(newSelectedType)
        if (newSelectedType) {
          loadArticlesForType(newSelectedType.id)
        } else {
          setArticles([])
        }
      }
    } catch (err) {
      setError('Failed to delete article type')
      console.error('Delete article type error:', err)
    }
  }

  // Article handlers
  const handleArticleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedType) return
    
    try {
      const articleData = { 
        ...articleFormData, 
        article_type_id: selectedType.id,
        date_published: articleFormData.date_published || new Date().toISOString().split('T')[0]
      }
      
      if (editingArticle) {
        await articleService.update(editingArticle.id, articleFormData)
      } else {
        await articleService.create(articleData)
      }
      
      // Reload articles for the selected type
      loadArticlesForType(selectedType.id)
      
      setArticleFormData({ 
        title: '', 
        description: '',
        creator_name: '',
        creator_profile: '',
        date_published: '',
        image: ''
      })
      setIsArticleFormOpen(false)
      setEditingArticle(null)
      setError(null)
    } catch (err) {
      setError('Failed to save article')
      console.error('Save article error:', err)
    }
  }

  const handleArticleEdit = (article: Article) => {
    setEditingArticle(article)
    setArticleFormData({ 
      title: article.title,
      description: article.description,
      creator_name: article.creator_name,
      creator_profile: article.creator_profile || '',
      date_published: article.date_published || '',
      image: article.image || ''
    })
    setIsArticleFormOpen(true)
  }

  const handleArticleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this article?')) return
    
    try {
      await articleService.delete(id)
      // Reload articles for the selected type
      if (selectedType) {
        loadArticlesForType(selectedType.id)
      }
    } catch (err) {
      setError('Failed to delete article')
      console.error('Delete article error:', err)
    }
  }

  if (isLoading) {
    return (
      <motion.div 
        className="p-6"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-vikasa-espresso"></div>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div 
      className="p-6 space-y-6"
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
    >
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-vikasa-espresso">Article Management</h2>
        <button
          onClick={() => setIsTypeFormOpen(true)}
          className="bg-vikasa-espresso text-white px-6 py-2 rounded-lg hover:bg-vikasa-espresso/90 transition duration-200"
        >
          Add Article Type
        </button>
      </div>

      {/* Error Alert */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Article Types List */}
        <div className="lg:col-span-1">
          <h3 className="text-lg font-semibold mb-4">Article Types</h3>
          <div className="space-y-2">
            {articleTypes.map((type) => (
              <div
                key={type.id}
                className={`p-3 rounded-lg cursor-pointer transition duration-200 ${
                  selectedType?.id === type.id
                    ? 'bg-vikasa-espresso text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
                onClick={() => setSelectedType(type)}
              >
                <h4 className="font-medium">{type.name}</h4>
                <div className="text-xs mt-1 opacity-70">
                  {selectedType?.id === type.id ? articles.length : 0} article{(selectedType?.id === type.id ? articles.length : 0) !== 1 ? 's' : ''}
                </div>
              </div>
            ))}
            {articleTypes.length === 0 && (
              <div className="text-center py-4 text-gray-500">
                No article types found
              </div>
            )}
          </div>
        </div>

        {/* Article Management */}
        <div className="lg:col-span-3">
          {selectedType ? (
            <>
              {/* Type Header */}
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-lg font-semibold">{selectedType.name}</h3>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setIsArticleFormOpen(true)}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-200"
                  >
                    Add Article
                  </button>
                  <button
                    onClick={() => handleTypeEdit(selectedType)}
                    className="text-blue-600 hover:text-blue-800 px-3 py-2 rounded"
                  >
                    Edit Type
                  </button>
                  <button
                    onClick={() => handleTypeDelete(selectedType.id)}
                    className="text-red-600 hover:text-red-800 px-3 py-2 rounded"
                  >
                    Delete Type
                  </button>
                </div>
              </div>

              {/* Articles Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {articles.map((article) => (
                  <div key={article.id} className="border rounded-lg p-4 space-y-3">
                    {article.image && (
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-32 object-cover rounded"
                      />
                    )}
                    
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">{article.title}</h4>
                      <p className="text-gray-600 text-sm line-clamp-2">{article.description}</p>
                    </div>
                    
                    <div className="flex justify-between items-center text-xs text-gray-500">
                      <div>
                        {article.creator_name && <span>By {article.creator_name}</span>}
                        {article.date_published && (
                          <span className={article.creator_name ? ' • ' : ''}>
                            {new Date(article.date_published).toLocaleDateString()}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex space-x-2 pt-2 border-t">
                      <button
                        onClick={() => handleArticleEdit(article)}
                        className="text-blue-600 hover:text-blue-800 px-2 py-1 rounded text-sm"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleArticleDelete(article.id)}
                        className="text-red-600 hover:text-red-800 px-2 py-1 rounded text-sm"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
                
                {articles.length === 0 && (
                  <div className="col-span-full text-center py-8 text-gray-500">
                    No articles found for this type. Add your first article to get started.
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="text-center py-12 text-gray-500">
              Select an article type to manage its articles
            </div>
          )}
        </div>
      </div>

      {/* Article Type Form Modal */}
      {isTypeFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold mb-4">
              {editingType ? 'Edit Article Type' : 'Add New Article Type'}
            </h3>
            
            <form onSubmit={handleTypeSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  value={typeFormData.name}
                  onChange={(e) => setTypeFormData({ ...typeFormData, name: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-vikasa-espresso"
                  placeholder="Enter article type name..."
                  required
                />
              </div>

              <div className="flex space-x-3">
                <button
                  type="submit"
                  className="flex-1 bg-vikasa-espresso text-white py-2 rounded-lg hover:bg-vikasa-espresso/90 transition duration-200"
                >
                  {editingType ? 'Update' : 'Create'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setTypeFormData({ name: '' })
                    setIsTypeFormOpen(false)
                    setEditingType(null)
                  }}
                  className="flex-1 bg-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-400 transition duration-200"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Article Form Modal */}
      {isArticleFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-y-auto">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl m-4">
            <h3 className="text-lg font-semibold mb-4">
              {editingArticle ? 'Edit Article' : 'Add New Article'}
            </h3>
            
            <form onSubmit={handleArticleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Title *
                  </label>
                  <input
                    type="text"
                    value={articleFormData.title}
                    onChange={(e) => setArticleFormData({ ...articleFormData, title: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-vikasa-espresso"
                    placeholder="Enter article title..."
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Creator Name
                  </label>
                  <input
                    type="text"
                    value={articleFormData.creator_name}
                    onChange={(e) => setArticleFormData({ ...articleFormData, creator_name: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-vikasa-espresso"
                    placeholder="Enter creator name..."
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description *
                </label>
                <textarea
                  value={articleFormData.description}
                  onChange={(e) => setArticleFormData({ ...articleFormData, description: e.target.value })}
                  rows={4}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-vikasa-espresso"
                  placeholder="Enter article description..."
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Published Date
                  </label>
                  <input
                    type="date"
                    value={articleFormData.date_published}
                    onChange={(e) => setArticleFormData({ ...articleFormData, date_published: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-vikasa-espresso"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Creator Profile
                  </label>
                  <input
                    type="text"
                    value={articleFormData.creator_profile}
                    onChange={(e) => setArticleFormData({ ...articleFormData, creator_profile: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-vikasa-espresso"
                    placeholder="Creator profile or role..."
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Image URL
                </label>
                <input
                  type="url"
                  value={articleFormData.image}
                  onChange={(e) => setArticleFormData({ ...articleFormData, image: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-vikasa-espresso"
                  placeholder="https://example.com/image.jpg"
                />
              </div>

              <div className="flex space-x-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-vikasa-espresso text-white py-2 rounded-lg hover:bg-vikasa-espresso/90 transition duration-200"
                >
                  {editingArticle ? 'Update' : 'Create'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setArticleFormData({ 
                      title: '', 
                      description: '',
                      creator_name: '',
                      creator_profile: '',
                      date_published: '',
                      image: ''
                    })
                    setIsArticleFormOpen(false)
                    setEditingArticle(null)
                  }}
                  className="flex-1 bg-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-400 transition duration-200"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </motion.div>
  )
}
