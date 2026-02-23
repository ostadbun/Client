const usehardness = () => {



    return hardnesser


}


export default usehardness



const hardnesser = (level: number): string => {

    switch (level) {
        case 1:
            return "ساده"
        case 2:
            return "معمولی"


        case 3:

            return "متوسط"

        case 4:

            return "سخت"

        case 5:

            return "وحشتناک"
        default:
            return ""

    }
}