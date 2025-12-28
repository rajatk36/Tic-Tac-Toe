function Cell({cell ,id , move , setmove ,cells ,setcells , msg , combo}){
    const handleClick = (e) => {
    if(!msg){
       const taken = e.target.firstChild.classList.contains("circle") ||
              e.target.firstChild.classList.contains("cross") || 
              e.target.classList.contains("circle") || e.target.classList.contains("cross")
      
      if(!taken){
        if(move === "circle"){
            e.target.firstChild.classList.add("circle")
            handleCellChange("circle")
            setmove("cross")
        }
        if(move ==="cross"){
            e.target.firstChild.classList.add("cross")
            handleCellChange("cross")
            setmove("circle")
        }
      }
    } 
    }
      

    const handleCellChange= (className) =>{
      const nextCells = cells.map((cell,index) => {
        if(index === id) {
          return className
        } else {
            return cell
        }
      })
      setcells(nextCells)
    }
    return (
        <div className={`square ${combo.includes(id) ? "win" : ""}`} onClick={handleClick}>
          <div className={cell}></div>
        </div>
    )
}
export default Cell