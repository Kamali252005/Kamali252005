const userData =[{
    name:"Yashna",
    city:"Canada",
    description:"Full Stack Web Developer",
    skill:["UI/UX","Front-end development", "Back-end development","C","Java","Python"],
    online:false,
    profile:"src/assets/1.jpg"
},
{
    name:"Viraj",
    city:"Landon",
    description:"Front-End Developer",
    skill:["UI/UX","HTML", "CSS","JavaScript","React JS","Node"],
    online:true,
    profile:"src/assets/2.jpg"
},
{
    name:"Mahi",
    city:"New york",
    description:"Back-End Developer",
    skill:["MongoDB","My SQL", "Java","Python","Express","PHP"],
    online:false,
    profile:"src/assets/3.jpg"
}]

function User(props) {
    return (
    <div className="card-container">
        <span className={props.online? "pro online":"pro offline"}>{props.online?"ONLINE":"OFFLINE"}</span>
        <img src={props.profile} className="img" alt="user" />
        <h2>{props.name}</h2>
        <h4>{props.city}</h4>
        <p>{props.description}</p>
        <div className="buttons">
            <button className="primary">Message</button>
            <button className="primary outline">Following</button>
        </div>
        <div className="skill"> 
            <h4>SKILLS</h4>
            <ul>
                {props.skill.map((skill,index)=>(
                  <li key={index}>{skill}</li>
                ))}
            </ul>
        </div>
    </div>
    );
}

export const Usercard = () => {
  return <>
  {userData.map((user,index)=>(
    <User key= {index} 
    name={user.name}
    city={user.city}
    description={user.description}
    online={user.online}
    profile={user.profile}
    skill={user.skill}/>
  ))}
  </>
};

