import React from 'react'
import { ServiceDetail } from '@/lib/supabaseService'
import RichTextViewer from '@/components/ui/RichTextViewer'

interface ServiceDetailsTabProps {
  details: ServiceDetail[] | undefined
  onAddDetail: () => void
  onEditDetail: (detail: ServiceDetail) => void
  onDeleteDetail: (id: string) => void
}

export default function ServiceDetailsTab({ 
  details, 
  onAddDetail, 
  onEditDetail, 
  onDeleteDetail 
}: ServiceDetailsTabProps) {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h4 className="font-medium text-gray-900">Service Details</h4>
        <button
          onClick={onAddDetail}
          className="bg-vikasa-espresso text-white px-4 py-2 rounded-lg hover:bg-vikasa-espresso/90 transition duration-200"
        >
          Add Detail
        </button>
      </div>
      
      <div className="space-y-3">
        {details?.map((detail) => (
          <div key={detail.id} className="border rounded-lg p-4">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h5 className="font-medium text-gray-900 mb-2">{detail.title}</h5>
                <RichTextViewer 
                  content={detail.description} 
                  className="text-sm text-gray-600"
                />
              </div>
              <div className="flex space-x-2 ml-4">
                <button
                  onClick={() => onEditDetail(detail)}
                  className="text-blue-600 hover:text-blue-800 px-2 py-1 rounded text-sm"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDeleteDetail(detail.id)}
                  className="text-red-600 hover:text-red-800 px-2 py-1 rounded text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )) ?? (
          <div className="text-center py-8 text-gray-500">
            No service details found. Add your first detail to get started.
          </div>
        )}
      </div>
    </div>
  )
}
