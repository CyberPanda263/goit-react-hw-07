import { BsFillPersonFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { deleteContact } from "../../redux/contacts/operations";

const Contact = ({id, name, number}) => {

    const dispath = useDispatch();
   
        return (
            <>
                <div>
                    <p><BsFillPersonFill /> {name}</p>
                    <p><BsFillTelephoneFill /> {number}</p>
                </div>
                <div>
                    <button onClick={() => dispath(deleteContact(id))}>Delet</button>
                </div>
            </>
        )
    }


export default Contact