import React from 'react'

interface ClientTabsProps {
  activeTab: 'clients' | 'feedbacks' | 'stories'
  onTabChange: (tab: 'clients' | 'feedbacks' | 'stories') => void
  clientsCount: number
  feedbacksCount: number
  storiesCount: number
}

export default function ClientTabs({ 
  activeTab, 
  onTabChange, 
  clientsCount, 
  feedbacksCount, 
  storiesCount 
}: ClientTabsProps) {
  return (
    <div className="border-b border-gray-200 mb-6">
      <nav className="-mb-px flex space-x-8">
        <button
          onClick={() => onTabChange('clients')}
          className={`py-2 px-1 border-b-2 font-medium text-sm ${
            activeTab === 'clients'
              ? 'border-vikasa-espresso text-vikasa-espresso'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
          }`}
        >
          Clients ({clientsCount})
        </button>
        <button
          onClick={() => onTabChange('feedbacks')}
          className={`py-2 px-1 border-b-2 font-medium text-sm ${
            activeTab === 'feedbacks'
              ? 'border-vikasa-espresso text-vikasa-espresso'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
          }`}
        >
          Feedbacks ({feedbacksCount})
        </button>
        <button
          onClick={() => onTabChange('stories')}
          className={`py-2 px-1 border-b-2 font-medium text-sm ${
            activeTab === 'stories'
              ? 'border-vikasa-espresso text-vikasa-espresso'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
          }`}
        >
          Success Stories ({storiesCount})
        </button>
      </nav>
    </div>
  )
}
