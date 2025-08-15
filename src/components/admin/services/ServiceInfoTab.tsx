import React from 'react'
import { Service } from '@/lib/supabaseService'

interface ServiceInfoTabProps {
  service: Service
  onEdit: (service: Service) => void
  onDelete: (id: string) => void
}

export default function ServiceInfoTab({ service, onEdit, onDelete }: ServiceInfoTabProps) {
  return (
    <div className="space-y-4">
      {/* Service Header */}
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">{service.title}</h3>
        <div className="flex space-x-2">
          <button
            onClick={() => onEdit(service)}
            className="text-blue-600 hover:text-blue-800 px-3 py-1 rounded"
          >
            Edit Service
          </button>
          <button
            onClick={() => onDelete(service.id)}
            className="text-red-600 hover:text-red-800 px-3 py-1 rounded"
          >
            Delete Service
          </button>
        </div>
      </div>

      {/* Service Content */}
      <div>
        <h4 className="font-medium text-gray-900 mb-2">Summary</h4>
        <p className="text-gray-600 leading-relaxed">{service.summary}</p>
      </div>
    </div>
  )
}
