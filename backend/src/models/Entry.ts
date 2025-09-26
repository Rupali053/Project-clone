// import mongoose, { Schema, Document } from "mongoose";

// export interface IEntry extends Document {
//   startupName: string;
//   founderName: string;
//   website?: string;
//   linkedin?: string;
//   foundedYear: string;
//   shutdownYear?: string;
//   category: string;
//   cofounders?: string;
//   anonymous: boolean;
//   public: boolean;
//   shortSummary: string;
//   keyLearnings: string;
//   failureReasons: string[];
//   tryAgain: string;
//   files: string[];
// }

// const entrySchema = new Schema<IEntry>(
//   {
//     startupName: { type: String, required: true },
//     founderName: { type: String },
//     website: String,
//     linkedin: String,
//     foundedYear: { type: String, required: true },
//     shutdownYear: String,
//     category: String,
//     cofounders: String,
//     anonymous: { type: Boolean, default: false },
//     public: { type: Boolean, default: true },
//     shortSummary: { type: String, required: true },
//     keyLearnings: { type: String, required: true },
//     failureReasons: [String],
//     tryAgain: { type: String, enum: ["yes", "no", "maybe"], default: "maybe" },
//     files: [String],
//   },
//   { timestamps: true }
// );

// export default mongoose.model<IEntry>("Entry", entrySchema);







import mongoose, { Schema, Document } from "mongoose";

export interface IFile {
  name: string;
  type: string;
  size: number;
  url?: string; // optional (agar future me S3/Cloudinary link store karna ho)
}

export interface IEntry extends Document {
  startupName: string;
  founderName: string;
  website?: string;
  linkedin?: string;
  foundedYear: string;
  shutdownYear?: string;
  category: string;
  cofounders?: string;
  anonymous: boolean;
  public: boolean;
  shortSummary: string;
  keyLearnings: string;
  failureReasons: string[];
  tryAgain: string;
  files: IFile[]; // 👈 ab file objects aayenge
}

const fileSchema = new Schema<IFile>({
  name: { type: String, required: true },
  type: { type: String, required: true },
  size: { type: Number, required: true },
  url: { type: String }, // optional
});

const entrySchema = new Schema<IEntry>(
  {
    startupName: { type: String, required: true },
    founderName: { type: String },
    website: String,
    linkedin: String,
    foundedYear: { type: String, required: true },
    shutdownYear: String,
    category: String,
    cofounders: String,
    anonymous: { type: Boolean, default: false },
    public: { type: Boolean, default: true },
    shortSummary: { type: String, required: true },
    keyLearnings: { type: String, required: true },
    failureReasons: [String],
    tryAgain: { type: String, enum: ["yes", "no", "maybe"], default: "maybe" },
    files: [fileSchema], // 👈 file schema embed kiya
  },
  { timestamps: true }
);

export default mongoose.model<IEntry>("Entry", entrySchema);
