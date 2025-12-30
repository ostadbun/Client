import CourseInfo from "./CourseInfo";
import RelevantCourses from "./RelevantCourses";
import RelevantProfessors from "./RelevantProfessors";
import Votes from "./Votes";

const Subjects = () => {
    return ( 
        <div className="">
            <CourseInfo/>
            <RelevantProfessors/>
            <RelevantCourses/>
            <Votes/>
        </div>
     );
}

export default Subjects;