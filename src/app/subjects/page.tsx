import CourseInfo from "./CourseInfo";
import RelevantCourses from "./RelevantCourses";
import RelevantProfessors from "./RelevantProfessors";
import Votes from "./Votes";

const Subjects = () => {
    return ( 
        <div className="flex justify-center">
            <CourseInfo/>
            <Votes/>
            <RelevantProfessors/>
            <RelevantCourses/>
        </div>
     );
}

export default Subjects;