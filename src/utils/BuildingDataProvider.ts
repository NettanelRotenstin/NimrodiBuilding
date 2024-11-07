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
  switch (floorIndex) {
    case 1:
      return building.find((f: { name: string; }) => f.name == "First Floor")
    case 2:
      return building.find((f: { name: string; }) => f.name == "Second Floor")
    case 3:
      return building.find((f: { name: string; }) => f.name == "Third Floor")
    case 4:
      return building.find((f: { name: string; }) => f.name == "Fourth Floor")
    case 5:
      return building.find((f: { name: string; }) => f.name == "Fifth Floor")

    default:
      break;
  }

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
