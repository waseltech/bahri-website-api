import { Document, Model, model, Schema} from "mongoose"



export interface NewsAttrs {
    titleAr: string
    titleEn: string
    descriptionAr: string
    descriptionEn: string
    images?: string[]
}


export interface NewsDoc extends Document {
    titleAr: string
    titleEn: string
    descriptionAr: string
    descriptionEn: string
    images?: string[]
}

export interface NewsModel extends Model<NewsDoc> {
    build(attrs: NewsAttrs): NewsDoc
}

const newsSchema = new Schema({
    titleAr: {
        type: String,
        require: true,
    },
    titleEn: {
        type: String,
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
    
    images: [
       { type: String, default: []}
    ]

},
{
    toJSON: {
        transform(doc, ret) {
          ret.id = ret._id;
          delete ret._id;
          delete ret.__v;
        },
      },
      timestamps: true
})

newsSchema.statics.build = (attrs: NewsAttrs) => {
    return new News(attrs)
}

export const News = model<NewsDoc, NewsModel>("News", newsSchema)