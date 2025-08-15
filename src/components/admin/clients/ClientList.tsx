import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Client } from '@/lib/supabaseService'

interface ClientListProps {
  clients: Client[]
  onEdit: (client: Client) => void
  onDelete: (id: string) => void
  onAdd: () => void
}

export default function ClientList({ clients, onEdit, onDelete, onAdd }: ClientListProps) {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium">Clients</h3>
        <button
          onClick={onAdd}
          className="bg-vikasa-espresso text-white px-4 py-2 rounded-md hover:bg-vikasa-espresso/90 transition-colors"
        >
          Add Client
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {clients.map((client) => (
          <div key={client.id} className="border rounded-lg p-4">
            <div className="flex items-center space-x-3 mb-3">
              {client.profile_image ? (
                <Image 
                  src={client.profile_image} 
                  alt={client.name}
                  width={48}
                  height={48}
                  className="object-cover rounded-full"
                />
              ) : (
                <div className="h-12 w-12 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-gray-600 text-sm font-medium">
                    {client.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                  </span>
                </div>
              )}
              <div className="flex-1">
                <h4 className="font-medium text-gray-900">{client.name}</h4>
                {client.position && client.company && (
                  <p className="text-sm text-gray-600">{client.position} at {client.company}</p>
                )}
              </div>
            </div>
            
            <p className="text-xs text-gray-400 mb-3">
              Created: {new Date(client.created_at).toLocaleDateString()}
            </p>
            
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => onEdit(client)}
                className="text-vikasa-latte hover:text-vikasa-espresso transition-colors p-1"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </button>
              <button
                onClick={() => onDelete(client.id)}
                className="text-red-500 hover:text-red-700 transition-colors p-1"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      {clients.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          <p>No clients added yet</p>
        </div>
      )}
    </div>
  )
}
