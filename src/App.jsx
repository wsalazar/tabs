import { useEffect, useState } from "react";
import JobInfo from "./JobInfo";
import BtnContainer from "./BtnContainer";

const url = 'https://www.course-api.com/react-tabs-project';

const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const jobs = items.map((item) => item.company)
  const [currentItem, setCurrentItem] = useState(0)
  useEffect(() => {
    const fetchTabs = async() => {
      try {
      const response = await fetch(url)
      const data = await response.json()
      setItems(data)
      setIsLoading(false)
      } catch (er) {
        console.log(er)
      }
  }
    fetchTabs()
  },[])
  return  (
    <>
  <h2>Jobs</h2>
  <BtnContainer jobs={jobs} currentItem={currentItem} setCurrentItem={setCurrentItem}/>
  {isLoading ? <p>Loading...</p> :
  <JobInfo key={items[currentItem].id} {...items[currentItem]} />
  }
  </>
  )
};
export default App;
