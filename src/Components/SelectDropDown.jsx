
const SelectDropDown = ({courses}) => {
   return(
    <>
        <select >
            {courses.map((r, i) => (
            <option key={i}>{r}</option>
            ))}
        </select>
    </>
    )


}
export default SelectDropDown;