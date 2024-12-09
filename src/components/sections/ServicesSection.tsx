import SectionTitle from '@/components/shared/SectionTitle'
import React from 'react'
import appData from 'Public/data/appData.json'
import { TbAppWindow, TbCode, TbDeviceAnalytics } from 'react-icons/tb'
import classNames from 'classnames'

// ** Type
type DataType = {
  title: string
  description: string
  icon: string
}

const ServicesSection = () => {
  return (
    <section className='bg-background-200 py-header'>
      <div className='container'>
        <SectionTitle>Services</SectionTitle>
        <div className='grid grid-cols-1 gap-5 sm:grid-cols-3'>
          {appData.servicesSection.map(({ title, description, icon }: DataType) => {
            const Icon =
              icon === 'TbCode'
                ? TbCode
                : icon === 'TbDeviceAnalytics'
                  ? TbDeviceAnalytics
                  : icon === 'TbAppWindow'
                    ? TbAppWindow
                    : TbCode
            return (
              <article className='card rounded-lg p-5' key={title}>
                <div className='mb-5 flex aspect-square w-fit items-center justify-center rounded-md bg-rose-500/20 p-2'>
                  <Icon className={classNames('text-2xl text-red-500')} />
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
