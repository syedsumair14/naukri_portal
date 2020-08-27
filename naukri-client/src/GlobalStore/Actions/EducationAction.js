import Axios from "axios";
import { BASE_URL } from "../../utils/NetworkLayer";
import { object } from "yup";

export const educationUpdateAction = (body) => (dispatch) => {
  let newOtherEducation = [];
  let checkOtherEducation = body.otherEducation.map((obj) => {
    let valuesOfObject = Object.values(obj);
    let checkForEmpty = valuesOfObject.every((el) => el == "");
    if (!checkForEmpty) newOtherEducation.push(obj);
  });
  console.log(newOtherEducation, "NEW");
  let data = {
    highest_qualification: body.highestQualification,
    course: body.course,
    board: body.board,
    year_of_passing: body.passingYear,
    medium: body.medium,
    percentage: body.percentage,
    specialization: body.specialization,
    university_college: body.uniCol,
    course_type: body.courseType,
    passing_year: body.uniPassingYear,
    other_education: body.otherEducation,
  };

  try {
    let updateEducation = Axios.put(BASE_URL + "user/educationUpdate", data);
    console.log(updateEducation);
  } catch (error) {
    console.log(error);
  }
};
