import { useState, useEffect } from 'react';
import fs from 'fs/promises'

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
    const fetchData = async ():Promise<Floor[]> => {
      const floorString: string = await fs.readFile(`./data/building.json`, `utf-8`)
      const finalData:Floor[] = await JSON.parse(floorString)
      await setBuildingData(finalData)
      return finalData
    }
  fetchData();

const getFloorByIndex = async (floorIndex: number): Promise<Floor | undefined> => {
  //FILL HERE
  const allData:Floor[] = await fetchData()
  switch (floorIndex) {
    case 1:
      return allData.find(f => f.name == "First Floor")
    case 2:
      return allData.find(f => f.name == "Second Floor")
    case 3:
      return allData.find(f => f.name == "Third Floor")
    case 4:
      return allData.find(f => f.name == "Fourth Floor")
    case 5:
      return allData.find(f => f.name == "Fifth Floor")

    default:
      break;
  }

}
const getListOfActivities = async (): Promise<string[]> => {
  //FILL HERE
  const allData: Floor[] = await fetchData()
  return allData.map(a => a.activity)
}
return {
  buildingData,
  getFloorByIndex,
  getListOfActivities
};
};


export default useBuildingData;
