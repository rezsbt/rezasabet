'use client'

import { ChildrenProps } from '@/utils/types.util'
import { motion } from 'framer-motion'

const SectionTitle = ({ children }: ChildrenProps) => (
  <motion.h4
    initial={{ x: -50, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.25, delay: 0.1 }}
    className='mb-5 text-3xl font-semibold'
    viewport={{ once: true }}
  >
    {children}
  </motion.h4>
)

export default SectionTitle
