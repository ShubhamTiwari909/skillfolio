import React, { useEffect } from 'react'

const HeaderTheme = () => {
    const [theme, setTheme] = React.useState<string | null>('light')
    useEffect(() => {
        if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
            const theme = localStorage.getItem('theme');
            setTheme(theme)
        }
    }, [theme ])
    return (
        <></>
    )
}

export default HeaderTheme
