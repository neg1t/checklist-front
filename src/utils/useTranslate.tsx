import { useStore } from 'effector-react'
import { $translate } from 'stores/translate'

type Path = 'main'

export const useTranslate = (path: Path, word: string) => {
    const locale = useStore($translate)
    return require(`../lang/${locale}/${path}`)[word]
}
