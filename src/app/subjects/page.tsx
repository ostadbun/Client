import CourseInfo from "./CourseInfo";
import RelevantCourses from "./RelevantCourses";
import RelevantProfessors from "./RelevantProfessors";
import Votes from "../professors/Votes";

const Subjects = () => {
    return ( 
        <div className="flex flex-wrap justify-center gap-x-20 gap-y-14">
            <CourseInfo/>
            <RelevantProfessors/>
            <RelevantCourses/>
        </div>
     );
}

export default Subjects;