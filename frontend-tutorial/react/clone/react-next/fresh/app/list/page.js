
export default function List() {
    let items = ["tomato" ,"pasta" , "coconut"]  
    
let array = [2,3,4]
let b= array.map(()=>{
})



    return (
      <div>
        <h1 className="title">상품목록</h1>
        {
            items.map((a)=>{
         return(
         
         <div className="food" >
                <h4>{a} $40</h4> 

            </div>
            )})
        }
        {/* <div className="food">
            <h4>{items[1] }$40</h4>
        </div>
        <div className="food">
            <h4>{items[2] }$40</h4>
        </div>
 */}
    



      </div>
    )
  }
  