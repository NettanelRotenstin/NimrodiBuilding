import { useState, useEffect } from 'react';
import  building from '../data/building.json'

interface Floor {
  name: string;
  soldiers: number;
  purpose: string;
  description: string;
  activity: string
}

const useBuildingData = () => {
  const [buildingData, setBuildingData] = useState<Floor[]>([]);

  //FILL HERE LOGIC TO SET THE BUILDING DATA
  setBuildingData(building)

 const getFloorByIndex = (floorIndex : number) => {
  //FILL HERE
   return building[floorIndex]

}
const getListOfActivities = () => {
  //FILL HERE
  return building.map((a: { activity: string; }) => a.activity)
}
return {
  buildingData,
  getFloorByIndex,
  getListOfActivities
};
};


export default useBuildingData;
