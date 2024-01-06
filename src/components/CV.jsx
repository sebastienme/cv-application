
export const CV = ({data}) => {
    return (
        <div className="cv-container">
            <div className="cv-container__top">
                <div className="cv-container__top__name">{data.fullName}</div>
                <div className="cv-container__top__details">
                    <ul className="top__details__list">
                        <li className="top__details__list__item">&#x1F4E8;{data.email}</li>
                        <li className="top__details__list__item">&#x1F4F1;{data.phone}</li>
                        <li className="top__details__list__item">&#x1F4CD;{data.address}</li>
                    </ul>
                </div>
            </div>
            <div className="cv-container__middle">
                <ul className="cv-container__middle__section">
                    <li className="middle__section__item">
                        <div className="middle__section__item__title">Éducation</div>
                        <EducationItem 
                            data={data}
                        />
                    </li>
                    <li className="middle__section__item">
                        <div className="middle__section__item__title">Expérience Professionel</div>
                        <WorkItem
                            data={data}
                        />
                    </li>
                </ul>
            </div>
        </div>
    )
}

const EducationItem = ({data}) => {
    return (
        <>
            <div className="middle__section__item__details">
                <div className="item__details__left">
                    <div className="item__details__left__date">{data.startDate} - {data.endDate ? data.endDate : "Aujourd'hui"}</div>
                    <div className="item__details__left__location">{data.location}</div>
                </div>
                <div className="item__details__right">
                    <div className="item__details__right__title">{data.school}</div>
                    <div className="item__details__right__sub-title">{data.degree}</div>
                </div>
            </div>
        </>
    )
}

const WorkItem = ({data}) => {
    return (
        <>
            <div className="middle__section__item__details">
                <div className="item__details__left">
                    <div className="item__details__left__date">{data.workStartDate} - {data.workEndDate ? data.workEndDate : "Aujourd'hui"}</div>
                    <div className="item__details__left__location">{data.workLocation}</div>
                </div>
                <div className="item__details__right">
                    <div className="item__details__right__title">{data.companyName}</div>
                    <div className="item__details__right__sub-title">{data.positionTitle}</div>
                    <div className="item__details__right__description">{data.description}</div>
                </div>
            </div>
        </>
    )
}