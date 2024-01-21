
export const CV = ({data}) => {
    return (
        <div className="cv-container">
            <div className="cv-container__top">
                <div className="cv-container__top__name">{data.fullName}</div>
                <div className="cv-container__top__details">
                    <ul className="top__details__list">
                        <li className="top__details__list__item"><img src="../public/icons8-pin-32.png" alt="" /><span>{data.email}</span></li>
                        <li className="top__details__list__item"><img src="../public/icons8-phone-50.png" alt="" /><span>{data.phone}</span></li>
                        <li className="top__details__list__item"><img src="../public/icons8-email-64.png" alt="" /><span>{data.address}</span></li>
                    </ul>
                </div>
            </div>
            <div className="cv-container__middle">
                <ul className="cv-container__middle__section">
                    <li className="middle__section__item">
                        <div className="middle__section__item__title">Éducation</div>
                        {data.education.map((item) => (
                            <>
                                <EducationItem key={item.id} data={item} />
                            </>
                        ))}
                    </li>
                    <li className="middle__section__item">
                        <div className="middle__section__item__title">Expérience Professionel</div>
                        {data.work.map((item) => (
                            <>
                                <WorkItem key={item.id} data={item} />
                            </>
                        ))}
                    </li>
                </ul>
            </div>
        </div>
    )
}

const EducationItem = ({data}) => {
    return (
        <div className="middle__section__item__details" key={data.id}>
            <div className="item__details__left">
                <div className="item__details__left__date">{data.startDate} - {data.endDate}</div>
                <div className="item__details__left__location">{data.location}</div>
            </div>
            <div className="item__details__right">
                <div className="item__details__right__title">{data.school}</div>
                <div className="item__details__right__sub-title">{data.degree}</div>
            </div>
        </div>
    )
}

const WorkItem = ({data}) => {
    return (
        <div className="middle__section__item__details">
            <div className="item__details__left">
                <div className="item__details__left__date">{data.workStartDate} - {data.workEndDate}</div>
                <div className="item__details__left__location">{data.workLocation}</div>
            </div>
            <div className="item__details__right">
                <div className="item__details__right__title">{data.companyName}</div>
                <div className="item__details__right__sub-title">{data.positionTitle}</div>
                <div className="item__details__right__description">{data.description}</div>
            </div>
        </div>
    )
}