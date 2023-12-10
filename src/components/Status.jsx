import { status } from "../data";
import parse from 'html-react-parser';

const Status = () => {
    return (
        <div>
            
            {

                status.map(({no, title} , index) => {
                    return (
                        <div className="status__box" key={index}>
                            <h3 className="status__no">{no}</h3>
                            <p className="status__title">{parse(title)}</p>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Status;