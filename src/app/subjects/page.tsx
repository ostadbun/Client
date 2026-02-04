import CourseInfo from "./CourseInfo";
import RelevantCourses from "./RelevantCourses";
import RelevantProfessors from "./RelevantProfessors";
import Votes from "../professors/Votes";
import { ColumnDef } from "@tanstack/react-table"

export type RelevantProfessors = {
    id: number
    name: string
    rating: number
    href: string
}
const Subjects = () => {


    // This type is used to define the shape of our data.
    // You can use a Zod schema here if you want.

    const columns: ColumnDef<RelevantProfessors>[] = [
        {
            accessorKey: "id",
            header: "رقم",
        },
        {
            accessorKey: "name",
            header: "نام استاد",
        },
        {
            accessorKey: "rating",
            header: "نمره کل",
        },
        {
            accessorKey: "href",
            header: "صفحه استاد",
        },
    ]



    const data: RelevantProfessors[] = [
        {
            href: "a", id: 1, name: "مدائنی", rating: 2
        },
        {
            href: "b", id: 2, name: "اردوخانی", rating: 32
        },
        {
            href: "c", id: 3, name: "جلالی", rating: 244
        },
        {
            href: "d", id: 4, name: "احسانی", rating: 25550
        },
    ]
 
    return (
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-14 lg:px-0 md:gap-x-16">
            <CourseInfo />
            <RelevantProfessors columns={columns} data={data} />
            <RelevantCourses columns={columns} data={data}/>
        </div>
    );
}

export default Subjects;




