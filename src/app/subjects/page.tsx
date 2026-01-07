import CourseInfo from "./CourseInfo";
import RelevantCourses from "./RelevantCourses";
import RelevantProfessors from "./RelevantProfessors";
import Votes from "../professors/Votes";

const Subjects = () => {
    return ( 
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-14 lg:px-0 md:gap-x-16">
            <CourseInfo/>
            <RelevantProfessors/>
            <RelevantCourses/>
        </div>
     );
}

export default Subjects;




