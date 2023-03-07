import mongoose from "mongoose";

export interface SortDocData {
  id: string;
  seqNo: number;
}

export function BulkArray(sorts: SortDocData[]) {
  let bulkArr = [];

  for (const i of sorts) {
    bulkArr.push({
      updateOne: {
        filter: { _id: new mongoose.Types.ObjectId(i.id) },
        update: { seqNo: i.seqNo },
      },
    });
  }

  return bulkArr;
}
