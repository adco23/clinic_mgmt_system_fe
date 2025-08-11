import { useEffect, useState } from "react"

const useSortedDays = (list, days) => {
  const [sortedList, setSortedList] = useState([]);

  useEffect(() => {
    if (!list || !days) {
      setSortedList([]);
      return;
    }

    const sorted = [...list].sort((a, b) => {
      const aDay = a.day ?? a;
      const bDay = b.day ?? b;

      return days.indexOf(aDay) - days.indexOf(bDay);
    });

    setSortedList(sorted);
  }, [list, days]);


  return sortedList;
}

export default useSortedDays