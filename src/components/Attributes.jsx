/* eslint-disable react/prop-types */
import { useState } from "react"
import { CV } from "./CV"

export const Card = ({children}) => {
    return (
        <div className="card">
            {children}
        </div>
    )
}

export const UserForm = () => {
    const initialData = {
        fullName: 'François Pignon',
        email: 'francois.pignon@gmail.com',
        phone: '514-222-2222',
        address: 'Montréal, Qc, Canada',
        school: 'Université du Québec à Montréal',
        degree: 'Maîtrise en fiscalité',
        startDate: 'Septembre 1978',
        endDate: 'Mai 1982',
        location: 'Montréal, Qc',
        companyName: 'Gouvernement du Québec',
        positionTitle: `Chef, à l'impôt`,
        workStartDate: 'Janvier 1984',
        wordEndDate: "Aujourd'hui",
        workLocation: 'Montréal, Qc',
        description: `Superviser et coordonner les activités liées à la collecte des impôts dans la province. 
                    Responsable de la gestion des équipes chargées de l'application des lois fiscales, de veiller à la conformité des contribuables
                    et de mettre en œuvre des politiques visant à maximiser les recettes tout en assurant l'équité et la transparence dans le système fiscal.` 
    }
    
    const [data, setData] = useState(initialData)

    const handleChange = (e) => {
        const {id, value} = e.target;
        setData((prevData) => ({
            ...prevData,
            [id]: value,
        }))
    }

    const clearForm = () => {
        setData({
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
          workEndDate: '',
          workLocation: '',
          description: '',
        });
      };

      const goBackToInitialData = () => {
        setData(initialData);
      }

    return (
        <>
            <div className="form-side">
                <div className="form-side__style">
                    <Card>
                        <div>bla bla</div>
                    </Card>
                </div>
                <div className="form-side__content">
                    <Card>
                        <ClearCard
                            clearForm={clearForm}
                            initialData={goBackToInitialData}
                        />
                    </Card>
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
            </div>
            <div className="cv-side">
                <CV
                    data={data}
                />
            </div>
        </>
    )
}

const ClearCard = ({clearForm, initialData}) => {
    return (
        <>
            <div className="clear-card">
                <div 
                    className="clear-resume"
                    onClick={clearForm} 
                ><img src="../public/delete.png" alt="" /> Effacer le CV</div>
                <button
                    className="btn btn-example"
                    onClick={initialData}
                >Charger l'Exemple</button>
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
                <input 
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
                <div className="date-pick">
                    <div className="date-pick__start">
                        <label>Date de Début</label>
                        <input 
                            id="startDate"
                            value={data.startDate}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="date-pick__end">
                        <label>Date de Fin</label>
                        <input 
                            id="endDate"
                            value={data.endDate}
                            onChange={handleChange}
                        />
                    </div>
                </div>
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
                <div className="date-pick">
                    <div className="date-pick__start">
                        <label>Date de Début</label>
                        <input 
                            id="workStartDate"
                            value={data.workStartDate}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="date-pick__start">
                        <label>Date de Fin</label>
                        <input 
                            id="workEndDate"
                            value={data.workEndDate}
                            onChange={handleChange}
                        />
                </div>
                </div>
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