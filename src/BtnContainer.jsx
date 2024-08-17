const BtnContainer = ({jobs, currentItem, setCurrentItem}) => {
  return (
    <>
    {jobs.map((currentJob, index) => {
     return (
      <div key={index}>
      <button className="btn" onClick={() => setCurrentItem(index)}>{currentJob}</button>
     </div>
     )
    })}
    </>
  )
}
export default BtnContainer