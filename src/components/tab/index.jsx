import React from 'react'
import { tabstar } from 'assets'
import SelectedTab from './SelectedTab'
import styles from './tab.module.css'

const tabs = [
  {
    name: 'any',
    value: 'any',
  },
  {
    name: 'three',
    value: '3.0+',
    icon: tabstar,
  },
  {
    name: 'four',
    value: '4.0+',
    icon: tabstar,
  },
  {
    name: 'fourandhalf',
    value: '4.5+',
    icon: tabstar,
  },
]

const FilterTab = ({ currentTab, onTabCLick }) => {
  return (
    <ul className={styles.tablists}>
      {tabs.map(({ name, value, icon }) => (
        <SelectedTab
          key={value}
          icon={icon}
          name={value}
          className={currentTab === name ? styles.activeTab : ''}
          onCLick={() => onTabCLick(name)}
        />
      ))}
    </ul>
  )
}

export default FilterTab
