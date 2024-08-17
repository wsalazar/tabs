import JobDuties from "./JobDuties"
import { v4 as uuidv4 } from 'uuid';

const JobInfo = ({id, company, dates, order, title, duties}) => {
  return (
   <>
    <div>JobInfo</div>
    
    <h4 key={id}>{company}</h4>
    <p>{dates}</p>
    <p>{order}</p>
    <p>{title}</p>
    {duties.map((duty) => {
      return <JobDuties key={uuidv4()} duty={duty}/>
    })}
    </>
  )
}
export default JobInfo