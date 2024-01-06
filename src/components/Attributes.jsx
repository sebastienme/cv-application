import { useState } from "react"
import { CV } from "./CV"

export const Card = ({children}) => {
    return (
        <div className="card">
            {children}
        </div>
    )
}

/* TODO: Ca fonctionne. Mais il faudrait que je re-factore. Un lift-up.
    Il faudrait une component Parent avec toutes les data.
    Pour qu'en suite je puisse manipuler librement les data dans la section du CV */

export const UserForm = () => {
    const [data, setData] = useState({
        fullName: '',
        email: '',
        phone: '',
        address: '',
        school: '',
        degree: '',
        startDate: '',
        endDate: '',
        location: '',
        companyName: '',
        positionTitle: '',
        workStartDate: '',
        wordEndDate: '',
        workLocation: '',
        description: '',
    })

    const handleChange = (e) => {
        const {id, value} = e.target;
        setData((prevData) => ({
            ...prevData,
            [id]: value,
        }))
    }

    return (
        <>
            <div className="form-side">
                <Card>
                    <h2>Détails Personnels</h2>
                    <CardPersonal
                        data={data}
                        handleChange={handleChange}
                    />         
                </Card>
                <Card>
                    <h2>Éducation</h2>
                    <CardEducation
                        data={data}
                        handleChange={handleChange}
                    />         
                </Card>
                <Card>
                    <h2>Expérience</h2>
                    <CardJob
                        data={data}
                        handleChange={handleChange}
                    />
                </Card>
            </div>
            <div className="cv-side">
                <CV
                    data={data}
                />
            </div>
        </>
    )
}

export const CardPersonal = ({data, handleChange}) => {
    return (
        <>
            <form id="personnal-details-form">
                <label>Nom Complet</label>
                <input 
                    id="fullName"
                    value={data.fullName}
                    onChange={handleChange}
                />

                <label>Courriel</label>
                <input 
                    id="email"
                    value={data.email}
                    onChange={handleChange}
                />

                <label>Téléphone</label>
                <input 
                    id="phone"
                    value={data.phone}
                    onChange={handleChange}
                />

                <label>Adresse</label>
                <textarea 
                    id="address" 
                    value={data.address}
                    onChange={handleChange} 
                />
            </form>
        </>
    )
}

export const CardEducation = ({data, handleChange}) => {
    return (
        <>
            <form id="education-form">
                <label>École</label>
                <input 
                    id="school"
                    value={data.school}
                    onChange={handleChange}
                />

                <label>Diplôme</label>
                <input 
                    id="degree"
                    value={data.degree}
                    onChange={handleChange}
                />

                <label>Date de Début</label>
                <input 
                    id="startDate"
                    type="date"
                    value={data.startDate}
                    onChange={handleChange}
                />

                <label>Date de Fin</label>
                <input 
                    id="endDate"
                    type="date"
                    value={data.endDate}
                    onChange={handleChange}
                />

                <label>Emplacement</label>
                <input 
                    id="location"
                    value={data.location}
                    onChange={handleChange}
                />
            </form>
        </>
    )
}

export const CardJob = ({data, handleChange}) => {
    return (
        <>
            <form id="experience-form">
                <label>Nom de l'Entreprise</label>
                <input 
                    id="companyName"
                    value={data.companyName}
                    onChange={handleChange}
                />

                <label>Position</label>
                <input 
                    id="positionTitle"
                    value={data.positionTitle}
                    onChange={handleChange}
                />

                <label>Date de Début</label>
                <input 
                    id="workStartDate"
                    type="date"
                    value={data.workStartDate}
                    onChange={handleChange}
                />

                <label>Date de Fin</label>
                <input 
                    id="workEndDate"
                    type="date"
                    value={data.workEndDate}
                    onChange={handleChange}
                />

                <label>Emplacement</label>
                <input 
                    id="workLocation"
                    value={data.workLocation}
                    onChange={handleChange}
                />

                <label>Description</label>
                <textarea
                    id="description"
                    value={data.description}
                    onChange={handleChange}
                />
            </form>
        </>
    )
}