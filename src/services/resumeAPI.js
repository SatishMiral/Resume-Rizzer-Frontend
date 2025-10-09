import axios from "axios";

const API_URL = "http://127.0.0.1:8000/resume/tailor_resume";

export const tailorResumeAPI = async (file, jdText) => {
  const formData = new FormData();
  formData.append("resume", file);
  formData.append("jd_text", jdText);

  return axios.post(API_URL, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    responseType: "blob", // important for .docx stream
    validateStatus: (status) => status < 500, // treat 200–499 as resolved
  });
};
