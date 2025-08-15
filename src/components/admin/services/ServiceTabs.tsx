import React from 'react'

interface ServiceTabsProps {
  activeTab: 'service' | 'details' | 'approaches'
  onTabChange: (tab: 'service' | 'details' | 'approaches') => void
}

export default function ServiceTabs({ activeTab, onTabChange }: ServiceTabsProps) {
  const tabs = [
    { id: 'service' as const, label: 'Service Info' },
    { id: 'details' as const, label: 'Service Details' },
    { id: 'approaches' as const, label: 'Service Approaches' }
  ]

  return (
    <div className="border-b mb-6">
      <div className="flex space-x-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === tab.id
                ? 'border-vikasa-espresso text-vikasa-espresso'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } transition-colors`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  )
}
