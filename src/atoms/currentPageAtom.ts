import { atom } from 'jotai'

export const currentPageAtom = atom<'new' | 'list'>('new')
