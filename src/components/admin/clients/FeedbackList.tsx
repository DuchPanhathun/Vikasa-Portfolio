import React from 'react'
import { Feedback } from '@/lib/supabaseService'

interface FeedbackListProps {
  feedbacks: Feedback[]
  onEdit: (feedback: Feedback) => void
  onDelete: (id: string) => void
  onAdd: () => void
  clientsExist: boolean
}

export default function FeedbackList({ 
  feedbacks, 
  onEdit, 
  onDelete, 
  onAdd, 
  clientsExist 
}: FeedbackListProps) {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium">Client Feedbacks</h3>
        <button
          onClick={onAdd}
          disabled={!clientsExist}
          className="bg-vikasa-espresso text-white px-4 py-2 rounded-md hover:bg-vikasa-espresso/90 transition-colors disabled:opacity-50"
        >
          Add Feedback
        </button>
      </div>

      {!clientsExist && (
        <div className="text-center py-8 text-gray-500">
          <p>Please add clients first before creating feedbacks</p>
        </div>
      )}

      <div className="space-y-4">
        {feedbacks.map((feedback) => (
          <div key={feedback.id} className="border rounded-lg p-4">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <h4 className="font-medium text-gray-900">
                    {feedback.client?.name || 'Unknown Client'}
                  </h4>
                  <div className="flex">
                    {Array.from({ length: 5 }, (_, i) => (
                      <svg
                        key={i}
                        className={`h-4 w-4 ${i < feedback.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-2">{feedback.feedback}</p>
                <p className="text-xs text-gray-400">
                  Created: {new Date(feedback.created_at).toLocaleDateString()}
                </p>
              </div>
              
              <div className="flex space-x-2 ml-4">
                <button
                  onClick={() => onEdit(feedback)}
                  className="text-vikasa-latte hover:text-vikasa-espresso transition-colors p-1"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </button>
                <button
                  onClick={() => onDelete(feedback.id)}
                  className="text-red-500 hover:text-red-700 transition-colors p-1"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {feedbacks.length === 0 && clientsExist && (
        <div className="text-center py-8 text-gray-500">
          <p>No feedbacks added yet</p>
        </div>
      )}
    </div>
  )
}
