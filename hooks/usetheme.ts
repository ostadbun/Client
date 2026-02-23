import { useTheme } from "next-themes"

const useThemeIsDark = (): boolean => {

    const dark = "dark"
    const light = "light"
    const system = "system"

    const { systemTheme, theme } = useTheme()



    if (!theme) return systemTheme === "dark";

    return theme === "dark" || (theme === "system" && systemTheme === "dark");






}


export default useThemeIsDark