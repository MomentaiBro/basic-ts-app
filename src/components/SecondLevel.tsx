import { UserType } from "../App";

export interface SecondLevelProps {
    user: UserType
}
 
const SecondLevel: React.FC<SecondLevelProps> = ({user}: SecondLevelProps) => {



    return ( 
        <div className="secondLevel">
            <p>
                {user.map(us => console.log(us))}
            </p>
        </div>
     );
}
 
export default SecondLevel;