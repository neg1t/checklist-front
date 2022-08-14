import { createStore } from 'effector'
export type Local = 'ru' | 'en'

//? stores

export const $translate = createStore<Local>('ru')
