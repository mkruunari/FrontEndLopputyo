
const SelectDropDown = ({courses}) => {
   return(
    <>
        <select className="dropdown" >
            {/* map looppaa datan  */}
            {courses.map((r, i) => (
            <option key={i}>{r}</option>
            ))}
        </select>
    </>
    )


}
export default SelectDropDown;