import { atom } from 'nanostores'

export const isOpen = atom(false)

export function toggle() {
    isOpen.set(!isOpen.get())
}

export function open() {
    isOpen.set(true)
}

export function close() {
    isOpen.set(false)
}