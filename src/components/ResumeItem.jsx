

const ResumeItem = ({year ,   title}) => {
    return (
        <div className="resume__item">
            <span className="resume__data">{year}</span>
            <h3 className="resume__subtitle">{title}</h3>
        </div>
    );
};

export default ResumeItem;