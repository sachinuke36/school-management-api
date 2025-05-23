import haversine from "../utils/distance";
import db from "../config/db";
import { Request, Response } from "express";

type School={
    id?: number,
    name: string,
    address: string,
    latitude: number,
    longitude: number

}

export async function add_school(req: Request, res: Response):Promise<any>{
    const { name, address, latitude, longitude }:School = req.body;

    if( !name || !address || isNaN(latitude) || isNaN(longitude)) return res.status(400).json({error: "Invalid input fields"});
    try {

       const response =  await db.execute(
      'INSERT INTO schoolInfo (name, address, latitude, longitude) VALUES (?, ?, ?, ?)',
      [ name, address, latitude, longitude]
    );
   
    return res.status(201).json({ message: 'School added successfully' });

    } catch (error: any) {
        console.log(error.message)
       return res.status(500).json({ error: 'Database error' });
    }

}


export default async function listSchools(req: Request, res: Response): Promise<any> {
  const userLat = parseFloat(req.query.latitude as string);
  const userLon = parseFloat(req.query.longitude as string);

  if (isNaN(userLat) || isNaN(userLon)) {
    return res.status(400).json({ error: 'Invalid coordinates' });
  }

  try {
    const [rows] = await db.execute('SELECT * FROM schoolInfo');
    const schools = Array.isArray(rows) ? rows : [];
    const sorted = schools.map((school: any) => ({
      ...school,
      distance: haversine(userLat, userLon, school.latitude, school.longitude)
    })).sort((a: any, b: any) => a.distance - b.distance);

   return res.json(sorted);
  } catch (error) {
    res.status(500).json({ error: 'Database error' });
  }
};