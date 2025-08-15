import React from 'react'
import Image from 'next/image'
import { SuccessStory } from '@/lib/supabaseService'

interface SuccessStoryListProps {
  stories: SuccessStory[]
  onEdit: (story: SuccessStory) => void
  onDelete: (id: string) => void
  onAdd: () => void
  clientsExist: boolean
}

export default function SuccessStoryList({ 
  stories, 
  onEdit, 
  onDelete, 
  onAdd, 
  clientsExist 
}: SuccessStoryListProps) {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium">Success Stories</h3>
        <button
          onClick={onAdd}
          disabled={!clientsExist}
          className="bg-vikasa-espresso text-white px-4 py-2 rounded-md hover:bg-vikasa-espresso/90 transition-colors disabled:opacity-50"
        >
          Add Success Story
        </button>
      </div>

      {!clientsExist && (
        <div className="text-center py-8 text-gray-500">
          <p>Please add clients first before creating success stories</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {stories.map((story) => (
          <div key={story.id} className="border rounded-lg overflow-hidden">
            {story.image && (
              <Image 
                src={story.image} 
                alt={story.title}
                width={400}
                height={192}
                className="object-cover w-full"
              />
            )}
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-medium text-gray-900">{story.title}</h4>
                <div className="flex space-x-2 ml-4">
                  <button
                    onClick={() => onEdit(story)}
                    className="text-vikasa-latte hover:text-vikasa-espresso transition-colors p-1"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </button>
                  <button
                    onClick={() => onDelete(story.id)}
                    className="text-red-500 hover:text-red-700 transition-colors p-1"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-2">
                Client: {story.client?.name || 'Unknown Client'}
              </p>
              <p className="text-gray-600 mb-2">{story.description}</p>
              <p className="text-xs text-gray-400">
                Created: {new Date(story.created_at).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>

      {stories.length === 0 && clientsExist && (
        <div className="text-center py-8 text-gray-500">
          <p>No success stories added yet</p>
        </div>
      )}
    </div>
  )
}
