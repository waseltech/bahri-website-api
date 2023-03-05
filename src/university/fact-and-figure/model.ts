import { Document, Model, model, Schema } from "mongoose";

export interface FactAndFigureAttrs {
  count: number;
  descriptionAr: string;
  descriptionEn: string;
}

export interface FactAndFigureDoc extends Document {
  count: number;
  descriptionAr: string;
  descriptionEn: string;
}

export interface FactAndFigureModel extends Model<FactAndFigureDoc> {
  build(attrs: FactAndFigureAttrs): FactAndFigureDoc;
}

const factAndFigureSchema = new Schema(
  {
    count: {
      type: Number,
      require: true,
    },
    descriptionAr: {
      type: String,
      require: true,
    },
    descriptionEn: {
      type: String,
      require: true,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
    timestamps: true,
  }
);

factAndFigureSchema.statics.build = (attrs: FactAndFigureAttrs) => {
  return new FactAndFigure(attrs);
};

export const FactAndFigure = model<FactAndFigureDoc, FactAndFigureModel>(
  "facts-and-figures",
  factAndFigureSchema
);
