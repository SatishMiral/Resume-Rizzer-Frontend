import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { tailorResumeAPI } from "../services/resumeAPI";
import axios from "axios";

export const tailorResume = createAsyncThunk(
  "resume/tailorResume",
  async ({ file, jdText }, { rejectWithValue }) => {
    try {
      const response = await tailorResumeAPI(file, jdText); // await here
      console.log("Response headers:", response.headers);
      console.log("Response type:", response.data?.type);

      if (!response || !response.data) {
        throw new Error("Empty response from backend");
      }

      const blob = new Blob([response.data], {
        type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      });
      const downloadUrl = window.URL.createObjectURL(blob);

      return { downloadUrl };
    } catch (error) {
      console.error("Tailor Resume Error:", error);

      if (axios.isAxiosError(error)) {
        if (error.response) {
          return rejectWithValue(
            `Server responded with ${error.response.status}`
          );
        } else if (error.request) {
          return rejectWithValue("No response from server");
        }
      }

      return rejectWithValue("Unexpected error tailoring resume");
    }
  }
);

const resumeSlice = createSlice({
  name: "resume",
  initialState: {
    uploadedFile: null,
    tailoredResumeUrl: null,
    loading: false,
    error: null,
  },
  reducers: {
    setUploadedFile: (state, action) => {
      state.uploadedFile = action.payload;
    },
    resetResume: (state) => {
      state.uploadedFile = null;
      state.tailoredResumeUrl = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(tailorResume.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(tailorResume.fulfilled, (state, action) => {
        state.loading = false;
        state.tailoredResumeUrl = action.payload.downloadUrl;
      })
      .addCase(tailorResume.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setUploadedFile, resetResume } = resumeSlice.actions;
export default resumeSlice.reducer;
