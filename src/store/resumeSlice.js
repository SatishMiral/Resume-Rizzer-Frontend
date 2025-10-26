// src/store/slices/resumeSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { tailorResumeAPI } from "../services/resumeAPI";
import axios from "axios";

export const tailorResume = createAsyncThunk(
  "resume/tailorResume",
  async ({ file, jdText }, { rejectWithValue }) => {
    try {
      // Your existing API call
      const response = await tailorResumeAPI(file, jdText);
      console.log("Response headers:", response.headers);

      if (!response || !response.data) {
        throw new Error("Empty response from backend");
      }

      const blob = new Blob([response.data], {
        type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      });

      const downloadUrl = window.URL.createObjectURL(blob);
      const tailoredFile = new File([blob], "tailored_resume.docx", {
        type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      });

      // Mock changes data - replace with actual data from your LLM
      // In production, this should come from your backend response
      const changes = [
        {
          from_sentence: "Managed team projects",
          to_sentence:
            "Led cross-functional team of 5 engineers to deliver projects 20% ahead of schedule",
          bold_words: ["Led", "20%"],
          italic_words: [],
        },
        // Add more changes as returned by your LLM
      ];

      return {
        downloadUrl,
        tailoredFile,
        changes, // Add changes information
      };
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
    tailoredResumeFile: null,
    changes: [], // Add this
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
      state.tailoredResumeFile = null;
      state.changes = []; // Add this
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
        state.tailoredResumeFile = action.payload.tailoredFile;
        state.changes = action.payload.changes; // Add this
      })
      .addCase(tailorResume.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setUploadedFile, resetResume } = resumeSlice.actions;
export default resumeSlice.reducer;
