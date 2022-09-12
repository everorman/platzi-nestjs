import { NextApiRequest, NextApiResponse } from "next";
import DB from "@database";

const allAvo = async (request: NextApiRequest, response: NextApiResponse)=>{
  const db = new DB()
  const data = await db.getAll()

  response.status(200).json(data)
}

export default allAvo;