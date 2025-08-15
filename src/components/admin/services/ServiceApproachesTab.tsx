import React from 'react'
import { ServiceApproach } from '@/lib/supabaseService'
import RichTextViewer from '@/components/ui/RichTextViewer'

interface ServiceApproachesTabProps {
  approaches: ServiceApproach[] | undefined
  onAddApproach: () => void
  onEditApproach: (approach: ServiceApproach) => void
  onDeleteApproach: (id: string) => void
}

export default function ServiceApproachesTab({ 
  approaches, 
  onAddApproach, 
  onEditApproach, 
  onDeleteApproach 
}: ServiceApproachesTabProps) {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h4 className="font-medium text-gray-900">Service Approaches</h4>
        <button
          onClick={onAddApproach}
          className="bg-vikasa-espresso text-white px-4 py-2 rounded-lg hover:bg-vikasa-espresso/90 transition duration-200"
        >
          Add Approach
        </button>
      </div>
      
      <div className="space-y-3">
        {approaches?.map((approach) => (
          <div key={approach.id} className="border rounded-lg p-4">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h5 className="font-medium text-gray-900 mb-2">{approach.title}</h5>
                <RichTextViewer 
                  content={approach.description} 
                  className="text-sm text-gray-600"
                />
              </div>
              <div className="flex space-x-2 ml-4">
                <button
                  onClick={() => onEditApproach(approach)}
                  className="text-blue-600 hover:text-blue-800 px-2 py-1 rounded text-sm"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDeleteApproach(approach.id)}
                  className="text-red-600 hover:text-red-800 px-2 py-1 rounded text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )) ?? (
          <div className="text-center py-8 text-gray-500">
            No service approaches found. Add your first approach to get started.
          </div>
        )}
      </div>
    </div>
  )
}
