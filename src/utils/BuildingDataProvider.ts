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

  useEffect(() => {
    const fetchData = async () => {
      const floorString: string = await fs.readFile(`./data/building.json`, `utf-8`)
      const finalData = await JSON.parse(floorString)
      await setBuildingData(finalData)
    }, []
  fetchData();
  });
  return buildingData;
}
const getFloorByIndex = (floorIndex: number): Floor | undefined => {
  //FILL HERE
  const allData:Floor[] = useBuildingData()
}
const getListOfActivities = (): string[] => {
  //FILL HERE
}
return {
  buildingData,
  getFloorByIndex,
  getListOfActivities
};
};

export default useBuildingData;
