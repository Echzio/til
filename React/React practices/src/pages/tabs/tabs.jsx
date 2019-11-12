import React, { useState } from 'react'
import { tabs } from './static/index'


const Tabs = () => {
  const [activeTab, setActiveTab] = useState(null);
  const [tabContent, setTabContent] = useState('');

  const changeTab = id => {
    const [currentTab] = tabs.filter(item => item.id === id);
    setActiveTab(id)
    setTabContent(currentTab.desc)
  }

  return (
    <>
      <div>
        {tabs.map(item => (
          <span
            className={activeTab === item.id ? 'active' : ''}
            onClick={() => changeTab(item.id)}
            key={item.id}>
            {item.name}
          </span>
        ))}
      </div>
      <div style={{ marginTop: '1.5rem' }}>
        {tabContent}
      </div>
    </>
  )
}

export default Tabs