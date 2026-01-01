import CourseInfo from "./CourseInfo";
import RelevantCourses from "./RelevantCourses";
import RelevantProfessors from "./RelevantProfessors";
import Votes from "../professors/Votes";

const Subjects = () => {
    return ( 
        <div className="flex justify-center">
            <CourseInfo/>
            <RelevantProfessors/>
            <RelevantCourses/>
        </div>
     );
}

export default Subjects;