'use client'

import { useRouter } from "next/navigation";
import { useEffect } from "react"

export default function ChangeMode() {
    useEffect(() => {
        const cookieValue = ('; ' + document.cookie).split('; mode=');
        const lastPart = cookieValue.length > 1 ? cookieValue.pop() : '';
        const mode = lastPart ? lastPart.split(';')[0] : '';
        if (mode === '') {
            document.cookie = 'mode=light; path=/; max-age=' + (3600 * 24 * 400);
        }
    }, [])
    const router = useRouter()
    return (
        <div onClick={() => {
            const cookieValue = ('; ' + document.cookie).split('; mode=');
            const lastPart = cookieValue.length > 1 ? cookieValue.pop() : '';
            const mode = lastPart ? lastPart.split(';')[0] : '';
            if (mode === 'light' || mode === '') {
                document.cookie = 'mode=dark; path=/; max-age=' + (3600 * 24 * 400);
            } else if (mode === 'dark') {
                document.cookie = 'mode=light; path=/; max-age=' + (3600 * 24 * 400);
            }
            router.refresh()
        }}>button</div>
    )
}