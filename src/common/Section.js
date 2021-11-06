import tw from 'tailwind-styled-components'
import Content from './Content'

export const Section = tw(Content)`py-4 md:py-10`
export const SectionTitle = tw.h2`font-display font-bold text-gray-800 dark:text-white text-2xl mb-4`

export const HSection = tw(Section)`md:grid md:grid-cols-2 space-x-2 max-w-6xl`
export const WideHSection = tw(HSection)`gap-x-12`

export const GridSection = tw.div`bg-gray-100 dark:bg-gray-950 py-4 px-8 rounded-lg`
export const GridSectionTitle = tw(SectionTitle)`text-left lg:text-center`
