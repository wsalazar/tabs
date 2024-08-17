import Duties from './Duties';


const JobDuties = ({id,  duty}) => {
  return (
    <>
    <div key={id}>JobDuties</div>
    <p>{duty}</p>
    </>
  )
}
export default JobDuties