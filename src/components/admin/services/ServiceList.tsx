import React from 'react'
import { Service } from '@/lib/supabaseService'

interface ServiceListProps {
  services: Service[]
  selectedService: Service | null
  onServiceSelect: (service: Service) => void
  onAddService: () => void
}

export default function ServiceList({ 
  services, 
  selectedService, 
  onServiceSelect, 
  onAddService 
}: ServiceListProps) {
  return (
    <div className="lg:col-span-1">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Services</h3>
        <button
          onClick={onAddService}
          className="bg-vikasa-espresso text-white px-4 py-2 rounded-lg hover:bg-vikasa-espresso/90 transition duration-200 text-sm"
        >
          Add Service
        </button>
      </div>
      
      <div className="space-y-2">
        {services.map((service) => (
          <div
            key={service.id}
            className={`p-3 rounded-lg cursor-pointer transition duration-200 ${
              selectedService?.id === service.id
                ? 'bg-vikasa-espresso text-white'
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
            onClick={() => onServiceSelect(service)}
          >
            <h4 className="font-medium">{service.title}</h4>
            <p className="text-sm opacity-80 line-clamp-2">{service.summary}</p>
          </div>
        ))}
        {services.length === 0 && (
          <div className="text-center py-4 text-gray-500">
            No services found
          </div>
        )}
      </div>
    </div>
  )
}
