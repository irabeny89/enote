import Router from 'next/router'
import { save } from '../controllers/crud'

export const useSave = input => () => (save(input), Router.push('/'))
