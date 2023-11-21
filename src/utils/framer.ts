import { AnimationProps } from 'framer-motion'

export const ease = [0.6, 0.01, 0.05, 0.95]

export const formVariants: AnimationProps['variants'] = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { ease: 'easeInOut' } },
}

export const logoVariants: AnimationProps['variants'] = {
  hidden: { opacity: 0, scale: 0.8, y: -100 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: 'spring', bounce: 0.55 },
  },
}

export const getFadeInProps = (
  delay = 0.5,
  whileInView = false
): AnimationProps => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { delay, ...(whileInView && { when: 'beforeChildren' }) },
})
