import SectionTitle from '@/components/shared/SectionTitle'
import React from 'react'
import appData from 'Public/data/appData.json'
import { TbAppWindow, TbCode, TbDeviceAnalytics } from 'react-icons/tb'
import classNames from 'classnames'
import { ServiceType } from '@/types'
import { IconType } from 'react-icons'

const ServicesSection = () => {
  const iconHandler: (iconName: ServiceType['icon']) => IconType = iconName => {
    switch (iconName) {
      case 'TbCode':
        return TbCode
      case 'TbDeviceAnalytics':
        return TbDeviceAnalytics
      case 'TbAppWindow':
        return TbAppWindow
      default:
        return TbCode
    }
  }

  return (
    <section className='bg-background-200 py-header'>
      <div className='container'>
        <SectionTitle>Services</SectionTitle>
        <div className='grid grid-cols-1 gap-5 sm:grid-cols-3'>
          {appData.servicesSection.map(({ title, description, icon }: ServiceType) => {
            const Icon = iconHandler(icon)
            return (
              <article className='card rounded-lg' key={title}>
                <div className='mb-5 flex aspect-square h-14 w-14 items-center justify-center rounded-md bg-rose-500/20'>
                  <Icon className={classNames('text-3xl text-red-500')} />
                </div>
                <h5 className='mb-2 text-lg font-bold'>{title}</h5>
                <p className='font-light'>{description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
