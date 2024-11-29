import Hero from "./Hero"
import Navbar from "./Navbar"

function App(){
  const person = {
    name: "John Doe",
    age: 19,
    weight: 70
  }
  const users = [
    {name: "awd"},
    {name: "awd2"},
    {name: "awd3"},
    {name: "awd4"},
    {name: "awd5"},
  ]
  let isLoggedIn = true;
  function ButtonHandler(text){
    console.log(text);
    
  }
  return (
    <div>
      <Navbar/>
      <Hero/>
      <button className="p-5 bg-blue-500" onClick={() => ButtonHandler("hello")}>
        MyButton
      </button>
      {isLoggedIn && "Admin"}
      <ol>
        {users.map((u, i) => (
          <li key={i}>{u.name}</li>
        ))}
      </ol>
      <ul>
        <li>
          Name: {person.name}
        </li>
        <li>
          Age: {person.age}
        </li>
        <li>
          Weight: {person.weight}kg
        </li>
      </ul>
      {/* <div className="p-10 bg-gradient-to-tr from-black to-red-500">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, iure nisi cumque dolores facere accusamus ad voluptate ut aperiam officiis. Veniam est aut facilis similique molestiae vitae culpa dolorem fuga, amet in alias perferendis rerum quam quo reiciendis nisi quia, et magni? Debitis eaque eveniet magnam maiores, cupiditate facilis quas alias doloribus! Provident possimus fugiat quidem est voluptatum nesciunt. Impedit adipisci, itaque consequuntur veritatis, corrupti a exercitationem perspiciatis vero nemo aliquam voluptates eum sequi mollitia maiores assumenda doloribus cumque at esse error voluptas? Nostrum facere officia porro ad omnis atque, ab fugiat asperiores earum soluta, veniam nam ratione reprehenderit sapiente minus possimus ipsum cum placeat ipsa mollitia velit ipsam dolorum est impedit! Quam laborum architecto, expedita nihil consequatur velit aliquid ipsam veritatis doloribus magni aspernatur ratione fugiat ipsa explicabo eligendi sequi nostrum fuga assumenda maiores, qui quibusdam adipisci a? Iusto aut eligendi maxime fugiat placeat non repellat vitae nobis enim quidem veritatis dignissimos modi rem neque sequi architecto quasi iure nemo magnam, aperiam excepturi aliquam omnis. Deserunt ab sed ratione voluptatem, autem, mollitia dolorem commodi id numquam nulla sapiente repellat omnis pariatur, tempora similique. Magni tempora aliquam vitae, saepe assumenda enim consectetur quod architecto? In ad omnis non eaque porro!</p>
      </div> */}
    </div>
  )
}
export default App