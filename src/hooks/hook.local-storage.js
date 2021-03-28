import Router from 'next/router'
import { save } from '../storage/local-storage/crud'

export const useSave = () => input => (save(input), Router.push('/'))
